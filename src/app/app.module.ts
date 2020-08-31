import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common'
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PatientAppointmentAddComponent } from './patient/patient-appointment-add/patient-appointment-add.component';
import { PatientSearchComponent } from './patient/patient-search/patient-search.component';
import { PatientAddDoctorComponent } from './patient/patient-add-doctor/patient-add-doctor.component';
import { NumberDirective } from './patient/shared/numbers-only.directive';
import { WINDOW_PROVIDERS } from 'window.providers';
import { LoginComponent } from './login/login.component';
import { PatientServicesService } from './patient-services.service';
import { InterceptorService } from './interceptor.service';
import { LogoutComponent } from './login/logout.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    PatientRegistrationComponent,
    PatientAppointmentAddComponent,
    PatientSearchComponent,
    PatientAddDoctorComponent,
    NumberDirective,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatTableModule
  ],
  providers: [DatePipe, WINDOW_PROVIDERS
    , PatientServicesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
