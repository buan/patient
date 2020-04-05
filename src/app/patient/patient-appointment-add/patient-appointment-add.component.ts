import { Component, OnInit } from '@angular/core';
import { PatientServicesService } from 'src/app/patient-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-patient-appointment-add',
  templateUrl: './patient-appointment-add.component.html',
  styleUrls: ['./patient-appointment-add.component.css']
})
export class PatientAppointmentAddComponent implements OnInit {
  checkuser: any;
  userName: any;
  usernotexist: string;
  disablestatus: boolean = false;
  enablestatus: boolean = false;
  prescription_upload_status: boolean = false;
  addappointment: FormGroup;
  addcontact: FormGroup;
  branches: import("d:/patient/patient-services/src/app/patient").IEmployee[];
  patientreferred: import("d:/patient/patient-services/src/app/patient").IEmployee[];
  departments: import("d:/patient/patient-services/src/app/patient").IEmployee[];
  purpose: import("d:/patient/patient-services/src/app/patient").IEmployee[];
  selectedpurpose: any;
  showtreatmenttype: boolean;
  showprescription: boolean;
  prescriptionstatus: import("d:/patient/patient-services/src/app/patient").IEmployee[];
  patientForm: any;
  selecteddepartments: any;
  showpurpose: boolean;
  showappointment: boolean = false;
  showdetailsupdate: boolean = false;
  treatment: import("d:/patient/patient-services/src/app/patient").IEmployee[];
  addprescription: FormGroup;upload
  image: string | ArrayBuffer;
  registrationvalue: string;
  uploadtype: File;
  getfid: import("d:/patient/patient-services/src/app/patient").IEmployee[];
  nodeid: any;


  constructor(private _patientService: PatientServicesService, private fb: FormBuilder,private router: Router) { }
  formErrors = {
    'PatientAddress': '',
    'PatientContactNumber': '',

  };

  // This object contains all the validation messages for this form
  validationMessages = {
    'PatientAddress': {
      'required': 'Patient Address is required.',
    },
    'PatientContactNumber': {
      'required': 'Patient Contact Number is required.',
    },

  };
  ngOnInit() {
    this.addappointment = this.fb.group({
      // PatientAppointmentDate: [''],
      VisitingBranch: ['', Validators.required],
      PatientReferredBy: [''],
      SelectDepartment: [''],
      PurposeofVisit: [''],
      TreatmentType: [''],
    });


    this.addcontact = this.fb.group({
      PatientAddress: ['', Validators.required],
      PatientContactNumber: ['', Validators.required],
    });

    this.addprescription = this.fb.group({

    });

    this._patientService.getBranch()
      .subscribe(data => this.branches = data);

    this._patientService.getPatientReferred()
      .subscribe(data => this.patientreferred = data);

    this._patientService.getDepartments()
      .subscribe(data => this.departments = data);

    this._patientService.getpurpose()
      .subscribe(data => this.purpose = data);
  }

  updatecontact(): void {
    console.log(this.addcontact.getRawValue().PatientAddress);
    this._patientService.updatepatientdetails(this.checkuser[0].uid, this.addcontact.getRawValue().PatientContactNumber, this.addcontact.getRawValue().PatientAddress)
      .subscribe(data => console.log(data));

  }

  updateappointment(): void {
    console.log(this.addappointment.getRawValue());
    this._patientService.createanotherappointment(this.addappointment.getRawValue(), this.checkuser)
      .subscribe(data => console.log(data));
  }

  changedpurpose(value: any): void {
    console.log(value);
    this.selectedpurpose = value;
    if (value == 'Treatment') {
      this.showtreatmenttype = true;
    }
    else {
      this.showtreatmenttype = false;
      this.addappointment.patchValue({
        TreatmentType: '',
      });
    }
  }

  onFileSelected($event) {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.uploadtype=file;
      this.image = (<string>myReader.result).split('base64,')[1];
      // this.image=this.image.replace(new RegExp('.*' + Y), '')
    }
    myReader.readAsDataURL(file);
  }

  submitpres(value){
    console.log(this.uploadtype.name);
    this._patientService.uploadprescription(this.uploadtype.name,value,this.uploadtype.type)
    .subscribe(data =>{ 
      if(data){
        this._patientService.attachprescription(data,this.registrationvalue,this.nodeid).subscribe(data=>{
          if(data){
            this.prescription_upload_status=true;
            setTimeout(()=>{  
                    this.router.navigate(['/search']);
               }, 3000);
          }
        
        });

      }    
  
    });
   
  }

  logValidationErrors(group: FormGroup = this.addcontact): void {
    // loop through each key in the FormGroup
    Object.keys(group.controls)
    .forEach((key: string) => {
      // Get a reference to the control using the FormGroup.get() method
      const abstractControl = group.get(key);
      // If the control is an instance of FormGroup i.e a nested FormGroup
      // then recursively call this same method (logKeyValuePairs) passing it
      // the FormGroup so we can get to the form controls in it
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
        // If the control is not a FormGroup then we know it's a FormControl


      } else {
        // console.log('Key = ' + key + ' && Value = ' + abstractControl.value);
        // abstractControl.disable();
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
          // Get all the validation messages of the form control
          // that has failed the validation
          const messages = this.validationMessages[key];
          // Find which validation has failed. For example required,
          // minlength or maxlength. Store that error message in the
          // formErrors object. The UI will bind to this object to
          // display the validation errors
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });
  }


  changeddepartment(value: any): void {
    this.selecteddepartments = value.value;
    console.log(this.selecteddepartments);
    if (value) {
      this.showpurpose = true;
      this._patientService.gettreatmentype(this.selecteddepartments)
        .subscribe(data => this.treatment = data);
    }
  }

  enableappointment() {
    this.showappointment = true;
    this.showdetailsupdate = false;
    this.showprescription = false;
  }

  enableupdate() {
    this.showappointment = false;
    this.showdetailsupdate = true;
    this.showprescription = false;
  }
  enableprescriptionupload() {
    this._patientService.checkprescription(this.registrationvalue)
      .subscribe(data =>{
        this.prescriptionstatus = data[0].field_patient_prescription;
        this.nodeid=data[0].nid;
      });
    this.showappointment = false;
    this.showdetailsupdate = false;
    this.showprescription = true;
  }
  patientValidate(regvalue) {
    this.registrationvalue = regvalue;
    this._patientService.validateuser(regvalue)
      .subscribe(data => {
        if(data){
          this.checkuser = data;
          console.log(this.checkuser);
        }
        
        
        if (Object.keys(this.checkuser).length == 1) {
          this.disablestatus = true;
          this.enablestatus = false;
        }
        else {
          this.enablestatus = true;
        }
      });

  }



}
