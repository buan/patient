import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common'
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PatientAppointmentAddComponent } from './patient/patient-appointment-add/patient-appointment-add.component';
import { PatientSearchComponent } from './patient/patient-search/patient-search.component';
import { PatientAddDoctorComponent } from './patient/patient-add-doctor/patient-add-doctor.component';
import { NumberDirective } from './patient/shared/numbers-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    PatientRegistrationComponent,
    PatientAppointmentAddComponent,
    PatientSearchComponent,
    PatientAddDoctorComponent,
    NumberDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
