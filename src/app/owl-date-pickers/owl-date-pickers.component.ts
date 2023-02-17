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
    this.date3 = new Date();

    this.date3.setHours(horMin[0]);
    this.date3.setMinutes(horMin[1]);
    this.date3.setSeconds(0)
  }


}
