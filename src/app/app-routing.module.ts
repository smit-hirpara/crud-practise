import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AODesignComponent } from './a-o-design/a-o-design.component';
import { AOFormComponent } from './a-o-form/a-o-form.component';
import { AOStapperComponent } from './a-o-stapper/a-o-stapper.component';
import { FlexBoxExamplesComponent } from './flex-box-examples/flex-box-examples.component';
import { OwlDatePickersComponent } from './owl-date-pickers/owl-date-pickers.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StapperFormComponent } from './stapper-form/stapper-form.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'userdetails', pathMatch: 'full' },
  { path: 'reactiveForm', component: ReactiveFormComponent },
  { path: 'userdetails', component: UsersDetailsComponent },
  { path: 'update/:id', component: ReactiveFormComponent },
  { path: 'stapperForm', component: StapperFormComponent },
  { path: 'update2/:id', component: StapperFormComponent },
  { path: 'owl-date-picker', component: OwlDatePickersComponent },
  { path: 'Flex-box-example', component: FlexBoxExamplesComponent },
  { path: 'A-O-design', component: AODesignComponent },
  { path: 'A-O-stapper', component: AOStapperComponent },
  { path: 'A-O-form', component: AOFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
