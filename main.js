"use strict";
(self["webpackChunkangular_mydatepicker_example"] = self["webpackChunkangular_mydatepicker_example"] || []).push([["main"],{

/***/ 1893:
/*!**************************************!*\
  !*** ./example/app/app.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _date_picker_ngmodel_date_picker_ngmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-picker-ngmodel/date-picker-ngmodel */ 7481);
/* harmony import */ var _date_picker_reactive_forms_date_picker_reactive_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-picker-reactive-forms/date-picker-reactive-forms */ 1076);
/* harmony import */ var _date_picker_div_host_element_date_picker_div_host_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-picker-div-host-element/date-picker-div-host-element */ 7649);
/* harmony import */ var _date_picker_inline_date_picker_inline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-picker-inline/date-picker-inline */ 6085);





class AppComponent {
  constructor() {
    console.log('constructor: AppComponent()');
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 29,
  vars: 0,
  consts: [[1, "maintitle"], [1, "pagecontent"], [1, "normalmode"], [1, "flexcontainer"], [1, "flexitem"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "angular-mydatepicker");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1)(4, "div")(5, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "ngModel example");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 2)(8, "date-picker-ngmodel");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "loading...");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 3)(11, "div", 4)(12, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Reactive forms example");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 2)(15, "date-picker-reactive-forms");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "loading...");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 4)(18, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Div host element example");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 2)(21, "date-picker-div-host-element");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "loading...");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 4)(24, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Inline example");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 2)(27, "date-picker-inline");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "loading...");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_date_picker_ngmodel_date_picker_ngmodel__WEBPACK_IMPORTED_MODULE_0__.DatePickerNgmodel, _date_picker_reactive_forms_date_picker_reactive_forms__WEBPACK_IMPORTED_MODULE_1__.DatePickerReactiveForms, _date_picker_div_host_element_date_picker_div_host_element__WEBPACK_IMPORTED_MODULE_2__.DatePickerDivHostElement, _date_picker_inline_date_picker_inline__WEBPACK_IMPORTED_MODULE_3__.DatePickerInline],
  styles: [".pagecontent[_ngcontent-%COMP%] {\n  margin: 20px 200px;\n}\n\n.maintitle[_ngcontent-%COMP%] {\n  background-color: #EEE;\n  height: 180px;\n  border-bottom: 1px solid #CCC;\n  background: linear-gradient(to right, rgba(44,83,158,1) 0%,rgba(44,83,158,1) 100%);\n  text-align: center;\n}\n\n.maintitle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #FFF;\n  font-size: 46px;\n  font-weight: bold;\n  line-height: 180px;\n}\n\n.maintext[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.normalmode[_ngcontent-%COMP%] {\n  margin-bottom: 280px;\n}\n\n.inlinemode[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.flexcontainer[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.flexitem[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\n@media screen and (max-width: 1200px) {\n  .pagecontent[_ngcontent-%COMP%] {\n    margin: 20px 10px;\n  }\n}\n\n@media screen and (max-width: 1000px) {\n  .flexcontainer[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .flexitem[_ngcontent-%COMP%] {\n    width: 50%;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2V4YW1wbGUvYXBwL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isa0ZBQWtGO0VBQ2xGLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGNBQWM7RUFDaEI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlY29udGVudCB7XG4gIG1hcmdpbjogMjBweCAyMDBweDtcbn1cblxuLm1haW50aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gIGhlaWdodDogMTgwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoNDQsODMsMTU4LDEpIDAlLHJnYmEoNDQsODMsMTU4LDEpIDEwMCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYWludGl0bGUgZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiA0NnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDE4MHB4O1xufVxuXG4ubWFpbnRleHQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubm9ybWFsbW9kZSB7XG4gIG1hcmdpbi1ib3R0b206IDI4MHB4O1xufVxuXG4uaW5saW5lbW9kZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mbGV4Y29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZsZXhpdGVtIHtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLnBhZ2Vjb250ZW50IHtcbiAgICBtYXJnaW46IDIwcHggMTBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmZsZXhjb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmZsZXhpdGVtIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 405:
/*!***********************************!*\
  !*** ./example/app/app.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 1893);
/* harmony import */ var _date_picker_ngmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-picker-ngmodel */ 578);
/* harmony import */ var _date_picker_reactive_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-picker-reactive-forms */ 8225);
/* harmony import */ var _date_picker_div_host_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-picker-div-host-element */ 8833);
/* harmony import */ var _date_picker_inline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date-picker-inline */ 4672);
/* harmony import */ var _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projects/angular-mydatepicker/src/public-api */ 3637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_5__.AngularMyDatePickerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _date_picker_ngmodel__WEBPACK_IMPORTED_MODULE_1__.DatePickerNgmodel, _date_picker_reactive_forms__WEBPACK_IMPORTED_MODULE_2__.DatePickerReactiveForms, _date_picker_div_host_element__WEBPACK_IMPORTED_MODULE_3__.DatePickerDivHostElement, _date_picker_inline__WEBPACK_IMPORTED_MODULE_4__.DatePickerInline],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_5__.AngularMyDatePickerModule]
  });
})();

/***/ }),

/***/ 7649:
/*!**********************************************************************************!*\
  !*** ./example/app/date-picker-div-host-element/date-picker-div-host-element.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatePickerDivHostElement": () => (/* binding */ DatePickerDivHostElement)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _projects_angular_mydatepicker_src_lib_angular_mydatepicker_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular-mydatepicker/src/lib/angular-mydatepicker.input */ 3698);




function DatePickerDivHostElement_i_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerDivHostElement_i_4_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.clearDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "placeholdercolor": a0
  };
};
class DatePickerDivHostElement {
  constructor(renderer) {
    this.renderer = renderer;
    this.myDatePickerOptions = {
      dateRange: false,
      dateFormat: 'dd.mm.yyyy',
      divHostElement: {
        enabled: true,
        placeholder: 'Click to select a date'
      }
    };
    this.model = null;
  }
  ngOnInit() {
    console.log('onInit(): DatePickerDivHostElement');
  }
  setTodayDate() {
    let d = new Date();
    this.model = {
      isRange: false,
      singleDate: {
        jsDate: d
      },
      dateRange: null
    };
  }
  resetTomorrowDate() {
    let d = new Date();
    d.setDate(d.getDate() + 1);
    this.model = {
      isRange: false,
      singleDate: {
        date: {
          year: d.getFullYear(),
          month: d.getMonth() + 1,
          day: d.getDate()
        }
      },
      dateRange: null
    };
  }
  onDateChanged(event) {
    console.log('onDateChanged(): ', event);
  }
}
DatePickerDivHostElement.ɵfac = function DatePickerDivHostElement_Factory(t) {
  return new (t || DatePickerDivHostElement)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
};
DatePickerDivHostElement.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DatePickerDivHostElement,
  selectors: [["date-picker-div-host-element"]],
  decls: 5,
  vars: 6,
  consts: [[1, "datepickercontainer"], ["name", "mydivdate", "angular-mydatepicker", "", 1, "datepickerelement", 3, "ngModel", "options", "ngClass", "ngModelChange", "dateChanged", "click"], ["dp", "angular-mydatepicker"], [1, "closeIconContainer"], ["class", "fa fa-close", 3, "click", 4, "ngIf"], [1, "fa", "fa-close", 3, "click"]],
  template: function DatePickerDivHostElement_Template(rf, ctx) {
    if (rf & 1) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DatePickerDivHostElement_Template_div_ngModelChange_1_listener($event) {
        return ctx.model = $event;
      })("dateChanged", function DatePickerDivHostElement_Template_div_dateChanged_1_listener($event) {
        return ctx.onDateChanged($event);
      })("click", function DatePickerDivHostElement_Template_div_click_1_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.toggleCalendar());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DatePickerDivHostElement_i_4_Template, 1, 0, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model)("options", ctx.myDatePickerOptions)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, !_r0.isDateValid()));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r0.isDateValid());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _projects_angular_mydatepicker_src_lib_angular_mydatepicker_input__WEBPACK_IMPORTED_MODULE_0__.AngularMyDatePickerDirective],
  styles: [".datepickercontainer[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n}\n\n.datepickerelement[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  padding: 6px 8px;\n  width: 260px;\n  font-size: 16px;\n  color: #495057;\n  cursor: pointer;\n}\n\n.placeholdercolor[_ngcontent-%COMP%] {\n  color: #bbb;\n}\n\n.closeIconContainer[_ngcontent-%COMP%] {\n  margin: auto 0 auto -26px;\n  cursor: pointer;\n}\n\n.closeIconContainer[_ngcontent-%COMP%]:hover {\n  color: #bbb;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2V4YW1wbGUvYXBwL2RhdGUtcGlja2VyLWRpdi1ob3N0LWVsZW1lbnQvZGF0ZS1waWNrZXItZGl2LWhvc3QtZWxlbWVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGVwaWNrZXJjb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kYXRlcGlja2VyZWxlbWVudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNnB4IDhweDtcbiAgd2lkdGg6IDI2MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wbGFjZWhvbGRlcmNvbG9yIHtcbiAgY29sb3I6ICNiYmI7XG59XG5cbi5jbG9zZUljb25Db250YWluZXIge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIC0yNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbG9zZUljb25Db250YWluZXI6aG92ZXIge1xuICBjb2xvcjogI2JiYjtcbn1cblxuLmJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8833:
/*!***********************************************************!*\
  !*** ./example/app/date-picker-div-host-element/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatePickerDivHostElement": () => (/* reexport safe */ _date_picker_div_host_element__WEBPACK_IMPORTED_MODULE_0__.DatePickerDivHostElement)
/* harmony export */ });
/* harmony import */ var _date_picker_div_host_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-picker-div-host-element */ 7649);


/***/ }),

/***/ 6085:
/*!**************************************************************!*\
  !*** ./example/app/date-picker-inline/date-picker-inline.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatePickerInline": () => (/* binding */ DatePickerInline)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _projects_angular_mydatepicker_src_lib_angular_mydatepicker_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular-mydatepicker/src/lib/angular-mydatepicker.input */ 3698);




function DatePickerInline_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerInline_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onTodayPlus3());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Range today + 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DatePickerInline_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerInline_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onYesterdayPlus3());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Range yesterday + 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class DatePickerInline {
  constructor() {
    this.myDatePickerOptions = {
      dateRange: false,
      inline: true,
      dateFormat: 'dd.mm.yyyy'
    };
    this.selectedTextNormal = '';
    this.validDate = false;
    this.inputText = "";
    this.model = null; // not initial date set
  }

  ngOnInit() {
    console.log('onInit(): DatePickerInline');
  }
  onDateRange(checked) {
    this.model = null;
    let copy = this.getCopyOfOptions();
    copy.dateRange = checked;
    this.myDatePickerOptions = copy;
  }
  onSubmit() {
    console.log('onSubmit(): model: ', this.model);
  }
  onDisableUntilYesterday() {
    let copy = this.getCopyOfOptions();
    let d = new Date();
    d.setDate(d.getDate() - 1);
    copy.disableUntil = {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
    };
    this.myDatePickerOptions = copy;
  }
  onInitToPastMonth() {
    let d = new Date();
    d.setMonth(d.getMonth() - 1);
    this.model = {
      isRange: false,
      singleDate: {
        date: {
          year: d.getFullYear(),
          month: d.getMonth() + 1,
          day: d.getDate()
        }
      },
      dateRange: null
    };
  }
  onTodayPlus3() {
    let today = new Date();
    let date = new Date();
    date.setDate(date.getDate() + 3);
    this.model = {
      isRange: true,
      singleDate: null,
      dateRange: {
        beginDate: {
          year: today.getFullYear(),
          month: today.getMonth() + 1,
          day: today.getDate()
        },
        endDate: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
        }
      }
    };
  }
  onYesterdayPlus3() {
    let today = new Date();
    today.setDate(today.getDate() - 1);
    let date = new Date();
    date.setDate(date.getDate() + 2);
    this.model = {
      isRange: true,
      singleDate: null,
      dateRange: {
        beginDate: {
          year: today.getFullYear(),
          month: today.getMonth() + 1,
          day: today.getDate()
        },
        endDate: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
        }
      }
    };
  }
  // callbacks
  onDateChanged(event) {
    console.log('onDateChanged(): ', event);
    if (!event.isRange) {
      let {
        date,
        jsDate,
        formatted,
        epoc
      } = event.singleDate;
      if (formatted !== '') {
        this.selectedTextNormal = 'Formatted: ' + formatted + ' - epoc timestamp: ' + epoc;
        this.validDate = true;
        this.inputText = formatted;
      } else {
        this.selectedTextNormal = '';
      }
    } else {
      let {
        formatted
      } = event.dateRange;
      if (formatted !== '') {
        this.selectedTextNormal = 'Formatted: ' + formatted;
        this.validDate = true;
        this.inputText = formatted;
      } else {
        this.selectedTextNormal = '';
      }
    }
  }
  onCalendarViewChanged(event) {
    console.log('onCalendarViewChanged(): Year: ', event.year, ' - month: ', event.month, ' - first: ', event.first, ' - last: ', event.last);
  }
  onDateRangeSelection(event) {
    console.log('onDateRangeSelection(): event: ', event);
  }
  getCopyOfOptions() {
    return JSON.parse(JSON.stringify(this.myDatePickerOptions));
  }
}
DatePickerInline.ɵfac = function DatePickerInline_Factory(t) {
  return new (t || DatePickerInline)();
};
DatePickerInline.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DatePickerInline,
  selectors: [["date-picker-inline"]],
  decls: 31,
  vars: 5,
  consts: [["type", "checkbox", 2, "cursor", "pointer", 3, "checked", "change"], ["angular-mydatepicker", "", "type", "hidden", 1, "datePicker", 3, "ngModel", "options", "ngModelChange", "dateChanged", "calendarViewChanged", "rangeDateSelection"], ["dp", "angular-mydatepicker"], ["type", "button", 1, "submitButton", 3, "click"], ["type", "button", "class", "submitButton", 3, "click", 4, "ngIf"], ["type", "button", 1, "headerActionButton", 3, "click"]],
  template: function DatePickerInline_Template(rf, ctx) {
    if (rf & 1) {
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div")(2, "label")(3, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Date range:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DatePickerInline_Template_input_change_5_listener($event) {
        return ctx.onDateRange($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "input", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DatePickerInline_Template_input_ngModelChange_7_listener($event) {
        return ctx.model = $event;
      })("dateChanged", function DatePickerInline_Template_input_dateChanged_7_listener($event) {
        return ctx.onDateChanged($event);
      })("calendarViewChanged", function DatePickerInline_Template_input_calendarViewChanged_7_listener($event) {
        return ctx.onCalendarViewChanged($event);
      })("rangeDateSelection", function DatePickerInline_Template_input_rangeDateSelection_7_listener($event) {
        return ctx.onDateRangeSelection($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div")(10, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerInline_Template_button_click_10_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerInline_Template_button_click_12_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.clearDate());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Clear");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerInline_Template_button_click_14_listener() {
        return ctx.onDisableUntilYesterday();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Disable until yesterday");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, DatePickerInline_button_17_Template, 2, 0, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, DatePickerInline_button_18_Template, 2, 0, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div")(20, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerInline_Template_button_click_20_listener() {
        return ctx.onInitToPastMonth();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Init to past month");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div")(23, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerInline_Template_button_click_23_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.headerAction(1));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerInline_Template_button_click_25_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.headerAction(2));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerInline_Template_button_click_27_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.headerAction(3));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerInline_Template_button_click_29_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.headerAction(4));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model)("options", ctx.myDatePickerOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myDatePickerOptions.dateRange);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myDatePickerOptions.dateRange);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _projects_angular_mydatepicker_src_lib_angular_mydatepicker_input__WEBPACK_IMPORTED_MODULE_0__.AngularMyDatePickerDirective],
  styles: [".datePicker[_ngcontent-%COMP%] {\n  margin-top: 20px\n}\n\n.submitButton[_ngcontent-%COMP%], .headerActionButton[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2V4YW1wbGUvYXBwL2RhdGUtcGlja2VyLWlubGluZS9kYXRlLXBpY2tlci1pbmxpbmUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7QUFDRjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlUGlja2VyIHtcbiAgbWFyZ2luLXRvcDogMjBweFxufVxuXG4uc3VibWl0QnV0dG9uLFxuLmhlYWRlckFjdGlvbkJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4672:
/*!*************************************************!*\
  !*** ./example/app/date-picker-inline/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatePickerInline": () => (/* reexport safe */ _date_picker_inline__WEBPACK_IMPORTED_MODULE_0__.DatePickerInline)
/* harmony export */ });
/* harmony import */ var _date_picker_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-picker-inline */ 6085);


/***/ }),

/***/ 7481:
/*!****************************************************************!*\
  !*** ./example/app/date-picker-ngmodel/date-picker-ngmodel.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatePickerNgmodel": () => (/* binding */ DatePickerNgmodel)
/* harmony export */ });
/* harmony import */ var _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular-mydatepicker/src/public-api */ 3637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _projects_angular_mydatepicker_src_lib_angular_mydatepicker_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/angular-mydatepicker/src/lib/angular-mydatepicker.input */ 3698);





const _c0 = ["dp"];
function DatePickerNgmodel_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const l_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](l_r7);
  }
}
function DatePickerNgmodel_option_175_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const df_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](df_r8);
  }
}
function DatePickerNgmodel_option_182_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](s_r9);
  }
}
function DatePickerNgmodel_option_190_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const a_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](a_r10);
  }
}
function DatePickerNgmodel_option_197_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r11);
  }
}
function DatePickerNgmodel_div_225_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r12.selectedTextNormal);
  }
}
function DatePickerNgmodel_div_225_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Invalid date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0, a1) {
  return {
    "okDate": a0,
    "invalidDate": a1
  };
};
function DatePickerNgmodel_div_225_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DatePickerNgmodel_div_225_span_1_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DatePickerNgmodel_div_225_span_2_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c1, ctx_r6.validDate && ctx_r6.selectedTextNormal.length, !ctx_r6.validDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.validDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r6.validDate);
  }
}
class DatePickerNgmodel {
  constructor() {
    this.myDatePickerOptions = {
      dateRange: false,
      dateFormat: 'd## of mmm yyyy',
      firstDayOfWeek: 'mo',
      sunHighlight: true,
      markCurrentDay: true,
      alignSelectorRight: false,
      openSelectorTopOfInput: false,
      minYear: 1971,
      maxYear: 2200,
      showSelectorArrow: true,
      monthSelector: true,
      yearSelector: true,
      satHighlight: false,
      highlightDates: [],
      disableDates: [],
      disableHeaderButtons: true,
      showWeekNumbers: false,
      disableDateRanges: [{
        begin: {
          year: 2016,
          month: 10,
          day: 5
        },
        end: {
          year: 2016,
          month: 10,
          day: 7
        }
      }, {
        begin: {
          year: 2016,
          month: 10,
          day: 10
        },
        end: {
          year: 2016,
          month: 10,
          day: 12
        }
      }],
      disableUntil: {
        year: 0,
        month: 0,
        day: 0
      },
      disableSince: {
        year: 0,
        month: 0,
        day: 0
      },
      disableWeekdays: [],
      markDates: [],
      markWeekends: {},
      selectorHeight: '266px',
      selectorWidth: '266px',
      closeSelectorOnDateSelect: true,
      closeSelectorOnDocumentClick: true,
      showMonthNumber: true,
      appendSelectorToBody: false,
      focusInputOnDateSelect: true,
      dateRangeDatesDelimiter: " - ",
      defaultView: _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_0__.DefaultView.Date,
      showFooterToday: false,
      calendarAnimation: {
        in: _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CalAnimation.None,
        out: _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CalAnimation.None
      },
      rtl: false,
      stylesData: {
        selector: '',
        styles: ''
      }
    };
    this.selectedTextNormal = '';
    this.disabled = false;
    this.validDate = false;
    this.inputText = "";
    this.model = null; // not initial date set
    this.defMonth = {
      defMonth: '',
      overrideSelection: false
    };
    this.selectorSizes = new Array('266px x 266px', '200px x 220px', '260px x 290px');
    this.defaultViews = new Array('date', 'month', 'year');
    this.calAnimations = new Array('None', 'Fade', 'ScaleTop-ScaleCenter', 'ScaleCenter-ScaleTop', 'Rotate', 'FlipDiagonal');
    this.styleColor = new Array('Default', 'Grey', 'Blue', 'Green', 'Red', 'Yellow', 'Dark', 'Bold');
    this.locale = 'en';
    this.locales = ['en | English', 'fr | French', 'fr-ch | French - Switzerland', 'ja | Japanese', 'fi | Finnish', 'es | Spanish', 'hu | Hungarian', 'sv | Swedish', 'nl | Dutch', 'ru | Russian', 'uk | Ukrainian', 'no | Norwegian', 'tr | Turkish', 'pt-br | Portuguese - Brazil', 'de | German', 'de-ch | German - Switzerland', 'it | Italian', 'it-ch | Italian - Switzerland', 'pl | Polish', 'my | Burmese', 'sk | Slovak', 'sl | Slovenian', 'zh-cn | Chinese - China', 'he | Hebrew', 'ro | Romanian - Romania', 'ca | Catalan', 'id | Indonesian', 'en-au | English - Australia', 'am-et | Amharic', 'cs | Czech', 'el | Greek', 'kk | Kazakh', 'th | Thai', 'ko-kr | Korean', 'da | Danish', 'lt | Lithuanian', 'vi | Vietnamese', 'bn | Bengali', 'bg | Bulgarian', 'hr | Croatian', 'ar | Arabic', 'is | Icelandic', 'tw | Chinese - Taiwan', 'lv | Latvian', 'et | Estonian'];
  }
  clearDate() {
    this.ngxdp.clearDate();
  }
  setDate() {
    // Initialize single date (today)
    if (this.myDatePickerOptions.dateRange) {
      alert("Date range mode is enabled! Change mode to single date before set single date.");
      return;
    }
    this.model = {
      isRange: false,
      singleDate: {
        jsDate: new Date()
      }
    };
  }
  setDateRange() {
    // Initialize date range (begin: today, end: today + 2)
    if (!this.myDatePickerOptions.dateRange) {
      alert("Date range mode is not enabled! Change mode to date range before set date range date.");
      return;
    }
    let begin = new Date();
    let end = new Date();
    end.setDate(end.getDate() + 2);
    this.model = {
      isRange: true,
      dateRange: {
        beginJsDate: begin,
        endJsDate: end
      }
    };
  }
  onOpenSelectorTopOfInput(checked) {
    let copy = this.getCopyOfOptions();
    copy.openSelectorTopOfInput = checked;
    this.myDatePickerOptions = copy;
  }
  onAlignSelectorRight(checked) {
    let copy = this.getCopyOfOptions();
    copy.alignSelectorRight = checked;
    this.myDatePickerOptions = copy;
  }
  onShowSelectorArrow(checked) {
    let copy = this.getCopyOfOptions();
    copy.showSelectorArrow = checked;
    this.myDatePickerOptions = copy;
  }
  onMonthSelector(checked) {
    let copy = this.getCopyOfOptions();
    copy.monthSelector = checked;
    this.myDatePickerOptions = copy;
  }
  onYearSelector(checked) {
    let copy = this.getCopyOfOptions();
    copy.yearSelector = checked;
    this.myDatePickerOptions = copy;
  }
  onDisableToday(checked) {
    let d = new Date();
    let copy = this.getCopyOfOptions();
    copy.disableDates = checked ? [{
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
    }] : [];
    this.myDatePickerOptions = copy;
  }
  onMarkToday(checked) {
    let d = new Date();
    let copy = this.getCopyOfOptions();
    copy.markDates = checked ? [{
      dates: [{
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate()
      }],
      color: '#C30000'
    }] : [];
    this.myDatePickerOptions = copy;
  }
  onMarkWeekends(checked) {
    let copy = this.getCopyOfOptions();
    copy.markWeekends = checked ? {
      marked: true,
      color: 'blue'
    } : {
      marked: false,
      color: ''
    };
    this.myDatePickerOptions = copy;
  }
  onHighlighSaturday(checked) {
    let copy = this.getCopyOfOptions();
    copy.satHighlight = checked;
    this.myDatePickerOptions = copy;
  }
  onHighlighSunday(checked) {
    let copy = this.getCopyOfOptions();
    copy.sunHighlight = checked;
    this.myDatePickerOptions = copy;
  }
  onHighlightDates(checked) {
    let d = new Date();
    let copy = this.getCopyOfOptions();
    let dates = [];
    dates.push({
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
    });
    d.setDate(d.getDate() + 1);
    dates.push({
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
    });
    dates.push({
      year: 2017,
      month: 6,
      day: 1
    });
    copy.highlightDates = checked ? dates : [];
    this.myDatePickerOptions = copy;
  }
  onDisableWeekends(checked) {
    let copy = this.getCopyOfOptions();
    copy.disableWeekends = checked;
    this.myDatePickerOptions = copy;
  }
  onDisableHeaderButtons(checked) {
    let copy = this.getCopyOfOptions();
    copy.disableHeaderButtons = checked;
    this.myDatePickerOptions = copy;
  }
  onShowWeekNumbers(checked) {
    let copy = this.getCopyOfOptions();
    copy.showWeekNumbers = checked;
    this.myDatePickerOptions = copy;
  }
  onCloseSelectorOnDateSelect(checked) {
    let copy = this.getCopyOfOptions();
    copy.closeSelectorOnDateSelect = checked;
    this.myDatePickerOptions = copy;
  }
  onCloseSelectorOnDocumentClick(checked) {
    let copy = this.getCopyOfOptions();
    copy.closeSelectorOnDocumentClick = checked;
    this.myDatePickerOptions = copy;
  }
  onDateRange(checked) {
    let copy = this.getCopyOfOptions();
    copy.dateRange = checked;
    this.myDatePickerOptions = copy;
  }
  onAppendSelectorToBody(checked) {
    let copy = this.getCopyOfOptions();
    copy.appendSelectorToBody = checked;
    this.myDatePickerOptions = copy;
  }
  onDisableWednesday(checked) {
    let copy = this.getCopyOfOptions();
    copy.disableWeekdays = checked ? ['we'] : [];
    this.myDatePickerOptions = copy;
  }
  onDisable24Day(checked) {
    let d = new Date();
    let copy = this.getCopyOfOptions();
    copy.disableDates = checked ? [{
      year: 0,
      month: 0,
      day: 24
    }] : [];
    this.myDatePickerOptions = copy;
  }
  onFocusInputOnDateSelect(checked) {
    let copy = this.getCopyOfOptions();
    copy.focusInputOnDateSelect = checked;
    this.myDatePickerOptions = copy;
  }
  onDisableUntilYesterday(checked) {
    let copy = this.getCopyOfOptions();
    let d = new Date();
    d.setDate(d.getDate() - 1);
    copy.disableUntil = checked ? {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
    } : {
      year: 0,
      month: 0,
      day: 0
    };
    this.myDatePickerOptions = copy;
  }
  onDisableSinceTomorrow(checked) {
    let copy = this.getCopyOfOptions();
    let d = new Date();
    d.setDate(d.getDate() + 1);
    copy.disableSince = checked ? {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
    } : {
      year: 0,
      month: 0,
      day: 0
    };
    this.myDatePickerOptions = copy;
  }
  onShowMonthNumber(checked) {
    let copy = this.getCopyOfOptions();
    copy.showMonthNumber = checked;
    this.myDatePickerOptions = copy;
  }
  onShowFooterBar(checked) {
    let copy = this.getCopyOfOptions();
    copy.showFooterToday = checked;
    this.myDatePickerOptions = copy;
  }
  onDisableOwnStyle(checked) {
    let copy = this.getCopyOfOptions();
    let d = new Date();
    d.setDate(d.getDate() - 1);
    let yesterday = {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
    };
    d.setDate(d.getDate() + 1);
    let today = {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
    };
    d.setDate(d.getDate() + 1);
    let tomorrow = {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
    };
    copy.disableDates = checked ? [{
      dates: [yesterday, today, tomorrow],
      styleClass: 'disabledDates'
    }] : [];
    copy.stylesData = {
      selector: 'dp1',
      styles: this.disableAndMarkOwnStyles()
    };
    this.myDatePickerOptions = copy;
  }
  onMarkOwnStyle(checked) {
    let copy = this.getCopyOfOptions();
    let d = new Date();
    d.setDate(d.getDate() + 2);
    let yesterday = {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
    };
    d.setDate(d.getDate() + 1);
    let today = {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
    };
    d.setDate(d.getDate() + 1);
    let tomorrow = {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
    };
    copy.markDates = checked ? [{
      dates: [yesterday],
      styleClass: 'pilatesDates'
    }, {
      dates: [today],
      styleClass: 'boxingDates'
    }, {
      dates: [tomorrow],
      color: 'red',
      styleClass: 'pilatesDatesAndBoxingDates'
    }] : [];
    copy.stylesData = {
      selector: 'dp1',
      styles: this.disableAndMarkOwnStyles()
    };
    this.myDatePickerOptions = copy;
  }
  disableAndMarkOwnStyles() {
    return `
      .dp1 .disabledDates {
        background: repeating-linear-gradient(-45deg, red 7px, #ccc 8px, transparent 7px, transparent 14px);
      }
      .dp1 .pilatesDates {
        background: repeating-linear-gradient(-45deg, green 7px, #ccc 8px, transparent 7px, transparent 14px);
      }
      .dp1 .boxingDates {
        background: repeating-linear-gradient(-45deg, yellow 7px, #ccc 8px, transparent 7px, transparent 14px);
      }
      .dp1 .pilatesDatesAndBoxingDates {
        background: repeating-linear-gradient(-45deg, blue 7px, #ccc 8px, transparent 7px, transparent 14px);
      }
    `;
  }
  onRtl(checked) {
    let copy = this.getCopyOfOptions();
    copy.rtl = checked;
    this.myDatePickerOptions = copy;
  }
  onDisableInput(checked) {
    this.disabled = checked;
  }
  onSelectorSize(size) {
    let copy = this.getCopyOfOptions();
    if (size === '266px x 266px') {
      copy.selectorHeight = '266px';
      copy.selectorWidth = '266px';
    } else if (size === '200px x 220px') {
      copy.selectorHeight = '200px';
      copy.selectorWidth = '220px';
    } else {
      copy.selectorHeight = '260px';
      copy.selectorWidth = '290px';
    }
    this.myDatePickerOptions = copy;
  }
  onCalendarAnimation(animation) {
    let copy = this.getCopyOfOptions();
    if (animation === 'None') {
      copy.calendarAnimation = {
        in: _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CalAnimation.None,
        out: _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CalAnimation.None
      };
    } else if (animation === 'Fade') {
      copy.calendarAnimation = {
        in: _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CalAnimation.Fade,
        out: _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CalAnimation.Fade
      };
    } else if (animation === 'ScaleTop-ScaleCenter') {
      copy.calendarAnimation = {
        in: _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CalAnimation.ScaleTop,
        out: _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CalAnimation.ScaleCenter
      };
    } else if (animation === 'ScaleCenter-ScaleTop') {
      copy.calendarAnimation = {
        in: _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CalAnimation.ScaleCenter,
        out: _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CalAnimation.ScaleTop
      };
    } else if (animation === 'Rotate') {
      copy.calendarAnimation = {
        in: _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CalAnimation.Rotate,
        out: _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CalAnimation.Rotate
      };
    } else if (animation === 'FlipDiagonal') {
      copy.calendarAnimation = {
        in: _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CalAnimation.FlipDiagonal,
        out: _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CalAnimation.FlipDiagonal
      };
    }
    this.myDatePickerOptions = copy;
  }
  onOverrideCalColor(color) {
    let copy = this.getCopyOfOptions();
    copy.stylesData.selector = 'dp1';
    copy.selectorHeight = '266px';
    copy.selectorWidth = '266px';
    if (color === 'Default') {
      copy.stylesData.styles = '';
    } else if (color === 'Grey') {
      copy.stylesData.styles = `
      .dp1 .myDpIconLeftArrow,
      .dp1 .myDpIconRightArrow,
      .dp1 .myDpHeaderBtn {
          color: #6c757d;
      }
      .dp1 .myDpHeaderBtn:focus,
      .dp1 .myDpMonthLabel:focus,
      .dp1 .myDpYearLabel:focus {
        color: #aaa;
      }
      .dp1 .myDpDaycell:focus,
      .dp1 .myDpMonthcell:focus,
      .dp1 .myDpYearcell:focus {
        box-shadow: inset 0 0 0 1px #ccc;
      }
      .dp1 .myDpSelector:focus {
        box-shadow: -1px 1px 6px 0px #bbb;
      }
      .dp1 .myDpSelectorArrow:focus:before {
        border-bottom-color: #bbb;
      }
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
          color: #6c757d;
          font-weight: bold;
      }
      .dp1 .myDpDaycellWeekNbr {
        color: #6c757d;
      }
      .dp1 .myDpPrevMonth,
      .dp1 .myDpNextMonth {
          color: #aaa;
      }
      .dp1 .myDpWeekDayTitle {
        background-color: transparent;
        color: #6c757d;
        font-weight: bold;
      }
      .dp1 .myDpHeaderBtnEnabled:hover,
      .dp1 .myDpMonthLabel:hover,
      .dp1 .myDpYearLabel:hover,
      .dp1 .myDpFooterBtn:hover {
          color: #212529;
      }
      .dp1 .myDpMarkCurrDay, 
      .dp1 .myDpMarkCurrMonth, 
      .dp1 .myDpMarkCurrYear {
          border-bottom: 2px solid #6c757d;
      }
      .dp1 .myDpDisabled {
          color: #999;
      }
      .dp1 .myDpHighlight {
          color: #cd5c5c;
      }
      .dp1 .myDpTableSingleDay:hover, 
      .dp1 .myDpTableSingleMonth:hover, 
      .dp1 .myDpTableSingleYear:hover {
          background-color: #ccc;
          color: #222;
      }
      .dp1 .myDpRangeColor {
        background-color: #eee;
      }
      .dp1 .myDpSelectedDay,
      .dp1 .myDpSelectedMonth,
      .dp1 .myDpSelectedYear {
        background-color: #ccc;
        color: #222;
      }
    `;
    } else if (color === 'Blue') {
      copy.stylesData.styles = `
      .dp1 .myDpIconLeftArrow,
      .dp1 .myDpIconRightArrow,
      .dp1 .myDpHeaderBtn {
          color: #3855c1;
      }
      .dp1 .myDpHeaderBtn:focus,
      .dp1 .myDpMonthLabel:focus,
      .dp1 .myDpYearLabel:focus {
        color: #66afe9;
      }
      .dp1 .myDpDaycell:focus,
      .dp1 .myDpMonthcell:focus,
      .dp1 .myDpYearcell:focus {
        box-shadow: inset 0 0 0 1px #66afe9;
      }
      .dp1 .myDpSelector:focus {
        box-shadow: -1px 1px 6px 0px #ADD8E6;
      }
      .dp1 .myDpSelectorArrow:focus:before {
        border-bottom-color: #ADD8E6;
      }
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
          color: #3855c1;
          font-weight: bold;
      }
      .dp1 .myDpDaycellWeekNbr {
        color: #3855c1;
      }
      .dp1 .myDpPrevMonth,
      .dp1 .myDpNextMonth {
          color: #6495ED;
      }
      .dp1 .myDpWeekDayTitle {
          background-color: transparent;
          color: #3855c1;
          font-weight: bold;
      }
      .dp1 .myDpHeaderBtnEnabled:hover,
      .dp1 .myDpMonthLabel:hover,
      .dp1 .myDpYearLabel:hover,
      .dp1 .myDpFooterBtn:hover {
          color: #add8e6;
      }
      .dp1 .myDpMarkCurrDay, 
      .dp1 .myDpMarkCurrMonth, 
      .dp1 .myDpMarkCurrYear {
          border-bottom: 2px solid #3855c1;
      }
      .dp1 .myDpDisabled {
          color: #999;
      }
      .dp1 .myDpHighlight {
          color: #cd5c5c;
      }
      .dp1 .myDpTableSingleDay:hover, 
      .dp1 .myDpTableSingleMonth:hover, 
      .dp1 .myDpTableSingleYear:hover {
          background-color: #add8e6;
          color: #3855c1;
      }
      .dp1 .myDpRangeColor {
        background-color: #dbeaff;
      }
      .dp1 .myDpSelectedDay,
      .dp1 .myDpSelectedMonth,
      .dp1 .myDpSelectedYear {
        background-color: #8EBFFF;
      }
    `;
    } else if (color === 'Green') {
      copy.stylesData.styles = `
      .dp1 .myDpIconLeftArrow,
      .dp1 .myDpIconRightArrow,
      .dp1 .myDpHeaderBtn {
          color: #228B22;
      }
      .dp1 .myDpHeaderBtn:focus,
      .dp1 .myDpMonthLabel:focus,
      .dp1 .myDpYearLabel:focus {
        color: #8FBC8F;
      }
      .dp1 .myDpDaycell:focus,
      .dp1 .myDpMonthcell:focus,
      .dp1 .myDpYearcell:focus {
        box-shadow: inset 0 0 0 1px #8FBC8F;
      }
      .dp1 .myDpSelector:focus {
        box-shadow: -1px 1px 6px 0px #B0D0B0;
      }
      .dp1 .myDpSelectorArrow:focus:before {
        border-bottom-color: #B0D0B0;
      }
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
          color: #228B22;
          font-weight: bold;
      }
      .dp1 .myDpDaycellWeekNbr {
        color: #228B22;
      }
      .dp1 .myDpPrevMonth,
      .dp1 .myDpNextMonth {
          color: #8FBC8F;
      }
      .dp1 .myDpWeekDayTitle {
        background-color: transparent;
        color: #228B22;
        font-weight: bold;
      }
      .dp1 .myDpHeaderBtnEnabled:hover,
      .dp1 .myDpMonthLabel:hover,
      .dp1 .myDpYearLabel:hover,
      .dp1 .myDpFooterBtn:hover {
          color: #90EE90;
      }
      .dp1 .myDpMarkCurrDay, 
      .dp1 .myDpMarkCurrMonth, 
      .dp1 .myDpMarkCurrYear {
          border-bottom: 2px solid #228B22;
      }
      .dp1 .myDpDisabled {
          color: #999;
      }
      .dp1 .myDpHighlight {
          color: #cd5c5c;
      }
      .dp1 .myDpTableSingleDay:hover, 
      .dp1 .myDpTableSingleMonth:hover, 
      .dp1 .myDpTableSingleYear:hover {
          background-color: #90EE90;
          color: #228B22;
      }
      .dp1 .myDpRangeColor {
        background-color: #D1F8D1;
      }
      .dp1 .myDpSelectedDay,
      .dp1 .myDpSelectedMonth,
      .dp1 .myDpSelectedYear {
        background-color: #00FA9A;
      }
    `;
    } else if (color === 'Red') {
      copy.stylesData.styles = `
      .dp1 .myDpIconLeftArrow,
      .dp1 .myDpIconRightArrow,
      .dp1 .myDpHeaderBtn {
          color: #B22222;
      }
      .dp1 .myDpHeaderBtn:focus,
      .dp1 .myDpMonthLabel:focus,
      .dp1 .myDpYearLabel:focus {
        color: #FF6347;
      }
      .dp1 .myDpDaycell:focus,
      .dp1 .myDpMonthcell:focus,
      .dp1 .myDpYearcell:focus {
        box-shadow: inset 0 0 0 1px #FF6347;
      }
      .dp1 .myDpSelector:focus {
        box-shadow: -1px 1px 6px 0px #F9CCCC;
      }
      .dp1 .myDpSelectorArrow:focus:before {
        border-bottom-color: #F9CCCC;
      }
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
          color: #B22222;
          font-weight: bold;
      }
      .dp1 .myDpDaycellWeekNbr {
        color: #B22222;
      }
      .dp1 .myDpPrevMonth,
      .dp1 .myDpNextMonth {
          color: #F08080;
      }
      .dp1 .myDpWeekDayTitle {
        background-color: transparent;
        color: #B22222;
        font-weight: bold;
      }
      .dp1 .myDpHeaderBtnEnabled:hover,
      .dp1 .myDpMonthLabel:hover,
      .dp1 .myDpYearLabel:hover,
      .dp1 .myDpFooterBtn:hover {
          color: #F08080;
      }
      .dp1 .myDpMarkCurrDay, 
      .dp1 .myDpMarkCurrMonth, 
      .dp1 .myDpMarkCurrYear {
          border-bottom: 2px solid #800000;
      }
      .dp1 .myDpDisabled {
          color: #999;
      }
      .dp1 .myDpHighlight {
          color: #FF0000;
      }
      .dp1 .myDpTableSingleDay:hover, 
      .dp1 .myDpTableSingleMonth:hover, 
      .dp1 .myDpTableSingleYear:hover {
          background-color: #F6B2B2;
          color: #800000;
      }
      .dp1 .myDpRangeColor {
        background-color: #FFE1E6;
      }
      .dp1 .myDpSelectedDay,
      .dp1 .myDpSelectedMonth,
      .dp1 .myDpSelectedYear {
        background-color: #E6ADAD;
        color: #800000;
      }
    `;
    } else if (color === 'Yellow') {
      copy.stylesData.styles = `
      .dp1 .myDpIconLeftArrow,
      .dp1 .myDpIconRightArrow,
      .dp1 .myDpHeaderBtn {
          color: #DAA520;
      }
      .dp1 .myDpHeaderBtn:focus,
      .dp1 .myDpMonthLabel:focus,
      .dp1 .myDpYearLabel:focus {
        color: #FFDAB9;
      }
      .dp1 .myDpDaycell:focus,
      .dp1 .myDpMonthcell:focus,
      .dp1 .myDpYearcell:focus {
        box-shadow: inset 0 0 0 1px #F4A460;
      }
      .dp1 .myDpSelector:focus {
        box-shadow: -1px 1px 6px 0px #FADABF;
      }
      .dp1 .myDpSelectorArrow:focus:before {
        border-bottom-color: #FADABF;
      }
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
          color: #DAA520;
          font-weight: bold;
      }
      .dp1 .myDpDaycellWeekNbr {
        color: #DAA520;
      }
      .dp1 .myDpPrevMonth,
      .dp1 .myDpNextMonth {
          color: #DEB887;
      }
      .dp1 .myDpWeekDayTitle {
        background-color: transparent;
        color: #DAA520;
        font-weight: bold;
      }
      .dp1 .myDpHeaderBtnEnabled:hover,
      .dp1 .myDpMonthLabel:hover,
      .dp1 .myDpYearLabel:hover,
      .dp1 .myDpFooterBtn:hover {
          color: #F0E68C;
      }
      .dp1 .myDpMarkCurrDay, 
      .dp1 .myDpMarkCurrMonth, 
      .dp1 .myDpMarkCurrYear {
          border-bottom: 2px solid #DAA520;
      }
      .dp1 .myDpDisabled {
          color: #999;
      }
      .dp1 .myDpTableSingleDay:hover, 
      .dp1 .myDpTableSingleMonth:hover, 
      .dp1 .myDpTableSingleYear:hover {
          background-color: #F0E68C;
          color: #DAA520;
      }
      .dp1 .myDpRangeColor {
        background-color: #FFF1DC;
      }
      .dp1 .myDpSelectedDay,
      .dp1 .myDpSelectedMonth,
      .dp1 .myDpSelectedYear {
        background-color: #F0E68C;
        color: #B8860B;
      }
    `;
    } else if (color === 'Dark') {
      copy.stylesData.styles = `
      .dp1 .myDpIconLeftArrow,
      .dp1 .myDpIconRightArrow,
      .dp1 .myDpHeaderBtn {
          color: #fff;
      }
      .dp1 .myDpHeaderBtn:focus,
      .dp1 .myDpMonthLabel:focus,
      .dp1 .myDpYearLabel:focus {
        color: #66afe9;
      }
      .dp1 .myDpDaycell:focus,
      .dp1 .myDpMonthcell:focus,
      .dp1 .myDpYearcell:focus {
        box-shadow: inset 0 0 0 1px #66afe9;
      }
      .dp1 .myDpSelector:focus {
        box-shadow: -1px 1px 6px 0px #ADD8E6;
      }
      .dp1 .myDpSelectorArrow:after {
        border-color: rgba(108, 117, 125, 0);
        border-bottom-color: #6c757d;
      }
      .dp1 .myDpSelectorArrow:focus:before {
        border-bottom-color: #ADD8E6;
      }
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
          color: #fff;
          font-weight: bold;
      }
      .dp1 .myDpDaycellWeekNbr {
        color: #fff;
        background-color: #6c757d;
      }
      .dp1 .myDpPrevMonth,
      .dp1 .myDpNextMonth {
          color: #bbb;
      }
      .dp1 .myDpWeekDayTitle {
        background-color: #6c757d;
        color: #fff;
        font-weight: bold;
      }
      .dp1 .myDpHeaderBtnEnabled:hover,
      .dp1 .myDpMonthLabel:hover,
      .dp1 .myDpYearLabel:hover,
      .dp1 .myDpFooterBtn:hover {
          color: #ddd;
      }
      .dp1 .myDpMarkCurrDay, 
      .dp1 .myDpMarkCurrMonth, 
      .dp1 .myDpMarkCurrYear {
          border-bottom: 2px solid #fff;
      }
      .dp1 .myDpDisabled {
          color: #fff;
          background: repeating-linear-gradient(-45deg, #6c757d 7px, #d3d3d3 8px, transparent 7px, transparent 14px);
      }
      .dp1 .myDpHighlight {
        color: 	#960018;
      }
      .dp1 .myDpTableSingleDay:hover, 
      .dp1 .myDpTableSingleMonth:hover, 
      .dp1 .myDpTableSingleYear:hover {
          background-color: #ddd;
          color: #000;
          font-weight: bold;
      }
      .dp1 .myDpDaycell,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
        background-color: #6c757d;
      }
      .dp1 .myDpRangeColor {
        background-color: #aaa;
        color: #fff;
      }
      .dp1 .myDpSelectedDay,
      .dp1 .myDpSelectedMonth,
      .dp1 .myDpSelectedYear {
        background-color: #aaa;
        color: #fff;
        font-weight: bold;
        box-shadow: inset 0 0 0 1px #fff;
      }
      .dp1 .myDpSelector,
      .dp1 .myDpMonthYearSelBar,
      .dp1 .myDpFooterBar {
        background-color: #6c757d;
      }
    `;
    } else if (color === 'Bold') {
      copy.stylesData.styles = `
      .dp1 .myDpHeaderBtn {
        font-size: 20px;
        font-weight: bold;
        color: #191aa5;
      }
      .dp1 .myDpWeekDayTitle {
        font-size: 16px;
        font-weight: bold;
        color: #191aa5;
      }
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
        font-size: 18px;
        font-weight: bold;
        color: #191aa5;
      }
      .dp1 .myDpPrevMonth,
      .dp1 .myDpNextMonth {
        color: cornflowerblue;
        font-weight: bold;
      }
      .dp1 .myDpMonthNbr {
        font-size: 14px;
      }
      .dp1 .myDpMarkCurrDay,
      .dp1 .myDpMarkCurrMonth,
      .dp1 .myDpMarkCurrYear {
        border-bottom: 2px solid #191aa5;
      }
      .dp1 .myDpDisabled {
        color: #999;
      }

      .dp1 .myDpHeaderBtn:focus,
      .dp1 .myDpMonthLabel:focus,
      .dp1 .myDpYearLabel:focus {
        color: #FFDAB9;
      }
      .dp1 .myDpDaycell:focus,
      .dp1 .myDpMonthcell:focus,
      .dp1 .myDpYearcell:focus {
        box-shadow: inset 0 0 0 1px #F4A460;
      }
      .dp1 .myDpSelector:focus {
        box-shadow: -1px 1px 6px 0px #FADABF;
      }
      .dp1 .myDpSelectorArrow:focus:before {
        border-bottom-color: #FADABF;
      }
      .dp1 .myDpHeaderBtnEnabled:hover,
      .dp1 .myDpMonthLabel:hover,
      .dp1 .myDpYearLabel:hover,
      .dp1 .myDpFooterBtn:hover {
          color: #F0E68C;
      }
      .dp1 .myDpTableSingleDay:hover, 
      .dp1 .myDpTableSingleMonth:hover, 
      .dp1 .myDpTableSingleYear:hover {
          background-color: #F0E68C;
          color: #113B08;
      }
      `;
      copy.selectorHeight = '300px';
      copy.selectorWidth = '300px';
    }
    this.myDatePickerOptions = copy;
  }
  onDefaultView(size) {
    let copy = this.getCopyOfOptions();
    if (size === 'date') {
      copy.defaultView = _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_0__.DefaultView.Date;
    } else if (size === 'month') {
      copy.defaultView = _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_0__.DefaultView.Month;
    } else {
      copy.defaultView = _projects_angular_mydatepicker_src_public_api__WEBPACK_IMPORTED_MODULE_0__.DefaultView.Year;
    }
    this.myDatePickerOptions = copy;
  }
  onChangeLocale(locale) {
    this.locale = locale.split(' | ')[0];
  }
  getCopyOfOptions() {
    return JSON.parse(JSON.stringify(this.myDatePickerOptions));
  }
  ngOnInit() {
    console.log('onInit(): SampleDatePickerNgModel');
  }
  // callbacks
  onDateChanged(event) {
    console.log('onDateChanged(): ', event);
    if (!event.isRange) {
      let {
        date,
        jsDate,
        formatted,
        epoc
      } = event.singleDate;
      if (formatted !== '') {
        this.selectedTextNormal = 'Formatted: ' + formatted + ' - epoc timestamp: ' + epoc;
        this.validDate = true;
        this.inputText = formatted;
      } else {
        this.selectedTextNormal = '';
      }
    } else {
      let {
        formatted
      } = event.dateRange;
      if (formatted !== '') {
        this.selectedTextNormal = 'Formatted: ' + formatted;
        this.validDate = true;
        this.inputText = formatted;
      } else {
        this.selectedTextNormal = '';
      }
    }
  }
  onInputFieldChanged(event) {
    console.log('onInputFieldChanged(): Value: ', event.value, ' - dateFormat: ', event.dateFormat, ' - valid: ', event.valid);
    this.validDate = event.valid;
    this.inputText = event.value;
  }
  onCalendarToggle(event) {
    console.log('onCalendarToggle(): Reason: ', event);
  }
  onCalendarViewChanged(event) {
    console.log('onCalendarViewChanged(): Year: ', event.year, ' - month: ', event.month, ' - first: ', event.first, ' - last: ', event.last);
  }
  onRangeDateSelection(event) {
    console.log('onRangeDateSelection(): event: ', event);
    /*
        let {isBegin, date, jsDate} = event;
    
        let options: IAngularMyDpOptions = this.getCopyOfOptions();
        if(isBegin) {
            // start date selection - set disable since (selected date + 7 days)
            this.ngxdp.writeValue({
              isRange: true,
              singleDate: null,
              dateRange: {
                beginDate: {year: 0, month: 0, day: 0},
                endDate: {year: 0, month: 0, day: 0}
              }
            });
    
            this.ngxdp.setHostValue("");
    
            let d = new Date(jsDate.getTime());
            d.setDate(d.getDate() + 7);
            
            options.disableSince = {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()};
            this.myDatePickerOptions = options;
    
            this.defMonth = {
              defMonth: date.month + '.' + date.year,
              overrideSelection: true
            };
        }
        else {
            // end date selection - remove disableSince option
            options.disableSince = {year: 0, month: 0, day: 0};
            this.myDatePickerOptions = options;
    
            let d: Date = new Date();
    
            let month: any = d.getMonth() + 1;
            if (month < 10) {
              month = '0' + month;
            }
    
            this.defMonth = {
              defMonth: month + '.' + d.getFullYear(),
              overrideSelection: false
            };
        }
    */
  }

  onViewActivated(event) {
    console.log('onViewActivated(): event: ', event);
  }
}
DatePickerNgmodel.ɵfac = function DatePickerNgmodel_Factory(t) {
  return new (t || DatePickerNgmodel)();
};
DatePickerNgmodel.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DatePickerNgmodel,
  selectors: [["date-picker-ngmodel"]],
  viewQuery: function DatePickerNgmodel_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.ngxdp = _t.first);
    }
  },
  decls: 226,
  vars: 41,
  consts: [[1, "settingstable"], [2, "margin-right", "10px"], [2, "padding", "2px", "cursor", "pointer", "font-size", "11px", "min-width", "60px", 3, "change"], [4, "ngFor", "ngForOf"], ["type", "checkbox", 2, "cursor", "pointer", 3, "checked", "change"], [1, "buttondiv"], ["type", "button", 2, "cursor", "pointer", 3, "click"], [1, "pickertable"], [1, "input-group", "inputGroup"], ["angular-mydatepicker", "", "name", "mydate", "autocomplete", "off", 1, "form-control", 3, "placeholder", "ngModel", "options", "defaultMonth", "locale", "ngModelChange", "dateChanged", "calendarViewChanged", "calendarToggle", "inputFieldChanged", "rangeDateSelection", "viewActivated"], ["dp", "angular-mydatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fa", "fa-close"], [1, "fa", "fa-calendar-o"], ["class", "border", 3, "ngClass", 4, "ngIf"], [1, "border", 3, "ngClass"], [4, "ngIf"]],
  template: function DatePickerNgmodel_Template(rf, ctx) {
    if (rf & 1) {
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "table", 0)(2, "tr")(3, "td")(4, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Locale:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span")(7, "select", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_select_change_7_listener($event) {
        return ctx.onChangeLocale($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, DatePickerNgmodel_option_8_Template, 2, 1, "option", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td")(10, "label")(11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Open selector top of input field:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_13_listener($event) {
        return ctx.onOpenSelectorTopOfInput($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "tr")(15, "td")(16, "label")(17, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Align selector right:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_19_listener($event) {
        return ctx.onAlignSelectorRight($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "td")(21, "label")(22, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Show selector arrow:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_24_listener($event) {
        return ctx.onShowSelectorArrow($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "tr")(26, "td")(27, "label")(28, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Month selector:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_30_listener($event) {
        return ctx.onMonthSelector($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "td")(32, "label")(33, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Year selector:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_35_listener($event) {
        return ctx.onYearSelector($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "tr")(37, "td")(38, "label")(39, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Disable today:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_41_listener($event) {
        return ctx.onDisableToday($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "td")(43, "label")(44, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Mark today:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_46_listener($event) {
        return ctx.onMarkToday($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "tr")(48, "td")(49, "label")(50, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Mark weekends:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_52_listener($event) {
        return ctx.onMarkWeekends($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "td")(54, "label")(55, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Disable weekends:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_57_listener($event) {
        return ctx.onDisableWeekends($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "tr")(59, "td")(60, "label")(61, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Highlight Saturday:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_63_listener($event) {
        return ctx.onHighlighSaturday($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "td")(65, "label")(66, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Highlight Sunday:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_68_listener($event) {
        return ctx.onHighlighSunday($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "tr")(70, "td")(71, "label")(72, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Highlight dates (today and tomorrow):");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_74_listener($event) {
        return ctx.onHighlightDates($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "td")(76, "label")(77, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Disable header buttons:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_79_listener($event) {
        return ctx.onDisableHeaderButtons($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "tr")(81, "td")(82, "label")(83, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Show week numbers:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_85_listener($event) {
        return ctx.onShowWeekNumbers($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "td")(87, "label")(88, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Disable input box:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_90_listener($event) {
        return ctx.onDisableInput($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "tr")(92, "td")(93, "label")(94, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Close selector on date select:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_96_listener($event) {
        return ctx.onCloseSelectorOnDateSelect($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "td")(98, "label")(99, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Close selector on document click:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_101_listener($event) {
        return ctx.onCloseSelectorOnDocumentClick($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "tr")(103, "td")(104, "label")(105, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Date range:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_107_listener($event) {
        return ctx.onDateRange($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "td")(109, "label")(110, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "Append selector to body:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_112_listener($event) {
        return ctx.onAppendSelectorToBody($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "tr")(114, "td")(115, "label")(116, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Disable Wednesday:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_118_listener($event) {
        return ctx.onDisableWednesday($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "td")(120, "label")(121, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "Disable 24th day of every month:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_123_listener($event) {
        return ctx.onDisable24Day($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "tr")(125, "td")(126, "label")(127, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Focus input box on date select:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_129_listener($event) {
        return ctx.onFocusInputOnDateSelect($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "td")(131, "label")(132, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "RTL:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_134_listener($event) {
        return ctx.onRtl($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "tr")(136, "td")(137, "label")(138, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Disable until yesterday:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_140_listener($event) {
        return ctx.onDisableUntilYesterday($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "td")(142, "label")(143, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "Disable since tomorrow:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_145_listener($event) {
        return ctx.onDisableSinceTomorrow($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "tr")(147, "td")(148, "label")(149, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "Show month number:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_151_listener($event) {
        return ctx.onShowMonthNumber($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "td")(153, "label")(154, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, "Show footer bar:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_156_listener($event) {
        return ctx.onShowFooterBar($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "tr")(158, "td")(159, "label")(160, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "Disable +-1 today (own style):");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_162_listener($event) {
        return ctx.onDisableOwnStyle($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "td")(164, "label")(165, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "Mark day after tomorrow + 2 (own style):");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_input_change_167_listener($event) {
        return ctx.onMarkOwnStyle($event.currentTarget.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "tr")(169, "td")(170, "label")(171, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, "Default view:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "span")(174, "select", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_select_change_174_listener($event) {
        return ctx.onDefaultView($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](175, DatePickerNgmodel_option_175_Template, 2, 1, "option", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "td")(177, "label")(178, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, "Selector size:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "span")(181, "select", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_select_change_181_listener($event) {
        return ctx.onSelectorSize($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](182, DatePickerNgmodel_option_182_Template, 2, 1, "option", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "tr")(184, "td")(185, "label")(186, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, "Calendar animation:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "span")(189, "select", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_select_change_189_listener($event) {
        return ctx.onCalendarAnimation($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](190, DatePickerNgmodel_option_190_Template, 2, 1, "option", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "td")(192, "label")(193, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, "Override styles:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "span")(196, "select", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DatePickerNgmodel_Template_select_change_196_listener($event) {
        return ctx.onOverrideCalColor($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](197, DatePickerNgmodel_option_197_Template, 2, 1, "option", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "div", 5)(199, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DatePickerNgmodel_Template_button_click_199_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](217);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r5.toggleCalendar());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "Toggle");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DatePickerNgmodel_Template_button_click_201_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](217);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r5.openCalendar());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, "Open");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DatePickerNgmodel_Template_button_click_203_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](217);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r5.closeCalendar());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DatePickerNgmodel_Template_button_click_205_listener() {
        return ctx.clearDate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, "Clear");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DatePickerNgmodel_Template_button_click_207_listener() {
        return ctx.setDate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](208, "Set date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DatePickerNgmodel_Template_button_click_209_listener() {
        return ctx.setDateRange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](210, "Set date range");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "table", 7)(212, "tr")(213, "td")(214, "form")(215, "div", 8)(216, "input", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DatePickerNgmodel_Template_input_ngModelChange_216_listener($event) {
        return ctx.model = $event;
      })("dateChanged", function DatePickerNgmodel_Template_input_dateChanged_216_listener($event) {
        return ctx.onDateChanged($event);
      })("calendarViewChanged", function DatePickerNgmodel_Template_input_calendarViewChanged_216_listener($event) {
        return ctx.onCalendarViewChanged($event);
      })("calendarToggle", function DatePickerNgmodel_Template_input_calendarToggle_216_listener($event) {
        return ctx.onCalendarToggle($event);
      })("inputFieldChanged", function DatePickerNgmodel_Template_input_inputFieldChanged_216_listener($event) {
        return ctx.onInputFieldChanged($event);
      })("rangeDateSelection", function DatePickerNgmodel_Template_input_rangeDateSelection_216_listener($event) {
        return ctx.onRangeDateSelection($event);
      })("viewActivated", function DatePickerNgmodel_Template_input_viewActivated_216_listener($event) {
        return ctx.onViewActivated($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "div", 11)(219, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DatePickerNgmodel_Template_button_click_219_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](217);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r5.clearDate());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](220, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](221, "div", 11)(222, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DatePickerNgmodel_Template_button_click_222_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](217);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r5.toggleCalendar());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](223, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](225, DatePickerNgmodel_div_225_Template, 3, 6, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.locales);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.defaultViews);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selectorSizes);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.calAnimations);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.styleColor);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", !ctx.myDatePickerOptions.dateRange ? "Select a date" : "Select a date range");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model)("options", ctx.myDatePickerOptions)("defaultMonth", ctx.defMonth)("locale", ctx.locale);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("disabled", ctx.disabled ? "" : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.inputText !== "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _projects_angular_mydatepicker_src_lib_angular_mydatepicker_input__WEBPACK_IMPORTED_MODULE_1__.AngularMyDatePickerDirective],
  styles: [".settingstable[_ngcontent-%COMP%], .pickertable[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n}\n\n.settingstable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 50%;\n  border: none;\n}\n\n.pickertable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\n.pickertable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  width: 290px;\n}\n\n.pickertable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  width: calc(100% - 260px);\n  padding-left: 20px;\n}\n\n.border[_ngcontent-%COMP%] {\n  padding: 4px;\n  border-radius: 4px;\n  float: right;\n  width: 100%;\n}\n\n.buttondiv[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n\n.okDate[_ngcontent-%COMP%] {\n  color: #3c764d;\n  background-color: #dff0d6;\n  border: 1px solid #d6e9c2;\n}\n\n.invalidDate[_ngcontent-%COMP%] {\n  color: #a94444;\n  background-color: #f1dede;\n  border: 1px solid #ebccd2;\n}\n\n.inputGroup[_ngcontent-%COMP%] {\n  width: 266px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2V4YW1wbGUvYXBwL2RhdGUtcGlja2VyLW5nbW9kZWwvZGF0ZS1waWNrZXItbmdtb2RlbC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3N0YWJsZSxcbi5waWNrZXJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5zZXR0aW5nc3RhYmxlIHRyIHRkIHtcbiAgd2lkdGg6IDUwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ucGlja2VydGFibGUgdHIgdGQge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ucGlja2VydGFibGUgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogMjkwcHg7XG59XG5cbi5waWNrZXJ0YWJsZSB0ciB0ZDpsYXN0LWNoaWxkIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI2MHB4KTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uYm9yZGVyIHtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b25kaXYge1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuLm9rRGF0ZSB7XG4gIGNvbG9yOiAjM2M3NjRkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmMGQ2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDZlOWMyO1xufVxuXG4uaW52YWxpZERhdGUge1xuICBjb2xvcjogI2E5NDQ0NDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZGVkZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViY2NkMjtcbn1cblxuLmlucHV0R3JvdXAge1xuICB3aWR0aDogMjY2cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 578:
/*!**************************************************!*\
  !*** ./example/app/date-picker-ngmodel/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatePickerNgmodel": () => (/* reexport safe */ _date_picker_ngmodel__WEBPACK_IMPORTED_MODULE_0__.DatePickerNgmodel)
/* harmony export */ });
/* harmony import */ var _date_picker_ngmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-picker-ngmodel */ 7481);


/***/ }),

/***/ 1076:
/*!******************************************************************************!*\
  !*** ./example/app/date-picker-reactive-forms/date-picker-reactive-forms.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatePickerReactiveForms": () => (/* binding */ DatePickerReactiveForms)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _projects_angular_mydatepicker_src_lib_angular_mydatepicker_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular-mydatepicker/src/lib/angular-mydatepicker.input */ 3698);





const _c0 = ["dp"];
function DatePickerReactiveForms_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Date is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DatePickerReactiveForms_p_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid date format!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class DatePickerReactiveForms {
  constructor(formBuilder, renderer, cdr) {
    this.formBuilder = formBuilder;
    this.renderer = renderer;
    this.cdr = cdr;
    this.myDatePickerOptions = {
      dateRange: false,
      dateFormat: 'dd.mm.yyyy'
    };
    this.disabled = false;
  }
  ngOnInit() {
    console.log('onInit(): SampleDatePickerReacticeForms');
    let d = new Date();
    d.setDate(d.getDate() + 2);
    let model = {
      isRange: false,
      singleDate: {
        jsDate: d
      },
      dateRange: null
    };
    this.myForm = this.formBuilder.group({
      myDate: [model, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required] // this example is initialized to specific date
    });
  }

  onSubmitReactiveForms() {
    console.log('Value: ', this.myForm.controls['myDate'].value, ' - Valid: ', this.myForm.controls['myDate'].valid, ' - Dirty: ', this.myForm.controls['myDate'].dirty, ' - Touched: ', this.myForm.controls['myDate'].touched);
  }
  toggleCalendar() {
    this.cdr.detectChanges();
    this.myDp.toggleCalendar();
  }
  setTodayDate() {
    // Set today using the setValue function
    let date = new Date();
    let model = {
      isRange: false,
      singleDate: {
        jsDate: date
      },
      dateRange: null
    };
    this.myForm.setValue({
      myDate: model
    });
  }
  resetTomorrowDate() {
    // Reset date picker to specific date (tomorrow)
    let date = new Date();
    date.setDate(date.getDate() + 1);
    let model = {
      isRange: false,
      singleDate: {
        jsDate: date
      },
      dateRange: null
    };
    this.myForm.reset({
      myDate: model
    });
  }
  clearDate() {
    // Clear the date using the setValue function
    this.myForm.setValue({
      myDate: null
    });
  }
  disable() {
    this.disabled = !this.disabled;
    if (this.disabled) {
      this.myForm.get('myDate').disable();
    } else {
      this.myForm.get('myDate').enable();
    }
  }
}
DatePickerReactiveForms.ɵfac = function DatePickerReactiveForms_Factory(t) {
  return new (t || DatePickerReactiveForms)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
};
DatePickerReactiveForms.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DatePickerReactiveForms,
  selectors: [["date-picker-reactive-forms"]],
  viewQuery: function DatePickerReactiveForms_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.myDp = _t.first);
    }
  },
  decls: 26,
  vars: 5,
  consts: [[1, "table"], [1, "td"], ["novalidate", "", 1, "form", 3, "formGroup", "ngSubmit"], [1, "input-group"], ["placeholder", "Select a date", "angular-mydatepicker", "", "name", "reactiveFormsDate", "formControlName", "myDate", "autocomplete", "off", 1, "form-control", 3, "options", "click"], ["dp", "angular-mydatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fa", "fa-close"], [1, "fa", "fa-calendar-o"], [1, "btnGroup"], ["type", "submit", 1, "button"], ["type", "button", 1, "button", 3, "click"], ["class", "error", 4, "ngIf"], [1, "error"]],
  template: function DatePickerReactiveForms_Template(rf, ctx) {
    if (rf & 1) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0)(1, "tr")(2, "td", 1)(3, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DatePickerReactiveForms_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmitReactiveForms();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerReactiveForms_Template_input_click_5_listener() {
        return ctx.toggleCalendar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerReactiveForms_Template_button_click_8_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.clearDate());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerReactiveForms_Template_button_click_11_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.toggleCalendar());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10)(14, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerReactiveForms_Template_button_click_16_listener() {
        return ctx.setTodayDate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Set Today");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerReactiveForms_Template_button_click_18_listener() {
        return ctx.resetTomorrowDate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Reset Tomorrow");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerReactiveForms_Template_button_click_20_listener() {
        return ctx.clearDate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Set Empty");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerReactiveForms_Template_button_click_22_listener() {
        return ctx.disable();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, DatePickerReactiveForms_p_24_Template, 2, 0, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, DatePickerReactiveForms_p_25_Template, 2, 0, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.myDatePickerOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx.disabled ? "Disable" : "Enable");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myForm.controls.myDate.errors && ctx.myForm.controls.myDate.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myForm.controls.myDate.errors && ctx.myForm.controls.myDate.errors.invalidDateFormat);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _projects_angular_mydatepicker_src_lib_angular_mydatepicker_input__WEBPACK_IMPORTED_MODULE_0__.AngularMyDatePickerDirective],
  styles: [".table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.table[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  width: 50%;\n  vertical-align: top;\n  border: none;\n}\n\n.title[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.button[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.error[_ngcontent-%COMP%] {\n  width: 202px;\n  padding: 4px;\n  border: 1px solid #ebccd2;\n  color: #a94444;\n  background-color: #f2dede;\n  border-radius: 2px;\n  margin-top: 10px;\n}\n\n.btnGroup[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.form[_ngcontent-%COMP%] {\n  width: 260px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2V4YW1wbGUvYXBwL2RhdGUtcGlja2VyLXJlYWN0aXZlLWZvcm1zL2RhdGUtcGlja2VyLXJlYWN0aXZlLWZvcm1zLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFibGUgLnRkIHtcbiAgd2lkdGg6IDUwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZXJyb3Ige1xuICB3aWR0aDogMjAycHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViY2NkMjtcbiAgY29sb3I6ICNhOTQ0NDQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmRlZGU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJ0bkdyb3VwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmZvcm0ge1xuICB3aWR0aDogMjYwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8225:
/*!*********************************************************!*\
  !*** ./example/app/date-picker-reactive-forms/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatePickerReactiveForms": () => (/* reexport safe */ _date_picker_reactive_forms__WEBPACK_IMPORTED_MODULE_0__.DatePickerReactiveForms)
/* harmony export */ });
/* harmony import */ var _date_picker_reactive_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-picker-reactive-forms */ 1076);


/***/ }),

/***/ 4548:
/*!*********************************************!*\
  !*** ./example/environments/environment.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 8428:
/*!*************************!*\
  !*** ./example/main.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 405);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4548);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 3698:
/*!*****************************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/angular-mydatepicker.input.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularMyDatePickerDirective": () => (/* binding */ AngularMyDatePickerDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/calendar/calendar.component */ 700);
/* harmony import */ var _services_angular_mydatepicker_locale_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/angular-mydatepicker.locale.service */ 74);
/* harmony import */ var _services_angular_mydatepicker_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/angular-mydatepicker.util.service */ 4794);
/* harmony import */ var _services_angular_mydatepicker_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/angular-mydatepicker.config.service */ 6147);
/* harmony import */ var _enums_cal_toggle_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums/cal-toggle.enum */ 9927);
/* harmony import */ var _enums_year_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enums/year.enum */ 3227);
/* harmony import */ var _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enums/key-code.enum */ 4970);
/* harmony import */ var _enums_cal_animation_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enums/cal-animation.enum */ 8697);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/constants */ 5384);















const NGX_DP_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.forwardRef)(() => AngularMyDatePickerDirective),
  multi: true
};
const NGX_DP_VALIDATORS = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALIDATORS,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.forwardRef)(() => AngularMyDatePickerDirective),
  multi: true
};
class AngularMyDatePickerDirective {
  constructor(localeService, utilService, vcRef, cfr, renderer, cdr, elem, config) {
    this.localeService = localeService;
    this.utilService = utilService;
    this.vcRef = vcRef;
    this.cfr = cfr;
    this.renderer = renderer;
    this.cdr = cdr;
    this.elem = elem;
    this.config = config;
    this.defaultMonth = {
      defMonth: _constants_constants__WEBPACK_IMPORTED_MODULE_8__.EMPTY_STR,
      overrideSelection: false
    };
    this.dateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.inputFieldChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.calendarViewChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.calendarToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.rangeDateSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.viewActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.cRef = null;
    this.hostText = _constants_constants__WEBPACK_IMPORTED_MODULE_8__.EMPTY_STR;
    this.preventClose = false;
    this.disabled = false;
    this.selectedValue = null;
    this.onChangeCb = () => {};
    this.onTouchedCb = () => {};
    this.onClickWrapper = event => this.onClick(event);
    this.onAnimateWrapper = reason => this.animationEnd(reason);
    this.opts = this.config.getDefaultConfig();
    this.parseOptions(this.opts);
  }
  onKeyUp(event) {
    const keyCode = this.utilService.getKeyCodeFromEvent(event);
    if (this.ignoreKeyPress(keyCode)) {
      return;
    }
    if (keyCode === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_6__.KeyCode.esc) {
      this.closeSelector(_enums_cal_toggle_enum__WEBPACK_IMPORTED_MODULE_4__.CalToggle.CloseByEsc);
    } else {
      const {
        dateRange,
        dateFormat,
        monthLabels,
        dateRangeDatesDelimiter
      } = this.opts;
      const value = this.getHostValue();
      let dateModel = null;
      let valid = false;
      let validateOpts = null;
      if (!dateRange) {
        validateOpts = {
          validateDisabledDates: true,
          selectedValue: this.utilService.getSelectedValue(this.selectedValue, false)
        };
        const date = this.utilService.isDateValid(value, this.opts, validateOpts);
        valid = this.utilService.isInitializedDate(date);
        if (valid) {
          dateModel = this.utilService.getDateModel(date, null, dateFormat, monthLabels, dateRangeDatesDelimiter);
        }
      } else {
        validateOpts = {
          validateDisabledDates: true,
          selectedValue: this.utilService.getSelectedValue(this.selectedValue, true)
        };
        const range = this.utilService.isDateValidDateRange(value, this.opts, validateOpts);
        const {
          begin,
          end
        } = range;
        valid = this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end);
        if (valid) {
          dateModel = this.utilService.getDateModel(null, range, dateFormat, monthLabels, dateRangeDatesDelimiter);
        }
      }
      this.onChangeCb(dateModel);
      this.emitInputFieldChanged(value, valid);
    }
  }
  onBlur() {
    const {
      inputFieldValidation,
      dateRange,
      dateFormat,
      monthLabels,
      dateRangeDatesDelimiter,
      closeSelectorOnDateSelect
    } = this.opts;
    if (inputFieldValidation) {
      const value = this.getHostValue();
      let valid = false;
      let validateOpts = null;
      if (!dateRange) {
        validateOpts = {
          validateDisabledDates: true,
          selectedValue: this.utilService.getSelectedValue(this.selectedValue, false)
        };
        const date = this.utilService.isDateValid(value, this.opts, validateOpts);
        valid = this.utilService.isInitializedDate(date);
        if (valid && this.hostText !== value) {
          // Valid date
          const dateModel = this.utilService.getDateModel(date, null, dateFormat, monthLabels, dateRangeDatesDelimiter);
          this.emitDateChanged(dateModel);
          this.updateModel(dateModel);
          if (closeSelectorOnDateSelect) {
            this.closeSelector(_enums_cal_toggle_enum__WEBPACK_IMPORTED_MODULE_4__.CalToggle.CloseByDateSel);
          }
        }
      } else {
        validateOpts = {
          validateDisabledDates: true,
          selectedValue: this.utilService.getSelectedValue(this.selectedValue, true)
        };
        const dateRange = this.utilService.isDateValidDateRange(value, this.opts, validateOpts);
        const {
          begin,
          end
        } = dateRange;
        valid = this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end);
        if (valid && this.hostText !== value) {
          // Valid date range
          const dateModel = this.utilService.getDateModel(null, dateRange, dateFormat, monthLabels, dateRangeDatesDelimiter);
          this.emitDateChanged(dateModel);
          this.updateModel(dateModel);
          if (closeSelectorOnDateSelect) {
            this.closeSelector(_enums_cal_toggle_enum__WEBPACK_IMPORTED_MODULE_4__.CalToggle.CloseByDateSel);
          }
        }
      }
      if (!valid && this.hostText !== value) {
        if (value === _constants_constants__WEBPACK_IMPORTED_MODULE_8__.EMPTY_STR) {
          this.clearDate();
        } else {
          this.onChangeCb(null);
        }
      }
      this.hostText = value;
    }
    this.onTouchedCb();
  }
  onClick(event) {
    if (this.opts.closeSelectorOnDocumentClick && !this.preventClose && event.target && this.cRef && this.elem.nativeElement !== event.target && !this.cRef.location.nativeElement.contains(event.target) && !this.disabled) {
      this.closeSelector(_enums_cal_toggle_enum__WEBPACK_IMPORTED_MODULE_4__.CalToggle.CloseByOutClick);
    }
  }
  ngOnChanges(changes) {
    if (changes.hasOwnProperty(_constants_constants__WEBPACK_IMPORTED_MODULE_8__.LOCALE)) {
      this.setLocaleOptions();
    }
    if (changes.hasOwnProperty(_constants_constants__WEBPACK_IMPORTED_MODULE_8__.DEFAULT_MONTH)) {
      let dm = changes[_constants_constants__WEBPACK_IMPORTED_MODULE_8__.DEFAULT_MONTH].currentValue;
      if (typeof dm === _constants_constants__WEBPACK_IMPORTED_MODULE_8__.OBJECT) {
        if (!dm.overrideSelection) {
          dm.overrideSelection = false;
        }
      } else {
        dm = {
          defMonth: dm,
          overrideSelection: false
        };
      }
      this.defaultMonth = dm;
    }
    if (changes.hasOwnProperty(_constants_constants__WEBPACK_IMPORTED_MODULE_8__.OPTIONS)) {
      this.parseOptions(changes[_constants_constants__WEBPACK_IMPORTED_MODULE_8__.OPTIONS].currentValue);
    }
    if (this.cRef) {
      this.cRef.instance.refreshComponent(this.opts, this.defaultMonth, this.selectedValue, this.getHostValue());
    }
  }
  ngOnDestroy() {
    this.closeCalendar();
  }
  setLocaleOptions() {
    const opts = this.localeService.getLocaleOptions(this.locale);
    Object.keys(opts).forEach(k => {
      this.opts[k] = opts[k];
    });
  }
  parseOptions(opts) {
    if (opts) {
      Object.keys(opts).forEach(k => {
        this.opts[k] = opts[k];
      });
    }
    const {
      minYear,
      maxYear,
      openSelectorTopOfInput,
      inline
    } = this.opts;
    if (minYear < _enums_year_enum__WEBPACK_IMPORTED_MODULE_5__.Year.min) {
      this.opts.minYear = _enums_year_enum__WEBPACK_IMPORTED_MODULE_5__.Year.min;
    }
    if (maxYear > _enums_year_enum__WEBPACK_IMPORTED_MODULE_5__.Year.max) {
      this.opts.maxYear = _enums_year_enum__WEBPACK_IMPORTED_MODULE_5__.Year.max;
    }
    if (openSelectorTopOfInput || inline) {
      this.opts.showSelectorArrow = false;
    }
    if (inline) {
      this.openCalendar();
    }
  }
  writeValue(value) {
    if (this.disabled) {
      return;
    }
    let validateOpts = null;
    const {
      dateFormat,
      monthLabels,
      dateRangeDatesDelimiter,
      inline
    } = this.opts;
    if (!value) {
      this.setHostValue(_constants_constants__WEBPACK_IMPORTED_MODULE_8__.EMPTY_STR);
      this.emitInputFieldChanged(_constants_constants__WEBPACK_IMPORTED_MODULE_8__.EMPTY_STR, false);
      if (this.cRef) {
        this.cRef.instance.resetDateValue();
      }
    } else if (!value.isRange && value.singleDate) {
      // single date
      let {
        date,
        jsDate
      } = value.singleDate;
      if (!date) {
        date = this.utilService.jsDateToMyDate(jsDate);
      }
      const formatted = this.utilService.formatDate(date, dateFormat, monthLabels);
      validateOpts = {
        validateDisabledDates: false,
        selectedValue: this.utilService.getSelectedValue(this.selectedValue, false)
      };
      const valid = this.utilService.isInitializedDate(this.utilService.isDateValid(formatted, this.opts, validateOpts));
      if (valid) {
        this.setHostValue(formatted);
        this.emitInputFieldChanged(formatted, valid);
        this.setSelectedValue(this.utilService.getDateModel(date, null, dateFormat, monthLabels, dateRangeDatesDelimiter));
        if (this.cRef) {
          this.cRef.instance.refreshComponent(this.opts, this.defaultMonth, this.selectedValue, this.getHostValue());
        }
      }
    } else if (value.isRange && value.dateRange) {
      // date range
      let {
        beginDate,
        beginJsDate,
        endDate,
        endJsDate
      } = value.dateRange;
      if (!beginDate || !endDate) {
        beginDate = this.utilService.jsDateToMyDate(beginJsDate);
        endDate = this.utilService.jsDateToMyDate(endJsDate);
      }
      const formatted = this.utilService.formatDate(beginDate, dateFormat, monthLabels) + dateRangeDatesDelimiter + this.utilService.formatDate(endDate, dateFormat, monthLabels);
      validateOpts = {
        validateDisabledDates: false,
        selectedValue: this.utilService.getSelectedValue(this.selectedValue, true)
      };
      const {
        begin,
        end
      } = this.utilService.isDateValidDateRange(formatted, this.opts, validateOpts);
      const valid = this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end);
      if (valid) {
        this.setHostValue(formatted);
        this.emitInputFieldChanged(formatted, valid);
        const dateRange = {
          begin: beginDate,
          end: endDate
        };
        this.setSelectedValue(this.utilService.getDateModel(null, dateRange, dateFormat, monthLabels, dateRangeDatesDelimiter));
        if (this.cRef) {
          this.cRef.instance.refreshComponent(this.opts, this.defaultMonth, this.selectedValue, this.getHostValue());
        }
      }
    }
  }
  registerOnChange(fn) {
    this.onChangeCb = fn;
  }
  registerOnTouched(fn) {
    this.onTouchedCb = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.renderer.setProperty(this.elem.nativeElement, _constants_constants__WEBPACK_IMPORTED_MODULE_8__.DISABLED, isDisabled);
    if (isDisabled) {
      this.closeCalendar();
    }
  }
  validate(c) {
    const value = this.getHostValue();
    if (value === null || value === _constants_constants__WEBPACK_IMPORTED_MODULE_8__.EMPTY_STR) {
      return null;
    }
    let validateOpts = null;
    if (!this.opts.dateRange) {
      validateOpts = {
        validateDisabledDates: true,
        selectedValue: this.utilService.getSelectedValue(this.selectedValue, false)
      };
      const date = this.utilService.isDateValid(value, this.opts, validateOpts);
      if (!this.utilService.isInitializedDate(date)) {
        return {
          invalidDateFormat: true
        };
      }
    } else {
      validateOpts = {
        validateDisabledDates: true,
        selectedValue: this.utilService.getSelectedValue(this.selectedValue, true)
      };
      const {
        begin,
        end
      } = this.utilService.isDateValidDateRange(value, this.opts, validateOpts);
      if (!this.utilService.isInitializedDate(begin) || !this.utilService.isInitializedDate(end)) {
        return {
          invalidDateFormat: true
        };
      }
    }
    return null;
  }
  openCalendar() {
    if (this.disabled) {
      return;
    }
    this.preventClose = true;
    this.cdr.detectChanges();
    if (this.cRef === null) {
      this.cRef = this.vcRef.createComponent(this.cfr.resolveComponentFactory(_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_0__.CalendarComponent));
      this.appendSelector(this.cRef.location.nativeElement);
      this.cRef.instance.initializeComponent(this.opts, this.defaultMonth, this.selectedValue, this.getHostValue(), this.getSelectorPosition(this.elem.nativeElement), (dm, close) => {
        this.focusToInput();
        this.emitDateChanged(dm);
        this.emitInputFieldChanged(this.utilService.getFormattedDate(dm), true);
        this.updateModel(dm);
        if (close) {
          this.closeSelector(_enums_cal_toggle_enum__WEBPACK_IMPORTED_MODULE_4__.CalToggle.CloseByDateSel);
        }
      }, cvc => {
        this.emitCalendarChanged(cvc);
      }, rds => {
        this.emitRangeDateSelection(rds);
      }, va => {
        this.emitViewActivated(va);
      }, () => {
        this.closeSelector(_enums_cal_toggle_enum__WEBPACK_IMPORTED_MODULE_4__.CalToggle.CloseByEsc);
      });
      this.emitCalendarToggle(_enums_cal_toggle_enum__WEBPACK_IMPORTED_MODULE_4__.CalToggle.Open);
      if (!this.opts.inline) {
        document.addEventListener(_constants_constants__WEBPACK_IMPORTED_MODULE_8__.CLICK, this.onClickWrapper);
      }
    }
    setTimeout(() => {
      this.preventClose = false;
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_8__.PREVENT_CLOSE_TIMEOUT);
  }
  closeCalendar() {
    this.closeSelector(_enums_cal_toggle_enum__WEBPACK_IMPORTED_MODULE_4__.CalToggle.CloseByCalBtn);
  }
  toggleCalendar() {
    if (this.disabled) {
      return;
    }
    const isOpen = this.cRef === null;
    if (isOpen) {
      this.openCalendar();
    } else {
      this.closeSelector(_enums_cal_toggle_enum__WEBPACK_IMPORTED_MODULE_4__.CalToggle.CloseByCalBtn);
    }
    return isOpen;
  }
  clearDate() {
    if (this.disabled) {
      return;
    }
    const {
      inline
    } = this.opts;
    this.setHostValue(_constants_constants__WEBPACK_IMPORTED_MODULE_8__.EMPTY_STR);
    this.emitDateChanged({
      isRange: this.opts.dateRange,
      singleDate: {
        date: this.utilService.resetDate(),
        jsDate: null,
        formatted: _constants_constants__WEBPACK_IMPORTED_MODULE_8__.EMPTY_STR,
        epoc: 0
      },
      dateRange: {
        beginDate: this.utilService.resetDate(),
        beginJsDate: null,
        beginEpoc: 0,
        endDate: this.utilService.resetDate(),
        endJsDate: null,
        endEpoc: 0,
        formatted: _constants_constants__WEBPACK_IMPORTED_MODULE_8__.EMPTY_STR
      }
    });
    this.onChangeCb(null);
    this.onTouchedCb();
    if (this.cRef) {
      this.cRef.instance.clearDate();
    }
    if (!inline) {
      this.closeSelector(_enums_cal_toggle_enum__WEBPACK_IMPORTED_MODULE_4__.CalToggle.CloseByCalBtn);
    }
  }
  isDateValid() {
    const value = this.getHostValue();
    if (value === null || value === _constants_constants__WEBPACK_IMPORTED_MODULE_8__.EMPTY_STR) {
      return false;
    }
    let validateOpts = null;
    if (!this.opts.dateRange) {
      validateOpts = {
        validateDisabledDates: true,
        selectedValue: this.utilService.getSelectedValue(this.selectedValue, false)
      };
      const date = this.utilService.isDateValid(value, this.opts, validateOpts);
      if (this.utilService.isInitializedDate(date)) {
        this.emitInputFieldChanged(value, true);
        return true;
      }
    } else {
      validateOpts = {
        validateDisabledDates: true,
        selectedValue: this.utilService.getSelectedValue(this.selectedValue, true)
      };
      const {
        begin,
        end
      } = this.utilService.isDateValidDateRange(value, this.opts, validateOpts);
      if (this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end)) {
        this.emitInputFieldChanged(value, true);
        return true;
      }
    }
    this.emitInputFieldChanged(value, false);
    return false;
  }
  headerAction(headerAction) {
    if (this.cRef) {
      this.cRef.instance.headerAction(headerAction);
    }
  }
  setHostValue(value) {
    const {
      divHostElement
    } = this.opts;
    this.hostText = value;
    const valueType = !divHostElement.enabled ? _constants_constants__WEBPACK_IMPORTED_MODULE_8__.VALUE : _constants_constants__WEBPACK_IMPORTED_MODULE_8__.INNER_HTML;
    value = valueType === _constants_constants__WEBPACK_IMPORTED_MODULE_8__.INNER_HTML && value === _constants_constants__WEBPACK_IMPORTED_MODULE_8__.EMPTY_STR ? divHostElement.placeholder : value;
    this.renderer.setProperty(this.elem.nativeElement, valueType, value);
  }
  ignoreKeyPress(keyCode) {
    return keyCode === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_6__.KeyCode.leftArrow || keyCode === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_6__.KeyCode.rightArrow || keyCode === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_6__.KeyCode.upArrow || keyCode === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_6__.KeyCode.downArrow || keyCode === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_6__.KeyCode.tab || keyCode === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_6__.KeyCode.shift;
  }
  animationEnd(reason) {
    if (this.cRef) {
      this.cRef.instance.selectorEl.nativeElement.removeEventListener(_constants_constants__WEBPACK_IMPORTED_MODULE_8__.ANIMATION_END, this.onAnimateWrapper);
      this.removeComponent();
      this.emitCalendarToggle(reason);
    }
  }
  closeSelector(reason) {
    const {
      inline,
      calendarAnimation
    } = this.opts;
    if (this.cRef && !inline) {
      if (calendarAnimation.out !== _enums_cal_animation_enum__WEBPACK_IMPORTED_MODULE_7__.CalAnimation.None) {
        const {
          instance
        } = this.cRef;
        instance.selectorEl.nativeElement.addEventListener(_constants_constants__WEBPACK_IMPORTED_MODULE_8__.ANIMATION_END, this.onAnimateWrapper.bind(this, reason));
        instance.setCalendarAnimation(calendarAnimation, false);
        // In case the animationend event is not fired
        setTimeout(this.onAnimateWrapper.bind(this, reason), _constants_constants__WEBPACK_IMPORTED_MODULE_8__.ANIMATION_TIMEOUT);
      } else {
        this.removeComponent();
        this.emitCalendarToggle(reason);
      }
      document.removeEventListener(_constants_constants__WEBPACK_IMPORTED_MODULE_8__.CLICK, this.onClickWrapper);
    }
  }
  removeComponent() {
    if (this.vcRef !== null) {
      this.vcRef.remove(this.vcRef.indexOf(this.cRef.hostView));
      this.cRef = null;
    }
  }
  updateModel(model) {
    this.setHostValue(this.utilService.getFormattedDate(model));
    this.onChangeCb(model);
    this.onTouchedCb();
  }
  getHostValue() {
    const {
      value,
      innerHTML
    } = this.elem.nativeElement;
    return !this.opts.divHostElement.enabled ? value : innerHTML;
  }
  focusToInput() {
    const {
      focusInputOnDateSelect,
      divHostElement
    } = this.opts;
    if (focusInputOnDateSelect && !divHostElement.enabled) {
      setTimeout(() => {
        this.elem.nativeElement.focus();
      });
    }
  }
  emitDateChanged(dateModel) {
    this.dateChanged.emit(dateModel);
    this.setSelectedValue(dateModel);
  }
  setSelectedValue(dateModel) {
    const {
      isRange,
      dateRange,
      singleDate
    } = dateModel;
    this.selectedValue = isRange ? dateRange : singleDate;
  }
  emitInputFieldChanged(value, valid) {
    this.inputFieldChanged.emit({
      value,
      dateFormat: this.opts.dateFormat,
      valid
    });
  }
  emitCalendarChanged(cvc) {
    this.calendarViewChanged.emit(cvc);
  }
  emitRangeDateSelection(rds) {
    this.rangeDateSelection.emit(rds);
  }
  emitViewActivated(va) {
    this.viewActivated.emit(va);
  }
  emitCalendarToggle(reason) {
    this.calendarToggle.emit(reason);
  }
  appendSelector(elem) {
    if (this.opts.appendSelectorToBody) {
      document.querySelector(_constants_constants__WEBPACK_IMPORTED_MODULE_8__.BODY).appendChild(elem);
    }
  }
  getSelectorPosition(elem) {
    let top = 0;
    let left = 0;
    const {
      appendSelectorToBody,
      openSelectorTopOfInput,
      selectorHeight,
      selectorWidth,
      showSelectorArrow,
      alignSelectorRight
    } = this.opts;
    if (appendSelectorToBody) {
      const b = document.body.getBoundingClientRect();
      const e = elem.getBoundingClientRect();
      top = e.top - b.top;
      left = e.left - b.left;
    }
    if (openSelectorTopOfInput) {
      top = top - this.getSelectorDimension(selectorHeight) - 2;
    } else {
      top = top + elem.offsetHeight + (showSelectorArrow ? 12 : 2);
    }
    if (alignSelectorRight) {
      left = left + elem.offsetWidth - this.getSelectorDimension(selectorWidth);
    }
    return {
      top: top + _constants_constants__WEBPACK_IMPORTED_MODULE_8__.PX,
      left: left + _constants_constants__WEBPACK_IMPORTED_MODULE_8__.PX
    };
  }
  getSelectorDimension(value) {
    return Number(value.replace(_constants_constants__WEBPACK_IMPORTED_MODULE_8__.PX, _constants_constants__WEBPACK_IMPORTED_MODULE_8__.EMPTY_STR));
  }
}
AngularMyDatePickerDirective.ɵfac = function AngularMyDatePickerDirective_Factory(t) {
  return new (t || AngularMyDatePickerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_angular_mydatepicker_locale_service__WEBPACK_IMPORTED_MODULE_1__.LocaleService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_angular_mydatepicker_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_angular_mydatepicker_config_service__WEBPACK_IMPORTED_MODULE_3__.DefaultConfigService));
};
AngularMyDatePickerDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
  type: AngularMyDatePickerDirective,
  selectors: [["", "angular-mydatepicker", ""]],
  hostBindings: function AngularMyDatePickerDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup", function AngularMyDatePickerDirective_keyup_HostBindingHandler($event) {
        return ctx.onKeyUp($event);
      })("blur", function AngularMyDatePickerDirective_blur_HostBindingHandler() {
        return ctx.onBlur();
      });
    }
  },
  inputs: {
    options: "options",
    locale: "locale",
    defaultMonth: "defaultMonth"
  },
  outputs: {
    dateChanged: "dateChanged",
    inputFieldChanged: "inputFieldChanged",
    calendarViewChanged: "calendarViewChanged",
    calendarToggle: "calendarToggle",
    rangeDateSelection: "rangeDateSelection",
    viewActivated: "viewActivated"
  },
  exportAs: ["angular-mydatepicker"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([_services_angular_mydatepicker_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService, _services_angular_mydatepicker_locale_service__WEBPACK_IMPORTED_MODULE_1__.LocaleService, _services_angular_mydatepicker_config_service__WEBPACK_IMPORTED_MODULE_3__.DefaultConfigService, NGX_DP_VALUE_ACCESSOR, NGX_DP_VALIDATORS]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]]
});

/***/ }),

/***/ 9962:
/*!******************************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/angular-mydatepicker.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularMyDatePickerModule": () => (/* binding */ AngularMyDatePickerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/calendar/calendar.component */ 700);
/* harmony import */ var _components_selection_bar_selection_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/selection-bar/selection-bar.component */ 4071);
/* harmony import */ var _components_day_view_day_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/day-view/day-view.component */ 2765);
/* harmony import */ var _components_month_view_month_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/month-view/month-view.component */ 9047);
/* harmony import */ var _components_year_view_year_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/year-view/year-view.component */ 2504);
/* harmony import */ var _components_footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer-bar/footer-bar.component */ 8004);
/* harmony import */ var _angular_mydatepicker_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./angular-mydatepicker.input */ 3698);
/* harmony import */ var _directives_angular_mydatepicker_calendar_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/angular-mydatepicker-calendar.directive */ 3971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);











class AngularMyDatePickerModule {}
AngularMyDatePickerModule.ɵfac = function AngularMyDatePickerModule_Factory(t) {
  return new (t || AngularMyDatePickerModule)();
};
AngularMyDatePickerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AngularMyDatePickerModule
});
AngularMyDatePickerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AngularMyDatePickerModule, {
    declarations: [_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_0__.CalendarComponent, _components_selection_bar_selection_bar_component__WEBPACK_IMPORTED_MODULE_1__.SelectionBarComponent, _components_day_view_day_view_component__WEBPACK_IMPORTED_MODULE_2__.DayViewComponent, _components_month_view_month_view_component__WEBPACK_IMPORTED_MODULE_3__.MonthViewComponent, _components_year_view_year_view_component__WEBPACK_IMPORTED_MODULE_4__.YearViewComponent, _components_footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_5__.FooterBarComponent, _angular_mydatepicker_input__WEBPACK_IMPORTED_MODULE_6__.AngularMyDatePickerDirective, _directives_angular_mydatepicker_calendar_directive__WEBPACK_IMPORTED_MODULE_7__.AngularMyDatePickerCalendarDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule],
    exports: [_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_0__.CalendarComponent, _components_selection_bar_selection_bar_component__WEBPACK_IMPORTED_MODULE_1__.SelectionBarComponent, _components_day_view_day_view_component__WEBPACK_IMPORTED_MODULE_2__.DayViewComponent, _components_month_view_month_view_component__WEBPACK_IMPORTED_MODULE_3__.MonthViewComponent, _components_year_view_year_view_component__WEBPACK_IMPORTED_MODULE_4__.YearViewComponent, _components_footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_5__.FooterBarComponent, _angular_mydatepicker_input__WEBPACK_IMPORTED_MODULE_6__.AngularMyDatePickerDirective, _directives_angular_mydatepicker_calendar_directive__WEBPACK_IMPORTED_MODULE_7__.AngularMyDatePickerCalendarDirective]
  });
})();

/***/ }),

/***/ 700:
/*!*****************************************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/components/calendar/calendar.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarComponent": () => (/* binding */ CalendarComponent)
/* harmony export */ });
/* harmony import */ var _services_angular_mydatepicker_util_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/angular-mydatepicker.util.service */ 4794);
/* harmony import */ var _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/key-code.enum */ 4970);
/* harmony import */ var _enums_month_id_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/month-id.enum */ 3732);
/* harmony import */ var _enums_default_view_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/default-view.enum */ 3457);
/* harmony import */ var _enums_cal_animation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../enums/cal-animation.enum */ 8697);
/* harmony import */ var _enums_header_action_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enums/header-action.enum */ 8795);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/constants */ 5384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _selection_bar_selection_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../selection-bar/selection-bar.component */ 4071);
/* harmony import */ var _day_view_day_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../day-view/day-view.component */ 2765);
/* harmony import */ var _month_view_month_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../month-view/month-view.component */ 9047);
/* harmony import */ var _year_view_year_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../year-view/year-view.component */ 2504);
/* harmony import */ var _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../footer-bar/footer-bar.component */ 8004);
/* harmony import */ var _directives_angular_mydatepicker_calendar_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../directives/angular-mydatepicker-calendar.directive */ 3971);
















const _c0 = ["selectorEl"];
const _c1 = ["styleEl"];
function CalendarComponent_lib_day_view_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "lib-day-view", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("dayCellClicked", function CalendarComponent_lib_day_view_6_Template_lib_day_view_dayCellClicked_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r6.onDayCellClicked($event));
    })("dayCellKeyDown", function CalendarComponent_lib_day_view_6_Template_lib_day_view_dayCellKeyDown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r8.onDayCellKeyDown($event));
    })("viewActivated", function CalendarComponent_lib_day_view_6_Template_lib_day_view_viewActivated_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r9.onViewActivated($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("opts", ctx_r2.opts)("dates", ctx_r2.dates)("weekDays", ctx_r2.weekDays)("selectedDate", ctx_r2.selectedDate)("selectedDateRange", ctx_r2.selectedDateRange)("viewChanged", ctx_r2.viewChanged);
  }
}
function CalendarComponent_lib_month_view_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "lib-month-view", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("monthCellClicked", function CalendarComponent_lib_month_view_7_Template_lib_month_view_monthCellClicked_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r10.onMonthCellClicked($event));
    })("monthCellKeyDown", function CalendarComponent_lib_month_view_7_Template_lib_month_view_monthCellKeyDown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r12.onMonthCellKeyDown($event));
    })("viewActivated", function CalendarComponent_lib_month_view_7_Template_lib_month_view_viewActivated_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r13.onViewActivated($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("opts", ctx_r3.opts)("months", ctx_r3.months)("viewChanged", ctx_r3.viewChanged);
  }
}
function CalendarComponent_lib_year_view_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "lib-year-view", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("yearCellClicked", function CalendarComponent_lib_year_view_8_Template_lib_year_view_yearCellClicked_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r14.onYearCellClicked($event));
    })("yearCellKeyDown", function CalendarComponent_lib_year_view_8_Template_lib_year_view_yearCellKeyDown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r16.onYearCellKeyDown($event));
    })("viewActivated", function CalendarComponent_lib_year_view_8_Template_lib_year_view_viewActivated_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r17.onViewActivated($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("opts", ctx_r4.opts)("years", ctx_r4.years)("viewChanged", ctx_r4.viewChanged);
  }
}
function CalendarComponent_lib_footer_bar_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "lib-footer-bar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("footerBarTxtClicked", function CalendarComponent_lib_footer_bar_9_Template_lib_footer_bar_footerBarTxtClicked_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r18.onTodayFooterClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("opts", ctx_r5.opts);
  }
}
const _c2 = function (a0, a1, a2, a3) {
  return {
    inline: a0,
    selectorWidth: a1,
    selectorHeight: a2,
    selectorPos: a3
  };
};
const _c3 = function (a0, a1, a2, a3, a4) {
  return {
    "myDpSelectorArrow": a0,
    "myDpSelectorArrowLeft": a1,
    "myDpSelectorArrowRight": a2,
    "myDpSelectorAbsolute": a3,
    "myDpSelectorPosInitial": a4
  };
};
class CalendarComponent {
  constructor(elem, renderer, cdr, utilService) {
    this.elem = elem;
    this.renderer = renderer;
    this.cdr = cdr;
    this.utilService = utilService;
    this.position = "static";
    this.visibleMonth = {
      monthTxt: _constants_constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STR,
      monthNbr: 0,
      year: 0
    };
    this.selectedMonth = {
      monthNbr: 0,
      year: 0
    };
    this.selectedDate = {
      year: 0,
      month: 0,
      day: 0
    };
    this.selectedDateRange = {
      begin: {
        year: 0,
        month: 0,
        day: 0
      },
      end: {
        year: 0,
        month: 0,
        day: 0
      }
    };
    this.weekDays = [];
    this.dates = [];
    this.months = [];
    this.years = [];
    this.yearsDuration = "";
    this.dayIdx = 0;
    this.weekDayOpts = [_constants_constants__WEBPACK_IMPORTED_MODULE_6__.SU, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.MO, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.TU, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.WE, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.TH, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.FR, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.SA];
    this.selectMonth = false;
    this.selectYear = false;
    this.viewChanged = false;
    this.selectorPos = null;
    this.prevViewDisabled = false;
    this.nextViewDisabled = false;
    this.clickListener = renderer.listen(elem.nativeElement, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.CLICK, event => {
      if ((this.opts.monthSelector || this.opts.yearSelector) && event.target) {
        this.resetMonthYearSelect();
      }
    });
  }
  ngAfterViewInit() {
    const {
      stylesData,
      calendarAnimation,
      inline
    } = this.opts;
    if (stylesData.styles.length) {
      const styleElTemp = this.renderer.createElement(_constants_constants__WEBPACK_IMPORTED_MODULE_6__.STYLE);
      this.renderer.appendChild(styleElTemp, this.renderer.createText(stylesData.styles));
      this.renderer.appendChild(this.styleEl.nativeElement, styleElTemp);
    }
    if (calendarAnimation.in !== _enums_cal_animation_enum__WEBPACK_IMPORTED_MODULE_4__.CalAnimation.None) {
      this.setCalendarAnimation(calendarAnimation, true);
    }
    if (!inline) {
      this.focusToSelector();
    }
  }
  ngOnDestroy() {
    this.clickListener();
  }
  initializeComponent(opts, defaultMonth, selectedValue, inputValue, selectorPos, dc, cvc, rds, va, cbe) {
    this.opts = opts;
    this.selectorPos = selectorPos;
    this.dateChanged = dc;
    this.calendarViewChanged = cvc;
    this.rangeDateSelection = rds;
    this.viewActivated = va;
    this.closedByEsc = cbe;
    const {
      defaultView,
      firstDayOfWeek,
      dayLabels
    } = opts;
    this.weekDays.length = 0;
    this.dayIdx = this.weekDayOpts.indexOf(firstDayOfWeek);
    if (this.dayIdx !== -1) {
      let idx = this.dayIdx;
      for (let i = 0; i < this.weekDayOpts.length; i++) {
        this.weekDays.push(dayLabels[this.weekDayOpts[idx]]);
        idx = this.weekDayOpts[idx] === _constants_constants__WEBPACK_IMPORTED_MODULE_6__.SA ? 0 : idx + 1;
      }
    }
    this.initializeView(defaultMonth, selectedValue, inputValue);
    this.setCalendarVisibleMonth();
    this.setDefaultView(defaultView);
  }
  initializeView(defaultMonth, selectedValue, inputValue) {
    const {
      dateRange
    } = this.opts;
    // use today as a selected month
    const today = this.utilService.getToday();
    this.selectedMonth = {
      monthNbr: today.month,
      year: today.year
    };
    // If default month attribute valur given use it as a selected month
    const {
      defMonth,
      overrideSelection
    } = defaultMonth;
    if (defMonth && defMonth.length) {
      this.selectedMonth = this.utilService.parseDefaultMonth(defMonth);
    }
    let validateOpts = null;
    if (!dateRange) {
      // Single date mode - If date selected use it as selected month
      validateOpts = {
        validateDisabledDates: false,
        selectedValue: this.utilService.getSelectedValue(selectedValue, dateRange)
      };
      const date = this.utilService.isDateValid(inputValue, this.opts, validateOpts);
      if (this.utilService.isInitializedDate(date)) {
        this.selectedDate = date;
        if (!overrideSelection) {
          this.selectedMonth = {
            monthNbr: date.month,
            year: date.year
          };
        }
      }
    } else {
      // Date range mode - If date range selected use begin date as selected month
      validateOpts = {
        validateDisabledDates: false,
        selectedValue: this.utilService.getSelectedValue(selectedValue, dateRange)
      };
      const {
        begin,
        end
      } = this.utilService.isDateValidDateRange(inputValue, this.opts, validateOpts);
      if (this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end)) {
        this.selectedDateRange = {
          begin,
          end
        };
        if (!overrideSelection) {
          this.selectedMonth = {
            monthNbr: begin.month,
            year: begin.year
          };
        }
      }
    }
  }
  refreshComponent(opts, defaultMonth, selectedValue, inputValue) {
    this.opts = opts;
    const {
      defaultView
    } = opts;
    this.initializeView(defaultMonth, selectedValue, inputValue);
    this.setCalendarVisibleMonth();
    this.setDefaultView(defaultView);
  }
  headerAction(headerAction) {
    const {
      monthSelector,
      yearSelector
    } = this.opts;
    if (headerAction === _enums_header_action_enum__WEBPACK_IMPORTED_MODULE_5__.HeaderAction.PrevBtnClick) {
      if (!this.prevViewDisabled) {
        this.onPrevNavigateBtnClicked();
      }
    } else if (headerAction === _enums_header_action_enum__WEBPACK_IMPORTED_MODULE_5__.HeaderAction.NextBtnClick) {
      if (!this.nextViewDisabled) {
        this.onNextNavigateBtnClicked();
      }
    } else if (headerAction === _enums_header_action_enum__WEBPACK_IMPORTED_MODULE_5__.HeaderAction.MonthBtnClick) {
      if (monthSelector) {
        this.onMonthViewBtnClicked();
      }
    } else if (headerAction === _enums_header_action_enum__WEBPACK_IMPORTED_MODULE_5__.HeaderAction.YearBtnClick) {
      if (yearSelector) {
        this.onYearViewBtnClicked();
      }
    }
  }
  setDefaultView(defaultView) {
    if (defaultView === _enums_default_view_enum__WEBPACK_IMPORTED_MODULE_3__.DefaultView.Month) {
      this.monthViewBtnClicked();
    } else if (defaultView === _enums_default_view_enum__WEBPACK_IMPORTED_MODULE_3__.DefaultView.Year) {
      this.yearViewBtnClicked();
    }
  }
  setCalendarAnimation(calAnimation, isOpen) {
    const {
      nativeElement
    } = this.selectorEl;
    const {
      renderer
    } = this;
    const classIn = _constants_constants__WEBPACK_IMPORTED_MODULE_6__.MY_DP_ANIMATION + _constants_constants__WEBPACK_IMPORTED_MODULE_6__.ANIMATION_NAMES[calAnimation.in - 1];
    if (isOpen) {
      renderer.addClass(nativeElement, classIn + _constants_constants__WEBPACK_IMPORTED_MODULE_6__.IN);
    } else {
      const classOut = _constants_constants__WEBPACK_IMPORTED_MODULE_6__.MY_DP_ANIMATION + _constants_constants__WEBPACK_IMPORTED_MODULE_6__.ANIMATION_NAMES[calAnimation.out - 1];
      renderer.removeClass(nativeElement, classIn + _constants_constants__WEBPACK_IMPORTED_MODULE_6__.IN);
      renderer.addClass(nativeElement, classOut + _constants_constants__WEBPACK_IMPORTED_MODULE_6__.OUT);
    }
  }
  resetDateValue() {
    if (!this.opts.dateRange) {
      this.selectedDate = this.utilService.resetDate();
    } else {
      this.selectedDateRange.begin = this.utilService.resetDate();
      this.selectedDateRange.end = this.utilService.resetDate();
    }
  }
  clearDate() {
    const {
      month,
      year
    } = this.utilService.getToday();
    this.selectedMonth = {
      monthNbr: month,
      year: year
    };
    this.resetDateValue();
    this.setCalendarVisibleMonth();
    this.resetMonthYearSelect();
  }
  resetMonthYearSelect() {
    this.selectMonth = false;
    this.selectYear = false;
  }
  onMonthViewBtnClicked() {
    this.viewChanged = true;
    this.monthViewBtnClicked();
  }
  monthViewBtnClicked() {
    this.selectMonth = !this.selectMonth;
    this.selectYear = false;
    this.cdr.detectChanges();
    if (this.selectMonth) {
      this.generateMonths();
    } else {
      const {
        year,
        monthNbr
      } = this.selectedMonth;
      this.visibleMonth = {
        monthTxt: this.opts.monthLabels[monthNbr],
        monthNbr,
        year
      };
      this.generateCalendar(monthNbr, year, true);
    }
  }
  onMonthCellClicked(cell) {
    this.viewChanged = true;
    const {
      year,
      monthNbr
    } = this.visibleMonth;
    const monthChange = cell.nbr !== monthNbr;
    this.visibleMonth = {
      monthTxt: this.opts.monthLabels[cell.nbr],
      monthNbr: cell.nbr,
      year
    };
    this.selectedMonth.year = year;
    this.generateCalendar(cell.nbr, year, monthChange);
    this.selectMonth = false;
    this.focusToSelector();
  }
  onMonthCellKeyDown(event) {
    // Move focus by arrow keys
    const {
      sourceRow,
      sourceCol
    } = this.getSourceRowAndColumnFromEvent(event);
    const {
      moveFocus,
      targetRow,
      targetCol,
      direction
    } = this.getTargetFocusRowAndColumn(event, sourceRow, sourceCol, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.MONTH_ROW_COUNT, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.MONTH_COL_COUNT);
    if (moveFocus) {
      this.focusCellElement(_constants_constants__WEBPACK_IMPORTED_MODULE_6__.M, targetRow, targetCol, direction, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.MONTH_COL_COUNT);
    }
  }
  onYearViewBtnClicked() {
    this.viewChanged = true;
    this.yearViewBtnClicked();
  }
  yearViewBtnClicked() {
    this.selectYear = !this.selectYear;
    this.selectMonth = false;
    this.cdr.detectChanges();
    if (this.selectYear) {
      this.generateYears(this.visibleMonth.year);
    } else {
      const {
        year,
        monthNbr
      } = this.selectedMonth;
      this.visibleMonth = {
        monthTxt: this.opts.monthLabels[monthNbr],
        monthNbr,
        year
      };
      this.generateCalendar(monthNbr, year, true);
    }
  }
  onYearCellClicked(cell) {
    this.viewChanged = true;
    const {
      year,
      monthNbr,
      monthTxt
    } = this.visibleMonth;
    const yc = cell.year !== year;
    this.visibleMonth = {
      monthTxt,
      monthNbr,
      year: cell.year
    };
    this.selectedMonth.year = cell.year;
    this.generateCalendar(monthNbr, cell.year, yc);
    this.selectYear = false;
    this.focusToSelector();
  }
  onYearCellKeyDown(event) {
    // Move focus by arrow keys
    const {
      sourceRow,
      sourceCol
    } = this.getSourceRowAndColumnFromEvent(event);
    const {
      moveFocus,
      targetRow,
      targetCol,
      direction
    } = this.getTargetFocusRowAndColumn(event, sourceRow, sourceCol, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.YEAR_ROW_COUNT, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.YEAR_COL_COUNT);
    if (moveFocus) {
      this.focusCellElement(_constants_constants__WEBPACK_IMPORTED_MODULE_6__.Y, targetRow, targetCol, direction, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.YEAR_COL_COUNT);
    }
  }
  generateMonths() {
    const today = this.utilService.getToday();
    this.months.length = 0;
    const {
      year,
      monthNbr
    } = this.visibleMonth;
    const {
      rtl,
      monthLabels
    } = this.opts;
    let row = 0;
    for (let i = 1; i <= 12; i += 3) {
      const rowData = [];
      let col = rtl ? 2 : 0;
      for (let j = i; j < i + 3; j++) {
        const disabled = this.utilService.isDisabledMonth(year, j, this.opts);
        rowData.push({
          nbr: j,
          year,
          name: monthLabels[j],
          currMonth: j === today.month && year === today.year,
          selected: j === monthNbr && year === this.selectedMonth.year,
          disabled,
          row,
          col: rtl ? col-- : col++
        });
      }
      row++;
      this.months.push(rowData);
    }
    this.setMonthViewHeaderBtnDisabledState(year);
  }
  generateYears(inputYear) {
    const {
      minYear,
      maxYear,
      rtl
    } = this.opts;
    let y = inputYear - 12;
    if (inputYear < minYear) {
      y = minYear;
    }
    if (inputYear + 25 > maxYear) {
      y = maxYear - 24;
    }
    const {
      year
    } = this.visibleMonth;
    this.years.length = 0;
    const today = this.utilService.getToday();
    let row = 0;
    for (let i = y; i < y + 25; i += 5) {
      const rowData = [];
      let col = rtl ? 4 : 0;
      for (let j = i; j < i + 5; j++) {
        const disabled = this.utilService.isDisabledYear(j, this.opts);
        rowData.push({
          year: j,
          currYear: j === today.year,
          selected: j === year,
          disabled,
          row,
          col: rtl ? col-- : col++
        });
      }
      row++;
      this.years.push(rowData);
    }
    const beginYear = this.getYearValueByRowAndCol(0, 0);
    const endYear = beginYear + 24;
    this.yearsDuration = (!rtl ? beginYear : endYear) + _constants_constants__WEBPACK_IMPORTED_MODULE_6__.YEAR_SEPARATOR + (!rtl ? endYear : beginYear);
    this.setYearViewHeaderBtnDisabledState(beginYear, endYear);
  }
  onTodayFooterClicked() {
    const date = this.utilService.getToday();
    this.selectDate(date);
  }
  getYearValueByRowAndCol(row, col) {
    const {
      years
    } = this;
    if (!years || years.length === 0) {
      const {
        year
      } = this.utilService.getToday();
      return year;
    }
    return years[row][col].year;
  }
  setCalendarVisibleMonth() {
    // Sets visible month of calendar
    const {
      year,
      monthNbr
    } = this.selectedMonth;
    this.visibleMonth = {
      monthTxt: this.opts.monthLabels[monthNbr],
      monthNbr,
      year
    };
    // Create current month
    this.generateCalendar(monthNbr, year, true);
  }
  onViewActivated(event) {
    this.viewActivated(event);
  }
  onPrevNavigateBtnClicked() {
    if (!this.selectMonth && !this.selectYear) {
      this.setDateViewMonth(false);
    } else if (this.selectMonth) {
      this.visibleMonth.year--;
      this.generateMonths();
    } else if (this.selectYear) {
      this.generateYears(this.getYearValueByRowAndCol(2, 2) - 25);
    }
  }
  onNextNavigateBtnClicked() {
    if (!this.selectMonth && !this.selectYear) {
      this.setDateViewMonth(true);
    } else if (this.selectMonth) {
      this.visibleMonth.year++;
      this.generateMonths();
    } else if (this.selectYear) {
      this.generateYears(this.getYearValueByRowAndCol(2, 2) + 25);
    }
  }
  setDateViewMonth(isNext) {
    let change = isNext ? 1 : -1;
    const {
      year,
      monthNbr
    } = this.visibleMonth;
    const d = this.utilService.getJsDate(year, monthNbr, 1);
    d.setMonth(d.getMonth() + change);
    const y = d.getFullYear();
    const m = d.getMonth() + 1;
    this.visibleMonth = {
      monthTxt: this.opts.monthLabels[m],
      monthNbr: m,
      year: y
    };
    this.generateCalendar(m, y, true);
  }
  onCloseSelector(event) {
    const keyCode = this.utilService.getKeyCodeFromEvent(event);
    if (keyCode === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_1__.KeyCode.esc) {
      this.closedByEsc();
    }
  }
  onDayCellClicked(cell) {
    // Cell clicked on the calendar
    this.selectDate(cell.dateObj);
    this.resetMonthYearSelect();
  }
  onDayCellKeyDown(event) {
    // Move focus by arrow keys
    const {
      sourceRow,
      sourceCol
    } = this.getSourceRowAndColumnFromEvent(event);
    const {
      moveFocus,
      targetRow,
      targetCol,
      direction
    } = this.getTargetFocusRowAndColumn(event, sourceRow, sourceCol, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.DATE_ROW_COUNT, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.DATE_COL_COUNT);
    if (moveFocus) {
      this.focusCellElement(_constants_constants__WEBPACK_IMPORTED_MODULE_6__.D, targetRow, targetCol, direction, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.DATE_COL_COUNT);
    }
  }
  getSourceRowAndColumnFromEvent(event) {
    let sourceRow = 0;
    let sourceCol = 0;
    if (event.target && event.target.id) {
      // value of id is for example: m_0_1 (first number = row, second number = column)
      const arr = event.target.id.split(_constants_constants__WEBPACK_IMPORTED_MODULE_6__.UNDER_LINE);
      sourceRow = Number(arr[1]);
      sourceCol = Number(arr[2]);
    }
    return {
      sourceRow,
      sourceCol
    };
  }
  getTargetFocusRowAndColumn(event, row, col, rowCount, colCount) {
    let moveFocus = true;
    let targetRow = row;
    let targetCol = col;
    let direction = false;
    const keyCode = this.utilService.getKeyCodeFromEvent(event);
    if (keyCode === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_1__.KeyCode.upArrow && row > 0) {
      targetRow--;
    } else if (keyCode === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_1__.KeyCode.downArrow && row < rowCount) {
      targetRow++;
      direction = true;
    } else if (keyCode === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_1__.KeyCode.leftArrow && col > 0) {
      targetCol--;
    } else if (keyCode === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_1__.KeyCode.rightArrow && col < colCount) {
      targetCol++;
      direction = true;
    } else {
      moveFocus = false;
    }
    return {
      moveFocus,
      targetRow,
      targetCol,
      direction
    };
  }
  focusCellElement(type, row, col, direction, colCount) {
    const className = type + _constants_constants__WEBPACK_IMPORTED_MODULE_6__.UNDER_LINE + row + _constants_constants__WEBPACK_IMPORTED_MODULE_6__.UNDER_LINE + col;
    let elem = this.selectorEl.nativeElement.querySelector(_constants_constants__WEBPACK_IMPORTED_MODULE_6__.DOT + className);
    if (elem.getAttribute(_constants_constants__WEBPACK_IMPORTED_MODULE_6__.TABINDEX) !== _constants_constants__WEBPACK_IMPORTED_MODULE_6__.ZERO_STR) {
      // if the selected element is disabled move a focus to next/previous enabled element
      let tdList = this.getCalendarElements();
      const idx = row * (colCount + 1) + col;
      let enabledElem = null;
      if (direction) {
        // find next enabled
        enabledElem = tdList.slice(idx).find(td => td.getAttribute(_constants_constants__WEBPACK_IMPORTED_MODULE_6__.TABINDEX) === _constants_constants__WEBPACK_IMPORTED_MODULE_6__.ZERO_STR);
      } else {
        // find previous enabled
        enabledElem = tdList.slice(0, idx).reverse().find(td => td.getAttribute(_constants_constants__WEBPACK_IMPORTED_MODULE_6__.TABINDEX) === _constants_constants__WEBPACK_IMPORTED_MODULE_6__.ZERO_STR);
      }
      elem = enabledElem ? enabledElem : this.selectorEl.nativeElement;
    } else {
      elem.focus();
    }
  }
  focusToSelector() {
    this.selectorEl.nativeElement.focus();
  }
  getCalendarElements() {
    return Array.from(this.selectorEl.nativeElement.querySelectorAll(_constants_constants__WEBPACK_IMPORTED_MODULE_6__.TD_SELECTOR));
  }
  selectDate(date) {
    const {
      dateRange,
      dateFormat,
      monthLabels,
      dateRangeDatesDelimiter,
      closeSelectorOnDateSelect
    } = this.opts;
    if (dateRange) {
      // Date range
      const isBeginDateInitialized = this.utilService.isInitializedDate(this.selectedDateRange.begin);
      const isEndDateInitialized = this.utilService.isInitializedDate(this.selectedDateRange.end);
      if (isBeginDateInitialized && isEndDateInitialized) {
        // both already selected - set begin date and reset end date
        this.selectedDateRange.begin = date;
        this.selectedDateRange.end = this.utilService.resetDate();
        this.rangeDateSelection({
          isBegin: true,
          date,
          jsDate: this.utilService.myDateToJsDate(date),
          dateFormat: dateFormat,
          formatted: this.utilService.formatDate(date, dateFormat, monthLabels),
          epoc: this.utilService.getEpocTime(date)
        });
      } else if (!isBeginDateInitialized) {
        // begin date
        this.selectedDateRange.begin = date;
        this.rangeDateSelection({
          isBegin: true,
          date,
          jsDate: this.utilService.myDateToJsDate(date),
          dateFormat: dateFormat,
          formatted: this.utilService.formatDate(date, dateFormat, monthLabels),
          epoc: this.utilService.getEpocTime(date)
        });
      } else {
        // second selection
        const firstDateEarlier = this.utilService.isDateEarlier(date, this.selectedDateRange.begin);
        if (firstDateEarlier) {
          this.selectedDateRange.begin = date;
          this.rangeDateSelection({
            isBegin: true,
            date,
            jsDate: this.utilService.myDateToJsDate(date),
            dateFormat: dateFormat,
            formatted: this.utilService.formatDate(date, dateFormat, monthLabels),
            epoc: this.utilService.getEpocTime(date)
          });
        } else {
          this.selectedDateRange.end = date;
          this.rangeDateSelection({
            isBegin: false,
            date,
            jsDate: this.utilService.myDateToJsDate(date),
            dateFormat: dateFormat,
            formatted: this.utilService.formatDate(date, dateFormat, monthLabels),
            epoc: this.utilService.getEpocTime(date)
          });
          this.dateChanged(this.utilService.getDateModel(null, this.selectedDateRange, dateFormat, monthLabels, dateRangeDatesDelimiter), closeSelectorOnDateSelect);
        }
      }
    } else {
      // Single date
      this.selectedDate = date;
      this.dateChanged(this.utilService.getDateModel(this.selectedDate, null, dateFormat, monthLabels, dateRangeDatesDelimiter), closeSelectorOnDateSelect);
    }
  }
  monthStartIdx(y, m) {
    // Month start index
    const d = new Date();
    d.setDate(1);
    d.setMonth(m - 1);
    d.setFullYear(y);
    const idx = d.getDay() + this.sundayIdx();
    return idx >= 7 ? idx - 7 : idx;
  }
  isCurrDay(d, m, y, today) {
    // Check is a given date the today
    return d === today.day && m === today.month && y === today.year;
  }
  getDayNumber(date) {
    // Get day number: su=0, mo=1, tu=2, we=3 ...
    const {
      year,
      month,
      day
    } = date;
    const d = this.utilService.getJsDate(year, month, day);
    return d.getDay();
  }
  getWeekday(date) {
    // Get weekday: su, mo, tu, we ...
    return this.weekDayOpts[this.getDayNumber(date)];
  }
  sundayIdx() {
    // Index of Sunday day
    return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
  }
  generateCalendar(m, y, notifyChange) {
    this.dates.length = 0;
    const today = this.utilService.getToday();
    const monthStart = this.monthStartIdx(y, m);
    const dInThisM = this.utilService.datesInMonth(m, y);
    const dInPrevM = this.utilService.datesInPrevMonth(m, y);
    let dayNbr = 1;
    let month = m;
    let cmo = _enums_month_id_enum__WEBPACK_IMPORTED_MODULE_2__.MonthId.prev;
    const {
      rtl,
      showWeekNumbers,
      firstDayOfWeek
    } = this.opts;
    for (let i = 1; i < 7; i++) {
      let col = rtl ? 6 : 0;
      const week = [];
      if (i === 1) {
        // First week
        const pm = dInPrevM - monthStart + 1;
        // Previous month
        for (let j = pm; j <= dInPrevM; j++) {
          const date = {
            year: m === 1 ? y - 1 : y,
            month: m === 1 ? 12 : m - 1,
            day: j
          };
          week.push({
            dateObj: date,
            cmo,
            currDay: this.isCurrDay(j, month - 1, y, today),
            disabledDate: this.utilService.isDisabledDate(date, this.opts),
            markedDate: this.utilService.isMarkedDate(date, this.opts),
            highlight: this.utilService.isHighlightedDate(date, this.opts),
            row: i - 1,
            col: rtl ? col-- : col++
          });
        }
        cmo = _enums_month_id_enum__WEBPACK_IMPORTED_MODULE_2__.MonthId.curr;
        // Current month
        const daysLeft = 7 - week.length;
        for (let j = 0; j < daysLeft; j++) {
          const date = {
            year: y,
            month: m,
            day: dayNbr
          };
          week.push({
            dateObj: date,
            cmo,
            currDay: this.isCurrDay(dayNbr, m, y, today),
            disabledDate: this.utilService.isDisabledDate(date, this.opts),
            markedDate: this.utilService.isMarkedDate(date, this.opts),
            highlight: this.utilService.isHighlightedDate(date, this.opts),
            row: i - 1,
            col: rtl ? col-- : col++
          });
          dayNbr++;
        }
      } else {
        // Rest of the weeks
        for (let j = 1; j < 8; j++) {
          if (dayNbr > dInThisM) {
            // Next month
            dayNbr = 1;
            cmo = _enums_month_id_enum__WEBPACK_IMPORTED_MODULE_2__.MonthId.next;
            month = m + 1;
          }
          const date = {
            year: cmo === _enums_month_id_enum__WEBPACK_IMPORTED_MODULE_2__.MonthId.next && m === 12 ? y + 1 : y,
            month: cmo === _enums_month_id_enum__WEBPACK_IMPORTED_MODULE_2__.MonthId.curr ? m : cmo === _enums_month_id_enum__WEBPACK_IMPORTED_MODULE_2__.MonthId.next && m < 12 ? m + 1 : 1,
            day: dayNbr
          };
          week.push({
            dateObj: date,
            cmo,
            currDay: this.isCurrDay(dayNbr, month, y, today),
            disabledDate: this.utilService.isDisabledDate(date, this.opts),
            markedDate: this.utilService.isMarkedDate(date, this.opts),
            highlight: this.utilService.isHighlightedDate(date, this.opts),
            row: i - 1,
            col: rtl ? col-- : col++
          });
          dayNbr++;
        }
      }
      const weekNbr = showWeekNumbers && firstDayOfWeek === _constants_constants__WEBPACK_IMPORTED_MODULE_6__.MO ? this.utilService.getWeekNumber(week[0].dateObj) : 0;
      this.dates.push({
        week,
        weekNbr
      });
    }
    this.setDateViewHeaderBtnDisabledState(m, y);
    if (notifyChange) {
      // Notify parent
      this.calendarViewChanged({
        year: y,
        month: m,
        first: {
          number: 1,
          weekday: this.getWeekday({
            year: y,
            month: m,
            day: 1
          })
        },
        last: {
          number: dInThisM,
          weekday: this.getWeekday({
            year: y,
            month: m,
            day: dInThisM
          })
        }
      });
    }
  }
  setDateViewHeaderBtnDisabledState(m, y) {
    let dpm = false;
    let dnm = false;
    const {
      disableHeaderButtons,
      disableUntil,
      disableSince,
      enableDates,
      minYear,
      maxYear,
      rtl
    } = this.opts;
    if (disableHeaderButtons) {
      const duDate = {
        year: m === 1 ? y - 1 : y,
        month: m === 1 ? 12 : m - 1,
        day: this.utilService.datesInMonth(m === 1 ? 12 : m - 1, m === 1 ? y - 1 : y)
      };
      const dsDate = {
        year: m === 12 ? y + 1 : y,
        month: m === 12 ? 1 : m + 1,
        day: 1
      };
      dpm = this.utilService.isDisabledByDisableUntil(duDate, disableUntil) && !this.utilService.isPastDatesEnabled(duDate, enableDates);
      dnm = this.utilService.isDisabledByDisableSince(dsDate, disableSince) && !this.utilService.isFutureDatesEnabled(dsDate, enableDates);
    }
    this.prevViewDisabled = m === 1 && y === minYear || dpm;
    this.nextViewDisabled = m === 12 && y === maxYear || dnm;
    if (rtl) {
      this.swapHeaderBtnDisabled();
    }
  }
  setMonthViewHeaderBtnDisabledState(y) {
    let dpm = false;
    let dnm = false;
    const {
      disableHeaderButtons,
      disableUntil,
      disableSince,
      enableDates,
      minYear,
      maxYear,
      rtl
    } = this.opts;
    if (disableHeaderButtons) {
      const duDate = {
        year: y - 1,
        month: 12,
        day: 31
      };
      const dsDate = {
        year: y + 1,
        month: 1,
        day: 1
      };
      dpm = this.utilService.isDisabledByDisableUntil(duDate, disableUntil) && !this.utilService.isPastDatesEnabled(duDate, enableDates);
      dnm = this.utilService.isDisabledByDisableSince(dsDate, disableSince) && !this.utilService.isFutureDatesEnabled(dsDate, enableDates);
    }
    this.prevViewDisabled = y === minYear || dpm;
    this.nextViewDisabled = y === maxYear || dnm;
    if (rtl) {
      this.swapHeaderBtnDisabled();
    }
  }
  setYearViewHeaderBtnDisabledState(yp, yn) {
    let dpy = false;
    let dny = false;
    const {
      disableHeaderButtons,
      disableUntil,
      disableSince,
      enableDates,
      minYear,
      maxYear,
      rtl
    } = this.opts;
    if (disableHeaderButtons) {
      const duDate = {
        year: yp - 1,
        month: 12,
        day: 31
      };
      const dsDate = {
        year: yn + 1,
        month: 1,
        day: 1
      };
      dpy = this.utilService.isDisabledByDisableUntil(duDate, disableUntil) && !this.utilService.isPastDatesEnabled(duDate, enableDates);
      dny = this.utilService.isDisabledByDisableSince(dsDate, disableSince) && !this.utilService.isFutureDatesEnabled(dsDate, enableDates);
    }
    this.prevViewDisabled = yp <= minYear || dpy;
    this.nextViewDisabled = yn >= maxYear || dny;
    if (rtl) {
      this.swapHeaderBtnDisabled();
    }
  }
  swapHeaderBtnDisabled() {
    [this.prevViewDisabled, this.nextViewDisabled] = [this.nextViewDisabled, this.prevViewDisabled];
  }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) {
  return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_angular_mydatepicker_util_service__WEBPACK_IMPORTED_MODULE_0__.UtilService));
};
CalendarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: CalendarComponent,
  selectors: [["lib-angular-mydatepicker-calendar"]],
  viewQuery: function CalendarComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c1, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.selectorEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.styleEl = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function CalendarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵstyleProp"]("position", ctx.position);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵProvidersFeature"]([_services_angular_mydatepicker_util_service__WEBPACK_IMPORTED_MODULE_0__.UtilService])],
  decls: 10,
  vars: 27,
  consts: [["styleEl", ""], ["tabindex", "0", 1, "myDpSelector", 3, "libAngularMyDatePickerCalendar", "ngClass", "keyup"], ["selectorEl", ""], [3, "opts", "yearsDuration", "visibleMonth", "selectMonth", "selectYear", "prevViewDisabled", "nextViewDisabled", "prevNavigateBtnClicked", "nextNavigateBtnClicked", "monthViewBtnClicked", "yearViewBtnClicked"], [3, "opts", "dates", "weekDays", "selectedDate", "selectedDateRange", "viewChanged", "dayCellClicked", "dayCellKeyDown", "viewActivated", 4, "ngIf"], [3, "opts", "months", "viewChanged", "monthCellClicked", "monthCellKeyDown", "viewActivated", 4, "ngIf"], [3, "opts", "years", "viewChanged", "yearCellClicked", "yearCellKeyDown", "viewActivated", 4, "ngIf"], [3, "opts", "footerBarTxtClicked", 4, "ngIf"], [3, "opts", "dates", "weekDays", "selectedDate", "selectedDateRange", "viewChanged", "dayCellClicked", "dayCellKeyDown", "viewActivated"], [3, "opts", "months", "viewChanged", "monthCellClicked", "monthCellKeyDown", "viewActivated"], [3, "opts", "years", "viewChanged", "yearCellClicked", "yearCellKeyDown", "viewActivated"], [3, "opts", "footerBarTxtClicked"]],
  template: function CalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "span", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div")(3, "div", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keyup", function CalendarComponent_Template_div_keyup_3_listener($event) {
        return ctx.onCloseSelector($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "lib-selection-bar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("prevNavigateBtnClicked", function CalendarComponent_Template_lib_selection_bar_prevNavigateBtnClicked_5_listener() {
        return ctx.onPrevNavigateBtnClicked();
      })("nextNavigateBtnClicked", function CalendarComponent_Template_lib_selection_bar_nextNavigateBtnClicked_5_listener() {
        return ctx.onNextNavigateBtnClicked();
      })("monthViewBtnClicked", function CalendarComponent_Template_lib_selection_bar_monthViewBtnClicked_5_listener() {
        return ctx.onMonthViewBtnClicked();
      })("yearViewBtnClicked", function CalendarComponent_Template_lib_selection_bar_yearViewBtnClicked_5_listener() {
        return ctx.onYearViewBtnClicked();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, CalendarComponent_lib_day_view_6_Template, 1, 6, "lib-day-view", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, CalendarComponent_lib_month_view_7_Template, 1, 3, "lib-month-view", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, CalendarComponent_lib_year_view_8_Template, 1, 3, "lib-year-view", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, CalendarComponent_lib_footer_bar_9_Template, 1, 1, "lib-footer-bar", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMapInterpolate1"]("ng-mydp ", (ctx.opts.stylesData == null ? null : ctx.opts.stylesData.selector) || "", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("libAngularMyDatePickerCalendar", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction4"](16, _c2, ctx.opts.inline, ctx.opts.selectorWidth, ctx.opts.selectorHeight, ctx.selectorPos))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction5"](21, _c3, ctx.opts.showSelectorArrow, ctx.opts.showSelectorArrow && !ctx.opts.alignSelectorRight, ctx.opts.showSelectorArrow && ctx.opts.alignSelectorRight, !ctx.opts.inline, ctx.opts.inline));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("opts", ctx.opts)("yearsDuration", ctx.yearsDuration)("visibleMonth", ctx.visibleMonth)("selectMonth", ctx.selectMonth)("selectYear", ctx.selectYear)("prevViewDisabled", ctx.prevViewDisabled)("nextViewDisabled", ctx.nextViewDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.selectMonth && !ctx.selectYear);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.selectMonth);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.selectYear);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.opts.showFooterToday);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _selection_bar_selection_bar_component__WEBPACK_IMPORTED_MODULE_7__.SelectionBarComponent, _day_view_day_view_component__WEBPACK_IMPORTED_MODULE_8__.DayViewComponent, _month_view_month_view_component__WEBPACK_IMPORTED_MODULE_9__.MonthViewComponent, _year_view_year_view_component__WEBPACK_IMPORTED_MODULE_10__.YearViewComponent, _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_11__.FooterBarComponent, _directives_angular_mydatepicker_calendar_directive__WEBPACK_IMPORTED_MODULE_12__.AngularMyDatePickerCalendarDirective],
  styles: [".ng-mydp {\n  position: static;\n}\n\n.ng-myrtl {\n  direction: rtl;\n}\n\n.ng-mydp * {\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n  padding: 0;\n  margin: 0;\n}\n\n.ng-mydp table {\n  display: table;\n  border-spacing: 0;\n}\n\n.ng-mydp table td,\n.ng-mydp table th {\n  padding: 0;\n  margin: 0;\n  vertical-align: middle;\n  border: none;\n}\n\n.myDpSelector {\n  padding: 4px;\n  border: 1px solid #CCC;\n  background-color: #FFF;\n  border-radius: 4px;\n  z-index: 100000;\n}\n\n.myDpViewChangeAnimation {\n  animation: myDpViewChangeAnimation 0.2s linear;\n}\n\n@keyframes myDpViewChangeAnimation {\n  0% {\n    transform: scale(0.75);\n    opacity: 0.1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n.myDpAnimationFadeIn {\n  animation: myDpAnimationFadeIn 0.5s linear;\n}\n\n@keyframes myDpAnimationFadeIn {\n  0% {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.myDpAnimationFadeOut {\n  animation: myDpAnimationFadeOut 0.3s linear forwards;\n}\n\n@keyframes myDpAnimationFadeOut {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n}\n\n.myDpAnimationScaleTopIn {\n  animation: myDpAnimationScaleTopIn 0.3s linear;\n}\n\n@keyframes myDpAnimationScaleTopIn {\n  0% {\n    transform: scaleY(0);\n    transform-origin: 100% 0%;\n  }\n  100% {\n    transform: scaleY(1);\n    transform-origin: 100% 0%;\n  }\n}\n\n.myDpAnimationScaleTopOut {\n  animation: myDpAnimationScaleTopOut 0.3s linear forwards;\n}\n\n@keyframes myDpAnimationScaleTopOut {\n  0% {\n    transform: scaleY(1);\n    transform-origin: 100% 0%;\n    opacity: 1;\n  }\n  100% {\n    transform: scaleY(0);\n    transform-origin: 100% 0%;\n    opacity: 0;\n  }\n}\n\n.myDpAnimationScaleCenterIn {\n  animation: myDpAnimationScaleCenterIn 0.3s linear;\n}\n\n@keyframes myDpAnimationScaleCenterIn {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.myDpAnimationScaleCenterOut {\n  animation: myDpAnimationScaleCenterOut 0.3s linear forwards;\n}\n\n@keyframes myDpAnimationScaleCenterOut {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0);\n    opacity: 0;\n  }\n}\n\n.myDpAnimationRotateIn {\n  animation: myDpAnimationRotateIn 0.3s linear;\n}\n\n@keyframes myDpAnimationRotateIn {\n  0% {\n    transform: scale(0.3) rotate(-45deg);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1) rotate(0);\n    opacity: 1;\n  }\n}\n\n.myDpAnimationRotateOut {\n  animation: myDpAnimationRotateOut 0.3s linear forwards;\n}\n\n@keyframes myDpAnimationRotateOut {\n  0% {\n    transform: scale(1) rotate(0);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.3) rotate(-45deg);\n    opacity: 0;\n  }\n}\n\n.myDpAnimationFlipDiagonalIn {\n  animation: myDpAnimationFlipDiagonalIn 0.3s linear;\n}\n\n@keyframes myDpAnimationFlipDiagonalIn {\n  0% {\n    transform: rotate3d(1, 1, 0, -78deg);\n  }\n  100% {\n    transform: rotate3d(1, 1, 0, 0deg);\n  }\n}\n\n.myDpAnimationFlipDiagonalOut {\n  animation: myDpAnimationFlipDiagonalOut 0.3s linear forwards;\n}\n\n@keyframes myDpAnimationFlipDiagonalOut {\n  0% {\n    transform: rotate3d(1, 1, 0, 0deg);\n    opacity: 1;\n  }\n  100% {\n    transform: rotate3d(1, 1, 0, 78deg);\n    opacity: 0;\n  }\n}\n\n.myDpSelectorAbsolute {\n  position: absolute;\n}\n\n.myDpSelectorPosInitial {\n  position: initial;\n}\n\n.myDpSelector:focus {\n  box-shadow: -1px 1px 6px 0px #ADD8E6;\n  outline: none;\n}\n\n.myDpSelectorArrow {\n  background: #FFF;\n}\n\n.myDpSelectorArrow:after,\n.myDpSelectorArrow:before {\n  bottom: 100%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n}\n\n.myDpSelectorArrow:after {\n  border-color: rgba(250, 250, 250, 0);\n  border-bottom-color: #FAFAFA;\n  border-width: 10px;\n  margin-left: -10px;\n}\n\n.myDpSelectorArrow:before {\n  border-color: rgba(204, 204, 204, 0);\n  border-bottom-color: #CCC;\n  border-width: 11px;\n  margin-left: -11px;\n}\n\n.myDpSelectorArrow:focus:before {\n  border-bottom-color: #ADD8E6;\n}\n\n.myDpSelectorArrowLeft:after,\n.myDpSelectorArrowLeft:before {\n  left: 24px;\n}\n\n.myDpSelectorArrowRight:after,\n.myDpSelectorArrowRight:before {\n  left: 86%;\n}\n\n::-ms-clear {\n  display: none;\n}\n\n.myDpCalTable,\n.myDpMonthTable,\n.myDpYearTable,\n.myDpFooterBar {\n  border-radius: 0 0 4px 4px;\n}\n\n.myDpCalTable.myDpNoFooter tbody tr:nth-child(6) td:first-child,\n.myDpMonthTable.myDpNoFooter tbody tr:nth-child(4) td:first-child,\n.myDpYearTable.myDpNoFooter tbody tr:nth-child(5) td:first-child {\n  border-bottom-left-radius: 4px;\n}\n\n.myDpCalTable.myDpNoFooter tbody tr:nth-child(6) td:last-child,\n.myDpMonthTable.myDpNoFooter tbody tr:nth-child(4) td:last-child,\n.myDpYearTable.myDpNoFooter tbody tr:nth-child(5) td:last-child {\n  border-bottom-right-radius: 4px;\n}\n\n.myDpCalTable,\n.myDpMonthTable,\n.myDpYearTable {\n  table-layout: fixed;\n  width: 100%;\n  background-color: #FFF;\n  font-size: 14px;\n}\n\n.myDpFooter {\n  height: calc(100% - 60px);\n}\n\n.myDpNoFooter {\n  height: calc(100% - 30px);\n}\n\n.myDpCalTable,\n.myDpMonthTable,\n.myDpYearTable,\n.myDpWeekDayTitle,\n.myDpDaycell,\n.myDpMonthcell,\n.myDpYearcell {\n  border-collapse: collapse;\n  color: #333;\n  line-height: 1.1;\n}\n\n.myDpDaycell,\n.myDpMonthcell,\n.myDpYearcell {\n  padding: 4px;\n  text-align: center;\n  outline: none;\n}\n\n.myDpDaycell {\n  background-color: #fff;\n  position: relative;\n}\n\n.myDpWeekDayTitle {\n  background-color: transparent;\n  color: #333;\n  font-size: 13px;\n  font-weight: normal;\n  vertical-align: middle;\n  max-width: 36px;\n  overflow: hidden;\n  white-space: nowrap;\n  height: 23px;\n  text-align: center;\n}\n\n.myDpWeekDayTitleWeekNbr {\n  width: 20px;\n}\n\n.myDpMonthcell {\n  background-color: #fff;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.myDpYearcell {\n  background-color: #fff;\n  width: 20%;\n}\n\n.myDpMonthNbr {\n  font-size: 10px; \n  display: block;\n}\n\n.myDpDaycellWeekNbr {\n  font-size: 9px;\n  cursor: default;\n  text-align: center;\n  color: #333;\n}\n\n.myDpPrevMonth,\n.myDpNextMonth {\n  color: #999;\n}\n\n.myDpMonthYearSelBar {\n  display: flex;\n  height: 30px;\n  background-color: #fff;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.myDpPrevBtn {\n  margin-left: 10px;\n}\n\n.myDpNextBtn {\n  margin-left: auto;\n  margin-right: 10px;\n}\n\n.myDpMonthYearText {\n  width: 100%;\n  line-height: 30px;\n  text-align: center;\n}\n\n.myDpFooterBar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 30px;\n  background-color: #fff;\n}\n\n.myDpHeaderBtn {\n  background: transparent;\n  padding: 0;\n  border: none;\n  line-height: 30px;\n  height: 28px;\n  margin-top: 1px;\n  color: #000;\n  outline: none;\n  cursor: default;\n}\n\n.myDpFooterBtn {\n  margin: 0 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.myDpMonthBtn,\n.myDpYearBtn {\n  font-size: 16px;\n}\n\n.myDpMonthBtn {\n  margin-right: 6px;\n}\n\n.myDpHighlight {\n  color: #C30000;\n}\n\n.myDpDimDay {\n  opacity: 0.5;\n}\n\n.myDpCurrMonth {\n  background-color: #fff;\n  font-weight: normal;\n}\n\n.myDpMarkDate {\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  border-right: 8px solid transparent;\n}\n\n.myDpMarkCurrDay,\n.myDpMarkCurrMonth,\n.myDpMarkCurrYear {\n  border-bottom: 2px solid #333;\n}\n\n.myDpHeaderLabelBtnNotEdit {\n  cursor: default;\n}\n\n.myDpHeaderBtn::-moz-focus-inner,\n.myDpPrevBtn::-moz-focus-inner,\n.myDpNextBtn::-moz-focus-inner {\n  border: 0;\n}\n\n.myDpHeaderBtn:focus,\n.myDpMonthLabel:focus,\n.myDpYearLabel:focus,\n.myDpFooterBtn:focus {\n  color: #66afe9;\n  outline: none;\n}\n\n.myDpDaycell:focus,\n.myDpMonthcell:focus,\n.myDpYearcell:focus {\n  box-shadow: inset 0 0 0 1px #66afe9;\n}\n\n.myDpTableSingleDay:hover,\n.myDpTableSingleMonth:hover,\n.myDpTableSingleYear:hover {\n  background-color: #DDD;\n}\n\n.myDpMonthLabel,\n.myDpYearLabel,\n.myDpDaycell,\n.myDpMonthcell,\n.myDpYearcell {\n  cursor: pointer;\n}\n\n.myDpHeaderBtnEnabled:hover,\n.myDpMonthLabel:hover,\n.myDpYearLabel:hover,\n.myDpFooterBtn:hover {\n  color: #777;\n}\n\n.myDpHeaderBtnEnabled {\n  cursor: pointer;\n}\n\n.myDpHeaderBtnDisabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n\n.myDpDisabled {\n  cursor: default;\n  color: #777;\n  background: repeating-linear-gradient(-45deg, #ccc 7px, #ccc 8px, transparent 7px, transparent 14px);\n}\n\n.myDpRangeColor {\n  background-color: #dbeaff;\n}\n\n.myDpRangeBegin,\n.myDpRangeEnd,\n.myDpSelectedDay,\n.myDpSelectedMonth,\n.myDpSelectedYear {\n  border: none;\n  background-color: #8EBFFF;\n}\n\n@font-face {\n  font-family: 'angular-mydatepicker';\n  src: url('data:application/octet-stream;base64,d09GRgABAAAAAAs4AA8AAAAAE+gAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABWAAAADsAAABUIIslek9TLzIAAAGUAAAAQwAAAFY+IEi5Y21hcAAAAdgAAABQAAABfohD7KljdnQgAAACKAAAABMAAAAgBtX/BGZwZ20AAAI8AAAFkAAAC3CKkZBZZ2FzcAAAB8wAAAAIAAAACAAAABBnbHlmAAAH1AAAAL8AAAEAS//bfWhlYWQAAAiUAAAAMQAAADYW6nhraGhlYQAACMgAAAAbAAAAJAc8A1ZobXR4AAAI5AAAAAwAAAAMCXwAAGxvY2EAAAjwAAAACAAAAAgAQACAbWF4cAAACPgAAAAgAAAAIACmC5tuYW1lAAAJGAAAAXcAAALNzJ0fIXBvc3QAAAqQAAAAKwAAAEAj+eC8cHJlcAAACrwAAAB6AAAAhuVBK7x4nGNgZGBg4GIwYLBjYHJx8wlh4MtJLMljkGJgYYAAkDwymzEnMz2RgQPGA8qxgGkOIGaDiAIAJjsFSAB4nGNgZNZknMDAysDAVMW0h4GBoQdCMz5gMGRkAooysDIzYAUBaa4pDA4vGF4wMgf9z2KIYg5imAYUZgTJAQDMhAtXAHic7ZCxDYAwDATPiaFAjEFBwTBU7F+yRfK2GYOX7qR/uTKwAF1cwsEejMit1XLvbLk7R9547K+NIRNW93STVv7s6fNrLf5U1OcK2gTMuAtdeJxjYEADEhDIHPQ/C4QBEmwD3QB4nK1WaXfTRhQdeUmchCwlCy1qYcTEabBGJmzBgAlBsmMgXZytlaCLFDvpvvGJ3+Bf82Tac+g3flrvGy8kkLTncJqTo3fnzdXM22USWpLYC+uRlJsvxdTWJo3sPAnphk3LUXwoO3shZYrJ3wVREK2W2rcdh0REIlC1rrBEEPseWZpkfOhRRsu2pFdNyi096S5b40G9Vd9+GjrKsTuhpGYzdGg9siVVGFWiSKY9UtKmZaj6K0krvL/CzFfNUMKITiJpvBnG0EjeG2e0ymg1tuMoimyy3ChSJJrhQRR5lNUS5+SKCQzKB82Q8sqnEeXD/Iis2KOcVrBLttP8vi95p3c5P7Ffb1G25EAfyI7s4Ox0JV+EW1th3LST7ShUEXbXd0Js2exU/2aP8ppGA7crMr3QjGCpfIUQKz+hzP4hWS2cT/mSR6NaspETQetlTuxLPoHW44gpcc0YWdDd0QkR1P2SMwz2mD4e/PHeKZYLEwJ4HMt6RyWcCBMpYXM0SdowcmAlZYsqqfWumDjldVrEW8J+7drRl85o41B3YjxbDx1bOVHJ8WhSp5lMndpJzaMpDaKUdCZ4zK8DKD+iSV5tYzWJlUfTOGbGhEQiAi3cS1NBLDuxpCkEzaMZvbkbprl2LVqkyQP13KP39OZWuLnTU9oO9LNGf1anYjrYC9PpaeQv8Wna5SJF6frpGX5M4kHWAjKRLTbDlIMHb/0O0svXlhyF1wbY7u3zK6h91kTwpAH7G9AeT9UpCUyFmFWIVkBirWtZlsnVrBapyNR3Q5pWvqzTBIpyHBfHvoxx/V8zM5aYEr7fidOzIy49c+1LCNMcfJt1PZrXqcVyAXFmeU6nWZbv6zTH8gOd5lme1+kIS1unoyw/1GmB5Uc6HWN5QQuadN/BkIsw5AIOkDCEpQNDWF6CISwVDGG5CENYFmEIyyUYwvJjGMJyGYawvKxl1dRTSePamVgGbEJgYo4eucxF5WoquVRCu2hUakOeEm6VVBTPqn9loF488oY5sBZIl8iaXzHOlY9G5fjWFS1vGjtXwLHqbx+O9jnxUtaLhT8F/9XWVCW9Ys3Dk6vwG4aebCeqNql4dE2Xz1U9uv5fVFRYC/QbSIVYKMqybHBnIoSPOp2GaqCVQ8xszDy063XLmp/D/TcxQhZQ/fg3FBoL3INOWUlZ7eCs1dfbstw7g3I4EyxJMTfz+lb4IiOz0n6RWcqej3wecAWMSmXYagOtFbzZJzEPmd4kzwRxW1E2SNrYzgSJDRzzgHnznQQmYeqqDeRO4YYN+AVhbsF5J1yieqMsh+5F7PMopPxbp+JE9qhojMCz2Rthr+9Cym9xDCQ0+aV+DFQVoakYNRXQNFJuqAZfxtm6bULGDvQjKnbDsqziw8cW95WSbRmEfKSI1aOjn9Zeok6q3H5mFJfvnb4FwSA1MX9733RxkMq7WskyR20DU7calVPXmkPjVYfq5lH1vePsEzlrmm66Jx56X9Oq28HFXCyw9m0O0lImF9T1YYUNosvFpVDqZTRJ77gHGBYY0O9Qio3/q/rYfJ4rVYXRcSTfTtS30edgDPwP2H9H9QPQ92Pocg0uz/eaE59u9OFsma6iF+un6Dcwa625WboG3NB0A+IhR62OuMoNfKcGcXqkuRzpIeBj3RXiAcAmgMXgE921jOZTAKP5jDk+wOfMYdBkDoMt5jDYZs4awA5zGOwyh8Eecxh8wZx1gC+ZwyBkDoOIOQyeMCcAeMocBl8xh8HXzGHwDXPuA3zLHAYxcxgkzGGwr+nWMMwtXtBdoLZBVaADU09Y3MPiUFNlyP6OF4b9vUHM/sEgpv6o6faQ+hMvDPVng5j6i0FM/VXTnSH1N14Y6u8GMfUPg5j6TL8Yy2UGv4x8lwoHlF1sPufvifcP28VAuQABAAH//wAPeJxjYGRg+H+AaQazC4MIg+5WRkYGRkZ37w0qAREO3AwMjAwFQD4Po6e0AyeQw5jPwMCQFrlFXJyJVUybk0lMhJ+RTUmdUc3EnNHMSJ5RTISp7991Rk0urlhuGe5/SdzcjPO45LhiuZhW/bvx7zqYycU4H0gzzuPmjuWSYwBZAbK/BGo/J1H2ywiB7QfarQ+ymxNI2AMdIA5yQBbQWhnuWKDVGv9ugC0BWsbFmPkvEeIqRk1GDYgCkEIGAB9cLoQAeJxjYGRgYABic9F3f+P5bb4ycDO/AIow3Pw4yxFB/z/A/ILZBcjlYGACiQIAcjgNFAAAAHicY2BkYGAO+p8FJF8wMIBJRgZUwAwAXPcDmgAD6AAAAsoAAALKAAAAAAAAAEAAgAABAAAAAwAVAAEAAAAAAAIABAAUAHMAAAAqC3AAAAAAeJx1kMtOwkAUhv+RiwqJGk3cOisDMZZL4gISEhIMbHRDDFtTSmlLSodMBxJew3fwYXwJn8WfdjAGYpvpfOebM2dOB8A1viGQP08cOQucMcr5BKfoWS7QP1sukl8sl1DFm+Uy/bvlCh4QWK7iBh+sIIrnjBb4tCxwJS4tn+BC3Fku0D9aLpJ7lku4Fa+Wy/Se5QomIrVcxb34GqjVVkdBaGRtUJftZqsjp1upqKLEjaW7NqHSqezLuUqMH8fK8dRyz2M/WMeu3of7eeLrNFKJbDnNvRr5ia9d48921dNN0DZmLudaLeXQZsiVVgvfM05ozKrbaPw9DwMorLCFRsSrCmEgUaOtc26jiRY6pCkzJDPzrAgJXMQ0LtbcEWYrKeM+x5xRQuszIyY78PhdHvkxKeD+mFX00ephPCHtzogyL9mXw+4Os0akJMt0Mzv77T3Fhqe1aQ137brUWVcSw4MakvexW1vQePROdiuGtosG33/+7wfseIRVAHicY2BigAAuBuyAmZGJkZmRhYEzJzWtRDe/IDWPqygzPQPCZGAAAGN+B7YAeJxj8N7BcCIoYiMjY1/kBsadHAwcDMkFGxlYnTYxMDJogRibuZgYOSAsPgYwi81pF9MBoDQnkM3utIvBAcJmZnDZqMLYERixwaEjYiNzistGNRBvF0cDAyOLQ0dySARISSQQbOZhYuTR2sH4v3UDS+9GJgYXAAx2I/QAAA==') format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n.myDpIcon {\n  font-family: 'angular-mydatepicker';\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #222;\n  font-size: 20px;\n}\n\n.myDpIconLeftArrow:before {\n  content: \"\\e800\";\n}\n\n.myDpIconRightArrow:before {\n  content: \"\\e801\";\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2FuZ3VsYXItbXlkYXRlcGlja2VyL3NyYy9saWIvY3NzL2FuZ3VsYXItbXlkYXRlcGlja2VyLnN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFHRSxzQkFBc0I7RUFDdEIseUNBQXlDO0VBQ3pDLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtJQUM1QixVQUFVO0VBQ1o7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7SUFDcEIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSx3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0UsMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRTtJQUNFLG9DQUFvQztJQUNwQyxVQUFVO0VBQ1o7RUFDQTtJQUNFLDZCQUE2QjtJQUM3QixVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFO0lBQ0UsNkJBQTZCO0lBQzdCLFVBQVU7RUFDWjtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0Usa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0U7SUFDRSxvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLGtDQUFrQztFQUNwQztBQUNGOztBQUVBO0VBQ0UsNERBQTREO0FBQzlEOztBQUVBO0VBQ0U7SUFDRSxrQ0FBa0M7SUFDbEMsVUFBVTtFQUNaO0VBQ0E7SUFDRSxtQ0FBbUM7SUFDbkMsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFNBQVM7RUFDVCxRQUFRO0VBQ1Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7Ozs7RUFJRSwwQkFBMEI7QUFDNUI7O0FBRUE7OztFQUdFLDhCQUE4QjtBQUNoQzs7QUFFQTs7O0VBR0UsK0JBQStCO0FBQ2pDOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOzs7Ozs7O0VBT0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULG1DQUFtQztBQUNyQzs7QUFFQTs7O0VBR0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7O0VBR0UsU0FBUztBQUNYOztBQUVBOzs7O0VBSUUsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTs7O0VBR0UsbUNBQW1DO0FBQ3JDOztBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7O0VBS0UsZUFBZTtBQUNqQjs7QUFFQTs7OztFQUlFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxvR0FBb0c7QUFDdEc7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7Ozs7O0VBS0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyx3ekhBQXd6SDtFQUN4ekgsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1teWRwIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbn1cblxuLm5nLW15cnRsIHtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5cbi5uZy1teWRwICoge1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLm5nLW15ZHAgdGFibGUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi5uZy1teWRwIHRhYmxlIHRkLFxuLm5nLW15ZHAgdGFibGUgdGgge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLm15RHBTZWxlY3RvciB7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB6LWluZGV4OiAxMDAwMDA7XG59XG5cbi5teURwVmlld0NoYW5nZUFuaW1hdGlvbiB7XG4gIGFuaW1hdGlvbjogbXlEcFZpZXdDaGFuZ2VBbmltYXRpb24gMC4ycyBsaW5lYXI7XG59XG5cbkBrZXlmcmFtZXMgbXlEcFZpZXdDaGFuZ2VBbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbiAgICBvcGFjaXR5OiAwLjE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5teURwQW5pbWF0aW9uRmFkZUluIHtcbiAgYW5pbWF0aW9uOiBteURwQW5pbWF0aW9uRmFkZUluIDAuNXMgbGluZWFyO1xufVxuXG5Aa2V5ZnJhbWVzIG15RHBBbmltYXRpb25GYWRlSW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5teURwQW5pbWF0aW9uRmFkZU91dCB7XG4gIGFuaW1hdGlvbjogbXlEcEFuaW1hdGlvbkZhZGVPdXQgMC4zcyBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgbXlEcEFuaW1hdGlvbkZhZGVPdXQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5teURwQW5pbWF0aW9uU2NhbGVUb3BJbiB7XG4gIGFuaW1hdGlvbjogbXlEcEFuaW1hdGlvblNjYWxlVG9wSW4gMC4zcyBsaW5lYXI7XG59XG5cbkBrZXlmcmFtZXMgbXlEcEFuaW1hdGlvblNjYWxlVG9wSW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDAlO1xuICB9XG59XG5cbi5teURwQW5pbWF0aW9uU2NhbGVUb3BPdXQge1xuICBhbmltYXRpb246IG15RHBBbmltYXRpb25TY2FsZVRvcE91dCAwLjNzIGxpbmVhciBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBteURwQW5pbWF0aW9uU2NhbGVUb3BPdXQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4ubXlEcEFuaW1hdGlvblNjYWxlQ2VudGVySW4ge1xuICBhbmltYXRpb246IG15RHBBbmltYXRpb25TY2FsZUNlbnRlckluIDAuM3MgbGluZWFyO1xufVxuXG5Aa2V5ZnJhbWVzIG15RHBBbmltYXRpb25TY2FsZUNlbnRlckluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuXG4ubXlEcEFuaW1hdGlvblNjYWxlQ2VudGVyT3V0IHtcbiAgYW5pbWF0aW9uOiBteURwQW5pbWF0aW9uU2NhbGVDZW50ZXJPdXQgMC4zcyBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgbXlEcEFuaW1hdGlvblNjYWxlQ2VudGVyT3V0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLm15RHBBbmltYXRpb25Sb3RhdGVJbiB7XG4gIGFuaW1hdGlvbjogbXlEcEFuaW1hdGlvblJvdGF0ZUluIDAuM3MgbGluZWFyO1xufVxuXG5Aa2V5ZnJhbWVzIG15RHBBbmltYXRpb25Sb3RhdGVJbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgcm90YXRlKC00NWRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5teURwQW5pbWF0aW9uUm90YXRlT3V0IHtcbiAgYW5pbWF0aW9uOiBteURwQW5pbWF0aW9uUm90YXRlT3V0IDAuM3MgbGluZWFyIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIG15RHBBbmltYXRpb25Sb3RhdGVPdXQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgcm90YXRlKC00NWRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4ubXlEcEFuaW1hdGlvbkZsaXBEaWFnb25hbEluIHtcbiAgYW5pbWF0aW9uOiBteURwQW5pbWF0aW9uRmxpcERpYWdvbmFsSW4gMC4zcyBsaW5lYXI7XG59XG5cbkBrZXlmcmFtZXMgbXlEcEFuaW1hdGlvbkZsaXBEaWFnb25hbEluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMSwgMSwgMCwgLTc4ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDEsIDEsIDAsIDBkZWcpO1xuICB9XG59XG5cbi5teURwQW5pbWF0aW9uRmxpcERpYWdvbmFsT3V0IHtcbiAgYW5pbWF0aW9uOiBteURwQW5pbWF0aW9uRmxpcERpYWdvbmFsT3V0IDAuM3MgbGluZWFyIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIG15RHBBbmltYXRpb25GbGlwRGlhZ29uYWxPdXQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgxLCAxLCAwLCAwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMSwgMSwgMCwgNzhkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLm15RHBTZWxlY3RvckFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubXlEcFNlbGVjdG9yUG9zSW5pdGlhbCB7XG4gIHBvc2l0aW9uOiBpbml0aWFsO1xufVxuXG4ubXlEcFNlbGVjdG9yOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogLTFweCAxcHggNnB4IDBweCAjQUREOEU2O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubXlEcFNlbGVjdG9yQXJyb3cge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xufVxuXG4ubXlEcFNlbGVjdG9yQXJyb3c6YWZ0ZXIsXG4ubXlEcFNlbGVjdG9yQXJyb3c6YmVmb3JlIHtcbiAgYm90dG9tOiAxMDAlO1xuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb250ZW50OiBcIiBcIjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubXlEcFNlbGVjdG9yQXJyb3c6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMCk7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNGQUZBRkE7XG4gIGJvcmRlci13aWR0aDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4ubXlEcFNlbGVjdG9yQXJyb3c6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIwNCwgMjA0LCAyMDQsIDApO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjQ0NDO1xuICBib3JkZXItd2lkdGg6IDExcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTFweDtcbn1cblxuLm15RHBTZWxlY3RvckFycm93OmZvY3VzOmJlZm9yZSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNBREQ4RTY7XG59XG5cbi5teURwU2VsZWN0b3JBcnJvd0xlZnQ6YWZ0ZXIsXG4ubXlEcFNlbGVjdG9yQXJyb3dMZWZ0OmJlZm9yZSB7XG4gIGxlZnQ6IDI0cHg7XG59XG5cbi5teURwU2VsZWN0b3JBcnJvd1JpZ2h0OmFmdGVyLFxuLm15RHBTZWxlY3RvckFycm93UmlnaHQ6YmVmb3JlIHtcbiAgbGVmdDogODYlO1xufVxuXG46Oi1tcy1jbGVhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5teURwQ2FsVGFibGUsXG4ubXlEcE1vbnRoVGFibGUsXG4ubXlEcFllYXJUYWJsZSxcbi5teURwRm9vdGVyQmFyIHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XG59XG5cbi5teURwQ2FsVGFibGUubXlEcE5vRm9vdGVyIHRib2R5IHRyOm50aC1jaGlsZCg2KSB0ZDpmaXJzdC1jaGlsZCxcbi5teURwTW9udGhUYWJsZS5teURwTm9Gb290ZXIgdGJvZHkgdHI6bnRoLWNoaWxkKDQpIHRkOmZpcnN0LWNoaWxkLFxuLm15RHBZZWFyVGFibGUubXlEcE5vRm9vdGVyIHRib2R5IHRyOm50aC1jaGlsZCg1KSB0ZDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbn1cblxuLm15RHBDYWxUYWJsZS5teURwTm9Gb290ZXIgdGJvZHkgdHI6bnRoLWNoaWxkKDYpIHRkOmxhc3QtY2hpbGQsXG4ubXlEcE1vbnRoVGFibGUubXlEcE5vRm9vdGVyIHRib2R5IHRyOm50aC1jaGlsZCg0KSB0ZDpsYXN0LWNoaWxkLFxuLm15RHBZZWFyVGFibGUubXlEcE5vRm9vdGVyIHRib2R5IHRyOm50aC1jaGlsZCg1KSB0ZDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbn1cblxuLm15RHBDYWxUYWJsZSxcbi5teURwTW9udGhUYWJsZSxcbi5teURwWWVhclRhYmxlIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm15RHBGb290ZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xufVxuXG4ubXlEcE5vRm9vdGVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcbn1cblxuLm15RHBDYWxUYWJsZSxcbi5teURwTW9udGhUYWJsZSxcbi5teURwWWVhclRhYmxlLFxuLm15RHBXZWVrRGF5VGl0bGUsXG4ubXlEcERheWNlbGwsXG4ubXlEcE1vbnRoY2VsbCxcbi5teURwWWVhcmNlbGwge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBjb2xvcjogIzMzMztcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cblxuLm15RHBEYXljZWxsLFxuLm15RHBNb250aGNlbGwsXG4ubXlEcFllYXJjZWxsIHtcbiAgcGFkZGluZzogNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5teURwRGF5Y2VsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm15RHBXZWVrRGF5VGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWF4LXdpZHRoOiAzNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBoZWlnaHQ6IDIzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm15RHBXZWVrRGF5VGl0bGVXZWVrTmJyIHtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5teURwTW9udGhjZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm15RHBZZWFyY2VsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5teURwTW9udGhOYnIge1xuICBmb250LXNpemU6IDEwcHg7IFxuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm15RHBEYXljZWxsV2Vla05iciB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5teURwUHJldk1vbnRoLFxuLm15RHBOZXh0TW9udGgge1xuICBjb2xvcjogIzk5OTtcbn1cblxuLm15RHBNb250aFllYXJTZWxCYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbn1cblxuLm15RHBQcmV2QnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5teURwTmV4dEJ0biB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5teURwTW9udGhZZWFyVGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubXlEcEZvb3RlckJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5teURwSGVhZGVyQnRuIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGhlaWdodDogMjhweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBjb2xvcjogIzAwMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubXlEcEZvb3RlckJ0biB7XG4gIG1hcmdpbjogMCAxMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLm15RHBNb250aEJ0bixcbi5teURwWWVhckJ0biB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm15RHBNb250aEJ0biB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4ubXlEcEhpZ2hsaWdodCB7XG4gIGNvbG9yOiAjQzMwMDAwO1xufVxuXG4ubXlEcERpbURheSB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLm15RHBDdXJyTW9udGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ubXlEcE1hcmtEYXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJweDtcbiAgbGVmdDogMnB4O1xuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLm15RHBNYXJrQ3VyckRheSxcbi5teURwTWFya0N1cnJNb250aCxcbi5teURwTWFya0N1cnJZZWFyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMzM7XG59XG5cbi5teURwSGVhZGVyTGFiZWxCdG5Ob3RFZGl0IHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubXlEcEhlYWRlckJ0bjo6LW1vei1mb2N1cy1pbm5lcixcbi5teURwUHJldkJ0bjo6LW1vei1mb2N1cy1pbm5lcixcbi5teURwTmV4dEJ0bjo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbn1cblxuLm15RHBIZWFkZXJCdG46Zm9jdXMsXG4ubXlEcE1vbnRoTGFiZWw6Zm9jdXMsXG4ubXlEcFllYXJMYWJlbDpmb2N1cyxcbi5teURwRm9vdGVyQnRuOmZvY3VzIHtcbiAgY29sb3I6ICM2NmFmZTk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5teURwRGF5Y2VsbDpmb2N1cyxcbi5teURwTW9udGhjZWxsOmZvY3VzLFxuLm15RHBZZWFyY2VsbDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjNjZhZmU5O1xufVxuXG4ubXlEcFRhYmxlU2luZ2xlRGF5OmhvdmVyLFxuLm15RHBUYWJsZVNpbmdsZU1vbnRoOmhvdmVyLFxuLm15RHBUYWJsZVNpbmdsZVllYXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xufVxuXG4ubXlEcE1vbnRoTGFiZWwsXG4ubXlEcFllYXJMYWJlbCxcbi5teURwRGF5Y2VsbCxcbi5teURwTW9udGhjZWxsLFxuLm15RHBZZWFyY2VsbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm15RHBIZWFkZXJCdG5FbmFibGVkOmhvdmVyLFxuLm15RHBNb250aExhYmVsOmhvdmVyLFxuLm15RHBZZWFyTGFiZWw6aG92ZXIsXG4ubXlEcEZvb3RlckJ0bjpob3ZlciB7XG4gIGNvbG9yOiAjNzc3O1xufVxuXG4ubXlEcEhlYWRlckJ0bkVuYWJsZWQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5teURwSGVhZGVyQnRuRGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBvcGFjaXR5OiAwLjY1O1xufVxuXG4ubXlEcERpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBjb2xvcjogIzc3NztcbiAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNjY2MgN3B4LCAjY2NjIDhweCwgdHJhbnNwYXJlbnQgN3B4LCB0cmFuc3BhcmVudCAxNHB4KTtcbn1cblxuLm15RHBSYW5nZUNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWFmZjtcbn1cblxuLm15RHBSYW5nZUJlZ2luLFxuLm15RHBSYW5nZUVuZCxcbi5teURwU2VsZWN0ZWREYXksXG4ubXlEcFNlbGVjdGVkTW9udGgsXG4ubXlEcFNlbGVjdGVkWWVhciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhFQkZGRjtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnYW5ndWxhci1teWRhdGVwaWNrZXInO1xuICBzcmM6IHVybCgnZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LGQwOUdSZ0FCQUFBQUFBczRBQThBQUFBQUUrZ0FBUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCSFUxVkNBQUFCV0FBQUFEc0FBQUJVSUlzbGVrOVRMeklBQUFHVUFBQUFRd0FBQUZZK0lFaTVZMjFoY0FBQUFkZ0FBQUJRQUFBQmZvaEQ3S2xqZG5RZ0FBQUNLQUFBQUJNQUFBQWdCdFgvQkdad1oyMEFBQUk4QUFBRmtBQUFDM0NLa1pCWloyRnpjQUFBQjh3QUFBQUlBQUFBQ0FBQUFCQm5iSGxtQUFBSDFBQUFBTDhBQUFFQVMvL2JmV2hsWVdRQUFBaVVBQUFBTVFBQUFEWVc2bmhyYUdobFlRQUFDTWdBQUFBYkFBQUFKQWM4QTFab2JYUjRBQUFJNUFBQUFBd0FBQUFNQ1h3QUFHeHZZMkVBQUFqd0FBQUFDQUFBQUFnQVFBQ0FiV0Y0Y0FBQUNQZ0FBQUFnQUFBQUlBQ21DNXR1WVcxbEFBQUpHQUFBQVhjQUFBTE56SjBmSVhCdmMzUUFBQXFRQUFBQUt3QUFBRUFqK2VDOGNISmxjQUFBQ3J3QUFBQjZBQUFBaHVWQks3eDRuR05nWkdCZzRHSXdZTEJqWUhKeDh3bGg0TXRKTE1samtHSmdZWUFBa0R3eW16RW5NejJSZ1FQR0E4cXhnR2tPSUdhRGlBSUFKanNGU0FCNG5HTmdaTlprbk1EQXlzREFWTVcwaDRHQm9RZENNejVnTUdSa0Fvb3lzREl6WUFVQmFhNHBEQTR2R0Y0d01nZjl6MktJWWc1aW1BWVVaZ1RKQVFETWhBdFhBSGljN1pDeERZQXdEQVRQaWFGQWpFRkJ3VEJVN0YreVJmSzJHWU9YN3FSL3VUS3dBRjFjd3NFZWpNaXQxWEx2YkxrN1I5NTQ3SytOSVJOVzkzU1RWdjdzNmZOckxmNVUxT2NLMmdUTXVBdGRlSnhqWUVBREVoRElIUFEvQzRRQkVtd0QzUUI0bksxV2FYZlRSaFFkZVVtY2hDd2xDeTFxWWNURWFiQkdKbXpCZ0FsQnNtTWdYWnl0bGFDTEZEdnB2dkdKMytCZjgyVGFjK2czZmxydkd5OGtrTFRuY0pxVG8zZm56ZFhNMjJVU1dwTFlDK3VSbEpzdnhkVFdKbzNzUEFucGhrM0xVWHdvTzNzaFpZckozd1ZSRUsyVzJyY2RoMFJFSWxDMXJyQkVFUHNlV1pwa2ZPaFJSc3UycEZkTnlpMDk2UzViNDBHOVZkOStHanJLc1R1aHBHWXpkR2c5c2lWVkdGV2lTS1k5VXRLbVphajZLMGtydkwvQ3pGZk5VTUtJVGlKcHZCbkcwRWplRzJlMHltZzF0dU1vaW15eTNDaFNKSnJoUVJSNWxOVVM1K1NLQ1F6S0I4MlE4c3FuRWVYRC9JaXMyS09jVnJCTHR0UDh2aTk1cDNjNVA3RmZiMUcyNUVBZnlJN3M0T3gwSlYrRVcxdGgzTFNUN1NoVUVYYlhkMEpzMmV4VS8yYVA4cHBHQTdjck1yM1FqR0NwZklVUUt6K2h6UDRoV1MyY1QvbVNSNk5hc3BFVFFldGxUdXhMUG9IVzQ0Z3BjYzBZV2REZDBRa1IxUDJTTXd6Mm1ENGUvUEhlS1pZTEV3SjRITXQ2UnlXY0NCTXBZWE0wU2Rvd2NtQWxaWXNxcWZXdW1EamxkVnJFVzhKKzdkclJsODVvNDFCM1lqeGJEeDFiT1ZISjhXaFNwNWxNbmRwSnphTXBEYUtVZENaNHpLOERLRCtpU1Y1dFl6V0psVWZUT0diR2hFUWlBaTNjUzFOQkxEdXhwQ2tFemFNWnZia2JwcmwyTFZxa3lRUDEzS1AzOU9aV3VMblRVOW9POUxOR2YxYW5ZanJZQzlQcGFlUXY4V25hNVNKRjZmcnBHWDVNNGtIV0FqS1JMVGJEbElNSGIvME8wc3ZYbGh5RjF3Ylk3dTN6SzZoOTFrVHdwQUg3RzlBZVQ5VXBDVXlGbUZXSVZrQmlyV3RabHNuVnJCYXB5TlIzUTVwV3ZxelRCSXB5SEJmSHZveHgvVjh6TTVhWUVyN2ZpZE96SXk0OWMrMUxDTk1jZkp0MVBaclhxY1Z5QVhGbWVVNm5XWmJ2NnpUSDhnT2Q1bG1lMStrSVMxdW5veXcvMUdtQjVVYzZIV041UVF1YWROL0JrSXN3NUFJT2tEQ0VwUU5EV0Y2Q0lTd1ZER0c1Q0VOWUZtRUl5eVVZd3ZKakdNSnlHWWF3dkt4bDFkUlRTZVBhbVZnR2JFSmdZbzRldWN4RjVXb3F1VlJDdTJoVWFrT2VFbTZWVkJUUHFuOWxvRjQ4OG9ZNXNCWklsOGlhWHpIT2xZOUc1ZmpXRlMxdkdqdFh3TEhxYngrTzlqbnhVdGFMaFQ4Ri85WFdWQ1c5WXMzRGs2dndHNGFlYkNlcU5xbDRkRTJYejFVOXV2NWZWRlJZQy9RYlNJVllLTXF5YkhCbklvU1BPcDJHYXFDVlE4eHN6RHkwNjNYTG1wL0QvVGN4UWhaUS9mZzNGQm9MM0lOT1dVbFo3ZUNzMWRmYnN0dzdnM0k0RXl4Sk1UZnorbGI0SWlPejBuNlJXY3FlajN3ZWNBV01TbVhZYWdPdEZielpKekVQbWQ0a3p3UnhXMUUyU05yWXpnU0pEUnp6Z0huem5RUW1ZZXFxRGVSTzRZWU4rQVZoYnNGNUoxeWllcU1zaCs1RjdQTW9wUHhicCtKRTlxaG9qTUN6MlJ0aHIrOUN5bTl4RENRMCthVitERlFWb2FrWU5SWFFORkp1cUFaZnh0bTZiVUxHRHZRaktuYkRzcXppdzhjVzk1V1NiUm1FZktTSTFhT2puOVplb2s2cTNINW1GSmZ2bmI0RndTQTFNWDk3MzNSeGtNcTdXc2t5UjIwRFU3Y2FsVlBYbWtQalZZZnE1bEgxdmVQc0V6bHJtbTY2Sng1Nlg5T3EyOEhGWEN5dzltME8wbEltRjlUMVlZVU5vc3ZGcFZEcVpUUko3N2dIR0JZWTBPOVFpbzMvcS9yWWZKNHJWWVhSY1NUZlR0UzMwZWRnRFB3UDJIOUg5UVBROTJQb2NnMHV6L2VhRTU5dTlPRnNtYTZpRit1bjZEY3dhNjI1V2JvRzNOQjBBK0loUjYyT3VNb05mS2NHY1hxa3VSenBJZUJqM1JYaUFjQW1nTVhnRTkyMWpPWlRBS1A1akRrK3dPZk1ZZEJrRG9NdDVqRFlaczRhd0E1ekdPd3loOEVlY3hoOHdaeDFnQytad3lCa0RvT0lPUXllTUNjQWVNb2NCbDh4aDhIWHpHSHdEWFB1QTN6TEhBWXhjeGdrekdHd3IrbldNTXd0WHRCZG9MWkJWYUFEVTA5WTNNUGlVRk5seVA2T0Y0Yjl2VUhNL3NFZ3B2Nm82ZmFRK2hNdkRQVm5nNWo2aTBGTS9WWFRuU0gxTjE0WTZ1OEdNZlVQZzVqNlRMOFl5MlVHdjR4OGx3b0hsRjFzUHVmdmlmY1AyOFZBdVFBQkFBSC8vd0FQZUp4allHUmcrSCtBYVFhekM0TUlnKzVXUmtZR1JrWjM3dzBxQVJFTzNBd01qQXdGUUQ0UG82ZTBBeWVRdzVqUHdNQ1FGcmxGWEp5SlZVeWJrMGxNaEorUlRVbWRVYzNFbk5ITVNKNVJUSVNwNzk5MVJrMHVybGh1R2U1L1NkemNqUE80NUxoaXVaaFcvYnZ4N3pxWXljVTRIMGd6enVQbWp1V1NZd0JaQWJLL0JHby9KMUgyeXdpQjdRZmFyUSt5bXhOSTJBTWRJQTV5UUJiUVdobnVXS0RWR3Y5dWdDMEJXc2JGbVBrdkVlSXFSazFHRFlnQ2tFSUdBQjljTG9RQWVKeGpZR1JnWUFCaWM5RjNmK1A1YmI0eWNETy9BSW93M1B3NHl4RkIvei9BL0lMWkJjamxZR0FDaVFJQWNqZ05GQUFBQUhpY1kyQmtZR0FPK3A4RkpGOHdNSUJKUmdaVXdBd0FYUGNEbWdBRDZBQUFBc29BQUFMS0FBQUFBQUFBQUVBQWdBQUJBQUFBQXdBVkFBRUFBQUFBQUFJQUJBQVVBSE1BQUFBcUMzQUFBQUFBZUp4MWtNdE93a0FVaHYrUml3cUpHazNjT2lzRE1aWkw0Z0lTRWhJTWJIUkRERnRUU21sTFNvZE1CeEpldzNmd1lYd0puOFdmZGpBR1lwdnBmT2ViTTJkT0I4QTF2aUdRUDA4Y09RdWNNY3I1Qktmb1dTN1FQMXN1a2w4c2wxREZtK1V5L2J2bENoNFFXSzdpQmgrc0lJcm5qQmI0dEN4d0pTNHRuK0JDM0ZrdTBEOWFMcEo3bGt1NEZhK1d5L1NlNVFvbUlyVmN4YjM0R3FqVlZrZEJhR1J0VUpmdFpxc2pwMXVwcUtMRWphVzdOcUhTcWV6THVVcU1IOGZLOGRSeXoyTS9XTWV1M29mN2VlTHJORktKYkRuTnZScjVpYTlkNDg5MjFkTk4wRFptTHVkYUxlWFFac2lWVmd2Zk0wNW96S3JiYVB3OUR3TW9yTENGUnNTckNtRWdVYU90YzI2amlSWTZwQ2t6SkRQenJBZ0pYTVEwTHRiY0VXWXJLZU0reDV4UlF1c3pJeVk3OFBoZEh2a3hLZUQrbUZYMDBlcGhQQ0h0em9neUw5bVh3KzRPczBha0pNdDBNenY3N1QzRmhxZTFhUTEzN2JyVVdWY1N3NE1ha3ZleFcxdlFlUFJPZGl1R3Rvc0czMy8rN3dmc2VJUlZBSGljWTJCaWdBQXVCdXlBbVpHSmtabVJoWUV6SnpXdFJEZS9JRFdQcXlnelBRUENaR0FBQUdOK0I3WUFlSnhqOE43QmNDSW9ZaU1qWTEva0JzYWRIQXdjRE1rRkd4bFluVFl4TURKb2dSaWJ1WmdZT1NBc1BnWXdpODFwRjlNQm9EUW5rTTN1dEl2QkFjSm1abkRacU1MWUVSaXh3YUVqWWlOemlzdEdOUkJ2RjBjREF5T0xRMGR5U0FSSVNTUVFiT1poWXVUUjJzSDR2M1VEUys5R0pnWVhBQXgySS9RQUFBPT0nKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4ubXlEcEljb24ge1xuICBmb250LWZhbWlseTogJ2FuZ3VsYXItbXlkYXRlcGlja2VyJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubXlEcEljb25MZWZ0QXJyb3c6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU4MDBcIjtcbn1cblxuLm15RHBJY29uUmlnaHRBcnJvdzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTgwMVwiO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  encapsulation: 2
});

/***/ }),

/***/ 2765:
/*!*****************************************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/components/day-view/day-view.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayViewComponent": () => (/* binding */ DayViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_angular_mydatepicker_util_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/angular-mydatepicker.util.service */ 4794);
/* harmony import */ var _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/key-code.enum */ 4970);
/* harmony import */ var _enums_month_id_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/month-id.enum */ 3732);
/* harmony import */ var _enums_active_view_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/active-view.enum */ 8108);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ 5384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);









function DayViewComponent_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DayViewComponent_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const d_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](d_r3);
  }
}
function DayViewComponent_tr_6_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const w_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](w_r4.weekNbr);
  }
}
const _c0 = function (a0) {
  return {
    "border-top": a0
  };
};
function DayViewComponent_tr_6_td_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 12);
  }
  if (rf & 2) {
    const d_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c0, "8px solid " + d_r8.markedDate.color));
  }
}
const _c1 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
  return {
    "myDpRangeColor": a0,
    "myDpPrevMonth": a1,
    "myDpCurrMonth": a2,
    "myDpNextMonth": a3,
    "myDpSelectedDay": a4,
    "myDpRangeBegin": a5,
    "myDpRangeEnd": a6,
    "myDpDisabled": a7,
    "myDpTableSingleDay": a8
  };
};
const _c2 = function (a0, a1, a2) {
  return {
    "myDpMarkCurrDay": a0,
    "myDpDimDay": a1,
    "myDpHighlight": a2
  };
};
const _c3 = function (a0) {
  return [a0];
};
function DayViewComponent_tr_6_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DayViewComponent_tr_6_td_2_Template_td_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const d_r8 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.onDayCellClicked($event, d_r8));
    })("keydown", function DayViewComponent_tr_6_td_2_Template_td_keydown_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const d_r8 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.onDayCellKeyDown($event, d_r8));
    })("mouseenter", function DayViewComponent_tr_6_td_2_Template_td_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const d_r8 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.onDayCellMouseEnter(d_r8));
    })("mouseleave", function DayViewComponent_tr_6_td_2_Template_td_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.onDayCellMouseLeave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DayViewComponent_tr_6_td_2_span_1_Template, 1, 3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const d_r8 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate4"]("d_", d_r8.row, "_", d_r8.col, " myDpDaycell ", d_r8.markedDate.styleClass, " ", d_r8.disabledDate.styleClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("id", "d_", d_r8.row, "_", d_r8.col, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunctionV"](20, _c1, [ctx_r6.isDateInRange(d_r8.dateObj) || d_r8.range, d_r8.cmo === ctx_r6.prevMonthId, d_r8.cmo === ctx_r6.currMonthId && !d_r8.disabledDate.disabled, d_r8.cmo === ctx_r6.nextMonthId, ctx_r6.isDaySelected(d_r8), ctx_r6.opts.dateRange && ctx_r6.isDateRangeBegin(d_r8.dateObj), ctx_r6.opts.dateRange && ctx_r6.isDateRangeEnd(d_r8.dateObj), d_r8.disabledDate.disabled && !d_r8.disabledDate.styleClass.length, !d_r8.disabledDate.disabled]));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-current", d_r8.currDay ? "date" : null)("aria-disabled", d_r8.disabledDate.disabled || null)("aria-selected", ctx_r6.isDaySelected(d_r8) || null)("tabindex", !d_r8.disabledDate.disabled ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", d_r8.markedDate.marked && d_r8.markedDate.color.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](30, _c2, d_r8.currDay && ctx_r6.opts.markCurrentDay, d_r8.highlight && (d_r8.cmo === ctx_r6.prevMonthId || d_r8.cmo === ctx_r6.nextMonthId || d_r8.disabledDate.disabled), d_r8.highlight));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](34, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 17, d_r8.dateObj.month + "/" + d_r8.dateObj.day + "/" + d_r8.dateObj.year, "fullDate")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](d_r8.dateObj.day);
  }
}
function DayViewComponent_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DayViewComponent_tr_6_td_1_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DayViewComponent_tr_6_td_2_Template, 5, 36, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const w_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.opts.showWeekNumbers && ctx_r2.opts.firstDayOfWeek === "mo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", w_r4.week);
  }
}
const _c4 = function (a0, a1, a2, a3) {
  return {
    "ng-myrtl": a0,
    "myDpFooter": a1,
    "myDpNoFooter": a2,
    "myDpViewChangeAnimation": a3
  };
};
class DayViewComponent {
  constructor(utilService) {
    this.utilService = utilService;
    this.dayCellClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.dayCellKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.viewActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.prevMonthId = _enums_month_id_enum__WEBPACK_IMPORTED_MODULE_2__.MonthId.prev;
    this.currMonthId = _enums_month_id_enum__WEBPACK_IMPORTED_MODULE_2__.MonthId.curr;
    this.nextMonthId = _enums_month_id_enum__WEBPACK_IMPORTED_MODULE_2__.MonthId.next;
  }
  ngOnChanges(changes) {
    if (changes.hasOwnProperty(_constants_constants__WEBPACK_IMPORTED_MODULE_4__.OPTS)) {
      this.opts = changes[_constants_constants__WEBPACK_IMPORTED_MODULE_4__.OPTS].currentValue;
    }
    if (changes.hasOwnProperty(_constants_constants__WEBPACK_IMPORTED_MODULE_4__.DATES)) {
      this.dates = changes[_constants_constants__WEBPACK_IMPORTED_MODULE_4__.DATES].currentValue;
    }
    if (changes.hasOwnProperty(_constants_constants__WEBPACK_IMPORTED_MODULE_4__.WEEK_DAYS)) {
      this.weekDays = changes[_constants_constants__WEBPACK_IMPORTED_MODULE_4__.WEEK_DAYS].currentValue;
    }
    if (changes.hasOwnProperty(_constants_constants__WEBPACK_IMPORTED_MODULE_4__.SELECTED_DATE)) {
      this.selectedDate = changes[_constants_constants__WEBPACK_IMPORTED_MODULE_4__.SELECTED_DATE].currentValue;
    }
    if (changes.hasOwnProperty(_constants_constants__WEBPACK_IMPORTED_MODULE_4__.SELECTED_DATE_RANGE)) {
      this.selectedDateRange = changes[_constants_constants__WEBPACK_IMPORTED_MODULE_4__.SELECTED_DATE_RANGE].currentValue;
    }
  }
  ngAfterViewInit() {
    this.viewActivated.emit(_enums_active_view_enum__WEBPACK_IMPORTED_MODULE_3__.ActiveView.Date);
  }
  onDayCellClicked(event, cell) {
    event.stopPropagation();
    if (cell.disabledDate.disabled) {
      return;
    }
    this.dayCellClicked.emit(cell);
  }
  onDayCellKeyDown(event, cell) {
    const keyCode = this.utilService.getKeyCodeFromEvent(event);
    if (keyCode !== _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_1__.KeyCode.tab) {
      event.preventDefault();
      if (keyCode === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_1__.KeyCode.enter || keyCode === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_1__.KeyCode.space) {
        this.onDayCellClicked(event, cell);
      } else if (this.opts.moveFocusByArrowKeys) {
        this.dayCellKeyDown.emit(event);
      }
    }
  }
  onDayCellMouseEnter(cell) {
    if (this.utilService.isInitializedDate(this.selectedDateRange.begin) && !this.utilService.isInitializedDate(this.selectedDateRange.end)) {
      for (const w of this.dates) {
        for (const day of w.week) {
          day.range = this.utilService.isDateSameOrEarlier(this.selectedDateRange.begin, day.dateObj) && this.utilService.isDateSameOrEarlier(day.dateObj, cell.dateObj);
        }
      }
    }
  }
  onDayCellMouseLeave() {
    for (const w of this.dates) {
      for (const day of w.week) {
        day.range = false;
      }
    }
  }
  isDateInRange(date) {
    return this.utilService.isDateInRange(date, this.selectedDateRange);
  }
  isDateSame(date) {
    return this.utilService.isDateSame(this.selectedDate, date);
  }
  isDateRangeBeginOrEndSame(date) {
    return this.utilService.isDateRangeBeginOrEndSame(this.selectedDateRange, date);
  }
  isDateRangeBegin(date) {
    return this.utilService.isDateRangeBegin(this.selectedDateRange, date);
  }
  isDateRangeEnd(date) {
    return this.utilService.isDateRangeEnd(this.selectedDateRange, date);
  }
  isDaySelected(day) {
    return !this.opts.dateRange && this.isDateSame(day.dateObj) || this.opts.dateRange && this.isDateRangeBeginOrEndSame(day.dateObj);
  }
}
DayViewComponent.ɵfac = function DayViewComponent_Factory(t) {
  return new (t || DayViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_angular_mydatepicker_util_service__WEBPACK_IMPORTED_MODULE_0__.UtilService));
};
DayViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: DayViewComponent,
  selectors: [["lib-day-view"]],
  inputs: {
    opts: "opts",
    dates: "dates",
    weekDays: "weekDays",
    selectedDate: "selectedDate",
    selectedDateRange: "selectedDateRange",
    viewChanged: "viewChanged"
  },
  outputs: {
    dayCellClicked: "dayCellClicked",
    dayCellKeyDown: "dayCellKeyDown",
    viewActivated: "viewActivated"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_services_angular_mydatepicker_util_service__WEBPACK_IMPORTED_MODULE_0__.UtilService]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
  decls: 7,
  vars: 9,
  consts: [[1, "myDpCalTable", 3, "ngClass"], ["class", "myDpWeekDayTitle myDpWeekDayTitleWeekNbr", 4, "ngIf"], ["class", "myDpWeekDayTitle", "scope", "col", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "myDpWeekDayTitle", "myDpWeekDayTitleWeekNbr"], ["scope", "col", 1, "myDpWeekDayTitle"], ["class", "myDpDaycellWeekNbr", 4, "ngIf"], [3, "id", "class", "ngClass", "click", "keydown", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "myDpDaycellWeekNbr"], [3, "id", "ngClass", "click", "keydown", "mouseenter", "mouseleave"], ["class", "myDpMarkDate", 3, "ngStyle", 4, "ngIf"], [1, "myDpDayValue", 3, "ngClass"], [1, "myDpMarkDate", 3, "ngStyle"]],
  template: function DayViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 0)(1, "thead")(2, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DayViewComponent_th_3_Template, 2, 0, "th", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DayViewComponent_th_4_Template, 2, 1, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, DayViewComponent_tr_6_Template, 3, 2, "tr", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](4, _c4, ctx.opts.rtl, ctx.opts.showFooterToday, !ctx.opts.showFooterToday, ctx.opts.viewChangeAnimation && ctx.viewChanged));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.opts.showWeekNumbers && ctx.opts.firstDayOfWeek === "mo");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.weekDays);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.dates);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
  encapsulation: 2
});

/***/ }),

/***/ 8004:
/*!*********************************************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/components/footer-bar/footer-bar.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterBarComponent": () => (/* binding */ FooterBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_angular_mydatepicker_util_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/angular-mydatepicker.util.service */ 4794);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/constants */ 5384);





class FooterBarComponent {
  constructor(utilService) {
    this.utilService = utilService;
    this.footerBarTxtClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.footerBarTxt = _constants_constants__WEBPACK_IMPORTED_MODULE_1__.EMPTY_STR;
  }
  ngOnChanges(changes) {
    if (changes.hasOwnProperty(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.OPTS)) {
      this.opts = changes[_constants_constants__WEBPACK_IMPORTED_MODULE_1__.OPTS].currentValue;
      const {
        dateFormat,
        monthLabels,
        todayTxt
      } = this.opts;
      const today = this.utilService.getToday();
      this.footerBarTxt = todayTxt + (todayTxt.length > 0 ? _constants_constants__WEBPACK_IMPORTED_MODULE_1__.SPACE_STR : _constants_constants__WEBPACK_IMPORTED_MODULE_1__.EMPTY_STR) + this.utilService.formatDate(today, dateFormat, monthLabels);
    }
  }
  onFooterBarTxtClicked() {
    this.footerBarTxtClicked.emit();
  }
}
FooterBarComponent.ɵfac = function FooterBarComponent_Factory(t) {
  return new (t || FooterBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_angular_mydatepicker_util_service__WEBPACK_IMPORTED_MODULE_0__.UtilService));
};
FooterBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FooterBarComponent,
  selectors: [["lib-footer-bar"]],
  inputs: {
    opts: "opts"
  },
  outputs: {
    footerBarTxtClicked: "footerBarTxtClicked"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_services_angular_mydatepicker_util_service__WEBPACK_IMPORTED_MODULE_0__.UtilService]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
  decls: 3,
  vars: 1,
  consts: [[1, "myDpFooterBar"], ["type", "button", 1, "myDpHeaderBtn", "myDpFooterBtn", 3, "click"]],
  template: function FooterBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FooterBarComponent_Template_button_click_1_listener() {
        return ctx.onFooterBarTxtClicked();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.footerBarTxt);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 9047:
/*!*********************************************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/components/month-view/month-view.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonthViewComponent": () => (/* binding */ MonthViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/key-code.enum */ 4970);
/* harmony import */ var _enums_active_view_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/active-view.enum */ 8108);
/* harmony import */ var _services_angular_mydatepicker_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/angular-mydatepicker.util.service */ 4794);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/constants */ 5384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);








function MonthViewComponent_tr_2_td_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](m_r3.nbr);
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    "myDpSelectedMonth": a0,
    "myDpDisabled": a1,
    "myDpTableSingleMonth": a2
  };
};
const _c1 = function (a0) {
  return {
    "myDpMarkCurrMonth": a0
  };
};
const _c2 = function (a0) {
  return [a0];
};
function MonthViewComponent_tr_2_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MonthViewComponent_tr_2_td_1_Template_td_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const m_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.onMonthCellClicked($event, m_r3));
    })("keydown", function MonthViewComponent_tr_2_td_1_Template_td_keydown_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const m_r3 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.onMonthCellKeyDown($event, m_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MonthViewComponent_tr_2_td_1_span_1_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate2"]("m_", m_r3.row, "_", m_r3.col, " myDpMonthcell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("id", "m_", m_r3.row, "_", m_r3.col, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](18, _c0, m_r3.selected, m_r3.disabled, !m_r3.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-current", m_r3.currMonth ? "date" : null)("aria-disabled", m_r3.disabled || null)("aria-selected", m_r3.selected || null)("tabindex", !m_r3.disabled ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.opts.showMonthNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](22, _c1, m_r3.currMonth && ctx_r2.opts.markCurrentMonth));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](24, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 15, m_r3.nbr + "/" + 1 + "/" + m_r3.year, "MMMM yyyy")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](m_r3.name);
  }
}
function MonthViewComponent_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MonthViewComponent_tr_2_td_1_Template, 5, 26, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mr_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", mr_r1);
  }
}
const _c3 = function (a0, a1, a2, a3) {
  return {
    "ng-myrtl": a0,
    "myDpFooter": a1,
    "myDpNoFooter": a2,
    "myDpViewChangeAnimation": a3
  };
};
class MonthViewComponent {
  constructor(utilService) {
    this.utilService = utilService;
    this.monthCellClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.monthCellKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.viewActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  ngOnChanges(changes) {
    if (changes.hasOwnProperty(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.OPTS)) {
      this.opts = changes[_constants_constants__WEBPACK_IMPORTED_MODULE_3__.OPTS].currentValue;
    }
    if (changes.hasOwnProperty(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.MONTHS)) {
      this.months = changes[_constants_constants__WEBPACK_IMPORTED_MODULE_3__.MONTHS].currentValue;
    }
  }
  ngAfterViewInit() {
    this.viewActivated.emit(_enums_active_view_enum__WEBPACK_IMPORTED_MODULE_1__.ActiveView.Month);
  }
  onMonthCellClicked(event, cell) {
    event.stopPropagation();
    if (cell.disabled) {
      return;
    }
    this.monthCellClicked.emit(cell);
  }
  onMonthCellKeyDown(event, cell) {
    const keyCode = this.utilService.getKeyCodeFromEvent(event);
    if (keyCode !== _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.tab) {
      event.preventDefault();
      if (keyCode === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.enter || keyCode === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.space) {
        this.onMonthCellClicked(event, cell);
      } else if (this.opts.moveFocusByArrowKeys) {
        this.monthCellKeyDown.emit(event);
      }
    }
  }
}
MonthViewComponent.ɵfac = function MonthViewComponent_Factory(t) {
  return new (t || MonthViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_angular_mydatepicker_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService));
};
MonthViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: MonthViewComponent,
  selectors: [["lib-month-view"]],
  inputs: {
    opts: "opts",
    months: "months",
    viewChanged: "viewChanged"
  },
  outputs: {
    monthCellClicked: "monthCellClicked",
    monthCellKeyDown: "monthCellKeyDown",
    viewActivated: "viewActivated"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_services_angular_mydatepicker_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
  decls: 3,
  vars: 7,
  consts: [[1, "myDpMonthTable", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "id", "class", "ngClass", "click", "keydown", 4, "ngFor", "ngForOf"], [3, "id", "ngClass", "click", "keydown"], ["class", "myDpMonthNbr", "aria-hidden", "true", 4, "ngIf"], [1, "myDpMonthValue", 3, "ngClass"], ["aria-hidden", "true", 1, "myDpMonthNbr"]],
  template: function MonthViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0)(1, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MonthViewComponent_tr_2_Template, 2, 1, "tr", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](2, _c3, ctx.opts.rtl, ctx.opts.showFooterToday, !ctx.opts.showFooterToday, ctx.opts.viewChangeAnimation && ctx.viewChanged));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.months);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  encapsulation: 2
});

/***/ }),

/***/ 4071:
/*!***************************************************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/components/selection-bar/selection-bar.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectionBarComponent": () => (/* binding */ SelectionBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/constants */ 5384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




const _c0 = function (a0, a1) {
  return {
    "myDpMonthLabel": a0,
    "myDpHeaderLabelBtnNotEdit": a1
  };
};
function SelectionBarComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectionBarComponent_button_4_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.opts.monthSelector && ctx_r1.onMonthViewBtnClicked($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("tabindex", ctx_r0.opts.monthSelector ? "0" : "-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r0.opts.monthSelector, !ctx_r0.opts.monthSelector));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.visibleMonth.monthTxt);
  }
}
const _c1 = function (a0) {
  return {
    "myDpHeaderBtnDisabled": a0
  };
};
const _c2 = function (a0, a1) {
  return {
    "myDpYearLabel": a0,
    "myDpHeaderLabelBtnNotEdit": a1
  };
};
class SelectionBarComponent {
  constructor() {
    this.prevNavigateBtnClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nextNavigateBtnClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.monthViewBtnClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.yearViewBtnClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnChanges(changes) {
    if (changes.hasOwnProperty(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.OPTS)) {
      this.opts = changes[_constants_constants__WEBPACK_IMPORTED_MODULE_0__.OPTS].currentValue;
    }
    if (changes.hasOwnProperty(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.YEARS_DURATION)) {
      this.yearsDuration = changes[_constants_constants__WEBPACK_IMPORTED_MODULE_0__.YEARS_DURATION].currentValue;
    }
    if (changes.hasOwnProperty(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.VISIBLE_MONTH)) {
      this.visibleMonth = changes[_constants_constants__WEBPACK_IMPORTED_MODULE_0__.VISIBLE_MONTH].currentValue;
    }
    if (changes.hasOwnProperty(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.SELECT_MONTH)) {
      this.selectMonth = changes[_constants_constants__WEBPACK_IMPORTED_MODULE_0__.SELECT_MONTH].currentValue;
    }
    if (changes.hasOwnProperty(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.SELECT_YEAR)) {
      this.selectYear = changes[_constants_constants__WEBPACK_IMPORTED_MODULE_0__.SELECT_YEAR].currentValue;
    }
    if (changes.hasOwnProperty(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.PREV_VIEW_DISABLED)) {
      this.prevViewDisabled = changes[_constants_constants__WEBPACK_IMPORTED_MODULE_0__.PREV_VIEW_DISABLED].currentValue;
    }
    if (changes.hasOwnProperty(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.NEXT_VIEW_DISABLED)) {
      this.nextViewDisabled = changes[_constants_constants__WEBPACK_IMPORTED_MODULE_0__.NEXT_VIEW_DISABLED].currentValue;
    }
  }
  onPrevNavigateBtnClicked(event) {
    event.stopPropagation();
    this.opts.rtl ? this.nextNavigateBtnClicked.emit() : this.prevNavigateBtnClicked.emit();
  }
  onNextNavigateBtnClicked(event) {
    event.stopPropagation();
    this.opts.rtl ? this.prevNavigateBtnClicked.emit() : this.nextNavigateBtnClicked.emit();
  }
  onMonthViewBtnClicked(event) {
    event.stopPropagation();
    this.monthViewBtnClicked.emit();
  }
  onYearViewBtnClicked(event) {
    event.stopPropagation();
    this.yearViewBtnClicked.emit();
  }
}
SelectionBarComponent.ɵfac = function SelectionBarComponent_Factory(t) {
  return new (t || SelectionBarComponent)();
};
SelectionBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SelectionBarComponent,
  selectors: [["lib-selection-bar"]],
  inputs: {
    opts: "opts",
    yearsDuration: "yearsDuration",
    visibleMonth: "visibleMonth",
    selectMonth: "selectMonth",
    selectYear: "selectYear",
    prevViewDisabled: "prevViewDisabled",
    nextViewDisabled: "nextViewDisabled"
  },
  outputs: {
    prevNavigateBtnClicked: "prevNavigateBtnClicked",
    nextNavigateBtnClicked: "nextNavigateBtnClicked",
    monthViewBtnClicked: "monthViewBtnClicked",
    yearViewBtnClicked: "yearViewBtnClicked"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 9,
  vars: 19,
  consts: [[1, "myDpMonthYearSelBar"], [1, "myDpPrevBtn"], ["type", "button", 1, "myDpHeaderBtn", "myDpIcon", "myDpIconLeftArrow", "myDpHeaderBtnEnabled", 3, "tabindex", "disabled", "ngClass", "click"], [1, "myDpMonthYearText"], ["type", "button", "class", "myDpHeaderBtn myDpMonthBtn", 3, "tabindex", "ngClass", "click", 4, "ngIf"], ["type", "button", 1, "myDpHeaderBtn", "myDpYearBtn", 3, "tabindex", "ngClass", "click"], [1, "myDpNextBtn"], ["type", "button", 1, "myDpHeaderBtn", "myDpIcon", "myDpIconRightArrow", "myDpHeaderBtnEnabled", 3, "tabindex", "disabled", "ngClass", "click"], ["type", "button", 1, "myDpHeaderBtn", "myDpMonthBtn", 3, "tabindex", "ngClass", "click"]],
  template: function SelectionBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectionBarComponent_Template_button_click_2_listener($event) {
        return ctx.onPrevNavigateBtnClicked($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SelectionBarComponent_button_4_Template, 2, 6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectionBarComponent_Template_button_click_5_listener($event) {
        return ctx.opts.yearSelector && ctx.onYearViewBtnClicked($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectionBarComponent_Template_button_click_8_listener($event) {
        return ctx.onNextNavigateBtnClicked($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("tabindex", !ctx.prevViewDisabled ? "0" : "-1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.prevViewDisabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, ctx.prevViewDisabled));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.opts.ariaLabelPrevMonth);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.selectYear);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("tabindex", ctx.opts.yearSelector ? "0" : "-1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](14, _c2, ctx.opts.yearSelector, !ctx.opts.yearSelector));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx.selectYear ? ctx.visibleMonth.year : ctx.yearsDuration);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("tabindex", !ctx.nextViewDisabled ? "0" : "-1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.nextViewDisabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c1, ctx.nextViewDisabled));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.opts.ariaLabelNextMonth);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  encapsulation: 2
});

/***/ }),

/***/ 2504:
/*!*******************************************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/components/year-view/year-view.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YearViewComponent": () => (/* binding */ YearViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/key-code.enum */ 4970);
/* harmony import */ var _enums_active_view_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/active-view.enum */ 8108);
/* harmony import */ var _services_angular_mydatepicker_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/angular-mydatepicker.util.service */ 4794);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/constants */ 5384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);








const _c0 = function (a0, a1, a2) {
  return {
    "myDpSelectedYear": a0,
    "myDpDisabled": a1,
    "myDpTableSingleYear": a2
  };
};
const _c1 = function (a0) {
  return {
    "myDpMarkCurrYear": a0
  };
};
const _c2 = function (a0) {
  return [a0];
};
function YearViewComponent_tr_2_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function YearViewComponent_tr_2_td_1_Template_td_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const y_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.onYearCellClicked($event, y_r3));
    })("keydown", function YearViewComponent_tr_2_td_1_Template_td_keydown_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const y_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.onYearCellKeyDown($event, y_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const y_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate2"]("y_", y_r3.row, "_", y_r3.col, " myDpYearcell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("id", "y_", y_r3.row, "_", y_r3.col, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](17, _c0, y_r3.selected, y_r3.disabled, !y_r3.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-current", y_r3.currYear ? "date" : null)("aria-disabled", y_r3.disabled || null)("aria-selected", y_r3.selected || null)("tabindex", !y_r3.disabled ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](21, _c1, y_r3.currYear && ctx_r2.opts.markCurrentYear));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](23, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 14, 1 + "/" + 1 + "/" + y_r3.year, "yyyy")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](y_r3.year);
  }
}
function YearViewComponent_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, YearViewComponent_tr_2_td_1_Template, 4, 25, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const yr_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", yr_r1);
  }
}
const _c3 = function (a0, a1, a2, a3) {
  return {
    "ng-myrtl": a0,
    "myDpFooter": a1,
    "myDpNoFooter": a2,
    "myDpViewChangeAnimation": a3
  };
};
class YearViewComponent {
  constructor(utilService) {
    this.utilService = utilService;
    this.yearCellClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.yearCellKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.viewActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  ngOnChanges(changes) {
    if (changes.hasOwnProperty(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.OPTS)) {
      this.opts = changes[_constants_constants__WEBPACK_IMPORTED_MODULE_3__.OPTS].currentValue;
    }
    if (changes.hasOwnProperty(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.YEARS)) {
      this.years = changes[_constants_constants__WEBPACK_IMPORTED_MODULE_3__.YEARS].currentValue;
    }
  }
  ngAfterViewInit() {
    this.viewActivated.emit(_enums_active_view_enum__WEBPACK_IMPORTED_MODULE_1__.ActiveView.Year);
  }
  onYearCellClicked(event, cell) {
    event.stopPropagation();
    if (cell.disabled) {
      return;
    }
    this.yearCellClicked.emit(cell);
  }
  onYearCellKeyDown(event, cell) {
    const keyCode = this.utilService.getKeyCodeFromEvent(event);
    if (keyCode !== _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.tab) {
      event.preventDefault();
      if (keyCode === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.enter || keyCode === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.space) {
        this.onYearCellClicked(event, cell);
      } else if (this.opts.moveFocusByArrowKeys) {
        this.yearCellKeyDown.emit(event);
      }
    }
  }
}
YearViewComponent.ɵfac = function YearViewComponent_Factory(t) {
  return new (t || YearViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_angular_mydatepicker_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService));
};
YearViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: YearViewComponent,
  selectors: [["lib-year-view"]],
  inputs: {
    opts: "opts",
    years: "years",
    viewChanged: "viewChanged"
  },
  outputs: {
    yearCellClicked: "yearCellClicked",
    yearCellKeyDown: "yearCellKeyDown",
    viewActivated: "viewActivated"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_services_angular_mydatepicker_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
  decls: 3,
  vars: 7,
  consts: [[1, "myDpYearTable", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "id", "class", "ngClass", "click", "keydown", 4, "ngFor", "ngForOf"], [3, "id", "ngClass", "click", "keydown"], [1, "myDpYearValue", 3, "ngClass"]],
  template: function YearViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0)(1, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, YearViewComponent_tr_2_Template, 2, 1, "tr", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](2, _c3, ctx.opts.rtl, ctx.opts.showFooterToday, !ctx.opts.showFooterToday, ctx.opts.viewChangeAnimation && ctx.viewChanged));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.years);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  encapsulation: 2
});

/***/ }),

/***/ 5384:
/*!**********************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/constants/constants.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANIMATION_END": () => (/* binding */ ANIMATION_END),
/* harmony export */   "ANIMATION_NAMES": () => (/* binding */ ANIMATION_NAMES),
/* harmony export */   "ANIMATION_TIMEOUT": () => (/* binding */ ANIMATION_TIMEOUT),
/* harmony export */   "BLUR": () => (/* binding */ BLUR),
/* harmony export */   "BODY": () => (/* binding */ BODY),
/* harmony export */   "CLICK": () => (/* binding */ CLICK),
/* harmony export */   "D": () => (/* binding */ D),
/* harmony export */   "DATES": () => (/* binding */ DATES),
/* harmony export */   "DATE_COL_COUNT": () => (/* binding */ DATE_COL_COUNT),
/* harmony export */   "DATE_ROW_COUNT": () => (/* binding */ DATE_ROW_COUNT),
/* harmony export */   "DD": () => (/* binding */ DD),
/* harmony export */   "DEFAULT_LOCALE": () => (/* binding */ DEFAULT_LOCALE),
/* harmony export */   "DEFAULT_MONTH": () => (/* binding */ DEFAULT_MONTH),
/* harmony export */   "DISABLED": () => (/* binding */ DISABLED),
/* harmony export */   "DOT": () => (/* binding */ DOT),
/* harmony export */   "EMPTY_STR": () => (/* binding */ EMPTY_STR),
/* harmony export */   "FR": () => (/* binding */ FR),
/* harmony export */   "IN": () => (/* binding */ IN),
/* harmony export */   "INNER_HTML": () => (/* binding */ INNER_HTML),
/* harmony export */   "KEYUP": () => (/* binding */ KEYUP),
/* harmony export */   "LOCALE": () => (/* binding */ LOCALE),
/* harmony export */   "M": () => (/* binding */ M),
/* harmony export */   "MM": () => (/* binding */ MM),
/* harmony export */   "MMM": () => (/* binding */ MMM),
/* harmony export */   "MO": () => (/* binding */ MO),
/* harmony export */   "MONTHS": () => (/* binding */ MONTHS),
/* harmony export */   "MONTH_COL_COUNT": () => (/* binding */ MONTH_COL_COUNT),
/* harmony export */   "MONTH_ROW_COUNT": () => (/* binding */ MONTH_ROW_COUNT),
/* harmony export */   "MY_DP_ANIMATION": () => (/* binding */ MY_DP_ANIMATION),
/* harmony export */   "ND": () => (/* binding */ ND),
/* harmony export */   "NEXT_VIEW_DISABLED": () => (/* binding */ NEXT_VIEW_DISABLED),
/* harmony export */   "OBJECT": () => (/* binding */ OBJECT),
/* harmony export */   "OPTIONS": () => (/* binding */ OPTIONS),
/* harmony export */   "OPTS": () => (/* binding */ OPTS),
/* harmony export */   "ORDINAL": () => (/* binding */ ORDINAL),
/* harmony export */   "OUT": () => (/* binding */ OUT),
/* harmony export */   "PIPE": () => (/* binding */ PIPE),
/* harmony export */   "PREVENT_CLOSE_TIMEOUT": () => (/* binding */ PREVENT_CLOSE_TIMEOUT),
/* harmony export */   "PREV_VIEW_DISABLED": () => (/* binding */ PREV_VIEW_DISABLED),
/* harmony export */   "PX": () => (/* binding */ PX),
/* harmony export */   "RD": () => (/* binding */ RD),
/* harmony export */   "SA": () => (/* binding */ SA),
/* harmony export */   "SELECTED_DATE": () => (/* binding */ SELECTED_DATE),
/* harmony export */   "SELECTED_DATE_RANGE": () => (/* binding */ SELECTED_DATE_RANGE),
/* harmony export */   "SELECT_MONTH": () => (/* binding */ SELECT_MONTH),
/* harmony export */   "SELECT_YEAR": () => (/* binding */ SELECT_YEAR),
/* harmony export */   "SPACE_STR": () => (/* binding */ SPACE_STR),
/* harmony export */   "ST": () => (/* binding */ ST),
/* harmony export */   "STYLE": () => (/* binding */ STYLE),
/* harmony export */   "SU": () => (/* binding */ SU),
/* harmony export */   "TABINDEX": () => (/* binding */ TABINDEX),
/* harmony export */   "TD_SELECTOR": () => (/* binding */ TD_SELECTOR),
/* harmony export */   "TH": () => (/* binding */ TH),
/* harmony export */   "TU": () => (/* binding */ TU),
/* harmony export */   "UNDER_LINE": () => (/* binding */ UNDER_LINE),
/* harmony export */   "VALUE": () => (/* binding */ VALUE),
/* harmony export */   "VISIBLE_MONTH": () => (/* binding */ VISIBLE_MONTH),
/* harmony export */   "WE": () => (/* binding */ WE),
/* harmony export */   "WEEK_DAYS": () => (/* binding */ WEEK_DAYS),
/* harmony export */   "Y": () => (/* binding */ Y),
/* harmony export */   "YEARS": () => (/* binding */ YEARS),
/* harmony export */   "YEARS_DURATION": () => (/* binding */ YEARS_DURATION),
/* harmony export */   "YEAR_COL_COUNT": () => (/* binding */ YEAR_COL_COUNT),
/* harmony export */   "YEAR_ROW_COUNT": () => (/* binding */ YEAR_ROW_COUNT),
/* harmony export */   "YEAR_SEPARATOR": () => (/* binding */ YEAR_SEPARATOR),
/* harmony export */   "YYYY": () => (/* binding */ YYYY),
/* harmony export */   "ZERO_STR": () => (/* binding */ ZERO_STR)
/* harmony export */ });
/**
 * Constants
 */
const D = "d";
const DD = "dd";
const M = "m";
const MM = "mm";
const MMM = "mmm";
const Y = "y";
const YYYY = "yyyy";
const ORDINAL = "##";
const ST = 'st';
const ND = "nd";
const RD = "rd";
const DATE_ROW_COUNT = 5;
const DATE_COL_COUNT = 6;
const MONTH_ROW_COUNT = 3;
const MONTH_COL_COUNT = 2;
const YEAR_ROW_COUNT = 4;
const YEAR_COL_COUNT = 4;
const DOT = ".";
const UNDER_LINE = "_";
const PIPE = "|";
const YEAR_SEPARATOR = " - ";
const SU = "su";
const MO = "mo";
const TU = "tu";
const WE = "we";
const TH = "th";
const FR = "fr";
const SA = "sa";
const DEFAULT_LOCALE = "en";
const ZERO_STR = "0";
const EMPTY_STR = "";
const SPACE_STR = " ";
const CLICK = "click";
const KEYUP = "keyup";
const BLUR = "blur";
const DISABLED = "disabled";
const BODY = "body";
const VALUE = "value";
const OPTIONS = "options";
const DEFAULT_MONTH = "defaultMonth";
const LOCALE = "locale";
const OBJECT = "object";
const PX = "px";
const STYLE = "style";
const INNER_HTML = "innerHTML";
const OPTS = "opts";
const YEARS_DURATION = "yearsDuration";
const YEARS = "years";
const VISIBLE_MONTH = "visibleMonth";
const SELECT_MONTH = "selectMonth";
const SELECT_YEAR = "selectYear";
const PREV_VIEW_DISABLED = "prevViewDisabled";
const NEXT_VIEW_DISABLED = "nextViewDisabled";
const DATES = "dates";
const WEEK_DAYS = "weekDays";
const SELECTED_DATE = "selectedDate";
const SELECTED_DATE_RANGE = "selectedDateRange";
const MONTHS = "months";
const ANIMATION_END = "animationend";
const ANIMATION_TIMEOUT = 550;
const MY_DP_ANIMATION = "myDpAnimation";
const ANIMATION_NAMES = ["Fade", "ScaleTop", "ScaleCenter", "Rotate", "FlipDiagonal", "Own"];
const IN = "In";
const OUT = "Out";
const TABINDEX = "tabindex";
const TD_SELECTOR = "table tbody tr td:not(.myDpDaycellWeekNbr)";
const PREVENT_CLOSE_TIMEOUT = 50;


/***/ }),

/***/ 3971:
/*!*****************************************************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/directives/angular-mydatepicker-calendar.directive.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularMyDatePickerCalendarDirective": () => (/* binding */ AngularMyDatePickerCalendarDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AngularMyDatePickerCalendarDirective {
  constructor(el) {
    this.el = el;
  }
  ngAfterViewInit() {
    const {
      inline,
      selectorHeight,
      selectorWidth,
      selectorPos
    } = this.libAngularMyDatePickerCalendar;
    const {
      style
    } = this.el.nativeElement;
    style.height = selectorHeight;
    style.width = selectorWidth;
    style.top = !inline ? selectorPos.top : "0";
    style.left = !inline ? selectorPos.left : "0";
  }
}
AngularMyDatePickerCalendarDirective.ɵfac = function AngularMyDatePickerCalendarDirective_Factory(t) {
  return new (t || AngularMyDatePickerCalendarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
AngularMyDatePickerCalendarDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AngularMyDatePickerCalendarDirective,
  selectors: [["", "libAngularMyDatePickerCalendar", ""]],
  inputs: {
    libAngularMyDatePickerCalendar: "libAngularMyDatePickerCalendar"
  }
});

/***/ }),

/***/ 8108:
/*!*************************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/enums/active-view.enum.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveView": () => (/* binding */ ActiveView)
/* harmony export */ });
var ActiveView;
(function (ActiveView) {
  ActiveView[ActiveView["Date"] = 1] = "Date";
  ActiveView[ActiveView["Month"] = 2] = "Month";
  ActiveView[ActiveView["Year"] = 3] = "Year";
})(ActiveView || (ActiveView = {}));

/***/ }),

/***/ 8697:
/*!***************************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/enums/cal-animation.enum.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalAnimation": () => (/* binding */ CalAnimation)
/* harmony export */ });
var CalAnimation;
(function (CalAnimation) {
  CalAnimation[CalAnimation["None"] = 0] = "None";
  CalAnimation[CalAnimation["Fade"] = 1] = "Fade";
  CalAnimation[CalAnimation["ScaleTop"] = 2] = "ScaleTop";
  CalAnimation[CalAnimation["ScaleCenter"] = 3] = "ScaleCenter";
  CalAnimation[CalAnimation["Rotate"] = 4] = "Rotate";
  CalAnimation[CalAnimation["FlipDiagonal"] = 5] = "FlipDiagonal";
  CalAnimation[CalAnimation["Own"] = 6] = "Own";
})(CalAnimation || (CalAnimation = {}));

/***/ }),

/***/ 9927:
/*!************************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/enums/cal-toggle.enum.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalToggle": () => (/* binding */ CalToggle)
/* harmony export */ });
var CalToggle;
(function (CalToggle) {
  CalToggle[CalToggle["Open"] = 1] = "Open";
  CalToggle[CalToggle["CloseByDateSel"] = 2] = "CloseByDateSel";
  CalToggle[CalToggle["CloseByCalBtn"] = 3] = "CloseByCalBtn";
  CalToggle[CalToggle["CloseByOutClick"] = 4] = "CloseByOutClick";
  CalToggle[CalToggle["CloseByEsc"] = 5] = "CloseByEsc";
})(CalToggle || (CalToggle = {}));

/***/ }),

/***/ 3457:
/*!**************************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/enums/default-view.enum.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultView": () => (/* binding */ DefaultView)
/* harmony export */ });
var DefaultView;
(function (DefaultView) {
  DefaultView[DefaultView["Date"] = 1] = "Date";
  DefaultView[DefaultView["Month"] = 2] = "Month";
  DefaultView[DefaultView["Year"] = 3] = "Year";
})(DefaultView || (DefaultView = {}));

/***/ }),

/***/ 8795:
/*!***************************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/enums/header-action.enum.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderAction": () => (/* binding */ HeaderAction)
/* harmony export */ });
var HeaderAction;
(function (HeaderAction) {
  HeaderAction[HeaderAction["PrevBtnClick"] = 1] = "PrevBtnClick";
  HeaderAction[HeaderAction["NextBtnClick"] = 2] = "NextBtnClick";
  HeaderAction[HeaderAction["MonthBtnClick"] = 3] = "MonthBtnClick";
  HeaderAction[HeaderAction["YearBtnClick"] = 4] = "YearBtnClick";
})(HeaderAction || (HeaderAction = {}));

/***/ }),

/***/ 4970:
/*!**********************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/enums/key-code.enum.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyCode": () => (/* binding */ KeyCode)
/* harmony export */ });
/**
 * Event key codes
 */
var KeyCode;
(function (KeyCode) {
  KeyCode[KeyCode["enter"] = 13] = "enter";
  KeyCode[KeyCode["esc"] = 27] = "esc";
  KeyCode[KeyCode["space"] = 32] = "space";
  KeyCode[KeyCode["leftArrow"] = 37] = "leftArrow";
  KeyCode[KeyCode["upArrow"] = 38] = "upArrow";
  KeyCode[KeyCode["rightArrow"] = 39] = "rightArrow";
  KeyCode[KeyCode["downArrow"] = 40] = "downArrow";
  KeyCode[KeyCode["tab"] = 9] = "tab";
  KeyCode[KeyCode["shift"] = 16] = "shift";
})(KeyCode || (KeyCode = {}));

/***/ }),

/***/ 3356:
/*!**********************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/enums/key-name.enum.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyName": () => (/* binding */ KeyName)
/* harmony export */ });
/**
 * Event key names
 */
var KeyName;
(function (KeyName) {
  KeyName["enter"] = "Enter";
  KeyName["esc"] = "Escape|Esc";
  KeyName["space"] = " |Spacebar";
  KeyName["leftArrow"] = "ArrowLeft|Left";
  KeyName["upArrow"] = "ArrowUp|Up";
  KeyName["rightArrow"] = "ArrowRight|Right";
  KeyName["downArrow"] = "ArrowDown|Down";
  KeyName["tab"] = "Tab";
  KeyName["shift"] = "Shift";
})(KeyName || (KeyName = {}));

/***/ }),

/***/ 3732:
/*!**********************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/enums/month-id.enum.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonthId": () => (/* binding */ MonthId)
/* harmony export */ });
var MonthId;
(function (MonthId) {
  MonthId[MonthId["prev"] = 1] = "prev";
  MonthId[MonthId["curr"] = 2] = "curr";
  MonthId[MonthId["next"] = 3] = "next";
})(MonthId || (MonthId = {}));

/***/ }),

/***/ 3227:
/*!******************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/enums/year.enum.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Year": () => (/* binding */ Year)
/* harmony export */ });
var Year;
(function (Year) {
  Year[Year["min"] = 1000] = "min";
  Year[Year["max"] = 9999] = "max";
})(Year || (Year = {}));

/***/ }),

/***/ 6147:
/*!***********************************************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/services/angular-mydatepicker.config.service.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultConfigService": () => (/* binding */ DefaultConfigService)
/* harmony export */ });
/* harmony import */ var _enums_year_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/year.enum */ 3227);
/* harmony import */ var _enums_default_view_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/default-view.enum */ 3457);
/* harmony import */ var _enums_cal_animation_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/cal-animation.enum */ 8697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class DefaultConfigService {
  constructor() {
    this.defaultConfig = {
      dateRange: false,
      inline: false,
      dayLabels: {
        su: "Sun",
        mo: "Mon",
        tu: "Tue",
        we: "Wed",
        th: "Thu",
        fr: "Fri",
        sa: "Sat"
      },
      monthLabels: {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec"
      },
      dateFormat: "yyyy-mm-dd",
      defaultView: _enums_default_view_enum__WEBPACK_IMPORTED_MODULE_1__.DefaultView.Date,
      firstDayOfWeek: "mo",
      satHighlight: false,
      sunHighlight: true,
      highlightDates: [],
      markCurrentDay: true,
      markCurrentMonth: true,
      markCurrentYear: true,
      monthSelector: true,
      yearSelector: true,
      disableHeaderButtons: true,
      showWeekNumbers: false,
      selectorHeight: "266px",
      selectorWidth: "266px",
      disableUntil: {
        year: 0,
        month: 0,
        day: 0
      },
      disableSince: {
        year: 0,
        month: 0,
        day: 0
      },
      disableDates: [],
      disableDateRanges: [],
      disableWeekends: false,
      disableWeekdays: [],
      enableDates: [],
      markDates: [],
      markWeekends: {
        marked: false,
        color: ""
      },
      alignSelectorRight: false,
      openSelectorTopOfInput: false,
      closeSelectorOnDateSelect: true,
      closeSelectorOnDocumentClick: true,
      minYear: _enums_year_enum__WEBPACK_IMPORTED_MODULE_0__.Year.min,
      maxYear: _enums_year_enum__WEBPACK_IMPORTED_MODULE_0__.Year.max,
      showSelectorArrow: true,
      appendSelectorToBody: false,
      focusInputOnDateSelect: true,
      moveFocusByArrowKeys: true,
      dateRangeDatesDelimiter: " - ",
      inputFieldValidation: true,
      showMonthNumber: true,
      todayTxt: "",
      showFooterToday: false,
      calendarAnimation: {
        in: _enums_cal_animation_enum__WEBPACK_IMPORTED_MODULE_2__.CalAnimation.None,
        out: _enums_cal_animation_enum__WEBPACK_IMPORTED_MODULE_2__.CalAnimation.None
      },
      viewChangeAnimation: true,
      rtl: false,
      stylesData: {
        selector: "",
        styles: ""
      },
      divHostElement: {
        enabled: false,
        placeholder: ""
      },
      ariaLabelPrevMonth: "Previous Month",
      ariaLabelNextMonth: "Next Month"
    };
  }
  getDefaultConfig() {
    return this.defaultConfig;
  }
}
DefaultConfigService.ɵfac = function DefaultConfigService_Factory(t) {
  return new (t || DefaultConfigService)();
};
DefaultConfigService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: DefaultConfigService,
  factory: DefaultConfigService.ɵfac
});

/***/ }),

/***/ 74:
/*!***********************************************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/services/angular-mydatepicker.locale.service.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocaleService": () => (/* binding */ LocaleService)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ 5384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class LocaleService {
  constructor() {
    this.locales = {
      "en": {
        dayLabels: {
          su: "Sun",
          mo: "Mon",
          tu: "Tue",
          we: "Wed",
          th: "Thu",
          fr: "Fri",
          sa: "Sat"
        },
        monthLabels: {
          1: "Jan",
          2: "Feb",
          3: "Mar",
          4: "Apr",
          5: "May",
          6: "Jun",
          7: "Jul",
          8: "Aug",
          9: "Sep",
          10: "Oct",
          11: "Nov",
          12: "Dec"
        },
        dateFormat: "mm/dd/yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Today"
      },
      "he": {
        dayLabels: {
          su: "רא",
          mo: "שנ",
          tu: "של",
          we: "רב",
          th: "חמ",
          fr: "שי",
          sa: "שב"
        },
        monthLabels: {
          1: "ינו",
          2: "פבר",
          3: "מרץ",
          4: "אפר",
          5: "מאי",
          6: "יונ",
          7: "יול",
          8: "אוג",
          9: "ספט",
          10: "אוק",
          11: "נוב",
          12: "דצמ"
        },
        dateFormat: "dd/mm/yyyy",
        firstDayOfWeek: "su",
        sunHighlight: false,
        todayTxt: "היום"
      },
      "ja": {
        dayLabels: {
          su: "日",
          mo: "月",
          tu: "火",
          we: "水",
          th: "木",
          fr: "金",
          sa: "土"
        },
        monthLabels: {
          1: "１月",
          2: "２月",
          3: "３月",
          4: "４月",
          5: "５月",
          6: "６月",
          7: "７月",
          8: "８月",
          9: "９月",
          10: "１０月",
          11: "１１月",
          12: "１２月"
        },
        dateFormat: "yyyy.mm.dd",
        sunHighlight: false,
        todayTxt: "今日"
      },
      "fr": {
        dayLabels: {
          su: "Dim",
          mo: "Lun",
          tu: "Mar",
          we: "Mer",
          th: "Jeu",
          fr: "Ven",
          sa: "Sam"
        },
        monthLabels: {
          1: "Jan",
          2: "Fév",
          3: "Mar",
          4: "Avr",
          5: "Mai",
          6: "Juin",
          7: "Juil",
          8: "Aoû",
          9: "Sep",
          10: "Oct",
          11: "Nov",
          12: "Déc"
        },
        dateFormat: "dd/mm/yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Aujourd'hui"
      },
      "fr-ch": {
        dayLabels: {
          su: "Dim",
          mo: "Lun",
          tu: "Mar",
          we: "Mer",
          th: "Jeu",
          fr: "Ven",
          sa: "Sam"
        },
        monthLabels: {
          1: "Jan",
          2: "Fév",
          3: "Mar",
          4: "Avr",
          5: "Mai",
          6: "Juin",
          7: "Juil",
          8: "Aoû",
          9: "Sep",
          10: "Oct",
          11: "Nov",
          12: "Déc"
        },
        dateFormat: "dd.mm.yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Aujourd'hui"
      },
      "fi": {
        dayLabels: {
          su: "Su",
          mo: "Ma",
          tu: "Ti",
          we: "Ke",
          th: "To",
          fr: "Pe",
          sa: "La"
        },
        monthLabels: {
          1: "Tam",
          2: "Hel",
          3: "Maa",
          4: "Huh",
          5: "Tou",
          6: "Kes",
          7: "Hei",
          8: "Elo",
          9: "Syy",
          10: "Lok",
          11: "Mar",
          12: "Jou"
        },
        dateFormat: "dd.mm.yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Tänään"
      },
      "es": {
        dayLabels: {
          su: "Do",
          mo: "Lu",
          tu: "Ma",
          we: "Mi",
          th: "Ju",
          fr: "Vi",
          sa: "Sa"
        },
        monthLabels: {
          1: "Ene",
          2: "Feb",
          3: "Mar",
          4: "Abr",
          5: "May",
          6: "Jun",
          7: "Jul",
          8: "Ago",
          9: "Sep",
          10: "Oct",
          11: "Nov",
          12: "Dic"
        },
        dateFormat: "dd.mm.yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Hoy"
      },
      "hu": {
        dayLabels: {
          su: "Vas",
          mo: "Hét",
          tu: "Kedd",
          we: "Sze",
          th: "Csü",
          fr: "Pén",
          sa: "Szo"
        },
        monthLabels: {
          1: "Jan",
          2: "Feb",
          3: "Már",
          4: "Ápr",
          5: "Máj",
          6: "Jún",
          7: "Júl",
          8: "Aug",
          9: "Szep",
          10: "Okt",
          11: "Nov",
          12: "Dec"
        },
        dateFormat: "yyyy-mm-dd",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Ma"
      },
      "sv": {
        dayLabels: {
          su: "Sön",
          mo: "Mån",
          tu: "Tis",
          we: "Ons",
          th: "Tor",
          fr: "Fre",
          sa: "Lör"
        },
        monthLabels: {
          1: "Jan",
          2: "Feb",
          3: "Mar",
          4: "Apr",
          5: "Maj",
          6: "Jun",
          7: "Jul",
          8: "Aug",
          9: "Sep",
          10: "Okt",
          11: "Nov",
          12: "Dec"
        },
        dateFormat: "yyyy-mm-dd",
        firstDayOfWeek: "mo",
        sunHighlight: false,
        todayTxt: "Idag"
      },
      "nl": {
        dayLabels: {
          su: "Zon",
          mo: "Maa",
          tu: "Din",
          we: "Woe",
          th: "Don",
          fr: "Vri",
          sa: "Zat"
        },
        monthLabels: {
          1: "Jan",
          2: "Feb",
          3: "Mar",
          4: "Apr",
          5: "Mei",
          6: "Jun",
          7: "Jul",
          8: "Aug",
          9: "Sep",
          10: "Okt",
          11: "Nov",
          12: "Dec"
        },
        dateFormat: "dd-mm-yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: false,
        todayTxt: "Vandaag"
      },
      "ru": {
        dayLabels: {
          su: "Вс",
          mo: "Пн",
          tu: "Вт",
          we: "Ср",
          th: "Чт",
          fr: "Пт",
          sa: "Сб"
        },
        monthLabels: {
          1: "Янв",
          2: "Фев",
          3: "Март",
          4: "Апр",
          5: "Май",
          6: "Июнь",
          7: "Июль",
          8: "Авг",
          9: "Сент",
          10: "Окт",
          11: "Ноя",
          12: "Дек"
        },
        dateFormat: "dd.mm.yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Сегодня"
      },
      "uk": {
        dayLabels: {
          su: "Нд",
          mo: "Пн",
          tu: "Вт",
          we: "Ср",
          th: "Чт",
          fr: "Пт",
          sa: "Сб"
        },
        monthLabels: {
          1: "Січ",
          2: "Лют",
          3: "Бер",
          4: "Кві",
          5: "Тра",
          6: "Чер",
          7: "Лип",
          8: "Сер",
          9: "Вер",
          10: "Жов",
          11: "Лис",
          12: "Гру"
        },
        dateFormat: "dd.mm.yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Сьогодні"
      },
      "uz": {
        dayLabels: {
          su: "Yak",
          mo: "Du",
          tu: "Se",
          we: "Cho",
          th: "Pay",
          fr: "Ju",
          sa: "Sha"
        },
        monthLabels: {
          1: "Yan",
          2: "Fev",
          3: "Mar",
          4: "Apr",
          5: "May",
          6: "Iyn",
          7: "Iyl",
          8: "Avg",
          9: "Sen",
          10: "Okt",
          11: "Noy",
          12: "Dek"
        },
        dateFormat: "dd.mm.yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Bugun"
      },
      "no": {
        dayLabels: {
          su: "Søn",
          mo: "Man",
          tu: "Tir",
          we: "Ons",
          th: "Tor",
          fr: "Fre",
          sa: "Lør"
        },
        monthLabels: {
          1: "Jan",
          2: "Feb",
          3: "Mar",
          4: "Apr",
          5: "Mai",
          6: "Jun",
          7: "Jul",
          8: "Aug",
          9: "Sep",
          10: "Okt",
          11: "Nov",
          12: "Des"
        },
        dateFormat: "dd.mm.yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: false,
        todayTxt: "I dag"
      },
      "tr": {
        dayLabels: {
          su: "Paz",
          mo: "Pzt",
          tu: "Sal",
          we: "Çar",
          th: "Per",
          fr: "Cum",
          sa: "Cmt"
        },
        monthLabels: {
          1: "Oca",
          2: "Şub",
          3: "Mar",
          4: "Nis",
          5: "May",
          6: "Haz",
          7: "Tem",
          8: "Ağu",
          9: "Eyl",
          10: "Eki",
          11: "Kas",
          12: "Ara"
        },
        dateFormat: "dd.mm.yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: false,
        todayTxt: "Bugün"
      },
      "pt-br": {
        dayLabels: {
          su: "Dom",
          mo: "Seg",
          tu: "Ter",
          we: "Qua",
          th: "Qui",
          fr: "Sex",
          sa: "Sab"
        },
        monthLabels: {
          1: "Jan",
          2: "Fev",
          3: "Mar",
          4: "Abr",
          5: "Mai",
          6: "Jun",
          7: "Jul",
          8: "Ago",
          9: "Set",
          10: "Out",
          11: "Nov",
          12: "Dez"
        },
        dateFormat: "dd/mm/yyyy",
        firstDayOfWeek: "su",
        sunHighlight: true,
        todayTxt: "Hoje"
      },
      "de": {
        dayLabels: {
          su: "So",
          mo: "Mo",
          tu: "Di",
          we: "Mi",
          th: "Do",
          fr: "Fr",
          sa: "Sa"
        },
        monthLabels: {
          1: "Jan",
          2: "Feb",
          3: "Mär",
          4: "Apr",
          5: "Mai",
          6: "Jun",
          7: "Jul",
          8: "Aug",
          9: "Sep",
          10: "Okt",
          11: "Nov",
          12: "Dez"
        },
        dateFormat: "dd.mm.yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Heute"
      },
      "de-ch": {
        dayLabels: {
          su: "So",
          mo: "Mo",
          tu: "Di",
          we: "Mi",
          th: "Do",
          fr: "Fr",
          sa: "Sa"
        },
        monthLabels: {
          1: "Jan",
          2: "Feb",
          3: "Mär",
          4: "Apr",
          5: "Mai",
          6: "Jun",
          7: "Jul",
          8: "Aug",
          9: "Sep",
          10: "Okt",
          11: "Nov",
          12: "Dez"
        },
        dateFormat: "dd.mm.yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Heute"
      },
      "it": {
        dayLabels: {
          su: "Dom",
          mo: "Lun",
          tu: "Mar",
          we: "Mer",
          th: "Gio",
          fr: "Ven",
          sa: "Sab"
        },
        monthLabels: {
          1: "Gen",
          2: "Feb",
          3: "Mar",
          4: "Apr",
          5: "Mag",
          6: "Giu",
          7: "Lug",
          8: "Ago",
          9: "Set",
          10: "Ott",
          11: "Nov",
          12: "Dic"
        },
        dateFormat: "dd/mm/yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Oggi"
      },
      "it-ch": {
        dayLabels: {
          su: "Dom",
          mo: "Lun",
          tu: "Mar",
          we: "Mer",
          th: "Gio",
          fr: "Ven",
          sa: "Sab"
        },
        monthLabels: {
          1: "Gen",
          2: "Feb",
          3: "Mar",
          4: "Apr",
          5: "Mag",
          6: "Giu",
          7: "Lug",
          8: "Ago",
          9: "Set",
          10: "Ott",
          11: "Nov",
          12: "Dic"
        },
        dateFormat: "dd.mm.yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Oggi"
      },
      "pl": {
        dayLabels: {
          su: "Nie",
          mo: "Pon",
          tu: "Wto",
          we: "Śro",
          th: "Czw",
          fr: "Pią",
          sa: "Sob"
        },
        monthLabels: {
          1: "Sty",
          2: "Lut",
          3: "Mar",
          4: "Kwi",
          5: "Maj",
          6: "Cze",
          7: "Lip",
          8: "Sie",
          9: "Wrz",
          10: "Paź",
          11: "Lis",
          12: "Gru"
        },
        dateFormat: "yyyy-mm-dd",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Dzisiaj"
      },
      "my": {
        dayLabels: {
          su: "တနင်္ဂနွေ",
          mo: "တနင်္လာ",
          tu: "အင်္ဂါ",
          we: "ဗုဒ္ဓဟူး",
          th: "ကြသပတေး",
          fr: "သောကြာ",
          sa: "စနေ"
        },
        monthLabels: {
          1: "ဇန်နဝါရီ",
          2: "ဖေဖော်ဝါရီ",
          3: "မတ်",
          4: "ဧပြီ",
          5: "မေ",
          6: "ဇွန်",
          7: "ဇူလိုင်",
          8: "ဩဂုတ်",
          9: "စက်တင်ဘာ",
          10: "အောက်တိုဘာ",
          11: "နိုဝင်ဘာ",
          12: "ဒီဇင်ဘာ"
        },
        dateFormat: "yyyy-mm-dd",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "ယနေ့"
      },
      "sk": {
        dayLabels: {
          su: "Ne",
          mo: "Po",
          tu: "Ut",
          we: "St",
          th: "Št",
          fr: "Pi",
          sa: "So"
        },
        monthLabels: {
          1: "Jan",
          2: "Feb",
          3: "Mar",
          4: "Apr",
          5: "Máj",
          6: "Jún",
          7: "Júl",
          8: "Aug",
          9: "Sep",
          10: "Okt",
          11: "Nov",
          12: "Dec"
        },
        dateFormat: "dd.mm.yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Dnes"
      },
      "sl": {
        dayLabels: {
          su: "Ned",
          mo: "Pon",
          tu: "Tor",
          we: "Sre",
          th: "Čet",
          fr: "Pet",
          sa: "Sob"
        },
        monthLabels: {
          1: "Jan",
          2: "Feb",
          3: "Mar",
          4: "Apr",
          5: "Maj",
          6: "Jun",
          7: "Jul",
          8: "Avg",
          9: "Sep",
          10: "Okt",
          11: "Nov",
          12: "Dec"
        },
        dateFormat: "dd. mm. yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Danes"
      },
      "zh-cn": {
        dayLabels: {
          su: "日",
          mo: "一",
          tu: "二",
          we: "三",
          th: "四",
          fr: "五",
          sa: "六"
        },
        monthLabels: {
          1: "1月",
          2: "2月",
          3: "3月",
          4: "4月",
          5: "5月",
          6: "6月",
          7: "7月",
          8: "8月",
          9: "9月",
          10: "10月",
          11: "11月",
          12: "12月"
        },
        dateFormat: "yyyy-mm-dd",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "今天"
      },
      "ro": {
        dayLabels: {
          su: "du",
          mo: "lu",
          tu: "ma",
          we: "mi",
          th: "jo",
          fr: "vi",
          sa: "sa"
        },
        monthLabels: {
          1: "ian",
          2: "feb",
          3: "mart",
          4: "apr",
          5: "mai",
          6: "iun",
          7: "iul",
          8: "aug",
          9: "sept",
          10: "oct",
          11: "nov",
          12: "dec"
        },
        dateFormat: "dd.mm.yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Astăzi"
      },
      "ca": {
        dayLabels: {
          su: "dg",
          mo: "dl",
          tu: "dt",
          we: "dc",
          th: "dj",
          fr: "dv",
          sa: "ds"
        },
        monthLabels: {
          1: "Gen",
          2: "Febr",
          3: "Març",
          4: "Abr",
          5: "Maig",
          6: "Juny",
          7: "Jul",
          8: "Ag",
          9: "Set",
          10: "Oct",
          11: "Nov",
          12: "Des"
        },
        dateFormat: "dd.mm.yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Avui"
      },
      "id": {
        dayLabels: {
          su: "Min",
          mo: "Sen",
          tu: "Sel",
          we: "Rab",
          th: "Kam",
          fr: "Jum",
          sa: "Sab"
        },
        monthLabels: {
          1: "Jan",
          2: "Feb",
          3: "Mar",
          4: "Apr",
          5: "Mei",
          6: "Jun",
          7: "Jul",
          8: "Ags",
          9: "Sep",
          10: "Okt",
          11: "Nov",
          12: "Des"
        },
        dateFormat: "dd-mm-yyyy",
        firstDayOfWeek: "su",
        sunHighlight: true,
        todayTxt: "Hari ini"
      },
      "en-au": {
        dayLabels: {
          su: "Sun",
          mo: "Mon",
          tu: "Tue",
          we: "Wed",
          th: "Thu",
          fr: "Fri",
          sa: "Sat"
        },
        monthLabels: {
          1: "Jan",
          2: "Feb",
          3: "Mar",
          4: "Apr",
          5: "May",
          6: "Jun",
          7: "Jul",
          8: "Aug",
          9: "Sep",
          10: "Oct",
          11: "Nov",
          12: "Dec"
        },
        dateFormat: "dd/mm/yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Today"
      },
      "en-gb": {
        dayLabels: {
          su: "Sun",
          mo: "Mon",
          tu: "Tue",
          we: "Wed",
          th: "Thu",
          fr: "Fri",
          sa: "Sat"
        },
        monthLabels: {
          1: "Jan",
          2: "Feb",
          3: "Mar",
          4: "Apr",
          5: "May",
          6: "Jun",
          7: "Jul",
          8: "Aug",
          9: "Sep",
          10: "Oct",
          11: "Nov",
          12: "Dec"
        },
        dateFormat: "dd/mm/yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Today"
      },
      "am-et": {
        dayLabels: {
          su: "እሑድ",
          mo: "ሰኞ",
          tu: "ማክሰኞ",
          we: "ረቡዕ",
          th: "ሐሙስ",
          fr: "ዓርብ",
          sa: "ቅዳሜ"
        },
        monthLabels: {
          1: "ጃንዩ",
          2: "ፌብሩ",
          3: "ማርች",
          4: "ኤፕረ",
          5: "ሜይ",
          6: "ጁን",
          7: "ጁላይ",
          8: "ኦገስ",
          9: "ሴፕቴ",
          10: "ኦክተ",
          11: "ኖቬም",
          12: "ዲሴም"
        },
        dateFormat: "yyyy-mm-dd",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "ዛሬ"
      },
      "cs": {
        dayLabels: {
          su: "Ne",
          mo: "Po",
          tu: "Út",
          we: "St",
          th: "Čt",
          fr: "Pá",
          sa: "So"
        },
        monthLabels: {
          1: "Led",
          2: "Úno",
          3: "Bře",
          4: "Dub",
          5: "Kvě",
          6: "Čvn",
          7: "Čvc",
          8: "Srp",
          9: "Zář",
          10: "Říj",
          11: "Lis",
          12: "Pro"
        },
        dateFormat: "dd.mm.yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Dnes"
      },
      "el": {
        dayLabels: {
          su: "Κυρ",
          mo: "Δευ",
          tu: "Τρι",
          we: "Τετ",
          th: "Πεμ",
          fr: "Παρ",
          sa: "Σαβ"
        },
        monthLabels: {
          1: "Ιαν",
          2: "Φεβ",
          3: "Μαρ",
          4: "Απρ",
          5: "Μαι",
          6: "Ιουν",
          7: "Ιουλ",
          8: "Αυγ",
          9: "Σεπ",
          10: "Οκτ",
          11: "Νοε",
          12: "Δεκ"
        },
        dateFormat: "dd/mm/yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Σήμερα"
      },
      "kk": {
        dayLabels: {
          su: "Жк",
          mo: "Дс",
          tu: "Сс",
          we: "Ср",
          th: "Бс",
          fr: "Жм",
          sa: "Сб"
        },
        monthLabels: {
          1: "Қаң",
          2: "Ақп",
          3: "Нау",
          4: "Сәу",
          5: "Мам",
          6: "Мау",
          7: "Шіл",
          8: "Там",
          9: "Қырк",
          10: "Қаз",
          11: "Қар",
          12: "Желт"
        },
        dateFormat: "dd-mmm-yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Бүгін"
      },
      "th": {
        dayLabels: {
          su: "อา",
          mo: "จ",
          tu: "อ",
          we: "พ",
          th: "พฤ",
          fr: "ศ",
          sa: "ส"
        },
        monthLabels: {
          1: "ม.ค",
          2: "ก.พ.",
          3: "มี.ค.",
          4: "เม.ย.",
          5: "พ.ค.",
          6: "มิ.ย.",
          7: "ก.ค.",
          8: "ส.ค.",
          9: "ก.ย.",
          10: "ต.ค.",
          11: "พ.ย.",
          12: "ธ.ค."
        },
        dateFormat: "dd-mm-yyyy",
        firstDayOfWeek: "su",
        sunHighlight: true,
        todayTxt: "วันนี้"
      },
      "ko-kr": {
        dayLabels: {
          su: "일",
          mo: "월",
          tu: "화",
          we: "수",
          th: "목",
          fr: "금",
          sa: "토"
        },
        monthLabels: {
          1: "1월",
          2: "2월",
          3: "3월",
          4: "4월",
          5: "5월",
          6: "6월",
          7: "7월",
          8: "8월",
          9: "9월",
          10: "10월",
          11: "11월",
          12: "12월"
        },
        dateFormat: "yyyy mm dd",
        firstDayOfWeek: "su",
        sunHighlight: true,
        todayTxt: "오늘"
      },
      "da": {
        dayLabels: {
          su: "Søn",
          mo: "Man",
          tu: "Tir",
          we: "Ons",
          th: "Tor",
          fr: "Fre",
          sa: "Lør"
        },
        monthLabels: {
          1: "Jan",
          2: "Feb",
          3: "Mar",
          4: "Apr",
          5: "Maj",
          6: "Jun",
          7: "Jul",
          8: "Aug",
          9: "Sep",
          10: "Okt",
          11: "Nov",
          12: "Dec"
        },
        dateFormat: "dd-mm-yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "I dag"
      },
      "lt": {
        dayLabels: {
          su: "Sk",
          mo: "Pr",
          tu: "An",
          we: "Tr",
          th: "Kt",
          fr: "Pn",
          sa: "Št"
        },
        monthLabels: {
          1: "Saus.",
          2: "Vas.",
          3: "Kov.",
          4: "Bal.",
          5: "Geg.",
          6: "Birž.",
          7: "Liep.",
          8: "Rugp.",
          9: "Rugs.",
          10: "Sapl.",
          11: "Lapkr.",
          12: "Gruod."
        },
        dateFormat: "yyyy-mm-dd",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Šianien"
      },
      "vi": {
        dayLabels: {
          su: "CN",
          mo: "T2",
          tu: "T3",
          we: "T4",
          th: "T5",
          fr: "T6",
          sa: "T7"
        },
        monthLabels: {
          1: "THG 1",
          2: "THG 2",
          3: "THG 3",
          4: "THG 4",
          5: "THG 5",
          6: "THG 6",
          7: "THG 7",
          8: "THG 8",
          9: "THG 9",
          10: "THG 10",
          11: "THG 11",
          12: "THG 12"
        },
        dateFormat: "dd/mm/yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Hôm nay"
      },
      "bn": {
        dayLabels: {
          su: "রবি",
          mo: "সোম",
          tu: "মঙ্গল",
          we: "বুধ",
          th: "বৃহঃ",
          fr: "শুক্র",
          sa: "শনি"
        },
        monthLabels: {
          1: "জানু",
          2: "ফেব্রু",
          3: "মার্চ",
          4: "এপ্রিল",
          5: "মে",
          6: "জুন",
          7: "জুলাই",
          8: "আগস্ট",
          9: "সেপ্টে",
          10: "অক্টো",
          11: "নভে",
          12: "ডিসে"
        },
        dateFormat: "dd-mm-yyyy",
        firstDayOfWeek: "su",
        sunHighlight: true,
        todayTxt: "আজ"
      },
      "bg": {
        dayLabels: {
          su: "нд",
          mo: "пн",
          tu: "вт",
          we: "ср",
          th: "чт",
          fr: "пт",
          sa: "сб"
        },
        monthLabels: {
          1: "яну.",
          2: "фев.",
          3: "март",
          4: "апр.",
          5: "май",
          6: "юни",
          7: "юли",
          8: "авг.",
          9: "сеп.",
          10: "окт.",
          11: "ное.",
          12: "дек."
        },
        dateFormat: "dd.mm.yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "днес"
      },
      "hr": {
        dayLabels: {
          su: "Ne",
          mo: "Po",
          tu: "Ul",
          we: "Sr",
          th: "Če",
          fr: "Pe",
          sa: "Su"
        },
        monthLabels: {
          1: "Sij",
          2: "Vel",
          3: "Ožu",
          4: "Tra",
          5: "Svi",
          6: "Lip",
          7: "Srp",
          8: "Kol",
          9: "Ruj",
          10: "Lis",
          11: "Stu",
          12: "Pro"
        },
        dateFormat: "dd.mm.yyyy.",
        firstDayOfWeek: "su",
        sunHighlight: true,
        todayTxt: "danas"
      },
      "ar": {
        dayLabels: {
          su: "الأحد",
          mo: "الاثنين",
          tu: "الثلاثاء",
          we: "الاربعاء",
          th: "الخميس",
          fr: "الجمعة",
          sa: "السبت"
        },
        monthLabels: {
          1: "يناير",
          2: "فبراير",
          3: "مارس",
          4: "ابريل",
          5: "مايو",
          6: "يونيو",
          7: "يوليو",
          8: "أغسطس",
          9: "سبتمبر",
          10: "أكتوبر",
          11: "نوفمبر",
          12: "ديسمبر"
        },
        dateFormat: "yyyy-mm-dd",
        firstDayOfWeek: "sa",
        sunHighlight: true,
        todayTxt: "اليوم"
      },
      "is": {
        dayLabels: {
          su: "sun",
          mo: "mán",
          tu: "þri",
          we: "mið",
          th: "fim",
          fr: "fös",
          sa: "lau"
        },
        monthLabels: {
          1: "jan",
          2: "feb",
          3: "mar",
          4: "apr",
          5: "maí",
          6: "jún",
          7: "júl",
          8: "ágú",
          9: "sep",
          10: "okt",
          11: "nóv",
          12: "des"
        },
        dateFormat: "dd.mm.yyyy",
        firstDayOfWeek: "su",
        sunHighlight: true,
        todayTxt: "Í dag"
      },
      "tw": {
        dayLabels: {
          su: "週日",
          mo: "週一",
          tu: "週二",
          we: "週三",
          th: "週四",
          fr: "週五",
          sa: "週六"
        },
        monthLabels: {
          1: "一月",
          2: "二月",
          3: "三月",
          4: "四月",
          5: "五月",
          6: "六月",
          7: "七月",
          8: "八月",
          9: "九月",
          10: "十月",
          11: "十一月",
          12: "十二月"
        },
        dateFormat: "yyyy-mm-dd",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "今天"
      },
      "lv": {
        dayLabels: {
          su: "S",
          mo: "P",
          tu: "O",
          we: "T",
          th: "C",
          fr: "P",
          sa: "S"
        },
        monthLabels: {
          1: "Janv",
          2: "Febr",
          3: "Marts",
          4: "Apr",
          5: "Maijs",
          6: "Jūn",
          7: "Jūl",
          8: "Aug",
          9: "Sept",
          10: "Okt",
          11: "Nov",
          12: "Dec"
        },
        dateFormat: "dd.mm.yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Šodien"
      },
      "et": {
        dayLabels: {
          su: "P",
          mo: "E",
          tu: "T",
          we: "K",
          th: "N",
          fr: "R",
          sa: "L"
        },
        monthLabels: {
          1: "Jaan",
          2: "Veebr",
          3: "Märts",
          4: "Apr",
          5: "Mai",
          6: "Juuni",
          7: "Juuli",
          8: "Aug",
          9: "Sept",
          10: "Okt",
          11: "Nov",
          12: "Dets"
        },
        dateFormat: "dd.mm.yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Täna"
      }
    };
  }
  getLocaleOptions(locale) {
    if (locale && this.locales.hasOwnProperty(locale)) {
      // User given locale
      return this.locales[locale];
    }
    // Default: en
    return this.locales[_constants_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_LOCALE];
  }
}
LocaleService.ɵfac = function LocaleService_Factory(t) {
  return new (t || LocaleService)();
};
LocaleService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LocaleService,
  factory: LocaleService.ɵfac
});

/***/ }),

/***/ 4794:
/*!*********************************************************************************************!*\
  !*** ./projects/angular-mydatepicker/src/lib/services/angular-mydatepicker.util.service.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilService": () => (/* binding */ UtilService)
/* harmony export */ });
/* harmony import */ var _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/key-code.enum */ 4970);
/* harmony import */ var _enums_key_name_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/key-name.enum */ 3356);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ 5384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class UtilService {
  constructor() {
    this.weekDays = [_constants_constants__WEBPACK_IMPORTED_MODULE_2__.SU, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.MO, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.TU, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.WE, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.TH, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.FR, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.SA];
  }
  isDateValid(dateStr, options, validateOpts) {
    const {
      dateFormat,
      minYear,
      maxYear,
      monthLabels
    } = options;
    const returnDate = this.resetDate();
    const datesInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const isMonthStr = dateFormat.indexOf(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.MMM) !== -1;
    const delimeters = dateFormat.match(/[^(d#my)]{1,}/g);
    if (!dateStr || dateStr === _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR) {
      return returnDate;
    }
    const dateValues = this.getDateValue(dateStr, dateFormat, delimeters);
    let year = 0;
    let month = 0;
    let day = 0;
    for (let dv of dateValues) {
      if (dv.format.indexOf(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.ORDINAL) != -1) {
        const dayNumber = parseInt(dv.value.replace(/\D/g, ''));
        const ordinalStr = dv.value.replace(/[0-9]/g, '');
        const ordinal = this.getOrdinal(dayNumber);
        if (ordinal !== ordinalStr) {
          return returnDate;
        }
        dv.value = dv.value.replace(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.ST, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR).replace(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.ND, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR).replace(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.RD, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR).replace(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.TH, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR);
        dv.format = dv.format.replace(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.ORDINAL, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR);
      }
      const {
        value,
        format
      } = dv;
      if (value && /^\d+$/.test(value) && Number(value) === 0) {
        return returnDate;
      }
      if (format.indexOf(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.YYYY) !== -1) {
        year = this.getNumberByValue(dv);
      } else if (format.indexOf(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.M) !== -1) {
        month = isMonthStr ? this.getMonthNumberByMonthName(dv, monthLabels) : this.getNumberByValue(dv);
      } else if (format.indexOf(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.D) !== -1) {
        day = this.getNumberByValue(dv);
      }
    }
    const {
      validateDisabledDates,
      selectedValue
    } = validateOpts;
    year = year === 0 && selectedValue ? selectedValue.year : year;
    month = month === 0 && selectedValue ? selectedValue.month : month;
    day = day === 0 && selectedValue ? selectedValue.day : day;
    const today = this.getToday();
    if (year === 0 && (month !== 0 || day !== 0)) {
      year = today.year;
    }
    if (month === 0 && (year !== 0 || day !== 0)) {
      month = today.month;
    }
    if (day === 0 && (year !== 0 || month !== 0)) {
      day = today.day;
    }
    if (month !== -1 && day !== -1 && year !== -1) {
      if (year < minYear || year > maxYear || month < 1 || month > 12) {
        return returnDate;
      }
      const date = {
        year,
        month,
        day
      };
      if (validateDisabledDates && this.isDisabledDate(date, options).disabled) {
        return returnDate;
      }
      if (year % 400 === 0 || year % 100 !== 0 && year % 4 === 0) {
        datesInMonth[1] = 29;
      }
      if (day < 1 || day > datesInMonth[month - 1]) {
        return returnDate;
      }
      // Valid date
      return date;
    }
    return returnDate;
  }
  isDateValidDateRange(dateRangeStr, options, validateOpts) {
    let dateRange = {
      begin: this.resetDate(),
      end: this.resetDate()
    };
    if (dateRangeStr && dateRangeStr.length) {
      const dates = dateRangeStr.split(options.dateRangeDatesDelimiter);
      if (dates && dates.length === 2) {
        const [beginDate, endDate] = dates;
        let {
          selectedValue
        } = validateOpts;
        if (selectedValue) {
          validateOpts.selectedValue = selectedValue.begin;
        }
        const begin = this.isDateValid(beginDate, options, validateOpts);
        if (this.isInitializedDate(begin)) {
          if (selectedValue) {
            validateOpts.selectedValue = selectedValue.end;
          }
          const end = this.isDateValid(endDate, options, validateOpts);
          if (this.isInitializedDate(end) && this.isDateSameOrEarlier(begin, end)) {
            dateRange = {
              begin,
              end
            };
          }
        }
      }
    }
    return dateRange;
  }
  getDateValue(dateStr, dateFormat, delimeters) {
    let del = _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR;
    if (delimeters) {
      for (const d of delimeters) {
        if (del.indexOf(d) === -1) {
          del += d;
        }
      }
    }
    const re = new RegExp("[" + del + "]");
    const ds = dateStr.split(re);
    const df = dateFormat.split(re);
    const da = [];
    for (let i = 0; i < df.length; i++) {
      if (df[i].indexOf(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.YYYY) !== -1) {
        da.push({
          value: ds[i],
          format: df[i]
        });
      }
      if (df[i].indexOf(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.M) !== -1) {
        da.push({
          value: ds[i],
          format: df[i]
        });
      }
      if (df[i].indexOf(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.D) !== -1) {
        da.push({
          value: ds[i],
          format: df[i]
        });
      }
    }
    return da;
  }
  getMonthNumberByMonthName(df, monthLabels) {
    if (df.value) {
      for (let key = 1; key <= 12; key++) {
        if (df.value.toLowerCase() === monthLabels[key].toLowerCase()) {
          return key;
        }
      }
    }
    return -1;
  }
  getNumberByValue(df) {
    if (!/^\d+$/.test(df.value)) {
      return -1;
    }
    let nbr = Number(df.value);
    if (df.format.length === 1 && df.value.length !== 1 && nbr < 10 || df.format.length === 1 && df.value.length !== 2 && nbr >= 10) {
      nbr = -1;
    } else if (df.format.length === 2 && df.value.length > 2) {
      nbr = -1;
    }
    return nbr;
  }
  parseDefaultMonth(monthString) {
    const month = {
      monthTxt: _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR,
      monthNbr: 0,
      year: 0
    };
    if (monthString !== _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR) {
      const split = monthString.split(monthString.match(/[^0-9]/)[0]);
      month.monthNbr = split[0].length === 2 ? Number(split[0]) : Number(split[1]);
      month.year = split[0].length === 2 ? Number(split[1]) : Number(split[0]);
    }
    return month;
  }
  isDisabledDate(date, options) {
    const {
      minYear,
      maxYear,
      disableUntil,
      disableSince,
      disableWeekends,
      disableDates,
      disableDateRanges,
      disableWeekdays,
      enableDates
    } = options;
    if (this.dateMatchToDates(date, enableDates)) {
      return this.getDisabledValue(false, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR);
    }
    if (date.year < minYear && date.month === 12 || date.year > maxYear && date.month === 1) {
      return this.getDisabledValue(true, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR);
    }
    const inputDates = disableDates;
    const result = inputDates.find(d => {
      return d.dates;
    });
    if (!result) {
      if (this.dateMatchToDates(date, inputDates)) {
        return this.getDisabledValue(true, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR);
      }
    } else {
      for (const dd of inputDates) {
        if (this.dateMatchToDates(date, dd.dates)) {
          return this.getDisabledValue(true, dd.styleClass);
        }
      }
    }
    if (this.isDisabledByDisableUntil(date, disableUntil)) {
      return this.getDisabledValue(true, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR);
    }
    if (this.isDisabledByDisableSince(date, disableSince)) {
      return this.getDisabledValue(true, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR);
    }
    if (disableWeekends) {
      const dayNbr = this.getDayNumber(date);
      if (dayNbr === 0 || dayNbr === 6) {
        return this.getDisabledValue(true, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR);
      }
    }
    const dn = this.getDayNumber(date);
    if (disableWeekdays.length > 0) {
      for (const wd of disableWeekdays) {
        if (dn === this.getWeekdayIndex(wd)) {
          return this.getDisabledValue(true, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR);
        }
      }
    }
    if (this.isDisabledByDisableDateRange(date, date, disableDateRanges)) {
      return this.getDisabledValue(true, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR);
    }
    return this.getDisabledValue(false, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR);
  }
  getDisabledValue(disabled, styleClass) {
    return {
      disabled,
      styleClass
    };
  }
  dateMatchToDates(date, dates) {
    for (const d of dates) {
      if ((d.year === 0 || d.year === date.year) && (d.month === 0 || d.month === date.month) && d.day === date.day) {
        return true;
      }
    }
    return false;
  }
  isDisabledMonth(year, month, options) {
    const {
      disableUntil,
      disableSince,
      disableDateRanges,
      enableDates
    } = options;
    const dateEnd = {
      year,
      month,
      day: this.datesInMonth(month, year)
    };
    const dateBegin = {
      year,
      month,
      day: 1
    };
    if (this.isDatesEnabled(dateBegin, dateEnd, enableDates)) {
      return false;
    }
    if (this.isDisabledByDisableUntil(dateEnd, disableUntil)) {
      return true;
    }
    if (this.isDisabledByDisableSince(dateBegin, disableSince)) {
      return true;
    }
    if (this.isDisabledByDisableDateRange(dateBegin, dateEnd, disableDateRanges)) {
      return true;
    }
    return false;
  }
  isDisabledYear(year, options) {
    const {
      disableUntil,
      disableSince,
      disableDateRanges,
      enableDates,
      minYear,
      maxYear
    } = options;
    const dateEnd = {
      year,
      month: 12,
      day: 31
    };
    const dateBegin = {
      year,
      month: 1,
      day: 1
    };
    if (this.isDatesEnabled(dateBegin, dateEnd, enableDates)) {
      return false;
    }
    if (this.isDisabledByDisableUntil(dateEnd, disableUntil)) {
      return true;
    }
    if (this.isDisabledByDisableSince(dateBegin, disableSince)) {
      return true;
    }
    if (this.isDisabledByDisableDateRange(dateBegin, dateEnd, disableDateRanges)) {
      return true;
    }
    if (year < minYear || year > maxYear) {
      return true;
    }
    return false;
  }
  isDisabledByDisableUntil(date, disableUntil) {
    return this.isInitializedDate(disableUntil) && this.getTimeInMilliseconds(date) <= this.getTimeInMilliseconds(disableUntil);
  }
  isDisabledByDisableSince(date, disableSince) {
    return this.isInitializedDate(disableSince) && this.getTimeInMilliseconds(date) >= this.getTimeInMilliseconds(disableSince);
  }
  isPastDatesEnabled(date, enableDates) {
    for (const d of enableDates) {
      if (this.getTimeInMilliseconds(d) <= this.getTimeInMilliseconds(date)) {
        return true;
      }
    }
    return false;
  }
  isFutureDatesEnabled(date, enableDates) {
    for (const d of enableDates) {
      if (this.getTimeInMilliseconds(d) >= this.getTimeInMilliseconds(date)) {
        return true;
      }
    }
    return false;
  }
  isDatesEnabled(dateBegin, dateEnd, enableDates) {
    for (const d of enableDates) {
      if (this.getTimeInMilliseconds(d) >= this.getTimeInMilliseconds(dateBegin) && this.getTimeInMilliseconds(d) <= this.getTimeInMilliseconds(dateEnd)) {
        return true;
      }
    }
    return false;
  }
  isDisabledByDisableDateRange(dateBegin, dateEnd, disableDateRanges) {
    const dateMsBegin = this.getTimeInMilliseconds(dateBegin);
    const dateMsEnd = this.getTimeInMilliseconds(dateEnd);
    for (const d of disableDateRanges) {
      if (this.isInitializedDate(d.begin) && this.isInitializedDate(d.end) && dateMsBegin >= this.getTimeInMilliseconds(d.begin) && dateMsEnd <= this.getTimeInMilliseconds(d.end)) {
        return true;
      }
    }
    return false;
  }
  isMarkedDate(date, options) {
    const {
      markDates,
      markWeekends
    } = options;
    for (const md of markDates) {
      if (this.dateMatchToDates(date, md.dates)) {
        return this.getMarkedValue(true, md.color, md.styleClass);
      }
    }
    if (markWeekends && markWeekends.marked) {
      const dayNbr = this.getDayNumber(date);
      if (dayNbr === 0 || dayNbr === 6) {
        return this.getMarkedValue(true, markWeekends.color, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR);
      }
    }
    return this.getMarkedValue(false, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR);
  }
  getMarkedValue(marked, color, styleClass) {
    return {
      marked,
      color: color ? color : _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR,
      styleClass: styleClass ? styleClass : _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR
    };
  }
  isHighlightedDate(date, options) {
    const {
      sunHighlight,
      satHighlight,
      highlightDates
    } = options;
    const dayNbr = this.getDayNumber(date);
    if (sunHighlight && dayNbr === 0 || satHighlight && dayNbr === 6) {
      return true;
    }
    if (this.dateMatchToDates(date, highlightDates)) {
      return true;
    }
    return false;
  }
  getWeekNumber(date) {
    const d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
    d.setDate(d.getDate() + (d.getDay() === 0 ? -3 : 4 - d.getDay()));
    return Math.round((d.getTime() - new Date(d.getFullYear(), 0, 4).getTime()) / 86400000 / 7) + 1;
  }
  getDateModel(date, dateRange, dateFormat, monthLabels, rangeDelimiter, dateStr = _constants_constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STR) {
    let singleDateModel = null;
    let dateRangeModel = null;
    if (date) {
      singleDateModel = {
        date,
        jsDate: this.myDateToJsDate(date),
        formatted: dateStr.length ? dateStr : this.formatDate(date, dateFormat, monthLabels),
        epoc: this.getEpocTime(date)
      };
    } else {
      dateRangeModel = {
        beginDate: dateRange.begin,
        beginJsDate: this.myDateToJsDate(dateRange.begin),
        beginEpoc: this.getEpocTime(dateRange.begin),
        endDate: dateRange.end,
        endJsDate: this.myDateToJsDate(dateRange.end),
        endEpoc: this.getEpocTime(dateRange.end),
        formatted: this.formatDate(dateRange.begin, dateFormat, monthLabels) + rangeDelimiter + this.formatDate(dateRange.end, dateFormat, monthLabels)
      };
    }
    return {
      isRange: date === null,
      singleDate: singleDateModel,
      dateRange: dateRangeModel
    };
  }
  formatDate(date, dateFormat, monthLabels) {
    let formatted = dateFormat.replace(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.YYYY, String(date.year));
    if (dateFormat.indexOf(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.MMM) !== -1) {
      formatted = formatted.replace(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.MMM, monthLabels[date.month]);
    } else if (dateFormat.indexOf(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.MM) !== -1) {
      formatted = formatted.replace(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.MM, this.preZero(date.month));
    } else {
      formatted = formatted.replace(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.M, String(date.month));
    }
    if (dateFormat.indexOf(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.DD) !== -1) {
      formatted = formatted.replace(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.DD, this.preZero(date.day));
    } else {
      formatted = formatted.replace(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.D, String(date.day));
    }
    if (dateFormat.indexOf(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.ORDINAL) !== -1) {
      formatted = formatted.replace(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.ORDINAL, this.getOrdinal(date.day));
    }
    return formatted;
  }
  getOrdinal(date) {
    if (date > 3 && date < 21) {
      return _constants_constants__WEBPACK_IMPORTED_MODULE_2__.TH;
    }
    switch (date % 10) {
      case 1:
        return _constants_constants__WEBPACK_IMPORTED_MODULE_2__.ST;
      case 2:
        return _constants_constants__WEBPACK_IMPORTED_MODULE_2__.ND;
      case 3:
        return _constants_constants__WEBPACK_IMPORTED_MODULE_2__.RD;
      default:
        return _constants_constants__WEBPACK_IMPORTED_MODULE_2__.TH;
    }
  }
  getFormattedDate(model) {
    return !model.isRange ? model.singleDate.formatted : model.dateRange.formatted;
  }
  preZero(val) {
    return val < 10 ? _constants_constants__WEBPACK_IMPORTED_MODULE_2__.ZERO_STR + val : String(val);
  }
  isInitializedDate(date) {
    return date.year !== 0 && date.month !== 0 && date.day !== 0;
  }
  isDateEarlier(firstDate, secondDate) {
    return this.getTimeInMilliseconds(firstDate) < this.getTimeInMilliseconds(secondDate);
  }
  isDateSameOrEarlier(firstDate, secondDate) {
    return this.getTimeInMilliseconds(firstDate) <= this.getTimeInMilliseconds(secondDate);
  }
  isDateSame(firstDate, secondDate) {
    return this.getTimeInMilliseconds(firstDate) === this.getTimeInMilliseconds(secondDate);
  }
  isDateRangeBeginOrEndSame(dateRange, date) {
    const dateMs = this.getTimeInMilliseconds(date);
    return this.getTimeInMilliseconds(dateRange.begin) === dateMs || this.getTimeInMilliseconds(dateRange.end) === dateMs;
  }
  isDateRangeBegin(dateRange, date) {
    const dateMs = this.getTimeInMilliseconds(date);
    return this.getTimeInMilliseconds(dateRange.begin) === dateMs;
  }
  isDateRangeEnd(dateRange, date) {
    const dateMs = this.getTimeInMilliseconds(date);
    return this.getTimeInMilliseconds(dateRange.end) === dateMs;
  }
  isDateInRange(date, dateRange) {
    if (!this.isInitializedDate(dateRange.begin) || !this.isInitializedDate(dateRange.end)) {
      return false;
    }
    return this.isDateSameOrEarlier(dateRange.begin, date) && this.isDateSameOrEarlier(date, dateRange.end);
  }
  resetDate() {
    return {
      year: 0,
      month: 0,
      day: 0
    };
  }
  getTimeInMilliseconds(date) {
    return this.myDateToJsDate(date).getTime();
  }
  getToday() {
    const date = new Date();
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
  }
  getDayNumber(date) {
    return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).getDay();
  }
  getWeekdayIndex(wd) {
    return this.weekDays.indexOf(wd);
  }
  getEpocTime(date) {
    return Math.round(this.getTimeInMilliseconds(date) / 1000.0);
  }
  jsDateToMyDate(date) {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
  }
  myDateToJsDate(date) {
    const {
      year,
      month,
      day
    } = date;
    return new Date(year, month - 1, day, 0, 0, 0, 0);
  }
  datesInMonth(m, y) {
    return new Date(y, m, 0).getDate();
  }
  datesInPrevMonth(m, y) {
    const d = this.getJsDate(y, m, 1);
    d.setMonth(d.getMonth() - 1);
    return this.datesInMonth(d.getMonth() + 1, d.getFullYear());
  }
  getJsDate(year, month, day) {
    return new Date(year, month - 1, day, 0, 0, 0, 0);
  }
  getSelectedValue(selectedValue, dateRange) {
    if (!selectedValue) {
      return null;
    }
    if (!dateRange) {
      return selectedValue.date;
    } else {
      const {
        beginDate,
        endDate
      } = selectedValue;
      return {
        begin: beginDate,
        end: endDate
      };
    }
  }
  getKeyCodeFromEvent(event) {
    let key = event.key || event.keyCode || event.which;
    if (this.checkKeyName(key, _enums_key_name_enum__WEBPACK_IMPORTED_MODULE_1__.KeyName.enter) || key === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.enter) {
      return _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.enter;
    } else if (this.checkKeyName(key, _enums_key_name_enum__WEBPACK_IMPORTED_MODULE_1__.KeyName.esc) || key === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.esc) {
      return _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.esc;
    } else if (this.checkKeyName(key, _enums_key_name_enum__WEBPACK_IMPORTED_MODULE_1__.KeyName.space) || key === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.space) {
      return _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.space;
    } else if (this.checkKeyName(key, _enums_key_name_enum__WEBPACK_IMPORTED_MODULE_1__.KeyName.leftArrow) || key === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.leftArrow) {
      return _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.leftArrow;
    } else if (this.checkKeyName(key, _enums_key_name_enum__WEBPACK_IMPORTED_MODULE_1__.KeyName.upArrow) || key === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.upArrow) {
      return _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.upArrow;
    } else if (this.checkKeyName(key, _enums_key_name_enum__WEBPACK_IMPORTED_MODULE_1__.KeyName.rightArrow) || key === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.rightArrow) {
      return _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.rightArrow;
    } else if (this.checkKeyName(key, _enums_key_name_enum__WEBPACK_IMPORTED_MODULE_1__.KeyName.downArrow) || key === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.downArrow) {
      return _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.downArrow;
    } else if (this.checkKeyName(key, _enums_key_name_enum__WEBPACK_IMPORTED_MODULE_1__.KeyName.tab) || key === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.tab) {
      return _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.tab;
    } else if (this.checkKeyName(key, _enums_key_name_enum__WEBPACK_IMPORTED_MODULE_1__.KeyName.shift) || key === _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.shift) {
      return _enums_key_code_enum__WEBPACK_IMPORTED_MODULE_0__.KeyCode.shift;
    } else {
      return null;
    }
  }
  checkKeyName(key, keyName) {
    const arr = keyName.split(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.PIPE);
    return arr.indexOf(key) !== -1;
  }
}
UtilService.ɵfac = function UtilService_Factory(t) {
  return new (t || UtilService)();
};
UtilService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: UtilService,
  factory: UtilService.ɵfac
});

/***/ }),

/***/ 3637:
/*!*********************************************************!*\
  !*** ./projects/angular-mydatepicker/src/public-api.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANIMATION_END": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.ANIMATION_END),
/* harmony export */   "ANIMATION_NAMES": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.ANIMATION_NAMES),
/* harmony export */   "ANIMATION_TIMEOUT": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.ANIMATION_TIMEOUT),
/* harmony export */   "ActiveView": () => (/* reexport safe */ _lib_enums_active_view_enum__WEBPACK_IMPORTED_MODULE_18__.ActiveView),
/* harmony export */   "AngularMyDatePickerCalendarDirective": () => (/* reexport safe */ _lib_directives_angular_mydatepicker_calendar_directive__WEBPACK_IMPORTED_MODULE_11__.AngularMyDatePickerCalendarDirective),
/* harmony export */   "AngularMyDatePickerDirective": () => (/* reexport safe */ _lib_angular_mydatepicker_input__WEBPACK_IMPORTED_MODULE_1__.AngularMyDatePickerDirective),
/* harmony export */   "AngularMyDatePickerModule": () => (/* reexport safe */ _lib_angular_mydatepicker_module__WEBPACK_IMPORTED_MODULE_0__.AngularMyDatePickerModule),
/* harmony export */   "BLUR": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.BLUR),
/* harmony export */   "BODY": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.BODY),
/* harmony export */   "CLICK": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.CLICK),
/* harmony export */   "CalAnimation": () => (/* reexport safe */ _lib_enums_cal_animation_enum__WEBPACK_IMPORTED_MODULE_19__.CalAnimation),
/* harmony export */   "CalToggle": () => (/* reexport safe */ _lib_enums_cal_toggle_enum__WEBPACK_IMPORTED_MODULE_12__.CalToggle),
/* harmony export */   "CalendarComponent": () => (/* reexport safe */ _lib_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__.CalendarComponent),
/* harmony export */   "D": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.D),
/* harmony export */   "DATES": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.DATES),
/* harmony export */   "DATE_COL_COUNT": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.DATE_COL_COUNT),
/* harmony export */   "DATE_ROW_COUNT": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.DATE_ROW_COUNT),
/* harmony export */   "DD": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.DD),
/* harmony export */   "DEFAULT_LOCALE": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.DEFAULT_LOCALE),
/* harmony export */   "DEFAULT_MONTH": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.DEFAULT_MONTH),
/* harmony export */   "DISABLED": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.DISABLED),
/* harmony export */   "DOT": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.DOT),
/* harmony export */   "DayViewComponent": () => (/* reexport safe */ _lib_components_day_view_day_view_component__WEBPACK_IMPORTED_MODULE_3__.DayViewComponent),
/* harmony export */   "DefaultConfigService": () => (/* reexport safe */ _lib_services_angular_mydatepicker_config_service__WEBPACK_IMPORTED_MODULE_9__.DefaultConfigService),
/* harmony export */   "DefaultView": () => (/* reexport safe */ _lib_enums_default_view_enum__WEBPACK_IMPORTED_MODULE_17__.DefaultView),
/* harmony export */   "EMPTY_STR": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.EMPTY_STR),
/* harmony export */   "FR": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.FR),
/* harmony export */   "FooterBarComponent": () => (/* reexport safe */ _lib_components_footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_7__.FooterBarComponent),
/* harmony export */   "HeaderAction": () => (/* reexport safe */ _lib_enums_header_action_enum__WEBPACK_IMPORTED_MODULE_20__.HeaderAction),
/* harmony export */   "IN": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.IN),
/* harmony export */   "INNER_HTML": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.INNER_HTML),
/* harmony export */   "KEYUP": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.KEYUP),
/* harmony export */   "KeyCode": () => (/* reexport safe */ _lib_enums_key_code_enum__WEBPACK_IMPORTED_MODULE_13__.KeyCode),
/* harmony export */   "KeyName": () => (/* reexport safe */ _lib_enums_key_name_enum__WEBPACK_IMPORTED_MODULE_14__.KeyName),
/* harmony export */   "LOCALE": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.LOCALE),
/* harmony export */   "LocaleService": () => (/* reexport safe */ _lib_services_angular_mydatepicker_locale_service__WEBPACK_IMPORTED_MODULE_10__.LocaleService),
/* harmony export */   "M": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.M),
/* harmony export */   "MM": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.MM),
/* harmony export */   "MMM": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.MMM),
/* harmony export */   "MO": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.MO),
/* harmony export */   "MONTHS": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.MONTHS),
/* harmony export */   "MONTH_COL_COUNT": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.MONTH_COL_COUNT),
/* harmony export */   "MONTH_ROW_COUNT": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.MONTH_ROW_COUNT),
/* harmony export */   "MY_DP_ANIMATION": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.MY_DP_ANIMATION),
/* harmony export */   "MonthId": () => (/* reexport safe */ _lib_enums_month_id_enum__WEBPACK_IMPORTED_MODULE_15__.MonthId),
/* harmony export */   "MonthViewComponent": () => (/* reexport safe */ _lib_components_month_view_month_view_component__WEBPACK_IMPORTED_MODULE_4__.MonthViewComponent),
/* harmony export */   "ND": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.ND),
/* harmony export */   "NEXT_VIEW_DISABLED": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.NEXT_VIEW_DISABLED),
/* harmony export */   "OBJECT": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.OBJECT),
/* harmony export */   "OPTIONS": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.OPTIONS),
/* harmony export */   "OPTS": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.OPTS),
/* harmony export */   "ORDINAL": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.ORDINAL),
/* harmony export */   "OUT": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.OUT),
/* harmony export */   "PIPE": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.PIPE),
/* harmony export */   "PREVENT_CLOSE_TIMEOUT": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.PREVENT_CLOSE_TIMEOUT),
/* harmony export */   "PREV_VIEW_DISABLED": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.PREV_VIEW_DISABLED),
/* harmony export */   "PX": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.PX),
/* harmony export */   "RD": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.RD),
/* harmony export */   "SA": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.SA),
/* harmony export */   "SELECTED_DATE": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.SELECTED_DATE),
/* harmony export */   "SELECTED_DATE_RANGE": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.SELECTED_DATE_RANGE),
/* harmony export */   "SELECT_MONTH": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.SELECT_MONTH),
/* harmony export */   "SELECT_YEAR": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.SELECT_YEAR),
/* harmony export */   "SPACE_STR": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.SPACE_STR),
/* harmony export */   "ST": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.ST),
/* harmony export */   "STYLE": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.STYLE),
/* harmony export */   "SU": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.SU),
/* harmony export */   "SelectionBarComponent": () => (/* reexport safe */ _lib_components_selection_bar_selection_bar_component__WEBPACK_IMPORTED_MODULE_6__.SelectionBarComponent),
/* harmony export */   "TABINDEX": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.TABINDEX),
/* harmony export */   "TD_SELECTOR": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.TD_SELECTOR),
/* harmony export */   "TH": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.TH),
/* harmony export */   "TU": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.TU),
/* harmony export */   "UNDER_LINE": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.UNDER_LINE),
/* harmony export */   "UtilService": () => (/* reexport safe */ _lib_services_angular_mydatepicker_util_service__WEBPACK_IMPORTED_MODULE_8__.UtilService),
/* harmony export */   "VALUE": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.VALUE),
/* harmony export */   "VISIBLE_MONTH": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.VISIBLE_MONTH),
/* harmony export */   "WE": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.WE),
/* harmony export */   "WEEK_DAYS": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.WEEK_DAYS),
/* harmony export */   "Y": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.Y),
/* harmony export */   "YEARS": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.YEARS),
/* harmony export */   "YEARS_DURATION": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.YEARS_DURATION),
/* harmony export */   "YEAR_COL_COUNT": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.YEAR_COL_COUNT),
/* harmony export */   "YEAR_ROW_COUNT": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.YEAR_ROW_COUNT),
/* harmony export */   "YEAR_SEPARATOR": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.YEAR_SEPARATOR),
/* harmony export */   "YYYY": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.YYYY),
/* harmony export */   "Year": () => (/* reexport safe */ _lib_enums_year_enum__WEBPACK_IMPORTED_MODULE_16__.Year),
/* harmony export */   "YearViewComponent": () => (/* reexport safe */ _lib_components_year_view_year_view_component__WEBPACK_IMPORTED_MODULE_5__.YearViewComponent),
/* harmony export */   "ZERO_STR": () => (/* reexport safe */ _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__.ZERO_STR)
/* harmony export */ });
/* harmony import */ var _lib_angular_mydatepicker_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/angular-mydatepicker.module */ 9962);
/* harmony import */ var _lib_angular_mydatepicker_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/angular-mydatepicker.input */ 3698);
/* harmony import */ var _lib_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/components/calendar/calendar.component */ 700);
/* harmony import */ var _lib_components_day_view_day_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/components/day-view/day-view.component */ 2765);
/* harmony import */ var _lib_components_month_view_month_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/components/month-view/month-view.component */ 9047);
/* harmony import */ var _lib_components_year_view_year_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/components/year-view/year-view.component */ 2504);
/* harmony import */ var _lib_components_selection_bar_selection_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/components/selection-bar/selection-bar.component */ 4071);
/* harmony import */ var _lib_components_footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/components/footer-bar/footer-bar.component */ 8004);
/* harmony import */ var _lib_services_angular_mydatepicker_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/services/angular-mydatepicker.util.service */ 4794);
/* harmony import */ var _lib_services_angular_mydatepicker_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/services/angular-mydatepicker.config.service */ 6147);
/* harmony import */ var _lib_services_angular_mydatepicker_locale_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/services/angular-mydatepicker.locale.service */ 74);
/* harmony import */ var _lib_directives_angular_mydatepicker_calendar_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/directives/angular-mydatepicker-calendar.directive */ 3971);
/* harmony import */ var _lib_enums_cal_toggle_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/enums/cal-toggle.enum */ 9927);
/* harmony import */ var _lib_enums_key_code_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/enums/key-code.enum */ 4970);
/* harmony import */ var _lib_enums_key_name_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/enums/key-name.enum */ 3356);
/* harmony import */ var _lib_enums_month_id_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/enums/month-id.enum */ 3732);
/* harmony import */ var _lib_enums_year_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/enums/year.enum */ 3227);
/* harmony import */ var _lib_enums_default_view_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/enums/default-view.enum */ 3457);
/* harmony import */ var _lib_enums_active_view_enum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/enums/active-view.enum */ 8108);
/* harmony import */ var _lib_enums_cal_animation_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/enums/cal-animation.enum */ 8697);
/* harmony import */ var _lib_enums_header_action_enum__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/enums/header-action.enum */ 8795);
/* harmony import */ var _lib_constants_constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/constants/constants */ 5384);
/*
 * Public API Surface of angular-mydatepicker
 */























/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8428)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map