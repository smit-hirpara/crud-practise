import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactiveFormService {
  constructor(private http: HttpClient) { }
  submitUser = true;
  updateButton = false;
  submitstapperbutton = true;
  updatstapperebutton = false;


  /******************************************************* Reactive Form Service ******************************************************/
  /******* Data Base Url ********/
  DataBaseUrl = "http://localhost:3000/UserDetails";

  /***** Get User Form Data Base *******/
  getUserDetails() {
    return this.http.get(this.DataBaseUrl);
  }

  /****** Psot(Add) User In Data Base ******/
  addUserDetails(value: any) {
    return this.http.post(this.DataBaseUrl, value);
  }

  /********* Delete User From Data Base ************/
  deleteUserDetails(id: number) {
    return this.http.delete(this.DataBaseUrl + '/' + id);
  }

  /*************** Edit User From Data Base *************/
  editUser() {
    this.updateButton = true;
    this.submitUser = false;
  }

  /****** Update User Form Data Base ******/
  updateUser(userId: any, value: any) {
    return this.http.put(this.DataBaseUrl + '/' + userId, value);
  }

  /******** Get Data By Id **********/
  getcurrentdata(id: any) {
    return this.http.get(this.DataBaseUrl + '/' + id);
  }




  /************************************************* REactive Form With Stapper Form Service *****************************************************/
  /******* Data Base Url **********/
  DatabaseUrl2 = "http://localhost:3000/StapperUserDetails";

  /******** Post(Add) User In Data Base *******/
  addUserDetils2(value1: any, value2: any) {
    let fullDetails = { ...value1, ...value2 };
    return this.http.post(this.DatabaseUrl2, fullDetails);
  }

  /************ Get All User From Data Base ***************/
  getUserDetails2() {
    return this.http.get(this.DatabaseUrl2);
  }

  /********** Delete User From Data Base ***********/
  deleteUserDetils2(id: any) {
    return this.http.delete(this.DatabaseUrl2 + '/' + id);
  }

  /************ Edit User From Data Base **************/
  editUserDetils2() {
    this.submitstapperbutton = false;
    this.updatstapperebutton = true;
  }

  /********** Update User Form Data Base ************/
  updateUserDetails2(id: any, value1: any) {
    return this.http.put(this.DatabaseUrl2 + '/' + id, value1);
  }

  /************ Get Data By Id *************/
  getcurrentdata2(id: any) {
    return this.http.get(this.DatabaseUrl2 + '/' + id);
  }
}
