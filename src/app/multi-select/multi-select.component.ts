import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef
} from '@angular/core';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

export interface CustomiseMutliSelectModel {
  hasMultiSelect: boolean;
  hasLocalSearching: boolean;
  hasSelectAllFeature: boolean;
  hasSearchingWithAPi: boolean;
  placeholderText: string;
  panelClass: string;
  // templateRef: any;
  selectControl: FormControl | any;
  list?: any[];
  searchBy?: string[]; // keys to use on local search
  // tslint:disable-next-line: ban-types
  mapperFunc?: Function; // responsible for mapping the final value according to users need
}

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiSelectComponent implements OnInit, OnDestroy {
  constructor() { }
  searchControl = new FormControl();
  helperArr: any[] = [];
  subscription: Subscription[] = [];
  @Input() templateEl!: TemplateRef<any>;
  isAllSelected = false;

  scrollCallback: any;

  @Input() selectOptions!: CustomiseMutliSelectModel;
  @Output() finalValue: EventEmitter<any[]> = new EventEmitter();
  ngOnInit(): void {
    if (this.selectOptions?.list && this.selectOptions?.hasLocalSearching) {
      this.helperArr = this.selectOptions?.list;
      this.handleLocalSearch();
    }
  }
  selectAllItems(flag = false): void {
    if (flag) {
      this.isAllSelected = true;
      this.selectOptions.selectControl.setValue(this.selectOptions.list);
    } else {
      this.selectOptions?.selectControl.reset();
      this.isAllSelected = false;
    }
  }
  handleLocalSearch(): void {
    this.subscription.push(
      this.searchControl.valueChanges
        .pipe(
          debounceTime(500),
          distinctUntilChanged(),
          // filter(data => data && data.trim())
        )
        // tslint:disable-next-line: deprecation
        .subscribe((res: string) => {
          if (res) {
            this.selectOptions.list = this.helperArr?.filter(el => el.title.toLowerCase().includes(res.toLowerCase()));
            // this.selectOptions.list = this.selectOptions?.list?.filter(el => {

            // });
          } else {
            this.selectOptions.list = this.helperArr;
          }
        })
    );
  }
  actionTake(details: any): void {
    console.log(details, 'detailsjh ');
  }

  finalUpdate(): void {
    const { selectControl } = this.selectOptions;
    this.finalValue.emit(selectControl.value.map(this.selectOptions.mapperFunc));
  }
  ngOnDestroy(): void {
    this.subscription.forEach(subs => subs.unsubscribe());
  }

}
