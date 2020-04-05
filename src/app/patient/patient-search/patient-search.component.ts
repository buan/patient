import { Component, OnInit } from '@angular/core';
import { PatientServicesService } from 'src/app/patient-services.service';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {
  registrationvalue: any;
  checkuser: import("d:/patient/patient-services/src/app/patient").IEmployee[];
  disablestatus: boolean;
  enablestatus: boolean;

  constructor(private _patientService:PatientServicesService) { }

  ngOnInit() {
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
