import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientServicesService } from '../patient-services.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private Router: Router, private _patient: PatientServicesService) { }

  ngOnInit(): void {
    console.log(4);
    this._patient.logout().subscribe(data => {
      console.log(data);
    })
    localStorage.removeItem('loginid');
    localStorage.removeItem('basicaouth');
    localStorage.removeItem('csrf');
    this.Router.navigate(['/login']);
  }

}
