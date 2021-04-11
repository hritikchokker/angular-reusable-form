import {
  AbstractControl,
  ValidatorFn,
  Validators
} from "@angular/forms";

export const CUSTOM_VALIDATORS = {
  whiteSpace(control: AbstractControl) {
    if (typeof control.value !== 'number') {
      const value = control.value || '';
      const isWhitespace = (value.trim().length !== value.length) && (value.trim().length === 0);
      return !isWhitespace ? null : { whiteSpace: true };
    }
    return null;
  },
  getValidation(
    required: boolean,
    minValidation: { hasMinLength: boolean, minLength: 10 },
    maxLength: boolean, pattern: RegExp,
  ): ValidatorFn[] {
    return [
      required ? Validators.required : null,
      minValidation.hasMinLength ? Validators.minLength(minValidation.minLength) : null,

    ]
  }

}
