import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { PatientAppointmentAddComponent } from './patient/patient-appointment-add/patient-appointment-add.component';
import { PatientSearchComponent } from './patient/patient-search/patient-search.component';
import { PatientAddDoctorComponent } from './patient/patient-add-doctor/patient-add-doctor.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: 'create', component: PatientRegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addappointment', component: PatientAppointmentAddComponent },
  { path: 'search', component: PatientSearchComponent },
  { path: 'admin-services', component: PatientAddDoctorComponent,canActivate:[LoginGuard] }, 
  { path: '', redirectTo: '/create', pathMatch: 'full' }
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
