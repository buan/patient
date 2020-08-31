import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { PatientAppointmentAddComponent } from './patient/patient-appointment-add/patient-appointment-add.component';
import { PatientSearchComponent } from './patient/patient-search/patient-search.component';
import { PatientAddDoctorComponent } from './patient/patient-add-doctor/patient-add-doctor.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: PatientRegistrationComponent },
  { path: 'addappointment', component: PatientAppointmentAddComponent },
  { path: 'search', component: PatientSearchComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'admin-services', component: PatientAddDoctorComponent,canActivate:[LoginGuard] }, 
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
