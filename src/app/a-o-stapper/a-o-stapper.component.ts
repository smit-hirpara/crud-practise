import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-a-o-stapper',
  templateUrl: './a-o-stapper.component.html',
  styleUrls: ['./a-o-stapper.component.scss']
})
export class AOStapperComponent {
  constructor(private _formBuilder: FormBuilder) { }


  firstFormGroup = this._formBuilder.group({
    branch: ['', Validators.required],
    acadamicYear: ['', Validators.required],
    standard: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    test1: ['', Validators.required],
    test2: ['', Validators.required],
    test3: ['', Validators.required],
    test4: ['', Validators.required],
    test5: ['', Validators.required],
    test6: ['', Validators.required],
    test7: ['', Validators.required],
    test8: ['', Validators.required],
    test9: ['', Validators.required],
    test10: ['', Validators.required],
    test11: ['', Validators.required],
    test12: ['', Validators.required],
    test13: ['', Validators.required],
    test14: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    test1: ['', Validators.required],
    test2: ['', Validators.required],
    test3: ['', Validators.required],
    test4: ['', Validators.required],
    test5: ['', Validators.required],
    test6: ['', Validators.required],
    test7: ['', Validators.required],
    test8: ['', Validators.required],
    test9: ['', Validators.required],
    test10: ['', Validators.required],
    test11: ['', Validators.required],
    test12: ['', Validators.required],
    test13: ['', Validators.required],
    test14: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    test1: ['', Validators.required],
    test2: ['', Validators.required],
    test3: ['', Validators.required],
    test4: ['', Validators.required],
    test5: ['', Validators.required],
    test6: ['', Validators.required],
    test7: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    test1: ['', Validators.required],
    test2: ['', Validators.required],
    test3: ['', Validators.required],
    test4: ['', Validators.required],
    test5: ['', Validators.required],
    test6: ['', Validators.required],
    test7: ['', Validators.required],
    test8: ['', Validators.required],
    test9: ['', Validators.required],
    test10: ['', Validators.required]
  });
  sixthFormGroup = this._formBuilder.group({
    test1: ['', Validators.required],
    test2: ['', Validators.required],
    test3: ['', Validators.required],
    test4: ['', Validators.required],
    test5: ['', Validators.required],
    test6: ['', Validators.required],
    test7: ['', Validators.required],
    test8: ['', Validators.required],
    test9: ['', Validators.required],
    test10: ['', Validators.required],
    test11: ['', Validators.required],
    test12: ['', Validators.required],
    test13: ['', Validators.required],
  });
  seventhFormGroup = this._formBuilder.group({
    test1: ['', Validators.required],
    test2: ['', Validators.required],
    test3: ['', Validators.required],
    test4: ['', Validators.required],
    test5: ['', Validators.required]
  });
  eaighthFormGroup = this._formBuilder.group({
    test: ['', Validators.required],
  });


  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];


  url: any;
  uplodeImage: boolean = false;
  documenttype: boolean = false;
  uploader: any = [];
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        this.uplodeImage = true;
        this.documenttype = true;
      }
    }
  }

  uploadFile(file: any) {
    if (!this.uploader || this.uploader.length == 0) {
      this.uploader = new Array<any>();
    }
    for (let a of file) {
      this.uploader.push(a);
    }
  }


  Closeimage() {
    this.url = '';
    this.uplodeImage = false;
    this.documenttype = false;
  }

}
