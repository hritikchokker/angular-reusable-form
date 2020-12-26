import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'user-form',
    loadChildren:()=>import('./register-form-example/register-form-example.module').then(m=>m.RegisterFormExampleModule)
  },
  {
    path:'complete-form',
    loadChildren:()=>import('./complete-form/complete-form.module').then(m=>m.CompleteFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
