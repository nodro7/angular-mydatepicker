(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  padding: 50px;\n  text-align: center;\n  background: rgb(17,12,111);\n  background: linear-gradient(90deg, rgba(17,12,111,1) 0%, rgba(13,13,126,1) 36%, rgba(14,166,196,1) 100%);\n  color: #fff;\n  font-size: 24px;\n}\n\n.content {\n  padding: 20px;\n  height: 600px;\n}\n\n.flexContainer {\n  display: flex;\n}\n\n.flexElement {\n  width: 33%;\n}\n\n.infoText {\n  text-align: center;\n}\n\n@media screen and (max-width: 1200px) {\n  .flexContainer {\n    display: block;\n  }\n\n  .flexElement {\n    width: 100%;\n    margin-bottom: 30px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQix3R0FBd0c7RUFDeEcsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgcGFkZGluZzogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2IoMTcsMTIsMTExKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE3LDEyLDExMSwxKSAwJSwgcmdiYSgxMywxMywxMjYsMSkgMzYlLCByZ2JhKDE0LDE2NiwxOTYsMSkgMTAwJSk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbn1cblxuLmZsZXhDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmxleEVsZW1lbnQge1xuICB3aWR0aDogMzMlO1xufVxuXG4uaW5mb1RleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuZmxleENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuZmxleEVsZW1lbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h1>angular-mydatepicker</h1>\n  <p>Angular datepicker and date range picker</p>\n</div>\n\n<div class=\"content\">\n  <p class=\"infoText\">Highly configurable Angular date and date range picker. These examples use <a href=\"https://getbootstrap.com/docs/4.3/getting-started/introduction/\">bootstrap</a> and <a href=\"https://fontawesome.com/\">font-awesome</a>, but you can use datepicker also without them.</p>\n  <div class=\"flexContainer\">\n    <div class=\"flexElement\">\n      <app-dp-bootstrap></app-dp-bootstrap>\n    </div>\n    <div class=\"flexElement\">\n      <app-drp-bootstrap></app-drp-bootstrap>\n    </div>\n\n    <div class=\"flexElement\">\n      <app-no-bootstrap></app-no-bootstrap>\n    </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-mydatepicker-ghpages';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dp_bootstrap_dp_bootstrap_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dp-bootstrap/dp-bootstrap.component */ "./src/app/dp-bootstrap/dp-bootstrap.component.ts");
/* harmony import */ var _drp_bootstrap_drp_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drp-bootstrap/drp-bootstrap.component */ "./src/app/drp-bootstrap/drp-bootstrap.component.ts");
/* harmony import */ var _no_bootstrap_no_bootstrap_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./no-bootstrap/no-bootstrap.component */ "./src/app/no-bootstrap/no-bootstrap.component.ts");
/* harmony import */ var angular_mydatepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-mydatepicker */ "./node_modules/angular-mydatepicker/fesm5/angular-mydatepicker.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _dp_bootstrap_dp_bootstrap_component__WEBPACK_IMPORTED_MODULE_5__["DpBootstrapComponent"],
                _drp_bootstrap_drp_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__["DrpBootstrapComponent"],
                _no_bootstrap_no_bootstrap_component__WEBPACK_IMPORTED_MODULE_7__["NoBootstrapComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angular_mydatepicker__WEBPACK_IMPORTED_MODULE_8__["AngularMyDatePickerModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dp-bootstrap/dp-bootstrap.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dp-bootstrap/dp-bootstrap.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dpTitle {\n  text-align: center;\n}\n\n.datePickerContainer {\n  margin: 0 auto;\n  width: 280px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHAtYm9vdHN0cmFwL2RwLWJvb3RzdHJhcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2RwLWJvb3RzdHJhcC9kcC1ib290c3RyYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcFRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGF0ZVBpY2tlckNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMjgwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dp-bootstrap/dp-bootstrap.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dp-bootstrap/dp-bootstrap.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h5 class=\"dpTitle\">Datepicker</h5>\n  <div class=\"datePickerContainer\">\n\n    <div class=\"input-group\">\n      <input class=\"form-control\" placeholder=\"Select a date\" angular-mydatepicker name=\"mydate\"\n             [(ngModel)]=\"model\" [options]=\"myOptions\" #dp=\"angular-mydatepicker\" (dateChanged)=\"onDateChanged($event)\"/>\n      <div class=\"input-group-append\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dp.clearDate()\">\n          <i class=\"fa fa-close\"></i>\n        </button>\n      </div>\n      <div class=\"input-group-append\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dp.toggleCalendar()\">\n          <i class=\"fa fa-calendar-o\"></i>\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dp-bootstrap/dp-bootstrap.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dp-bootstrap/dp-bootstrap.component.ts ***!
  \********************************************************/
/*! exports provided: DpBootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DpBootstrapComponent", function() { return DpBootstrapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DpBootstrapComponent = /** @class */ (function () {
    function DpBootstrapComponent() {
        this.myOptions = {
            dateRange: false,
            dateFormat: 'dd.mm.yyyy'
        };
        this.model = null;
    }
    // optional date changed callback
    DpBootstrapComponent.prototype.onDateChanged = function (event) {
        console.log('onDateChanged(): ', event);
    };
    DpBootstrapComponent.prototype.ngOnInit = function () {
    };
    DpBootstrapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dp-bootstrap',
            template: __webpack_require__(/*! ./dp-bootstrap.component.html */ "./src/app/dp-bootstrap/dp-bootstrap.component.html"),
            styles: [__webpack_require__(/*! ./dp-bootstrap.component.css */ "./src/app/dp-bootstrap/dp-bootstrap.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DpBootstrapComponent);
    return DpBootstrapComponent;
}());



/***/ }),

/***/ "./src/app/drp-bootstrap/drp-bootstrap.component.css":
/*!***********************************************************!*\
  !*** ./src/app/drp-bootstrap/drp-bootstrap.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dpTitle {\n  text-align: center;\n}\n\n.datePickerContainer {\n  margin: 0 auto;\n  width: 280px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJwLWJvb3RzdHJhcC9kcnAtYm9vdHN0cmFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZHJwLWJvb3RzdHJhcC9kcnAtYm9vdHN0cmFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHBUaXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRhdGVQaWNrZXJDb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDI4MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/drp-bootstrap/drp-bootstrap.component.html":
/*!************************************************************!*\
  !*** ./src/app/drp-bootstrap/drp-bootstrap.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h5 class=\"dpTitle\">Date range picker</h5>\n  <div class=\"datePickerContainer\">\n\n    <div class=\"input-group\">\n      <input class=\"form-control\" placeholder=\"Select a date range\" angular-mydatepicker name=\"mydate\"\n             [(ngModel)]=\"model\" [options]=\"myOptions\" #dp=\"angular-mydatepicker\" (dateChanged)=\"onDateChanged($event)\"/>\n      <div class=\"input-group-append\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dp.clearDate()\">\n          <i class=\"fa fa-close\"></i>\n        </button>\n      </div>\n      <div class=\"input-group-append\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dp.toggleCalendar()\">\n          <i class=\"fa fa-calendar-o\"></i>\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/drp-bootstrap/drp-bootstrap.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/drp-bootstrap/drp-bootstrap.component.ts ***!
  \**********************************************************/
/*! exports provided: DrpBootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrpBootstrapComponent", function() { return DrpBootstrapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DrpBootstrapComponent = /** @class */ (function () {
    function DrpBootstrapComponent() {
        this.myOptions = {
            dateRange: true,
            dateFormat: 'dd.mm.yyyy'
        };
        this.model = null;
    }
    // optional date changed callback
    DrpBootstrapComponent.prototype.onDateChanged = function (event) {
        console.log('onDateChanged(): ', event);
    };
    DrpBootstrapComponent.prototype.ngOnInit = function () {
    };
    DrpBootstrapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drp-bootstrap',
            template: __webpack_require__(/*! ./drp-bootstrap.component.html */ "./src/app/drp-bootstrap/drp-bootstrap.component.html"),
            styles: [__webpack_require__(/*! ./drp-bootstrap.component.css */ "./src/app/drp-bootstrap/drp-bootstrap.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DrpBootstrapComponent);
    return DrpBootstrapComponent;
}());



/***/ }),

/***/ "./src/app/no-bootstrap/no-bootstrap.component.css":
/*!*********************************************************!*\
  !*** ./src/app/no-bootstrap/no-bootstrap.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dpTitle {\n  text-align: center;\n}\n\n.datePickerContainer {\n  margin: 0 auto;\n  width: 280px;\n}\n\n.inputGroup {\n  display: flex;\n  position: relative;\n}\n\n.closeIconContainer {\n  margin-left: -26px;\n}\n\n.closeIcon {\n  line-height: 36px;\n  cursor: pointer;\n}\n\n.closeIcon:hover {\n  color: #ccc;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm8tYm9vdHN0cmFwL25vLWJvb3RzdHJhcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL25vLWJvb3RzdHJhcC9uby1ib290c3RyYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcFRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGF0ZVBpY2tlckNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMjgwcHg7XG59XG5cbi5pbnB1dEdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2xvc2VJY29uQ29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IC0yNnB4O1xufVxuXG4uY2xvc2VJY29uIHtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNsb3NlSWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjY2NjO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/no-bootstrap/no-bootstrap.component.html":
/*!**********************************************************!*\
  !*** ./src/app/no-bootstrap/no-bootstrap.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h5 class=\"dpTitle\">Datepicker</h5>\n\n  <div class=\"datePickerContainer\">\n    <div class=\"inputGroup\">\n      <input class=\"form-control\" placeholder=\"Click to select a date\" angular-mydatepicker name=\"mydate\" (click)=\"dp.toggleCalendar()\"\n             [(ngModel)]=\"model\" [options]=\"myOptions\" #dp=\"angular-mydatepicker\" (dateChanged)=\"onDateChanged($event)\"/>\n\n      <div class=\"closeIconContainer\"><i *ngIf=\"model\" class=\"fa fa-close closeIcon\" (click)=\"dp.clearDate()\"></i></div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/no-bootstrap/no-bootstrap.component.ts":
/*!********************************************************!*\
  !*** ./src/app/no-bootstrap/no-bootstrap.component.ts ***!
  \********************************************************/
/*! exports provided: NoBootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoBootstrapComponent", function() { return NoBootstrapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoBootstrapComponent = /** @class */ (function () {
    function NoBootstrapComponent() {
        this.myOptions = {
            dateRange: false,
            dateFormat: 'dd.mm.yyyy'
        };
        this.model = null;
    }
    // optional date changed callback
    NoBootstrapComponent.prototype.onDateChanged = function (event) {
        console.log('onDateChanged(): ', event);
    };
    NoBootstrapComponent.prototype.ngOnInit = function () {
    };
    NoBootstrapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-no-bootstrap',
            template: __webpack_require__(/*! ./no-bootstrap.component.html */ "./src/app/no-bootstrap/no-bootstrap.component.html"),
            styles: [__webpack_require__(/*! ./no-bootstrap.component.css */ "./src/app/no-bootstrap/no-bootstrap.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NoBootstrapComponent);
    return NoBootstrapComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kekeh/work/angular-mydatepicker-ghpages/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map