import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormService } from '../reactive-form.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  constructor(private fb: FormBuilder, private service: ReactiveFormService, private reoute: ActivatedRoute, private router: Router) { }
  form1!: FormGroup;
  form2!: FormGroup;
  usersid: any;
  FormFields = true;
  ngOnInit() {

    /********************************** Form 1 *******************************/
    this.form1 = this.fb.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      mobileNo: ['', Validators.compose([Validators.required])],
      emailAddress: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });


    /********************************* Form 2 ************************/
    this.form2 = this.fb.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      mobileNo: ['', Validators.compose([Validators.required])],
      emailAddress: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
    this.getUsers();


    this.usersid = this.reoute.snapshot.params['id'];

    if (this.usersid) {
      this.service.getcurrentdata(this.usersid).subscribe((res) => {
        this.form2.patchValue(res);
      });
    }
  }

  /************************************** Form 1 *********************************************/
  /***** Form 1 Value Store Variable *****/
  fname1: any;
  lname1: any;
  mobile1: any;
  email1: any;
  pass1: any;

  /***** Submit Function *****/
  SubmitForm1() {
    this.fname1 = this.form1.controls['firstName'].value;
    this.lname1 = this.form1.controls['lastName'].value;
    this.mobile1 = this.form1.controls['mobileNo'].value;
    this.email1 = this.form1.controls['emailAddress'].value;
    this.pass1 = this.form1.controls['password'].value;
    console.error('Form 1 Values');
    console.warn('first name = ', this.fname1);
    console.warn('last name = ', this.lname1);
    console.warn('mobile number = ', this.mobile1);
    console.warn('email address = ', this.email1);
    console.warn('password = ', this.pass1);
  }


  /************************************** Form 2 *********************************************/
  /***** Form 2 Value Store Variable *****/
  fname2?: string;
  lname2?: string;
  mobile2?: number;
  email2?: any;
  pass2?: any;

  SubmitButton = this.service.submitUser;
  UpdateButton = this.service.updateButton;


  /***** Submit Function *****/
  SubmitForm2() {
    this.fname2 = this.form2.controls['firstName'].value;
    this.lname2 = this.form2.controls['lastName'].value;
    this.mobile2 = this.form2.controls['mobileNo'].value;
    this.email2 = this.form2.controls['emailAddress'].value;
    this.pass2 = this.form2.controls['password'].value;
    console.error('Form 2 Values');
    console.warn('first name = ', this.fname2);
    console.warn('last name = ', this.lname2);
    console.warn('mobile number = ', this.mobile2);
    console.warn('email address = ', this.email2);
    console.warn('password = ', this.pass2);
    this.router.navigate(['/userdetails']);
  }

  resetForm() {
    this.form2.controls['firstName'].clearValidators();
    this.form2.controls['lastName'].clearValidators();
    this.form2.controls['mobileNo'].clearValidators();
    this.form2.controls['emailAddress'].clearValidators();
    this.form2.controls['password'].clearValidators();
    this.form2.reset();
  }


  /***** Get Users Form Data Base *****/
  databaseValue: any;
  getUsers() {
    this.service.getUserDetails().subscribe((res) => {
      this.databaseValue = res;
    })
  }

  /***** Add User In data Base *******/
  addUser() {
    this.service.addUserDetails(this.form2.value).subscribe((res) => {
      this.getUsers();
    });
  }

  /********* Update User Form Data Base **********/
  updateUserDetails() {
    this.service.updateUser(this.reoute.snapshot.params['id'], this.form2.value).subscribe((res) => {
      this.getUsers();
      alert("user update successfully" + res);
      this.router.navigate(['/userdetails']);
    })
    this.SubmitButton = true;
    this.UpdateButton = false;
  }



  /******************************************************** For This Component Table **************************************************************/

  /******* Delete User Form Data Base *******/
  // deleteUser(id: number) {
  //   this.service.deleteUserDetails(id).subscribe((res) => {
  //     this.getUsers();
  //   })
  // }


  /******** Edit User Form Data Base *********/
  usersobj = {
    id: '',
    firstName: '',
    lastName: '',
    mobileNo: '',
    emailAddress: '',
    password: '',
  }
  // editUserDetails(values: any) {
  //   this.usersobj = values;
  //   console.warn(this.usersobj);
  //   this.form2.controls['firstName'].setValue(this.usersobj.firstName);
  //   this.form2.controls['lastName'].setValue(this.usersobj.lastName);
  //   this.form2.controls['mobileNo'].setValue(this.usersobj.mobileNo);
  //   this.form2.controls['emailAddress'].setValue(this.usersobj.emailAddress);
  //   this.form2.controls['password'].setValue(this.usersobj.password);
  //   this.SubmitButton = false;
  //   this.UpdateButton = true;
  // }

  /********* Update User Form Data Base **********/
  // updateUserDetails() {
  //   this.service.updateUser(this.usersobj).subscribe(() => {
  //     this.getUsers();
  //     alert("user update successfully");
  //   })
  //   this.SubmitButton = true;
  //   this.UpdateButton = false;
  // }
}


export class UsersDetails {
  id?: any;
  firstName?: any;
  LastName?: any;
  mobileNo?: any;
  emailAddress?: any;
  password?: any;
}