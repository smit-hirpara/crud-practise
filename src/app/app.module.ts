import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { StapperFormComponent } from './stapper-form/stapper-form.component';
import { OwlDatePickersComponent } from './owl-date-pickers/owl-date-pickers.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FlexBoxExamplesComponent } from './flex-box-examples/flex-box-examples.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    UsersDetailsComponent,
    StapperFormComponent,
    OwlDatePickersComponent,
    FlexBoxExamplesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatDatepickerModule,
    MatTooltipModule,
    ReactiveFormsModule,
    HttpClientModule,
    OwlNativeDateTimeModule, // Owl Date Picker
    OwlDateTimeModule // Owl Date Picker
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
