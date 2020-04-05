import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { PatientAppointmentAddComponent } from './patient/patient-appointment-add/patient-appointment-add.component';
import { PatientServicesService } from './patient-services.service';
import { PatientSearchComponent } from './patient/patient-search/patient-search.component';
import { PatientAddDoctorComponent } from './patient/patient-add-doctor/patient-add-doctor.component';



const routes: Routes = [
  { path: 'create', component: PatientRegistrationComponent },
  { path: 'addappointment', component: PatientAppointmentAddComponent },
  { path: 'search', component: PatientSearchComponent },
  { path: 'add-doctor', component: PatientAddDoctorComponent },
  { path: '', redirectTo: '/create', pathMatch: 'full' }
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
