import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { PatientServicesService } from 'src/app/patient-services.service';
import { IEmployee } from 'src/app/patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {
  currentDate: Date;
  showpurpose: boolean = false;
  showtreatmenttype: boolean = false;
  showothersreason: boolean = false;
  patientsavedstatus: boolean = false;
  targetmodal: string = "";
  uploadtype: File;
  image: string;
  patientForm: FormGroup;
  patientreferred: IEmployee[];
  branches: IEmployee[];
  departments: IEmployee[];
  selecteddepartments: IEmployee[];
  purpose: IEmployee[];
  selectedpurpose: IEmployee[];
  treatment: IEmployee[];
  uid: IEmployee[];
  createpatientresult: any;
  today: number = Date.now();
  key: string;
  constructor(private fb: FormBuilder, public datepipe: DatePipe, private _patientService: PatientServicesService, private router: Router) { }




  formErrors = {
    'PatientName': '',
    'PatientAge': '',
    'PatientAddress': '',
    'PatientClinicSource': '',
    'VisitingBranch': '',
    'PatientReferredBy': '',
    'SelectDepartment': '',
    'PurposeofVisit': '',

  };

  // This object contains all the validation messages for this form
  validationMessages = {
    'PatientName': {
      'required': 'Patient Name is required.',
      'maxlength': 'Patient Name must be less than 20 characters.'
    },
    'PatientAge': {
      'required': 'Patient Age is required.',
    },
    'PatientAddress': {
      'required': 'Patient Address is required.',
    },
    'PatientClinicSource': {
      'required': 'Patient Clinic Source is required.',
    },
    'VisitingBranch': {
      'required': 'Visiting Branch is required.',
    },
    'PatientReferredBy': {
      'required': 'Patient ReferredBy is required.',
    },
    'SelectDepartment': {
      'required': 'Department is required.',
    },
    'PurposeofVisit': {
      'required': 'Purpose of Visit is required.',
    },
  };




  ngOnInit() {

    this._patientService.getBranch()
      .subscribe(data => this.branches = data);

    this._patientService.getPatientReferred(this.key)
      .subscribe(data => this.patientreferred = data);

    this._patientService.getDepartments()
      .subscribe(data => this.departments = data);

    this._patientService.getpurpose()
      .subscribe(data => this.purpose = data);

    this.currentDate = new Date();
    let latest_date = this.datepipe.transform(this.currentDate, 'ddMMyyyyhmmss');
    latest_date = 'REG' + latest_date
    this.patientForm = this.fb.group({
      PatientRegistration: [{ value: latest_date, disabled: true }],
      PatientName: ['', Validators.required],
      PatientContactNumber: [''],
      PatientAge: ['', Validators.required],
      PatientGender: ['Male'],
      PatientReferredPrescription: [''],
      PatientAddress: ['', Validators.required],
      PatientClinicSource: this.fb.group({
        Doctor: [''],
        Hospital: [''],
        NursingHome: [''],
        Polyclinic: [''],
        MedicineShop: [''],
        RelativeFriend: [''],
        ClinicSignBoard: [''],
        FlexBanner: [''],
        LeafletFlyers: [''],
        Newspaper: [''],
        ElectronicMedia: [''],
        Website: [''],
        Facebook: [''],
        SocialMedia: [''],
        Others: [''],
        othersreason: [''],
      }),
      VisitingBranch: ['', Validators.required],
      PatientReferredBy: [''],
      SelectDepartment: ['', Validators.required],
      PurposeofVisit: ['', Validators.required],
      TreatmentType: [''],
    });

  }





  loadvalues(): void {
    this.logValidationErrors(this.patientForm);
    console.log(this.formErrors);
  }



  treatmentype(value: any): void {
    console.log(value);
  }

  changedpurpose(value: any): void {
    console.log(value);
    this.selectedpurpose = value;
    if (value == 'Treatment') {
      this.showtreatmenttype = true;
    }
    else {
      this.showtreatmenttype = false;
      this.patientForm.patchValue({
        TreatmentType: '',
      });
    }
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

  showothersreasonbox(): void {
    this.showothersreason = !this.showothersreason;
  }

  logValidationErrors(group: FormGroup = this.patientForm): void {
    // loop through each key in the FormGroup
    Object.keys(group.controls).forEach((key: string) => {
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

  onFileSelected($event) {
    this.readThis($event.target);
  }
  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.uploadtype = file;
      this.image = (<string>myReader.result).split('base64,')[1];
      console.log(this.image);
      // this.image=this.image.replace(new RegExp('.*' + Y), '')
    }
    myReader.readAsDataURL(file);
  }

  clearform(): void {
    window.location.reload();
  }

  shomod(): void {
    this.targetmodal="#exampleModal1";
  }

  onSubmit(): void {
    if (this.uploadtype) {
      this._patientService.uploadprescription(this.uploadtype.name, this.image, this.uploadtype.type)
        .subscribe(data => {
          console.log(data);

          this._patientService.createpatient(this.patientForm.getRawValue(), data)
            .subscribe(data => {
              this.createpatientresult = data;
              console.log(this.createpatientresult);
              setTimeout(() => {
                this._patientService.createpatientappointment(this.patientForm.getRawValue(), this.createpatientresult)
                  .subscribe(data => console.log(this.createpatientresult));
                this.patientsavedstatus = true;
              }, 1000);



            });



        })
    }
    else {
      this._patientService.createpatient(this.patientForm.getRawValue(), "")
      .subscribe(data => {
        this.createpatientresult = data;
        console.log(this.createpatientresult);
        setTimeout(() => {
          this._patientService.createpatientappointment(this.patientForm.getRawValue(), this.createpatientresult)
            .subscribe(data => console.log(this.createpatientresult));
          this.patientsavedstatus = true;
        }, 1000);



      });
    }



  }

}
