import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StapperFormComponent } from './stapper-form/stapper-form.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'userdetails', pathMatch: 'full' },
  { path: 'reactiveForm', component: ReactiveFormComponent },
  { path: 'userdetails', component: UsersDetailsComponent },
  { path: 'update/:id', component: ReactiveFormComponent },
  { path: 'stapperForm', component: StapperFormComponent },
  { path: 'update2/:id', component: StapperFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
