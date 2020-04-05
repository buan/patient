function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _patient_patient_registration_patient_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./patient/patient-registration/patient-registration.component */
    "./src/app/patient/patient-registration/patient-registration.component.ts");
    /* harmony import */


    var _patient_patient_appointment_add_patient_appointment_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./patient/patient-appointment-add/patient-appointment-add.component */
    "./src/app/patient/patient-appointment-add/patient-appointment-add.component.ts");
    /* harmony import */


    var _patient_patient_search_patient_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./patient/patient-search/patient-search.component */
    "./src/app/patient/patient-search/patient-search.component.ts");
    /* harmony import */


    var _patient_patient_add_doctor_patient_add_doctor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./patient/patient-add-doctor/patient-add-doctor.component */
    "./src/app/patient/patient-add-doctor/patient-add-doctor.component.ts");

    var routes = [{
      path: 'create',
      component: _patient_patient_registration_patient_registration_component__WEBPACK_IMPORTED_MODULE_2__["PatientRegistrationComponent"]
    }, {
      path: 'addappointment',
      component: _patient_patient_appointment_add_patient_appointment_add_component__WEBPACK_IMPORTED_MODULE_3__["PatientAppointmentAddComponent"]
    }, {
      path: 'search',
      component: _patient_patient_search_patient_search_component__WEBPACK_IMPORTED_MODULE_4__["PatientSearchComponent"]
    }, {
      path: 'add-doctor',
      component: _patient_patient_add_doctor_patient_add_doctor_component__WEBPACK_IMPORTED_MODULE_5__["PatientAddDoctorComponent"]
    }, {
      path: '',
      redirectTo: '/create',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'patient-services';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 21,
      vars: 0,
      consts: [[1, "container-fluid"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-primary"], ["href", "#", 1, "text-white", "navbar-brand"], ["src", "../assets/images/copy.jpg", "width", "40px", "height", "40px", "alt", "", 1, "d-inline-block", "align-top"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLinkActive", "font-weight-bold", "routerLink", "create", "href", "#", 1, "nav-link", "text-white"], ["routerLinkActive", "font-weight-bold", "routerLink", "addappointment", "href", "#", 1, "nav-link", "text-white"], ["routerLinkActive", "font-weight-bold", "routerLink", "search", "href", "#", 1, "nav-link", "text-white"], ["routerLinkActive", "font-weight-bold", "routerLink", "add-doctor", "href", "#", 1, "nav-link", "text-white"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Register Patient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Patient Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Search Patient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add Doctor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _patient_patient_registration_patient_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./patient/patient-registration/patient-registration.component */
    "./src/app/patient/patient-registration/patient-registration.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _patient_patient_appointment_add_patient_appointment_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./patient/patient-appointment-add/patient-appointment-add.component */
    "./src/app/patient/patient-appointment-add/patient-appointment-add.component.ts");
    /* harmony import */


    var _patient_patient_search_patient_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./patient/patient-search/patient-search.component */
    "./src/app/patient/patient-search/patient-search.component.ts");
    /* harmony import */


    var _patient_patient_add_doctor_patient_add_doctor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./patient/patient-add-doctor/patient-add-doctor.component */
    "./src/app/patient/patient-add-doctor/patient-add-doctor.component.ts");
    /* harmony import */


    var _patient_shared_numbers_only_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./patient/shared/numbers-only.directive */
    "./src/app/patient/shared/numbers-only.directive.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["NoopAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _patient_patient_registration_patient_registration_component__WEBPACK_IMPORTED_MODULE_7__["PatientRegistrationComponent"], _patient_patient_appointment_add_patient_appointment_add_component__WEBPACK_IMPORTED_MODULE_10__["PatientAppointmentAddComponent"], _patient_patient_search_patient_search_component__WEBPACK_IMPORTED_MODULE_11__["PatientSearchComponent"], _patient_patient_add_doctor_patient_add_doctor_component__WEBPACK_IMPORTED_MODULE_12__["PatientAddDoctorComponent"], _patient_shared_numbers_only_directive__WEBPACK_IMPORTED_MODULE_13__["NumberDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["NoopAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _patient_patient_registration_patient_registration_component__WEBPACK_IMPORTED_MODULE_7__["PatientRegistrationComponent"], _patient_patient_appointment_add_patient_appointment_add_component__WEBPACK_IMPORTED_MODULE_10__["PatientAppointmentAddComponent"], _patient_patient_search_patient_search_component__WEBPACK_IMPORTED_MODULE_11__["PatientSearchComponent"], _patient_patient_add_doctor_patient_add_doctor_component__WEBPACK_IMPORTED_MODULE_12__["PatientAddDoctorComponent"], _patient_shared_numbers_only_directive__WEBPACK_IMPORTED_MODULE_13__["NumberDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["NoopAnimationsModule"]],
          providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");

    var Material = [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [[Material], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"]],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [Material],
          exports: [Material]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/patient-services.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/patient-services.service.ts ***!
    \*********************************************/

  /*! exports provided: PatientServicesService */

  /***/
  function srcAppPatientServicesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientServicesService", function () {
      return PatientServicesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PatientServicesService = /*#__PURE__*/function () {
      function PatientServicesService(http) {
        _classCallCheck(this, PatientServicesService);

        this.http = http;
        this._urlforpatientreferred = "http://localhost/drupal8dev/doctor-list";
        this._urlforbranch = "http://localhost/drupal8dev/branch";
        this._urlfordepartments = "http://localhost/drupal8dev/departments";
        this._urlforpurpose = "http://localhost/drupal8dev/purpose";
        this._urlforme = "http://localhost/drupal8dev/me";
        this._urlfortreatmenttype = "http://localhost/drupal8dev/treatment";
        this._urlforcreatepatient = "http://localhost/drupal8dev/entity/user?_format=hal_json";
        this._urlforcreatepatientappointment = "http://localhost/drupal8dev/entity/node?_format=hal_json";
        this._urltovalidateuser = "http://localhost/drupal8dev/findonepatient";
        this._urltoaddoctor = "http://localhost/drupal8dev/entity/taxonomy_term?_format=hal_json";
        this._urltocheckforprescription = "http://localhost/drupal8dev/checkprescription";
        this._urltocheckforuploadprescription = "http://localhost/drupal8dev/entity/file?_format=hal_json";
        this.headers = {
          'Content-Type': 'application/hal+json',
          'Authorization': 'Basic YWRtaW46YWRtaW4=',
          'X-CSRF-Token': 'wGq8Jno6Sd8zCNa7I70vV7dWWiZtEtrbRrM9739zwhI'
        };
      }

      _createClass(PatientServicesService, [{
        key: "getPatientReferred",
        value: function getPatientReferred() {
          return this.http.get(this._urlforpatientreferred);
        }
      }, {
        key: "getBranch",
        value: function getBranch() {
          return this.http.get(this._urlforbranch);
        }
      }, {
        key: "getDepartments",
        value: function getDepartments() {
          return this.http.get(this._urlfordepartments);
        }
      }, {
        key: "getpurpose",
        value: function getpurpose() {
          return this.http.get(this._urlforpurpose);
        }
      }, {
        key: "getMElist",
        value: function getMElist() {
          return this.http.get(this._urlforme);
        }
      }, {
        key: "gettreatmentype",
        value: function gettreatmentype(treatment) {
          return this.http.get(this._urlfortreatmenttype + "/" + treatment);
        }
      }, {
        key: "validateuser",
        value: function validateuser(uid) {
          console.log(this._urltovalidateuser + "/" + uid);
          return this.http.get(this._urltovalidateuser + "/" + uid);
        }
      }, {
        key: "createpatient",
        value: function createpatient(value) {
          console.log(value.PatientClinicSource);
          var totalitemlist = '';
          Object.keys(value.PatientClinicSource).forEach(function (item) {
            console.log(item); // key

            console.log(value.PatientClinicSource[item]); // value

            if (value.PatientClinicSource[item] == true) {
              totalitemlist = item + "+" + totalitemlist;
            }
          });
          totalitemlist = totalitemlist.slice(0, -1); //save as a patient

          var data = {
            "_links": {
              "type": {
                "href": "http://localhost/drupal8dev/rest/type/user/user"
              }
            },
            "name": [{
              "value": value.PatientRegistration
            }],
            "roles": [{
              "target_id": "patient"
            }],
            "status": [{
              "value": 1
            }],
            "field_clinic_source": [{
              "value": totalitemlist
            }],
            "field_patient_name": [{
              "value": value.PatientName
            }],
            "field_patient_address": [{
              "value": value.PatientName
            }],
            "field_patient_age": [{
              "value": value.PatientAge
            }],
            "field_patient_contact_number": [{
              "value": value.PatientContactNumber
            }],
            "field_patient_sex": [{
              "value": value.PatientGender
            }]
          };
          return this.http.post(this._urlforcreatepatient, data, {
            headers: this.headers
          });
        }
      }, {
        key: "createpatientappointment",
        value: function createpatientappointment(value, patientreference) {
          //save as a patient appointment
          console.log(patientreference.uid[0].value);
          console.log(value.TreatmentType);
          var treatmenttype = '';

          if (value.TreatmentType) {
            value.TreatmentType.forEach(function (value) {
              treatmenttype = value + "+" + treatmenttype;
            });
          }

          treatmenttype = treatmenttype.slice(0, -1);
          var data = {
            "_links": {
              "type": {
                "href": "http://localhost/drupal8dev/rest/type/node/appointment"
              }
            },
            "title": [{
              "value": value.PatientRegistration
            }],
            "field_branch_name": [{
              "value": value.VisitingBranch
            }],
            "field_type_of_treatment": [{
              "value": treatmenttype
            }],
            "field_doctor_referred": [{
              "value": value.PatientReferredBy
            }],
            "field_department": [{
              "value": value.SelectDepartment
            }],
            "field_patient": [{
              "target_id": patientreference.uid[0].value
            }],
            "field_purpose": [{
              "value": value.PurposeofVisit
            }]
          };
          return this.http.post(this._urlforcreatepatientappointment, data, {
            headers: this.headers
          });
        }
      }, {
        key: "createanotherappointment",
        value: function createanotherappointment(value, patientreference) {
          //save as a patient appointment
          console.log(patientreference[0].uid);
          console.log(value);
          var treatmenttype = '';

          if (value.TreatmentType) {
            value.TreatmentType.forEach(function (value) {
              treatmenttype = value + "+" + treatmenttype;
            });
          }

          treatmenttype = treatmenttype.slice(0, -1);
          var data = {
            "_links": {
              "type": {
                "href": "http://localhost/drupal8dev/rest/type/node/appointment"
              }
            },
            "title": [{
              "value": patientreference[0].name
            }],
            "field_branch_name": [{
              "value": value.VisitingBranch
            }],
            "field_type_of_treatment": [{
              "value": treatmenttype
            }],
            "field_doctor_referred": [{
              "value": value.PatientReferredBy
            }],
            "field_department": [{
              "value": value.SelectDepartment
            }],
            "field_patient": [{
              "target_id": patientreference[0].uid
            }],
            "field_purpose": [{
              "value": value.PurposeofVisit
            }]
          };
          return this.http.post(this._urlforcreatepatientappointment, data, {
            headers: this.headers
          });
        }
      }, {
        key: "addoctor",
        value: function addoctor(value1, value2) {
          var data = {
            "_links": {
              "type": {
                "href": "http://localhost/drupal8dev/rest/type/taxonomy_term/doctor_list"
              }
            },
            "vid": [{
              "target_id": "doctor_list"
            }],
            "name": [{
              "value": value1.value
            }],
            "field_marketing_executive": [{
              "target_id": value2.value
            }]
          };
          return this.http.post(this._urltoaddoctor, data, {
            headers: this.headers
          });
        }
      }, {
        key: "addME",
        value: function addME(value1) {
          var data = {
            "_links": {
              "type": {
                "href": "http://localhost/drupal8dev/rest/type/taxonomy_term/marketing_executive"
              }
            },
            "vid": [{
              "target_id": "marketing_executive"
            }],
            "name": [{
              "value": value1.value
            }]
          };
          return this.http.post(this._urltoaddoctor, data, {
            headers: this.headers
          });
        }
      }, {
        key: "updatepatientdetails",
        value: function updatepatientdetails(nid, contact, address) {
          var data = {
            "_links": {
              "type": {
                "href": "http://localhost/drupal8dev/rest/type/user/user"
              }
            },
            "field_patient_contact_number": [{
              "value": contact
            }],
            "field_patient_address": [{
              "value": address
            }]
          };
          return this.http.patch("http://localhost/drupal8dev/user/" + nid + "?_format=hal_json", data, {
            headers: this.headers
          });
        }
      }, {
        key: "checkprescription",
        value: function checkprescription(regvalue) {
          console.log(regvalue);
          return this.http.get(this._urltocheckforprescription + "/" + regvalue);
        }
      }, {
        key: "uploadprescription",
        value: function uploadprescription(name, base64, type) {
          if (type.includes("image")) {
            type = "image";
          } else {
            type = "document";
          }

          var data = {
            "_links": {
              "type": {
                "href": "http://localhost/drupal8dev/rest/type/file/document"
              }
            },
            "uri": [{
              "value": "public:\/\/" + name
            }],
            "uid": [{
              "target_id": 1,
              "target_type": "user"
            }],
            "filename": [{
              "value": new Date().getTime() + name
            }],
            "filemime": [{
              "value": type
            }],
            "data": [{
              "value": base64
            }]
          };
          console.log(type);
          return this.http.post(this._urltocheckforuploadprescription, data, {
            headers: this.headers
          });
        }
      }, {
        key: "attachprescription",
        value: function attachprescription(value, regvalue, nid) {
          console.log(value);
          var data = {
            "_links": {
              "type": {
                "href": "http://localhost/drupal8dev/rest/type/node/appointment"
              }
            },
            "title": [{
              "value": regvalue
            }],
            "field_patient_prescription": [{
              "target_id": value.fid[0].value
            }]
          };
          return this.http.patch("http://localhost/drupal8dev/node/" + nid + "?_format=hal_json", data, {
            headers: this.headers
          });
        }
      }]);

      return PatientServicesService;
    }();

    PatientServicesService.ɵfac = function PatientServicesService_Factory(t) {
      return new (t || PatientServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PatientServicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PatientServicesService,
      factory: PatientServicesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientServicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/patient/patient-add-doctor/patient-add-doctor.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/patient/patient-add-doctor/patient-add-doctor.component.ts ***!
    \****************************************************************************/

  /*! exports provided: PatientAddDoctorComponent */

  /***/
  function srcAppPatientPatientAddDoctorPatientAddDoctorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientAddDoctorComponent", function () {
      return PatientAddDoctorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_patient_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/patient-services.service */
    "./src/app/patient-services.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function PatientAddDoctorComponent_div_8_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Doctor Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Added ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PatientAddDoctorComponent_div_8_option_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var me_r81 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", me_r81.tid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](me_r81.name);
      }
    }

    function PatientAddDoctorComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add Doctor ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PatientAddDoctorComponent_div_8_div_4_Template, 7, 0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enter Doctor Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 13, 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientAddDoctorComponent_div_8_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r82.dname1 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Select Marketing Executive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 16, 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientAddDoctorComponent_div_8_Template_select_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r84.me = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Select");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PatientAddDoctorComponent_div_8_option_19_Template, 2, 2, "option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientAddDoctorComponent_div_8_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

          var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r85.doctoradd(_r78, _r79);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

        var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r75.doctorsavedstatus);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r75.dname1)("disabled", ctx_r75.disablestatus);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r75.me);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r75.mes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r78.value && _r79.value ? false : true);
      }
    }

    function PatientAddDoctorComponent_div_9_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Medical Executive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Added ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PatientAddDoctorComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add Medical Executive ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PatientAddDoctorComponent_div_9_div_4_Template, 7, 0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enter Medical Executive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 13, 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientAddDoctorComponent_div_9_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r88.dname2 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientAddDoctorComponent_div_9_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

          var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r90.medicalexecutiveadd(_r87);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

        var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r76.mesavedstatus);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r76.dname2)("disabled", ctx_r76.disablestatus);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r87.value ? false : true);
      }
    }

    var PatientAddDoctorComponent = /*#__PURE__*/function () {
      function PatientAddDoctorComponent(_patientService) {
        _classCallCheck(this, PatientAddDoctorComponent);

        this._patientService = _patientService;
        this.doctorsavedstatus = false;
        this.showmedicalexecutive = false;
        this.showaddoctor = false;
        this.mesavedstatus = false;
        this.disablestatus = false;
      }

      _createClass(PatientAddDoctorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "doctoradd",
        value: function doctoradd(value1, value2) {
          var _this = this;

          this._patientService.addoctor(value1, value2).subscribe(function (data) {
            _this.purpose = data;

            if (_this.purpose) {
              _this.doctorsavedstatus = true;
              _this.mesavedstatus = false;
              _this.dname1 = '';
            }
          });
        }
      }, {
        key: "medicalexecutiveadd",
        value: function medicalexecutiveadd(value1) {
          var _this2 = this;

          console.log(value1.value);

          this._patientService.addME(value1).subscribe(function (data) {
            _this2.purpose = data;

            if (_this2.purpose) {
              _this2.doctorsavedstatus = false;
              _this2.mesavedstatus = true;
              _this2.dname2 = '';
            }
          });
        }
      }, {
        key: "addme",
        value: function addme() {
          this.showaddoctor = false;
          this.showmedicalexecutive = true;
        }
      }, {
        key: "adddoc",
        value: function adddoc() {
          var _this3 = this;

          this._patientService.getMElist().subscribe(function (data) {
            return _this3.mes = data;
          });

          this.showaddoctor = true;
          this.showmedicalexecutive = false;
        }
      }]);

      return PatientAddDoctorComponent;
    }();

    PatientAddDoctorComponent.ɵfac = function PatientAddDoctorComponent_Factory(t) {
      return new (t || PatientAddDoctorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_patient_services_service__WEBPACK_IMPORTED_MODULE_1__["PatientServicesService"]));
    };

    PatientAddDoctorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PatientAddDoctorComponent,
      selectors: [["app-patient-add-doctor"]],
      decls: 10,
      vars: 2,
      consts: [[1, "container", "mt-3"], [1, "row"], [1, "col", "text-center"], ["role", "group", 1, "btn-group"], ["type", "button", 1, "btn", "btn-secondary", "mr-2", "btn-info", 3, "click"], ["class", "card mt-3", 4, "ngIf"], [1, "card", "mt-3"], [1, "card-header"], [1, "card-body"], ["class", "alert mt-2 alert-success", "role", "alert", 4, "ngIf"], [1, "form-group"], [1, "col-md-5"], ["for", "exampleInputEmail1"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["dnamevalue1", ""], ["for", "exampleFormControlSelect1"], ["id", "exampleFormControlSelect1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mevalue", ""], ["value", "", "disabled", "", "selected", "selected"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-2", "mt-4"], ["type", "button", 1, "mt-2", "btn", "btn-primary", 3, "disabled", "click"], ["role", "alert", 1, "alert", "mt-2", "alert-success"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [3, "value"], [1, "col-md-10"], ["dnamevalue2", ""]],
      template: function PatientAddDoctorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientAddDoctorComponent_Template_button_click_4_listener() {
            return ctx.addme();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Add Medical Executive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientAddDoctorComponent_Template_button_click_6_listener() {
            return ctx.adddoc();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Doctor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PatientAddDoctorComponent_div_8_Template, 23, 6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PatientAddDoctorComponent_div_9_Template, 15, 4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showaddoctor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showmedicalexecutive);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQvcGF0aWVudC1hZGQtZG9jdG9yL3BhdGllbnQtYWRkLWRvY3Rvci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientAddDoctorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-patient-add-doctor',
          templateUrl: './patient-add-doctor.component.html',
          styleUrls: ['./patient-add-doctor.component.css']
        }]
      }], function () {
        return [{
          type: src_app_patient_services_service__WEBPACK_IMPORTED_MODULE_1__["PatientServicesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/patient/patient-appointment-add/patient-appointment-add.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/patient/patient-appointment-add/patient-appointment-add.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: PatientAppointmentAddComponent */

  /***/
  function srcAppPatientPatientAppointmentAddPatientAppointmentAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientAppointmentAddComponent", function () {
      return PatientAppointmentAddComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_patient_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/patient-services.service */
    "./src/app/patient-services.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_numbers_only_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/numbers-only.directive */
    "./src/app/patient/shared/numbers-only.directive.ts");

    function PatientAppointmentAddComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Registration ID ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PatientAppointmentAddComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientAppointmentAddComponent_div_11_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.enableupdate();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Update Phone Number/Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientAppointmentAddComponent_div_11_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36.enableappointment();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Sitting");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientAppointmentAddComponent_div_11_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.enableprescriptionupload();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add Prescription");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "text-danger": a0
      };
    };

    function PatientAppointmentAddComponent_form_12_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r38.formErrors.PatientAddress));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r38.formErrors.PatientAddress, " ");
      }
    }

    function PatientAppointmentAddComponent_form_12_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r39.formErrors.PatientContactNumber));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r39.formErrors.PatientContactNumber, " ");
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "border-danger": a0
      };
    };

    function PatientAppointmentAddComponent_form_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PatientAppointmentAddComponent_form_12_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r40.updatecontact();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Update Contact Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "textarea", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function PatientAppointmentAddComponent_form_12_Template_textarea_blur_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r42.logValidationErrors();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PatientAppointmentAddComponent_form_12_span_11_Template, 2, 4, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contact Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function PatientAppointmentAddComponent_form_12_Template_input_blur_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r43.logValidationErrors();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PatientAppointmentAddComponent_form_12_span_17_Template, 2, 4, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r31.addcontact);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r31.formErrors.PatientAddress));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.formErrors.PatientAddress);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx_r31.formErrors.PatientContactNumber));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.formErrors.PatientContactNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r31.addcontact.invalid);
      }
    }

    function PatientAppointmentAddComponent_form_13_option_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var branch_r50 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", branch_r50.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](branch_r50.name);
      }
    }

    function PatientAppointmentAddComponent_form_13_option_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var patientreferrer_r51 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", patientreferrer_r51.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", patientreferrer_r51.name, "");
      }
    }

    function PatientAppointmentAddComponent_form_13_option_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var department_r52 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", department_r52.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", department_r52.name, "");
      }
    }

    function PatientAppointmentAddComponent_form_13_div_32_option_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var purposes_r55 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", purposes_r55.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", purposes_r55.name, "");
      }
    }

    function PatientAppointmentAddComponent_form_13_div_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Purpose of Visit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 45, 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PatientAppointmentAddComponent_form_13_div_32_Template_select_change_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r56.changedpurpose(_r53.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PatientAppointmentAddComponent_form_13_div_32_option_8_Template, 2, 2, "option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r48.purpose);
      }
    }

    function PatientAppointmentAddComponent_form_13_div_33_option_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var treatments_r59 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", treatments_r59.field_treatment_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", treatments_r59.field_treatment_name, "");
      }
    }

    function PatientAppointmentAddComponent_form_13_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Treatment Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PatientAppointmentAddComponent_form_13_div_33_option_7_Template, 2, 2, "option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r49.treatment);
      }
    }

    function PatientAppointmentAddComponent_form_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PatientAppointmentAddComponent_form_13_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r60.updateappointment();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Patient Appointment Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Visiting Branch");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Select");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PatientAppointmentAddComponent_form_13_option_13_Template, 2, 2, "option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Patient Referred By");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Select");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PatientAppointmentAddComponent_form_13_option_21_Template, 2, 2, "option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Select Department");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 40, 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PatientAppointmentAddComponent_form_13_Template_select_change_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r62.changeddepartment(_r46);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Select");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PatientAppointmentAddComponent_form_13_option_31_Template, 2, 2, "option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PatientAppointmentAddComponent_form_13_div_32_Template, 9, 1, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PatientAppointmentAddComponent_form_13_div_33_Template, 8, 1, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r32.addappointment);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r32.branches);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r32.patientreferred);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r32.departments);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.showpurpose);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.showtreatmenttype);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r32.addappointment.invalid);
      }
    }

    function PatientAppointmentAddComponent_div_14_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Prescription already uploaded ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PatientAppointmentAddComponent_div_14_ng_template_4_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Prescription uploaded successfuly ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PatientAppointmentAddComponent_div_14_ng_template_4_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientAppointmentAddComponent_div_14_ng_template_4_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r68.submitpres(ctx_r68.image);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PatientAppointmentAddComponent_div_14_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PatientAppointmentAddComponent_div_14_ng_template_4_div_0_Template, 2, 0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PatientAppointmentAddComponent_div_14_ng_template_4_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r70.onFileSelected($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PatientAppointmentAddComponent_div_14_ng_template_4_button_2_Template, 2, 0, "button", 54);
      }

      if (rf & 2) {
        var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r65.prescription_upload_status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r65.uploadtype);
      }
    }

    function PatientAppointmentAddComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prescription Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PatientAppointmentAddComponent_div_14_div_3_Template, 3, 0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PatientAppointmentAddComponent_div_14_ng_template_4_Template, 3, 2, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.prescriptionstatus)("ngIfElse", _r64);
      }
    }

    var PatientAppointmentAddComponent = /*#__PURE__*/function () {
      function PatientAppointmentAddComponent(_patientService, fb, router) {
        _classCallCheck(this, PatientAppointmentAddComponent);

        this._patientService = _patientService;
        this.fb = fb;
        this.router = router;
        this.disablestatus = false;
        this.enablestatus = false;
        this.prescription_upload_status = false;
        this.showappointment = false;
        this.showdetailsupdate = false;
        this.formErrors = {
          'PatientAddress': '',
          'PatientContactNumber': ''
        }; // This object contains all the validation messages for this form

        this.validationMessages = {
          'PatientAddress': {
            'required': 'Patient Address is required.'
          },
          'PatientContactNumber': {
            'required': 'Patient Contact Number is required.'
          }
        };
      }

      _createClass(PatientAppointmentAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.addappointment = this.fb.group({
            // PatientAppointmentDate: [''],
            VisitingBranch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PatientReferredBy: [''],
            SelectDepartment: [''],
            PurposeofVisit: [''],
            TreatmentType: ['']
          });
          this.addcontact = this.fb.group({
            PatientAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PatientContactNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.addprescription = this.fb.group({});

          this._patientService.getBranch().subscribe(function (data) {
            return _this4.branches = data;
          });

          this._patientService.getPatientReferred().subscribe(function (data) {
            return _this4.patientreferred = data;
          });

          this._patientService.getDepartments().subscribe(function (data) {
            return _this4.departments = data;
          });

          this._patientService.getpurpose().subscribe(function (data) {
            return _this4.purpose = data;
          });
        }
      }, {
        key: "updatecontact",
        value: function updatecontact() {
          console.log(this.addcontact.getRawValue().PatientAddress);

          this._patientService.updatepatientdetails(this.checkuser[0].uid, this.addcontact.getRawValue().PatientContactNumber, this.addcontact.getRawValue().PatientAddress).subscribe(function (data) {
            return console.log(data);
          });
        }
      }, {
        key: "updateappointment",
        value: function updateappointment() {
          console.log(this.addappointment.getRawValue());

          this._patientService.createanotherappointment(this.addappointment.getRawValue(), this.checkuser).subscribe(function (data) {
            return console.log(data);
          });
        }
      }, {
        key: "changedpurpose",
        value: function changedpurpose(value) {
          console.log(value);
          this.selectedpurpose = value;

          if (value == 'Treatment') {
            this.showtreatmenttype = true;
          } else {
            this.showtreatmenttype = false;
            this.addappointment.patchValue({
              TreatmentType: ''
            });
          }
        }
      }, {
        key: "onFileSelected",
        value: function onFileSelected($event) {
          this.readThis($event.target);
        }
      }, {
        key: "readThis",
        value: function readThis(inputValue) {
          var _this5 = this;

          var file = inputValue.files[0];
          var myReader = new FileReader();

          myReader.onloadend = function (e) {
            _this5.uploadtype = file;
            _this5.image = myReader.result.split('base64,')[1]; // this.image=this.image.replace(new RegExp('.*' + Y), '')
          };

          myReader.readAsDataURL(file);
        }
      }, {
        key: "submitpres",
        value: function submitpres(value) {
          var _this6 = this;

          console.log(this.uploadtype.name);

          this._patientService.uploadprescription(this.uploadtype.name, value, this.uploadtype.type).subscribe(function (data) {
            if (data) {
              _this6._patientService.attachprescription(data, _this6.registrationvalue, _this6.nodeid).subscribe(function (data) {
                if (data) {
                  _this6.prescription_upload_status = true;
                  setTimeout(function () {
                    _this6.router.navigate(['/search']);
                  }, 3000);
                }
              });
            }
          });
        }
      }, {
        key: "logValidationErrors",
        value: function logValidationErrors() {
          var _this7 = this;

          var group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.addcontact;
          // loop through each key in the FormGroup
          Object.keys(group.controls).forEach(function (key) {
            // Get a reference to the control using the FormGroup.get() method
            var abstractControl = group.get(key); // If the control is an instance of FormGroup i.e a nested FormGroup
            // then recursively call this same method (logKeyValuePairs) passing it
            // the FormGroup so we can get to the form controls in it

            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
              _this7.logValidationErrors(abstractControl); // If the control is not a FormGroup then we know it's a FormControl

            } else {
              // console.log('Key = ' + key + ' && Value = ' + abstractControl.value);
              // abstractControl.disable();
              _this7.formErrors[key] = '';

              if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
                // Get all the validation messages of the form control
                // that has failed the validation
                var messages = _this7.validationMessages[key]; // Find which validation has failed. For example required,
                // minlength or maxlength. Store that error message in the
                // formErrors object. The UI will bind to this object to
                // display the validation errors

                for (var errorKey in abstractControl.errors) {
                  if (errorKey) {
                    _this7.formErrors[key] += messages[errorKey] + ' ';
                  }
                }
              }
            }
          });
        }
      }, {
        key: "changeddepartment",
        value: function changeddepartment(value) {
          var _this8 = this;

          this.selecteddepartments = value.value;
          console.log(this.selecteddepartments);

          if (value) {
            this.showpurpose = true;

            this._patientService.gettreatmentype(this.selecteddepartments).subscribe(function (data) {
              return _this8.treatment = data;
            });
          }
        }
      }, {
        key: "enableappointment",
        value: function enableappointment() {
          this.showappointment = true;
          this.showdetailsupdate = false;
          this.showprescription = false;
        }
      }, {
        key: "enableupdate",
        value: function enableupdate() {
          this.showappointment = false;
          this.showdetailsupdate = true;
          this.showprescription = false;
        }
      }, {
        key: "enableprescriptionupload",
        value: function enableprescriptionupload() {
          var _this9 = this;

          this._patientService.checkprescription(this.registrationvalue).subscribe(function (data) {
            _this9.prescriptionstatus = data[0].field_patient_prescription;
            _this9.nodeid = data[0].nid;
          });

          this.showappointment = false;
          this.showdetailsupdate = false;
          this.showprescription = true;
        }
      }, {
        key: "patientValidate",
        value: function patientValidate(regvalue) {
          var _this10 = this;

          this.registrationvalue = regvalue;

          this._patientService.validateuser(regvalue).subscribe(function (data) {
            if (data) {
              _this10.checkuser = data;
              console.log(_this10.checkuser);
            }

            if (Object.keys(_this10.checkuser).length == 1) {
              _this10.disablestatus = true;
              _this10.enablestatus = false;
            } else {
              _this10.enablestatus = true;
            }
          });
        }
      }]);

      return PatientAppointmentAddComponent;
    }();

    PatientAppointmentAddComponent.ɵfac = function PatientAppointmentAddComponent_Factory(t) {
      return new (t || PatientAppointmentAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_patient_services_service__WEBPACK_IMPORTED_MODULE_2__["PatientServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    PatientAppointmentAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PatientAppointmentAddComponent,
      selectors: [["app-patient-appointment-add"]],
      decls: 15,
      vars: 7,
      consts: [["class", "alert mt-2 alert-danger", "role", "alert", 4, "ngIf"], [1, "form-group"], [1, "row"], [1, "col-md-10"], ["for", "exampleInputEmail1"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control", 3, "disabled"], ["regvalue", ""], [1, "col-md-2", "mt-4"], ["type", "button", 1, "mt-2", "btn", "btn-primary", 3, "disabled", "click"], ["class", "container", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "card mt-2", 4, "ngIf"], ["role", "alert", 1, "alert", "mt-2", "alert-danger"], [1, "container"], [1, "col", "text-center"], ["role", "group", 1, "btn-group"], ["type", "button", 1, "btn", "btn-secondary", "mr-2", "btn-info", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "btn-info", 3, "click"], [3, "formGroup", "ngSubmit"], [1, "card", "mt-2"], [1, "card-header"], [1, "card-title"], [1, "col-md"], [1, "form-group", "mx-3"], ["for", "PatientAddress"], ["formControlName", "PatientAddress", "id", "PatientAddress", "rows", "3", 1, "form-control", 3, "ngClass", "blur"], [3, "ngClass", 4, "ngIf"], ["for", "PatientContactNumber"], ["type", "text", "formControlName", "PatientContactNumber", "numbersOnly", "", "id", "PatientContactNumber", "placeholder", "Enter Patient Contact Number", 1, "form-control", 3, "ngClass", "blur"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "ngClass"], [1, "form-group", "mx-3", "mt-2"], ["for", "VisitingBranch"], ["formControlName", "VisitingBranch", "id", "VisitingBranch", 1, "form-control"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "PatientReferredBy"], ["formControlName", "PatientReferredBy", "id", "PatientReferredBy", 1, "form-control"], [1, "col-md-4"], ["for", "SelectDepartment"], ["formControlName", "SelectDepartment", "id", "SelectDepartment", 1, "form-control", 3, "change"], ["dvalue", ""], ["class", "col-md-4", 4, "ngIf"], [3, "value"], ["for", "PurposeofVisit"], ["formControlName", "PurposeofVisit", "id", "PurposeofVisit", 1, "form-control", 3, "change"], ["pvalue", ""], ["for", "TreatmentType"], ["multiple", "", "formControlName", "TreatmentType", "id", "TreatmentType", 1, "form-control"], ["class", "card-body", 4, "ngIf", "ngIfElse"], ["notShow", ""], [1, "card-body"], ["class", "alert alert-success", 4, "ngIf"], ["type", "file", "name", "", "id", "", "required", "", "accept", "application/pdf, image/jpeg", 3, "change"], ["class", "btn btn-primary mx-auto", 3, "click", 4, "ngIf"], [1, "alert", "alert-success"], [1, "btn", "btn-primary", "mx-auto", 3, "click"]],
      template: function PatientAppointmentAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PatientAppointmentAddComponent_div_0_Template, 4, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Enter Registration ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientAppointmentAddComponent_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

            var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            return ctx.patientValidate(_r29.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Validate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PatientAppointmentAddComponent_div_11_Template, 10, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PatientAppointmentAddComponent_form_12_Template, 21, 10, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PatientAppointmentAddComponent_form_13_Template, 37, 7, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PatientAppointmentAddComponent_div_14_Template, 6, 2, "div", 11);
        }

        if (rf & 2) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enablestatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disablestatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r29.value ? false : true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.disablestatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showdetailsupdate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showappointment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showprescription);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _shared_numbers_only_directive__WEBPACK_IMPORTED_MODULE_5__["NumberDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectMultipleControlValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQvcGF0aWVudC1hcHBvaW50bWVudC1hZGQvcGF0aWVudC1hcHBvaW50bWVudC1hZGQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientAppointmentAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-patient-appointment-add',
          templateUrl: './patient-appointment-add.component.html',
          styleUrls: ['./patient-appointment-add.component.css']
        }]
      }], function () {
        return [{
          type: src_app_patient_services_service__WEBPACK_IMPORTED_MODULE_2__["PatientServicesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/patient/patient-registration/patient-registration.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/patient/patient-registration/patient-registration.component.ts ***!
    \********************************************************************************/

  /*! exports provided: PatientRegistrationComponent */

  /***/
  function srcAppPatientPatientRegistrationPatientRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientRegistrationComponent", function () {
      return PatientRegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_patient_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/patient-services.service */
    "./src/app/patient-services.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_numbers_only_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/numbers-only.directive */
    "./src/app/patient/shared/numbers-only.directive.ts");

    function PatientRegistrationComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Patient Details saved");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "text-danger": a0
      };
    };

    function PatientRegistrationComponent_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r1.formErrors.PatientName));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.formErrors.PatientName, " ");
      }
    }

    function PatientRegistrationComponent_span_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r2.formErrors.PatientAge));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.formErrors.PatientAge, " ");
      }
    }

    function PatientRegistrationComponent_span_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r3.formErrors.PatientAddress));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.formErrors.PatientAddress, " ");
      }
    }

    function PatientRegistrationComponent_div_115_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PatientRegistrationComponent_option_130_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var branch_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", branch_r14.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](branch_r14.name);
      }
    }

    function PatientRegistrationComponent_span_131_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r6.formErrors.VisitingBranch));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.formErrors.VisitingBranch, " ");
      }
    }

    function PatientRegistrationComponent_option_139_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var patientreferrer_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", patientreferrer_r15.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", patientreferrer_r15.name, "");
      }
    }

    function PatientRegistrationComponent_span_140_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r8.formErrors.PatientReferredBy));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.formErrors.PatientReferredBy, " ");
      }
    }

    function PatientRegistrationComponent_option_149_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var department_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", department_r16.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", department_r16.name, "");
      }
    }

    function PatientRegistrationComponent_span_150_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r11.formErrors.SelectDepartment));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.formErrors.SelectDepartment, " ");
      }
    }

    function PatientRegistrationComponent_div_152_option_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var purposes_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", purposes_r19.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", purposes_r19.name, "");
      }
    }

    function PatientRegistrationComponent_div_152_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Purpose of Visit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 89, 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PatientRegistrationComponent_div_152_Template_select_change_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.changedpurpose(_r17.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PatientRegistrationComponent_div_152_option_8_Template, 2, 2, "option", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.purpose);
      }
    }

    function PatientRegistrationComponent_div_153_option_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var treatments_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", treatments_r24.field_treatment_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", treatments_r24.field_treatment_name, "");
      }
    }

    function PatientRegistrationComponent_div_153_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Treatment Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 92, 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PatientRegistrationComponent_div_153_Template_select_change_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.treatmentype(_r22.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PatientRegistrationComponent_div_153_option_8_Template, 2, 2, "option", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.treatment);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "border-danger": a0
      };
    };

    var PatientRegistrationComponent = /*#__PURE__*/function () {
      function PatientRegistrationComponent(fb, datepipe, _patientService, router) {
        _classCallCheck(this, PatientRegistrationComponent);

        this.fb = fb;
        this.datepipe = datepipe;
        this._patientService = _patientService;
        this.router = router;
        this.showpurpose = false;
        this.showtreatmenttype = false;
        this.showothersreason = false;
        this.patientsavedstatus = false;
        this.formErrors = {
          'PatientName': '',
          'PatientAge': '',
          'PatientAddress': '',
          'PatientClinicSource': '',
          'VisitingBranch': '',
          'PatientReferredBy': '',
          'SelectDepartment': '',
          'PurposeofVisit': ''
        }; // This object contains all the validation messages for this form

        this.validationMessages = {
          'PatientName': {
            'required': 'Patient Name is required.',
            'maxlength': 'Patient Name must be less than 20 characters.'
          },
          'PatientAge': {
            'required': 'Patient Age is required.'
          },
          'PatientAddress': {
            'required': 'Patient Address is required.'
          },
          'PatientClinicSource': {
            'required': 'Patient Clinic Source is required.'
          },
          'VisitingBranch': {
            'required': 'Visiting Branch is required.'
          },
          'PatientReferredBy': {
            'required': 'Patient ReferredBy is required.'
          },
          'SelectDepartment': {
            'required': 'Department is required.'
          },
          'PurposeofVisit': {
            'required': 'Purpose of Visit is required.'
          }
        };
      }

      _createClass(PatientRegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this._patientService.getBranch().subscribe(function (data) {
            return _this11.branches = data;
          });

          this._patientService.getPatientReferred().subscribe(function (data) {
            return _this11.patientreferred = data;
          });

          this._patientService.getDepartments().subscribe(function (data) {
            return _this11.departments = data;
          });

          this._patientService.getpurpose().subscribe(function (data) {
            return _this11.purpose = data;
          });

          this.currentDate = new Date();
          var latest_date = this.datepipe.transform(this.currentDate, 'ddMMyyyyhmmss');
          latest_date = 'REG' + latest_date;
          this.patientForm = this.fb.group({
            PatientRegistration: [{
              value: latest_date,
              disabled: true
            }],
            PatientName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PatientContactNumber: [''],
            PatientAge: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PatientGender: ['Male'],
            PatientReferredPrescription: [''],
            PatientAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PatientClinicSource: this.fb.group({
              Doctor: [''],
              Hospital: [''],
              NursingHome: [''],
              Polyclinic: [''],
              MedicineShop: [''],
              RelativeFriend: [''],
              ClinicSignBoard: [''],
              FlexBanner: [''],
              LeafletFlyers: [''],
              Newspaper: [''],
              ElectronicMedia: [''],
              Website: [''],
              Facebook: [''],
              SocialMedia: [''],
              Others: [''],
              othersreason: ['']
            }),
            VisitingBranch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PatientReferredBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            SelectDepartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PurposeofVisit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            TreatmentType: ['']
          });
        }
      }, {
        key: "loadvalues",
        value: function loadvalues() {
          this.logValidationErrors(this.patientForm);
          console.log(this.formErrors);
        }
      }, {
        key: "treatmentype",
        value: function treatmentype(value) {
          console.log(value);
        }
      }, {
        key: "changedpurpose",
        value: function changedpurpose(value) {
          console.log(value);
          this.selectedpurpose = value;

          if (value == 'Treatment') {
            this.showtreatmenttype = true;
          } else {
            this.showtreatmenttype = false;
            this.patientForm.patchValue({
              TreatmentType: ''
            });
          }
        }
      }, {
        key: "changeddepartment",
        value: function changeddepartment(value) {
          var _this12 = this;

          this.selecteddepartments = value.value;
          console.log(this.selecteddepartments);

          if (value) {
            this.showpurpose = true;

            this._patientService.gettreatmentype(this.selecteddepartments).subscribe(function (data) {
              return _this12.treatment = data;
            });
          }
        }
      }, {
        key: "showothersreasonbox",
        value: function showothersreasonbox() {
          this.showothersreason = !this.showothersreason;
        }
      }, {
        key: "logValidationErrors",
        value: function logValidationErrors() {
          var _this13 = this;

          var group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.patientForm;
          // loop through each key in the FormGroup
          Object.keys(group.controls).forEach(function (key) {
            // Get a reference to the control using the FormGroup.get() method
            var abstractControl = group.get(key); // If the control is an instance of FormGroup i.e a nested FormGroup
            // then recursively call this same method (logKeyValuePairs) passing it
            // the FormGroup so we can get to the form controls in it

            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
              _this13.logValidationErrors(abstractControl); // If the control is not a FormGroup then we know it's a FormControl

            } else {
              // console.log('Key = ' + key + ' && Value = ' + abstractControl.value);
              // abstractControl.disable();
              _this13.formErrors[key] = '';

              if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
                // Get all the validation messages of the form control
                // that has failed the validation
                var messages = _this13.validationMessages[key]; // Find which validation has failed. For example required,
                // minlength or maxlength. Store that error message in the
                // formErrors object. The UI will bind to this object to
                // display the validation errors

                for (var errorKey in abstractControl.errors) {
                  if (errorKey) {
                    _this13.formErrors[key] += messages[errorKey] + ' ';
                  }
                }
              }
            }
          });
        }
      }, {
        key: "onFileSelected",
        value: function onFileSelected($event) {
          this.readThis($event.target);
        }
      }, {
        key: "readThis",
        value: function readThis(inputValue) {
          var _this14 = this;

          var file = inputValue.files[0];
          var myReader = new FileReader();

          myReader.onloadend = function (e) {
            _this14.uploadtype = file;
            _this14.image = myReader.result.split('base64,')[1];
            console.log(_this14.image); // this.image=this.image.replace(new RegExp('.*' + Y), '')
          };

          myReader.readAsDataURL(file);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.patientForm.getRawValue().PatientReferredPrescription);

          this._patientService.uploadprescription(this.uploadtype.name, this.image, this.uploadtype.type).subscribe(function (data) {
            return console.log(data);
          }); //     this._patientService.createpatient(this.patientForm.getRawValue())
          //       .subscribe(data => {
          //         this.createpatientresult = data;
          //         console.log(this.createpatientresult);
          //         setTimeout(()=>{  
          //           this._patientService.createpatientappointment(this.patientForm.getRawValue(),this.createpatientresult)
          //           .subscribe(data => console.log(this.createpatientresult));
          //           this.patientsavedstatus=true;
          //      }, 1000);
          //      setTimeout(()=>{  
          //       this.router.navigate(['/search']);
          //  }, 2000);
          //       });

        }
      }]);

      return PatientRegistrationComponent;
    }();

    PatientRegistrationComponent.ɵfac = function PatientRegistrationComponent_Factory(t) {
      return new (t || PatientRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_patient_services_service__WEBPACK_IMPORTED_MODULE_3__["PatientServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    PatientRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PatientRegistrationComponent,
      selectors: [["app-patient-registration"]],
      decls: 159,
      vars: 33,
      consts: [[1, "container-fluid"], [3, "formGroup", "ngSubmit"], [1, "card", "mt-2"], [1, "card-header"], [1, "card-title"], ["class", "alert alert-success mt-2 mb-1 mx-2 fade show", "role", "alert", 4, "ngIf"], [1, "form-group", "mx-3"], ["for", "regnum"], ["type", "text", "formControlName", "PatientRegistration", "id", "regnum", "aria-describedby", "regnum", 1, "form-control"], ["for", "patientname"], ["type", "text", "formControlName", "PatientName", "id", "patientname", "placeholder", "Enter Patient Name", 1, "form-control", 3, "ngClass", "blur"], [3, "ngClass", 4, "ngIf"], [1, "row"], [1, "col-md"], ["for", "PatientContactNumber"], ["type", "text", "formControlName", "PatientContactNumber", "id", "PatientContactNumber", "placeholder", "Enter Patient Contact Number", 1, "form-control", 3, "blur"], ["for", "PatientAge"], ["type", "text", "numbersOnly", "", "formControlName", "PatientAge", "id", "PatientAge", "placeholder", "Enter Patient Age", 1, "form-control", 3, "ngClass", "blur"], [1, "form-group", "mx-3", "form-inline"], [1, "col-form-label"], [1, "form-check", "form-check-inline"], ["formControlName", "PatientGender", "type", "radio", "name", "PatientGender", "id", "exampleRadios1", "value", "Male", "checked", "", 1, "form-check-input"], ["for", "exampleRadios1", 1, "form-check-label"], ["formControlName", "PatientGender", "type", "radio", "name", "PatientGender", "id", "exampleRadios2", "value", "Female ", 1, "form-check-input"], ["for", "exampleRadios2", 1, "form-check-label"], [1, "col-md-8"], ["for", "PatientAddress"], ["formControlName", "PatientAddress", "id", "PatientAddress", "rows", "3", 1, "form-control", 3, "ngClass", "blur"], [1, "col-md-4", "mt-2"], [1, "form-group"], ["for", "exampleFormControlFile1"], ["type", "file", "formControlName", "PatientReferredPrescription", "id", "exampleFormControlFile1", 1, "mt-2", "form-control-file", 3, "change"], ["formGroupName", "PatientClinicSource", 1, "form-inline"], [1, "mx-3"], [1, "form-check", "form-check-inline", "ml-3"], ["formControlName", "Doctor", "type", "checkbox", "id", "advertisement", "value", "option1", 1, "form-check-input"], ["for", "Doctor", 1, "form-check-label"], ["formControlName", "Hospital", "type", "checkbox", "id", "Hospital", "value", "option2", 1, "form-check-input"], ["for", "Hospital", 1, "form-check-label"], ["formControlName", "NursingHome", "type", "checkbox", "id", "others", "value", "option3", 1, "form-check-input"], ["for", "others", 1, "form-check-label"], ["formControlName", "Polyclinic", "type", "checkbox", "id", "others", "value", "option3", 1, "form-check-input"], ["for", "Polyclinic", 1, "form-check-label"], ["formControlName", "MedicineShop", "type", "checkbox", "id", "others", "value", "option3", 1, "form-check-input"], ["for", "Medicine Shop", 1, "form-check-label"], ["formControlName", "RelativeFriend", "type", "checkbox", "id", "others", "value", "option3", 1, "form-check-input"], ["for", "RelativeFriend", 1, "form-check-label"], ["formControlName", "ClinicSignBoard", "type", "checkbox", "id", "others", "value", "option3", 1, "form-check-input"], ["for", "Clinic SignBoard", 1, "form-check-label"], ["formControlName", "FlexBanner", "type", "checkbox", "id", "others", "value", "option3", 1, "form-check-input"], ["for", "Flex/Banner", 1, "form-check-label"], ["formControlName", "LeafletFlyers", "type", "checkbox", "id", "others", "value", "option3", 1, "form-check-input"], ["for", "Leaflet/Flyers", 1, "form-check-label"], ["formControlName", "Newspaper", "type", "checkbox", "id", "others", "value", "option3", 1, "form-check-input"], ["for", "Newspaper", 1, "form-check-label"], ["formControlName", "ElectronicMedia", "type", "checkbox", "id", "others", "value", "option3", 1, "form-check-input"], ["for", "Electronic Media", 1, "form-check-label"], ["formControlName", "Website", "type", "checkbox", "id", "others", "value", "option3", 1, "form-check-input"], ["for", "Website", 1, "form-check-label"], ["formControlName", "Facebook", "type", "checkbox", "id", "others", "value", "option3", 1, "form-check-input"], ["for", "Facebook", 1, "form-check-label"], ["formControlName", "SocialMedia", "type", "checkbox", "id", "others", "value", "option3", 1, "form-check-input"], ["for", "SocialMedia", 1, "form-check-label"], ["formControlName", "Others", "type", "checkbox", "id", "others", "value", "option3", 1, "form-check-input", 3, "change"], ["for", "Others", 1, "form-check-label"], ["class", "form-group ml-3 mb-2", 4, "ngIf"], [1, "form-group", "mx-3", "mt-2"], ["for", "VisitingBranch"], ["formControlName", "VisitingBranch", "id", "VisitingBranch", 1, "form-control", 3, "ngClass", "blur"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "PatientReferredBy"], ["formControlName", "PatientReferredBy", "id", "PatientReferredBy", 1, "form-control", 3, "ngClass", "blur"], ["for", "SelectDepartment"], ["formControlName", "SelectDepartment", "id", "SelectDepartment", 1, "form-control", 3, "ngClass", "blur", "change"], ["dvalue", ""], ["class", "col-md-4", 4, "ngIf"], [1, "col-md-10"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal", 1, "ml-2", "btn", "btn-info", 3, "click"], ["role", "alert", 1, "alert", "alert-success", "mt-2", "mb-1", "mx-2", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [3, "ngClass"], [1, "form-group", "ml-3", "mb-2"], ["formControlName", "othersreason", "type", "text", "id", "others", "value", "option3", 1, "form-control"], [3, "value"], [1, "col-md-4"], ["for", "PurposeofVisit"], ["formControlName", "PurposeofVisit", "id", "PurposeofVisit", 1, "form-control", 3, "change"], ["pvalue", ""], ["for", "TreatmentType<"], ["formControlName", "TreatmentType", "multiple", "", "id", "TreatmentType", 1, "form-control", 3, "change"]],
      template: function PatientRegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PatientRegistrationComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Patient Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PatientRegistrationComponent_div_6_Template, 6, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Registration Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function PatientRegistrationComponent_Template_input_blur_14_listener() {
            return ctx.logValidationErrors();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PatientRegistrationComponent_span_15_Template, 2, 4, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function PatientRegistrationComponent_Template_input_blur_21_listener() {
            return ctx.logValidationErrors();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function PatientRegistrationComponent_Template_input_blur_26_listener() {
            return ctx.logValidationErrors();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PatientRegistrationComponent_span_27_Template, 2, 4, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "legend", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Male ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Female ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "textarea", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function PatientRegistrationComponent_Template_textarea_blur_45_listener() {
            return ctx.logValidationErrors();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, PatientRegistrationComponent_span_46_Template, 2, 4, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Patient Referred Prescription");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PatientRegistrationComponent_Template_input_change_51_listener($event) {
            return ctx.onFileSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Clinic Source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Doctor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Hospital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Nursing Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Polyclinic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Medicine Shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Relative/Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Clinic SignBoard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Flex/Banner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Leaflet/Flyers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Newspaper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Electronic Media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Website");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "label", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Social Media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PatientRegistrationComponent_Template_input_change_112_listener() {
            return ctx.showothersreasonbox;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "label", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Others");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, PatientRegistrationComponent_div_115_Template, 2, 0, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Patient Appointment Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Visiting Branch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "select", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function PatientRegistrationComponent_Template_select_blur_127_listener() {
            return ctx.logValidationErrors();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "option", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, PatientRegistrationComponent_option_130_Template, 2, 2, "option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, PatientRegistrationComponent_span_131_Template, 2, 4, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Patient Referred By");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "select", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function PatientRegistrationComponent_Template_select_blur_136_listener() {
            return ctx.logValidationErrors();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "option", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](139, PatientRegistrationComponent_option_139_Template, 2, 2, "option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](140, PatientRegistrationComponent_span_140_Template, 2, 4, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "label", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Select Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "select", 74, 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function PatientRegistrationComponent_Template_select_blur_145_listener() {
            return ctx.logValidationErrors();
          })("change", function PatientRegistrationComponent_Template_select_change_145_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](146);

            return ctx.changeddepartment(_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "option", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](149, PatientRegistrationComponent_option_149_Template, 2, 2, "option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](150, PatientRegistrationComponent_span_150_Template, 2, 4, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](152, PatientRegistrationComponent_div_152_Template, 9, 1, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](153, PatientRegistrationComponent_div_153_Template, 9, 1, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "button", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "button", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientRegistrationComponent_Template_button_click_157_listener() {
            return ctx.loadvalues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Load Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.patientForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.patientsavedstatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, ctx.formErrors.PatientName));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.PatientName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, ctx.formErrors.PatientAge));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.PatientAge);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c1, ctx.formErrors.PatientAddress));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.PatientAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showothersreason);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c1, ctx.formErrors.VisitingBranch));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branches);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.VisitingBranch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c1, ctx.formErrors.PatientReferredBy));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.patientreferred);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.PatientReferredBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c1, ctx.formErrors.SelectDepartment));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.departments);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.SelectDepartment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showpurpose);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showtreatmenttype);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.patientForm.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _shared_numbers_only_directive__WEBPACK_IMPORTED_MODULE_5__["NumberDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectMultipleControlValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQvcGF0aWVudC1yZWdpc3RyYXRpb24vcGF0aWVudC1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientRegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-patient-registration',
          templateUrl: './patient-registration.component.html',
          styleUrls: ['./patient-registration.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
        }, {
          type: src_app_patient_services_service__WEBPACK_IMPORTED_MODULE_3__["PatientServicesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/patient/patient-search/patient-search.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/patient/patient-search/patient-search.component.ts ***!
    \********************************************************************/

  /*! exports provided: PatientSearchComponent */

  /***/
  function srcAppPatientPatientSearchPatientSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientSearchComponent", function () {
      return PatientSearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_patient_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/patient-services.service */
    "./src/app/patient-services.service.ts");

    var PatientSearchComponent = /*#__PURE__*/function () {
      function PatientSearchComponent(_patientService) {
        _classCallCheck(this, PatientSearchComponent);

        this._patientService = _patientService;
      }

      _createClass(PatientSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "patientValidate",
        value: function patientValidate(regvalue) {
          var _this15 = this;

          this.registrationvalue = regvalue;

          this._patientService.validateuser(regvalue).subscribe(function (data) {
            if (data) {
              _this15.checkuser = data;
              console.log(_this15.checkuser);
            }

            if (Object.keys(_this15.checkuser).length == 1) {
              _this15.disablestatus = true;
              _this15.enablestatus = false;
            } else {
              _this15.enablestatus = true;
            }
          });
        }
      }]);

      return PatientSearchComponent;
    }();

    PatientSearchComponent.ɵfac = function PatientSearchComponent_Factory(t) {
      return new (t || PatientSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_patient_services_service__WEBPACK_IMPORTED_MODULE_1__["PatientServicesService"]));
    };

    PatientSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PatientSearchComponent,
      selectors: [["app-patient-search"]],
      decls: 10,
      vars: 2,
      consts: [[1, "form-group"], [1, "row"], [1, "col-md-10"], ["for", "exampleInputEmail1"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control", 3, "disabled"], ["regvalue", ""], [1, "col-md-2", "mt-4"], ["type", "button", 1, "mt-2", "btn", "btn-primary", 3, "disabled", "click"]],
      template: function PatientSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter Patient ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientSearchComponent_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

            var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            return ctx.patientValidate(_r73.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Validate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disablestatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r73.value ? false : true);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQvcGF0aWVudC1zZWFyY2gvcGF0aWVudC1zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-patient-search',
          templateUrl: './patient-search.component.html',
          styleUrls: ['./patient-search.component.css']
        }]
      }], function () {
        return [{
          type: src_app_patient_services_service__WEBPACK_IMPORTED_MODULE_1__["PatientServicesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/patient/shared/numbers-only.directive.ts":
  /*!**********************************************************!*\
    !*** ./src/app/patient/shared/numbers-only.directive.ts ***!
    \**********************************************************/

  /*! exports provided: NumberDirective */

  /***/
  function srcAppPatientSharedNumbersOnlyDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberDirective", function () {
      return NumberDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NumberDirective = /*#__PURE__*/function () {
      function NumberDirective(_el) {
        _classCallCheck(this, NumberDirective);

        this._el = _el;
      }

      _createClass(NumberDirective, [{
        key: "onInputChange",
        value: function onInputChange(event) {
          var initalValue = this._el.nativeElement.value;
          this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');

          if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
          }
        }
      }]);

      return NumberDirective;
    }();

    NumberDirective.ɵfac = function NumberDirective_Factory(t) {
      return new (t || NumberDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    NumberDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NumberDirective,
      selectors: [["input", "numbersOnly", ""]],
      hostBindings: function NumberDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NumberDirective_input_HostBindingHandler($event) {
            return ctx.onInputChange($event);
          });
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'input[numbersOnly]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        onInputChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['input', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\patient\patient-services\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map