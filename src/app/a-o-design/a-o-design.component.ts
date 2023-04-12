import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-a-o-design',
  templateUrl: './a-o-design.component.html',
  styleUrls: ['./a-o-design.component.scss']
})
export class AODesignComponent {
  constructor(private _formBuilder: FormBuilder) { }

  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
    { value: 'tacos-2', viewValue: 'Tacos' },
    { value: 'tacos-2', viewValue: 'Tacos' },
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
    { value: 'tacos-2', viewValue: 'Tacos' },
    { value: 'tacos-2', viewValue: 'Tacos' },
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
    { value: 'tacos-2', viewValue: 'Tacos' },
    { value: 'tacos-2', viewValue: 'Tacos' },
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
    { value: 'tacos-2', viewValue: 'Tacos' },
    { value: 'tacos-2', viewValue: 'Tacos' },
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
    { value: 'tacos-2', viewValue: 'Tacos' },
    { value: 'tacos-2', viewValue: 'Tacos' },
    { value: 'tacos-2', viewValue: 'Tacos' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  Packges = [
    { id: 1, packgeName: "Hostel" },
    { id: 2, packgeName: "Day School" }
  ];

  Standards = [
    { id: 1, standardName: 'LKG' },
    { id: 2, standardName: 'UKG' },
    { id: 3, standardName: 'l' },
    { id: 4, standardName: 'll' },
    { id: 5, standardName: 'lll' },
    { id: 6, standardName: 'V' },
    { id: 7, standardName: 'Vl' },
    { id: 8, standardName: 'Vll' },
    { id: 9, standardName: 'lV' },
    { id: 10, standardName: 'Vlll' },
    { id: 11, standardName: 'lX' },
  ];

  firstFormGroup = this._formBuilder.group({
    branch: ['', Validators.required],
    acadamicYear: ['', Validators.required],
    standard: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    previousSchool: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    gender: ['', Validators.required],
    nationality: ['', Validators.required],
  });

}
