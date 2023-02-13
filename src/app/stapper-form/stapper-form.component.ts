import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { concatWith } from 'rxjs';
import { ReactiveFormService } from '../reactive-form.service';

@Component({
  selector: 'app-stapper-form',
  templateUrl: './stapper-form.component.html',
  styleUrls: ['./stapper-form.component.scss']
})
export class StapperFormComponent {
  constructor(private _formBuilder: FormBuilder, private service: ReactiveFormService, private route: Router, private activateroute: ActivatedRoute) { }

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  usersid2: any;
  SubmitButton = this.service.submitstapperbutton;
  UpdateButton = this.service.updatstapperebutton;

  /***************************************** First Form Group *****************************************/
  /******* Form Values Store Variables ********/
  firstname?: any;
  lastname?: any;
  mobilenumber?: any;
  emailaddress?: any;
  password?: any;


  /******* Submit Function *******/
  SubmitFirstForm() {
    this.firstname = this.firstFormGroup.controls['firstName'].value;
    this.lastname = this.firstFormGroup.controls['lastName'].value;
    this.mobilenumber = this.firstFormGroup.controls['mobileNo'].value;
    this.emailaddress = this.firstFormGroup.controls['emailAddress'].value;
    this.password = this.firstFormGroup.controls['password'].value;
    console.warn(this.firstname, this.lastname, this.mobilenumber, this.emailaddress, this.password);
  }

  ngOnInit() {

    /************ Form Fields Group ***************/
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      mobileNo: ['', Validators.compose([Validators.required])],
      emailAddress: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });

    /******* Form Fileds Group ********/
    this.secondFormGroup = this._formBuilder.group({
      State: ['', Validators.required],
      City: ['', Validators.required],
      pinCode: ['', Validators.required],
      Area: ['', Validators.required],
      lendMark: ['', Validators.required],
    });

    this.usersid2 = this.activateroute.snapshot.params['id'];

    if (this.usersid2) {
      this.service.getcurrentdata2(this.usersid2).subscribe((res) => {
        this.firstFormGroup.patchValue(res);
        this.secondFormGroup.patchValue(res);
      });
    }
  }

  /***************************************** Second Form Group *****************************************/
  /****** Form Values Store Variables *******/
  state?: any;
  city?: any;
  pincode?: any;
  area?: any;
  lendmark?: any;

  /******* Submit Function ********/
  SubmitSecondForm() {
    this.state = this.secondFormGroup.controls['State'].value;
    this.city = this.secondFormGroup.controls['City'].value;
    this.pincode = this.secondFormGroup.controls['pinCode'].value;
    this.area = this.secondFormGroup.controls['Area'].value;
    this.lendmark = this.secondFormGroup.controls['lendMark'].value;
  }

  /*********** Add User In Data Base **************/
  addUser() {
    // let fulldetails = this.firstFormGroup;
    // let fulldetails2 = this.secondFormGroup;
    // let fulldetails3 = [fulldetails, fulldetails2];
    this.service.addUserDetils2(this.firstFormGroup.value, this.secondFormGroup.value).subscribe((res) => {
      console.warn(res);
      alert('User Addes Successfully');
    });
    this.route.navigate(['/userdetails']);
    this.getUser();
  }

  /********** Get User Form Data Base ***********/
  UserDetilas: any;
  getUser() {
    this.service.getUserDetails2().subscribe((res) => {
      this.UserDetilas = res;
    })
  }

  /************* Update User Form Data Base **************/
  updateUser() {
    let fullDetails = { ...this.firstFormGroup.value, ...this.secondFormGroup.value };
    this.service.updateUserDetails2(this.activateroute.snapshot.params['id'], fullDetails).subscribe((res) => {
      this.getUser();
      alert('user Update Successfully');
    });
    this.route.navigate(['/userdetails']);
  }
}


export class UsersDetails2 {
  id?: any;
  firstName?: any;
  lastName?: any;
  mobileNo?: any;
  emailAddress?: any;
  password?: any;
  State?: any;
  City?: any;
  pinCode?: any;
  Area?: any;
  lendMark?: any;
}