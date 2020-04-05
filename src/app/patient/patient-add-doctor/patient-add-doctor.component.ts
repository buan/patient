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
  me: string;
  mes: import("d:/patient/patient-services/src/app/patient").IEmployee[];
  showmedicalexecutive: boolean = false;
  showaddoctor: boolean = false;
  mesavedstatus: boolean = false;

  constructor(private _patientService: PatientServicesService) { }

  ngOnInit() {

  }
  doctoradd(value1, value2) {
    this._patientService.addoctor(value1, value2)
      .subscribe(data => {
        this.purpose = data
        if (this.purpose) {
          this.doctorsavedstatus = true;
          this.mesavedstatus = false
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
          this.dname2 = ''
        }
      });
  }

  addme() {
    this.showaddoctor = false;
    this.showmedicalexecutive = true;
  }
  adddoc() {
    this._patientService.getMElist()
      .subscribe(data => this.mes = data);

    this.showaddoctor = true;
    this.showmedicalexecutive = false;
  }
}
