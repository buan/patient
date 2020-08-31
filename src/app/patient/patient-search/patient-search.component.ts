import { Component, OnInit } from '@angular/core';
import { PatientServicesService } from 'src/app/patient-services.service';



@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {
  displayedColumns: string[] = ['Branch', 'Doctor Referred', 'Treatment Type', 'Visit Date', 'Department','Purpose'];
  registrationvalue: any;
  regname: string = "";
  checkuser: any;
  disablestatus: boolean;
  enablestatus: boolean;
  patientdetails: boolean = false;
  appointmentdetails: boolean = false;
  showuserstatus: boolean = false;
  showappointmentstatus: boolean = false
  checkappointment: any;

  constructor(private _patientService: PatientServicesService) { }

  ngOnInit() {
  }
  patientstatus(): void {
    this.showuserstatus = true;
    this.showappointmentstatus = false;
  }
  appointmentstatus(): void {
    this.showuserstatus = false;
    this.showappointmentstatus = true
  }
  patientValidate(regvalue) {
    this.registrationvalue = regvalue;

    this._patientService.getsearchappointmentinfo(regvalue)
      .subscribe(data => {
        if (data) {
          this.checkappointment = data;

        }
        console.log(data)
      });


    this._patientService.getsearchpatientinfo(regvalue)
      .subscribe(data => {
        if (data) {
          this.checkuser = data;

        }


        if (Object.keys(this.checkuser).length == 1) {
          this.disablestatus = true;
          this.enablestatus = false;
          this.appointmentdetails = true;
          this.patientdetails = true;
        }
        else {
          this.disablestatus = false;
          this.enablestatus = true;
        }
      });

  }

}
