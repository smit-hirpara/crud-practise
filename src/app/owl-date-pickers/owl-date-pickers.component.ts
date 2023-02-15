import { ChangeDetectionStrategy, Component } from '@angular/core';

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
}
