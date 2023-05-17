import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-apply-online-form',
  templateUrl: './apply-online-form.component.html',
  styleUrls: ['./apply-online-form.component.scss']
})
export class ApplyOnlineFormComponent {
  constructor(public dialog: MatDialog) { }


  /* ====================================================== Uplode Aadhar Card ====================================================== */
  imageDetails: any = {};
  savedocumentbtn = false;
  selectAadharCard(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.imageDetails.image = (event.target.result);
      }
      this.imageDetails.name = (event.target.files[0].name);
    }
    this.savedocumentbtn = true;
  }

  /* ----------- Delete Image ----------- */
  deleteAdharCard() {
    this.imageDetails = {};
    this.savedocumentbtn = false;
  }



  /* ====================================================== Uplode Business Card ====================================================== */
  BusinessDetails: any = {};
  savedocumentbtn2 = false;
  selectBusinessCard(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.BusinessDetails.image = (event.target.result);
      }
      this.BusinessDetails.name = (event.target.files[0].name);
    }
    this.savedocumentbtn2 = true;
  }

  deleteBussnessCard() {
    this.BusinessDetails = {};
    this.savedocumentbtn2 = false;
  }



  /* ====================================================== Uplode Certificates ====================================================== */
  Certificates: any = [];
  savedocumentbtn3 = false;
  selectCertificates(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        for (let a = 0; a < this.Certificates.lenght; a++) {
          this.Certificates[a].push(event.target.result);
        }
      }
      this.Certificates.push(event.target.files[0]);
    }
    this.savedocumentbtn3 = true;
  }

  deleteCertificate(id: any) {
    this.Certificates.splice(id, 1);
  }


  /* ====================================================== Uplode Student Marksheet ====================================================== */
  MarksheetDetails: any = {};
  savedocumentbtn4 = false;
  selectMarksheet(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.MarksheetDetails.image = (event.target.result);
      }
      this.MarksheetDetails.name = (event.target.files[0].name);
    }
    this.savedocumentbtn4 = true;
  }

  deleteMarksheet() {
    this.MarksheetDetails = {};
    this.savedocumentbtn4 = false;
  }


  /* ====================================================== Uplode Leaving Certificate ====================================================== */
  LeavingCertificateDetails: any = {};
  savedocumentbtn5 = false;
  selectLeavingCertificate(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.LeavingCertificateDetails.image = (event.target.result);
      }
      this.LeavingCertificateDetails.name = (event.target.files[0].name);
    }
    this.savedocumentbtn5 = true;
  }

  deleteLeavingCertificate() {
    this.LeavingCertificateDetails = {};
    this.savedocumentbtn5 = false;
  }


  /* ====================================================== Uplode Medical Documents ====================================================== */
  MedicalDocumentDetails: any = [];
  savedocumentbtn6 = false;
  selectMedicalDocument(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        for (let a = 0; a < this.MedicalDocumentDetails.lenght; a++) {
          this.MedicalDocumentDetails[a].push(event.target.result);
        }
      }
      this.MedicalDocumentDetails.push(event.target.files[0]);
    }
    console.warn(this.savedocumentbtn6);
    this.savedocumentbtn6 = true;
  }
  deleteMedicalDocument(id: any) {
    this.MedicalDocumentDetails.splice(id, 1);
  }

  /* ====================================================== Uplode Father Aadhar Card ====================================================== */
  FatherAadharCardDetails: any = {};
  savedocumentbtn7 = false;
  selectFatherAadharCard(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.FatherAadharCardDetails.image = (event.target.result);
      }
      this.FatherAadharCardDetails.name = (event.target.files[0].name);
    }
    this.savedocumentbtn7 = true;
  }

  deleteFatherAdharCard() {
    this.FatherAadharCardDetails = {};
    this.savedocumentbtn7 = false;
  }

  /* ====================================================== Uplode Mother Aadhar Card ====================================================== */
  MotherAadharCardDetails: any = {};
  savedocumentbtn8 = false;
  selectMotherAadharCard(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.MotherAadharCardDetails.image = (event.target.result);
      }
      this.MotherAadharCardDetails.name = (event.target.files[0].name);
    }
    this.savedocumentbtn8 = true;
  }

  deleteMotherAdharCard() {
    this.MotherAadharCardDetails = {};
    this.savedocumentbtn8 = false;
  }



  localguardian = true;
  localGrardian(value: any) {
    this.localguardian = value;
  }




  /*---------- Student Profile Edit, Save Mode ----------*/
  editMode1 = true;
  EditForm() {
    this.editMode1 = !this.editMode1;
  }


  /*---------- Primary Contact Edit, Save Mode ----------*/
  editMode2 = true;
  EditForm2() {
    this.editMode2 = !this.editMode2;
  }

  /*---------- Student Information Edit, Save Mode ----------*/
  editMode3 = true;
  EditForm3() {
    this.editMode3 = !this.editMode3;
  }

  /*---------- Previous School Edit, Save Mode ----------*/
  editMode4 = true;
  EditForm4() {
    this.editMode4 = !this.editMode4;
  }

  /*---------- Medical Information Edit, Save Mode ----------*/
  editMode5 = true;
  EditForm5() {
    this.editMode5 = !this.editMode5;
  }

  /*---------- Parents Information Edit, Save Mode ----------*/
  editMode6 = true;
  EditForm6() {
    this.editMode6 = !this.editMode6;
  }

  /*---------- Parents Information Edit, Save Mode ----------*/
  editMode7 = true;
  EditForm7() {
    this.editMode7 = !this.editMode7;
  }


  GlobalSaveButton = true;
  SaveForms() {
    this.editMode1 = false;
    this.editMode2 = false;
    this.editMode3 = false;
    this.editMode4 = false;
    this.editMode5 = false;
    this.editMode6 = false;
    this.editMode7 = false;
    this.GlobalSaveButton = !this.GlobalSaveButton;
  }




  tooltip = 'tooltip';

  openDialog() {
    this.dialog.open(AppDialogBox2Component);
  }
}



@Component({
  selector: 'app-dialog-box2',
  styleUrls: ['./apply-online-form.component.scss'],
  template: `
  <div class="DialogBox">
    <h1 mat-dialog-title>Mobile No. Verification</h1>
    <hr class="custom-hr">
    <div mat-dialog-content class="dialog-contant">
      <div class="content-text">Enter OTP</div>
        <mat-form-field class="example-full-width" appearance="outline">
        <mat-label>ENTER OTP</mat-label>
        <input matInput placeholder="Enter OTP">
        </mat-form-field>
      <a>Resend OTP</a>
    </div>
    <hr class="custom-hr">
    <div mat-dialog-actions class="action-group">
      <button mat-raised-button  mat-dialog-close class="Close-Btn">Close</button>
      <button mat-flat-button class="Verify-Btn" color="primary">Verify</button>
    </div>
  </div>`,
})
export class AppDialogBox2Component {
}