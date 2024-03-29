import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormService } from '../reactive-form.service';
import { UsersDetails } from '../reactive-form/reactive-form.component';
import { UsersDetails2 } from '../stapper-form/stapper-form.component';
import { timer, interval, Subscription } from "rxjs";


@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  constructor(private service: ReactiveFormService, private navigate: Router) { }
  ngOnInit() {
    this.getUsers();

    /******** Scroll Top Default *********/
    window.scroll({ top: 0, behavior: 'smooth', });
  }
  /***************************************************** Table 1 ***********************************************************/
  /***** Get Users Form Data Base *****/
  // databaseValue: Subscription | any;
  // databaseValue2: Subscription | any;
  databaseValue: any;
  databaseValue2: any;
  usersDetails: any;
  usersDetails2: any;
  getUsers() {
    this.service.getUserDetails().subscribe((res: any) => {
      this.databaseValue = res;
    });
    this.service.getUserDetails2().subscribe((res) => {
      this.databaseValue2 = res;
    });
    this.usersDetails = this.databaseValue;
    this.usersDetails2 = this.databaseValue2;
  }
  /******* Delete User Form Data Base *******/
  deleteUser(id: number) {
    this.service.deleteUserDetails(id).subscribe(() => {
      this.getUsers();
    })
  }

  /******** Edit User Form Data Base *********/
  usersobj: UsersDetails = new UsersDetails();
  editUserDetails(values: any) {
    this.usersobj.id = values.id;
    console.warn(this.usersobj);
    this.service.updateButton = true;
    this.service.editUser();
  }

  /************ Add New User With Reactive Form **************/
  addNewData1() {
    this.navigate.navigate(['/reactiveForm']);
  }


  /**************************************************** Table 2 *********************************************/
  /************ Add New User With Reactive Form With Stapper Form **************/
  addNewData2() {
    this.service.addStpperUser();
    this.navigate.navigate(['/stapperForm']);
  }

  /********* Delete User Form Data Base ********/
  deleteUser2(id: any) {
    this.service.deleteUserDetils2(id).subscribe((res) => {
      this.getUsers();
    });
  }

  /********** Edit User Form Data Base **********/
  usersobj2: UsersDetails2 = new UsersDetails2();
  editUserDetilas2(values1: any) {
    this.usersobj2.id = values1.id;
    this.service.editUserDetils2();
  }

  // ngOnDestroy() {
  //   this.databaseValue.unsubscribe();
  //   this.databaseValue2.unsubscribe();
  // }
}

