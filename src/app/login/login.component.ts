import { Component, OnInit } from '@angular/core';
// import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';
import { Login } from './login';
import { PatientServicesService } from '../patient-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  test: any;
  match = false;
  show: any;
  errorMessage: any;
  user: Login;


  constructor(private _patient: PatientServicesService, private Router: Router) { }

  ngOnInit(): void {
    this.user = new Login('', '');

    if (localStorage.getItem('loginid')) {
      this.Router.navigate(['/create']);
      console.log(8)
    }
  }

  Login(loginForm) {
    // console.log(loginForm.controls.username.value)
    // console.log(loginForm.controls.password.value)

    this._patient.login(loginForm.controls.username.value, loginForm.controls.password.value).subscribe(data => {
      console.log(data);
      if (data.current_user) {
        localStorage.setItem('loginid', data.current_user.uid);
        localStorage.setItem('basicaouth', btoa(loginForm.controls.username.value + ':' + loginForm.controls.password.value));
        localStorage.setItem('csrf', data.csrf_token);
        localStorage.setItem('logouttoken', data.logout_token);
        this.Router.navigate(['/create']);
      }

    },
      (error) => {                              // Error callback
        console.error('error caught in component');
        this.errorMessage = error;
        this.match = true;
        loginForm.resetForm();
      }
    );
  }


  register(){
    this.Router.navigate(['/register']);
  }
}
