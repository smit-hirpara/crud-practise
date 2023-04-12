import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-a-o-form',
  templateUrl: './a-o-form.component.html',
  styleUrls: ['./a-o-form.component.scss']
})
export class AOFormComponent {
  @ViewChild('localguardianfield') focusinput!: ElementRef;
  @ViewChild('file') fileuplode!: ElementRef;
  @ViewChild('documenttype') doctype!: ElementRef;


  ngOnInit() {
    this.getfromlocalstorage();
  }


  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  countrycode = [
    { value: '+91', viewValue: '+91' },
    { value: '+92', viewValue: '+92' },
    { value: '+93', viewValue: '+93' },
  ];
  documenttype = [
    { id: 1, value: 'Aadhar Card' },
    { id: 2, value: 'Marksheet' },
    { id: 3, value: 'Leaving certificate' },
    { id: 4, value: 'Profile Prcture' },
    { id: 5, value: 'TC Application' },
    { id: 6, value: 'Business Card' },
    { id: 7, value: 'Father Aadhar Card' },
    { id: 8, value: 'Mother Aadhar Card' },
  ]

  // fieldfocus() {
  //   this.focusinput.nativeElement.focus();
  // }

  /* ================== Show And Hide Local Guardial Form ==================== */
  localguardian = false;
  showLoclaGuardian() {
    this.localguardian = !this.localguardian;
    this.focusinput.nativeElement.focus();
  }

  /* ================== push uploaded file in uploder array ==================== */
  uploader: any = [];
  uploadFile(file: any) {
    if (!this.uploader || this.uploader.length == 0) {
      this.uploader = new Array<any>();
    }
    for (let a of file) {
      this.uploader.push(a);
    }
  }

  selectvalue: any = [];
  getvalue(value: any, id: any) {
    this.selectvalue.push(value);
    // console.warn(this.selectvalue);
    // for (let a = 0; a < this.selectvalue.length; a++) {
    //   this.uploadedfileinfo[a].documentTpye = this.selectvalue[a];
    // }
    // console.warn(this.uploadedfileinfo);
  }


  /* ================== push uploaded file in images array ==================== */
  images: any = [];
  fielsSize: any = [];
  filenames: any = [];
  imagetype: any = [];
  uploadedfileinfo: any = [];
  selectfile(event: any) {
    if (event.target.files && event.target.files[0]) {
      for (let i = 0; i < event.target.files.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]); // read file as data url
        this.fielsSize.push(event.target.files[i].size); // push files sizes in fielsSize array
        this.filenames.push(event.target.files[i].name); // push files names in fielsSize array
        reader.onload = (event: any) => { // called once readAsDataURL is completed
          this.images.push(event.target.result);
          this.uploadedfileinfo.push({ img: this.images[i], imgname: this.filenames[i], imgsize: this.fielsSize[i] }); // push file details in uploadedfileinfo array of obj
        }
      }
    }
  }

  /* ================== Delete File from images array ==================== */
  DeleteFiles(index: number) {
    this.images.splice(index, 1);
  }

  /* ================== Show Save document btn ==================== */
  savedocumentbtn = false;
  showdocumentbtn() {
    if (this.images.length >= 0) {
      this.savedocumentbtn = true;
    }
  }

  getImgInfoArray: any;
  setImgInfoArray: any;
  finalImgInfoArray: any = [];
  /* ======================================================================= store images values in local storage ================================================= */
  savedocuments() {
    /////////////////////////////////////////////////////////////////////////////// Way 1 ////////////////////////////////////////////////////////////////////////////////////////
    // localStorage.setItem("imageArray", JSON.stringify(this.images)); // set images array in local storage
    // localStorage.setItem("filessizes", JSON.stringify(this.fielsSize)); // set images size array in local storage
    // localStorage.setItem("filenames", JSON.stringify(this.filenames)); // set file names array in local storage
    // this.getfromlocalstorage(); // get local storage array
    // this.images = []; // images array blank
    // this.fielsSize = []; // files sizes array black
    // this.filenames = []; // file names array black
    // this.savedocumentbtn = false; // save document button false


    ////////////////////////////////////////////////////////////////////////////////////// Way 3 //////////////////////////////////////////////////////////////////////////////
    // localStorage.setItem("filedetails", JSON.stringify(this.uploadedfileinfo));
    // // this.getfromlocalstorage(); // get local storage array
    // this.getImgInfoArray = localStorage.getItem("filedetails");
    // this.setImgInfoArray = JSON.parse(this.getImgInfoArray);
    // this.finalImgInfoArray.push(this.setImgInfoArray);

    // localStorage.setItem("imageinformation", JSON.stringify(this.finalImgInfoArray));


    this.getImgInfoArray = [this.uploadedfileinfo]; // 1. get image information array of object
    localStorage.setItem("filedetails", JSON.stringify(this.getImgInfoArray)); // 2. set getImgInfoArray in local storage
    this.setImgInfoArray = localStorage.getItem("filedetails"); // 3. get local storage stored getImgInfoArray array
    this.finalImgInfoArray = JSON.parse(this.setImgInfoArray);
    console.warn("setImageInfoArray", this.finalImgInfoArray);
    localStorage.setItem("finalDetails", JSON.stringify(this.finalImgInfoArray));


    this.images = []; // images array blank
    this.fielsSize = []; // files sizes array black
    this.filenames = []; // file names array black
    this.savedocumentbtn = false; // save document button false
  }

  /* ============= get local storage items and store in showSavedDocuments1 ================ */
  // savedImages1: any;
  // savedImages2: any;
  // finalarray: any = [];

  // filesize1: any;
  // filesize2: any;S
  // finalfilesize: any = [];

  // filename1: any;
  // filename2: any;
  // finlafilenames: any = [];
  // uploadedimagesinfo: any = [];

  // getImgInfoArray: any;
  // setImgInfoArray: any;
  // finalImgInfoArray: any = [];

  getfromlocalstorage() {
    /* ============================================ Way 1 ================================================== */
    /* ============ images array  ============== */
    // this.savedImages1 = localStorage.getItem("imageArray"); // get uploaded images form storage
    // this.savedImages2 = JSON.parse(this.savedImages1);
    // this.finalarray.push(...this.savedImages2);
    // localStorage.setItem("imageArray", JSON.stringify(this.finalarray)); // reset images array local storage

    /* ============ image sizes array  ============== */
    // this.filesize1 = localStorage.getItem("filessizes"); // get files sizes form storage
    // this.filesize2 = JSON.parse(this.filesize1);
    // this.finalfilesize.push(...this.filesize2);
    // localStorage.setItem("filessizes", JSON.stringify(this.finalfilesize)); // reset file sizes array in local storage

    /* ============ image names array  ============== */
    // this.filename1 = localStorage.getItem("filenames");
    // this.filename2 = JSON.parse(this.filename1);
    // this.finlafilenames.push(...this.filename2);
    // localStorage.setItem("filenames", JSON.stringify(this.finlafilenames));



    /////////////////////////////////////////////////////////////////////////////////////// Way 2 ///////////////////////////////////////////////////////////////////////////////
    // for (let a = 0; a < this.savedImages2.length; a++) {
    //   this.uploadedimagesinfo.push({ image: this.finalarray[a], imagesize: this.finalfilesize[a], imagename: this.finlafilenames[a] });
    // }
    // localStorage.setItem("uploadedimginfo", JSON.stringify(this.uploadedimagesinfo));



    /////////////////////////////////////////////////////////////////////////////////////// Way 3 ///////////////////////////////////////////////////////////////////////////////
    // this.getImgInfoArray = localStorage.getItem("filedetails");
    // this.setImgInfoArray = JSON.parse(this.getImgInfoArray);
    // console.warn("current array = ", this.finalImgInfoArray);
    // localStorage.setItem("filedetails", JSON.stringify(this.setImgInfoArray));    // console.warn(this.finalImgInfoArray);
    // if (this.setImgInfoArray.length <= 0) {
    //   localStorage.clear();
    // }


    // if (!this.setImgInfoArray.hasOwnProperty(this.uploadedfileinfo.img)) {
    //   this.finalImgInfoArray.push(...this.setImgInfoArray, ...this.uploadedfileinfo);
    //   localStorage.setItem("filedetails", JSON.stringify(this.finalImgInfoArray));    // console.warn(this.finalImgInfoArray);
    // }
  }


  /* =============== delete array item form local storage ================= */
  deleteimage(index: any) {
    ///////////////////////////////////////////////////////////////////////////// Way 1 /////////////////////////////////////////////////////////////////////////////////
    /* =========== remove image form images array =========== */
    // this.finalarray.splice(index, 1); // remove image
    // localStorage.setItem("imageArray", JSON.stringify(this.finalarray)); // reset images array local storage
    // if (this.finalarray.length <= 0) {
    //   localStorage.clear(); // if images array length 0 then clear local storage.
    // }

    /* =========== remove image size from imageSizes array =========== */
    // this.finalfilesize.splice(index, 1); // remove file size
    // localStorage.setItem("filessizes", JSON.stringify(this.finalfilesize)); // reset images array local storage
    // if (this.finalfilesize.length <= 0) {
    //   localStorage.clear(); // if file sizes array length 0 then clear local storage.
    // }

    /* =========== remove image name from imagenames array =========== */
    // this.finlafilenames.splice(index, 1);
    // localStorage.setItem("filenames", JSON.stringify(this.finlafilenames));
    // if (this.finlafilenames.length <= 0) {
    //   localStorage.clear();
    // }


    ///////////////////////////////////////////////////////////////////////////// Way 2 /////////////////////////////////////////////////////////////////////////////////
    // this.uploadedimagesinfo.splice(index, 1);
    // localStorage.setItem("uploadedimginfo", JSON.stringify(this.uploadedimagesinfo));
    // if (this.uploadedimagesinfo.length <= 0) {
    //   localStorage.clear();
    // }


    ///////////////////////////////////////////////////////////////////////////// Way 3 /////////////////////////////////////////////////////////////////////////////////
    this.setImgInfoArray.splice(index, 1);
    localStorage.setItem("filedetails", JSON.stringify(this.setImgInfoArray));
    if (this.setImgInfoArray.length <= 0) {
      localStorage.clear();
    }


    // this.finalImgInfoArray.splice(index, 1);
    // localStorage.setItem("filedetails", JSON.stringify(this.finalImgInfoArray));
    // if (this.finalImgInfoArray.length <= 0) {
    //   localStorage.clear();
    // }

  }

  showuploadedimage: number[] = [];
  setvisibleimg(id: number) {
    this.showuploadedimage[0] = id;
  }

  removeimg() {
    this.showuploadedimage = [];
  }

  visibleimg(id: number) {
    return this.showuploadedimage.includes(id);
  }
}
