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

  /********* Submit And Update Button **********/
  SubmitButton?: boolean;
  UpdateButton?: boolean;


  /********* Submit And Update Message **********/
  SubmitSuccessfullyLogo = false;
  UpdtaeSuccessfullyLogo = false;

  /*********** User Details Section **************/
  UserDetails = true;

  /***************************************** First Form Group *****************************************/
  /******* Form Values Store Variables ********/
  firstname?: any;
  lastname?: any;
  birthdate?: any;
  mobilenumber?: any;
  emailaddress?: any;
  password?: any;


  /******* Submit Function *******/
  SubmitFirstForm() {
    this.firstname = this.firstFormGroup.controls['firstName'].value;
    this.lastname = this.firstFormGroup.controls['lastName'].value;
    this.birthdate = this.firstFormGroup.controls['birthDate'].value;
    this.mobilenumber = this.firstFormGroup.controls['mobileNo'].value;
    this.emailaddress = this.firstFormGroup.controls['emailAddress'].value;
    this.password = this.firstFormGroup.controls['password'].value;
    console.warn(this.firstname, this.lastname, this.mobilenumber, this.emailaddress, this.password);
  }

  ngOnInit() {

    /********* Submit And Update Button **********/
    this.SubmitButton = this.service.submitstapperbutton;
    this.UpdateButton = this.service.updatstapperebutton;

    /******** Scroll Top Default *********/
    window.scroll({ top: 0, behavior: 'smooth', });

    /************ Form Fields Group ***************/
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      birthDate: ['', Validators.compose([Validators.required])],
      mobileNo: ['', Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
      emailAddress: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });

    /******* Form Fileds Group ********/
    this.secondFormGroup = this._formBuilder.group({
      State: ['', Validators.compose([Validators.required])],
      City: ['', Validators.compose([Validators.required])],
      pinCode: ['', Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{6}$")])],
      Area: ['', Validators.compose([Validators.required])],
      lendMark: ['', Validators.compose([Validators.required])],
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
    this.service.addUserDetils2(this.firstFormGroup.value, this.secondFormGroup.value).subscribe((res) => {
      console.warn(res);
    });
    this.getUser();
    setTimeout(() => {
      this.route.navigate(['/userdetails']);
    }, 2000);
    this.SubmitSuccessfullyLogo = true;
    this.UpdtaeSuccessfullyLogo = false;
    this.UserDetails = false;
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
    });
    setTimeout(() => {
      this.route.navigate(['/userdetails']);
    }, 2000);
    this.service.addStpperUser();
    this.SubmitSuccessfullyLogo = false;
    this.UpdtaeSuccessfullyLogo = true;
    this.UserDetails = false;
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