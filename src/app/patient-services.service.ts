import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './patient';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PatientServicesService {
  private _urlforpatientreferred: string = "http://localhost/drupal8dev/doctor-list";
  private _urlforbranch: string = "http://localhost/drupal8dev/branch";
  private _urlfordepartments: string = "http://localhost/drupal8dev/departments";
  private _urlforpurpose: string = "http://localhost/drupal8dev/purpose";
  private _urlforme: string = "http://localhost/drupal8dev/me";
  private _urlfortreatmenttype: string = "http://localhost/drupal8dev/treatment";
  private _urlforcreatepatient: string = "http://localhost/drupal8dev/entity/user?_format=hal_json";
  private _urlforcreatepatientappointment: string = "http://localhost/drupal8dev/entity/node?_format=hal_json";
  private _urltovalidateuser: string = "http://localhost/drupal8dev/findonepatient";
  private _urltoaddoctor: string = "http://localhost/drupal8dev/entity/taxonomy_term?_format=hal_json";
  private _urltocheckforprescription: string = "http://localhost/drupal8dev/checkprescription";
  private _urltocheckforuploadprescription: string = "http://localhost/drupal8dev/entity/file?_format=hal_json";
  private headers: any = { 'Content-Type': 'application/hal+json', 'Authorization': 'Basic YWRtaW46YWRtaW4=', 'X-CSRF-Token': 'wGq8Jno6Sd8zCNa7I70vV7dWWiZtEtrbRrM9739zwhI' }

  constructor(private http: HttpClient) { }

  getPatientReferred(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._urlforpatientreferred);
  }
  getBranch(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._urlforbranch);
  }

  getDepartments(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._urlfordepartments);
  }

  getpurpose(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._urlforpurpose);
  }
  getMElist(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._urlforme);
  }

  gettreatmentype(treatment): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._urlfortreatmenttype + "/" + treatment);
  }
  validateuser(uid): Observable<IEmployee[]> {
    console.log(this._urltovalidateuser + "/" + uid)
    return this.http.get<IEmployee[]>(this._urltovalidateuser + "/" + uid);
  }

  createpatient(value): Observable<IEmployee[]> {
    console.log(value.PatientClinicSource);
    let totalitemlist = '';

    Object.keys(value.PatientClinicSource).forEach(item => {

      console.log(item); // key
      console.log(value.PatientClinicSource[item]); // value
      if (value.PatientClinicSource[item] == true) {
        totalitemlist = item + "+" + totalitemlist;
      }


    });
    totalitemlist = totalitemlist.slice(0, -1);

    //save as a patient
    let data = {
      "_links": {

        "type": {

          "href": "http://localhost/drupal8dev/rest/type/user/user"

        }

      },


      "name": [{
        "value": value.PatientRegistration
      },
      ],
      "roles": [{
        "target_id": "patient"
      },
      ],
      "status": [{
        "value": 1
      },
      ],
      "field_clinic_source": [{ "value": totalitemlist }],
      "field_patient_name": [{ "value": value.PatientName }],
      "field_patient_address": [{ "value": value.PatientName }],
      "field_patient_age": [{ "value": value.PatientAge }],
      "field_patient_contact_number": [{ "value": value.PatientContactNumber }],
      "field_patient_sex": [{ "value": value.PatientGender }],


    };
    return this.http.post<IEmployee[]>(this._urlforcreatepatient, data, { headers: this.headers });
  }
  createpatientappointment(value, patientreference): Observable<IEmployee[]> {
    //save as a patient appointment
    console.log(patientreference.uid[0].value);
    console.log(value.TreatmentType);
    let treatmenttype = '';
    if (value.TreatmentType) {
      value.TreatmentType.forEach((value) => {
        treatmenttype = value + "+" + treatmenttype;

      });
    }

    treatmenttype = treatmenttype.slice(0, -1);
    let data = {
      "_links": {

        "type": {

          "href": "http://localhost/drupal8dev/rest/type/node/appointment"

        }

      },


      "title": [{
        "value": value.PatientRegistration
      },
      ],
      "field_branch_name": [{
        "value": value.VisitingBranch
      },
      ],
      "field_type_of_treatment": [{ "value": treatmenttype }],
      "field_doctor_referred": [{ "value": value.PatientReferredBy }],
      "field_department": [{ "value": value.SelectDepartment }],
      "field_patient": [{ "target_id": patientreference.uid[0].value }],
      "field_purpose": [{ "value": value.PurposeofVisit }],

    };
    return this.http.post<IEmployee[]>(this._urlforcreatepatientappointment, data, { headers: this.headers });
  }
  createanotherappointment(value, patientreference): Observable<IEmployee[]> {
    //save as a patient appointment
    console.log(patientreference[0].uid);
    console.log(value);
    let treatmenttype = '';
    if (value.TreatmentType) {
      value.TreatmentType.forEach(function (value) {
        treatmenttype = value + "+" + treatmenttype;

      });
    }

    treatmenttype = treatmenttype.slice(0, -1);
    let data = {
      "_links": {

        "type": {

          "href": "http://localhost/drupal8dev/rest/type/node/appointment"

        }

      },


      "title": [{
        "value": patientreference[0].name
      },
      ],
      "field_branch_name": [{
        "value": value.VisitingBranch
      },
      ],
      "field_type_of_treatment": [{ "value": treatmenttype }],
      "field_doctor_referred": [{ "value": value.PatientReferredBy }],
      "field_department": [{ "value": value.SelectDepartment }],
      "field_patient": [{ "target_id": patientreference[0].uid }],
      "field_purpose": [{ "value": value.PurposeofVisit }],

    };
    return this.http.post<IEmployee[]>(this._urlforcreatepatientappointment, data, { headers: this.headers });
  }

  addoctor(value1, value2): Observable<IEmployee[]> {
    let data = {

      "_links": {

        "type": {

          "href": "http://localhost/drupal8dev/rest/type/taxonomy_term/doctor_list"

        }

      },
      "vid": [
        {
          "target_id": "doctor_list"
        }
      ],


      "name": [{
        "value": value1.value
      }],

      "field_marketing_executive": [{
        "target_id": value2.value
      }


      ]

    };
    return this.http.post<IEmployee[]>(this._urltoaddoctor, data, { headers: this.headers });
  }
  addME(value1): Observable<IEmployee[]> {
    let data = {

      "_links": {

        "type": {

          "href": "http://localhost/drupal8dev/rest/type/taxonomy_term/marketing_executive"

        }

      },
      "vid": [
        {
          "target_id": "marketing_executive"
        }
      ],


      "name": [{
        "value": value1.value
      }]

    };
    return this.http.post<IEmployee[]>(this._urltoaddoctor, data, { headers: this.headers });
  }

  updatepatientdetails(nid, contact, address): Observable<IEmployee[]> {
    let data = {

      "_links": {

        "type": {

          "href": "http://localhost/drupal8dev/rest/type/user/user"

        }

      },


      "field_patient_contact_number": [{
        "value": contact
      }
      ],

      "field_patient_address": [{
        "value": address
      }
      ]

    };
    return this.http.patch<IEmployee[]>("http://localhost/drupal8dev/user/" + nid + "?_format=hal_json", data, { headers: this.headers });

  }

  checkprescription(regvalue): Observable<IEmployee[]> {
    console.log(regvalue);
    return this.http.get<IEmployee[]>(this._urltocheckforprescription + "/" + regvalue);
  }

  uploadprescription(name, base64, type): Observable<IEmployee[]> {
    if (type.includes("image")) {
      type = "image"
    }
    else {
      type = "document"
    }
    let data = {

      "_links": {

        "type": {

          "href": "http://localhost/drupal8dev/rest/type/file/document"

        }

      },


      "uri": [{ "value": "public:\/\/" + name }],

      "uid": [{ "target_id": 1, "target_type": "user" }],
      "filename": [{ "value": new Date().getTime() + name }],
      "filemime": [{ "value": type }],
      "data": [{
        "value": base64
      }]
    };
    console.log(type);
    return this.http.post<IEmployee[]>(this._urltocheckforuploadprescription, data, { headers: this.headers });
  }

  attachprescription(value, regvalue, nid): Observable<IEmployee[]> {
    console.log(value);
    let data = {

      "_links": {

        "type": {

          "href": "http://localhost/drupal8dev/rest/type/node/appointment"

        }

      },


      "title": [{
        "value": regvalue
      }
      ],

      "field_patient_prescription": [{
        "target_id": value.fid[0].value
      }
      ]

    }
    return this.http.patch<IEmployee[]>("http://localhost/drupal8dev/node/" + nid + "?_format=hal_json", data, { headers: this.headers });
  }
}