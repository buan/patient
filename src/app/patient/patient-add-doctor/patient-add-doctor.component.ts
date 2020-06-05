import { Component, OnInit } from '@angular/core';
import { PatientServicesService } from 'src/app/patient-services.service';

@Component({
  selector: 'app-patient-add-doctor',
  templateUrl: './patient-add-doctor.component.html',
  styleUrls: ['./patient-add-doctor.component.css']
})
export class PatientAddDoctorComponent implements OnInit {
  image: string | ArrayBuffer;
  purpose: import("d:/patient/patient-services/src/app/patient").IEmployee[];
  doctorsavedstatus: boolean = false;
  dname1: string;
  dname2: string;
  tname1: string;
  depnamevalue2: string
  me: string;
  dep: string;
  mes: import("d:/patient/patient-services/src/app/patient").IEmployee[];
  showmedicalexecutive: boolean = false;
  showaddoctor: boolean = false;
  showdepartment: boolean = false;
  showtreatmenttype: boolean = false;

  mesavedstatus: boolean = false;
  disablestatus: boolean = false;
  deplist: import("d:/patient/patient-services/src/app/patient").IEmployee[];
  departmentsavedstatus: boolean = false;
  treatmenttypesavedstatus: boolean = false;
  key: string;

  constructor(private _patientService: PatientServicesService) { }

  ngOnInit() {
this._patientService.gettoken().subscribe(data=>this.key=data)
  }
  doctoradd(value1, value2) {
    this._patientService.addoctor(value1, value2,this.key)
      .subscribe(data => {
        this.purpose = data
        if (this.purpose) {
          this.doctorsavedstatus = true;
          this.mesavedstatus = false
          this.departmentsavedstatus = false
          this.treatmenttypesavedstatus = false
          this.dname1 = ''
        }
      });

  }

  trttypeadd(trtvalue1, trtvalue2) {
    console.log(trtvalue1.value)
    console.log(trtvalue2.value)
    this._patientService.addtrttype(trtvalue1, trtvalue2)
      .subscribe(data => {
        this.purpose = data
        if (this.purpose) {
          this.doctorsavedstatus = false;
          this.mesavedstatus = false
          this.departmentsavedstatus = false
          this.treatmenttypesavedstatus = true
          this.dname1 = ''
        }
      });

  }
  medicalexecutiveadd(value1) {
    console.log(value1.value);
    this._patientService.addME(value1)
      .subscribe(data => {
        this.purpose = data
        if (this.purpose) {
          this.doctorsavedstatus = false;
          this.mesavedstatus = true;
          this.departmentsavedstatus = false
          this.treatmenttypesavedstatus = false
          this.dname2 = ''
        }
      });
  }

  departmentadd(dvalue1): void {
    console.log(dvalue1.value);
    this._patientService.adddepartment(dvalue1)
      .subscribe(data => {
        console.log(data)
        this.purpose = data
        if (this.purpose) {
          this.doctorsavedstatus = false;
          this.mesavedstatus = false;
          this.departmentsavedstatus = true
          this.treatmenttypesavedstatus = false
          this.dname2 = ''
        }
      });
  }

  addme() {
    this.showaddoctor = false;
    this.showmedicalexecutive = true;
    this.showtreatmenttype = false
    this.showdepartment = false
  }
  adddoc() {
    this._patientService.getMElist()
      .subscribe(data => this.mes = data);

    this.showaddoctor = true;
    this.showmedicalexecutive = false;
    this.showtreatmenttype = false
    this.showdepartment = false
  }
  adddep(): void {
    this.showaddoctor = false;
    this.showmedicalexecutive = false;
    this.showtreatmenttype = false
    this.showdepartment = true
  }
  addtrt(): void {
    this._patientService.getDepartments()
      .subscribe(data => this.deplist = data)
    this.showaddoctor = false;
    this.showmedicalexecutive = false;
    this.showtreatmenttype = true
    this.showdepartment = false
  }
}
