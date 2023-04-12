import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-owl-date-pickers',
  templateUrl: './owl-date-pickers.component.html',
  styleUrls: ['./owl-date-pickers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwlDatePickersComponent {

  /************ Min and Max Restriction **************/
  public startAt = new Date(2018, 3, 18, 10, 30);

  // Min moment: April 12 2018, 10:30
  public min = new Date(2018, 3, 12, 10, 30);

  // Max moment: April 25 2018, 20:30
  public max = new Date(2018, 3, 25, 20, 30);


  public selectedMoments = [
    new Date(2018, 1, 12, 10, 30),
    new Date(2018, 3, 21, 20, 30)
  ];

  date1: any;
  submitfun1(value: any) {
    this.date1 = new Date(value);
    console.warn(this.date1);
  }

  date2: any;
  submitfun2(value: any) {
    this.date2 = new Date(value);
    console.warn(this.date2);
  }


  /******** For Time Picker (Get Time And Rrturn Full String) *********/
  date3: any;
  submitfun3(value: any) {
    let FullTime = value.split(' ');
    let horMin = FullTime[0].split(':');
    console.warn(FullTime);
    console.warn(horMin[0]);
    this.date3 = new Date();
    console.warn(this.date3);

    this.date3.setHours(horMin[0]);
    this.date3.setMinutes(horMin[1]);
    this.date3.setSeconds(0);
    this.date3.setDate(1);
    this.date3.setMonth(0);
    this.date3.setYear(2001);
  }

  date4: any;
  submitfun4(value: any) {
    let dateobj = new Date(value);
    console.warn(dateobj);
    this.date4 = dateobj;
  }





  user: any = [
    "pal", "deep", "raj", "om", "kayur"
  ];
  ages: any = [
    15, 22, 12, 34, 50
  ];
  fulldetails: any = [
    { name: 'pal', age: 20 },
    { name: 'om', age: 30 },
    { name: 'kayur', age: 20 },
    { name: 'deep', age: 24 },
    { name: 'raj', age: 29 },
  ];
}