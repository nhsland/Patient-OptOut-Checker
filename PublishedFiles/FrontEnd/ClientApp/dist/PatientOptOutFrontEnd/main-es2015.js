(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n<footer class=\"attribution\">Created by Daniel Maddock - Part of the University Hospitals Plymouth NHS Trust Software Development Team</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/disclaimer/disclaimer.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/disclaimer/disclaimer.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Terms of Use</h2>\r\n\r\n<mat-dialog-content [innerHTML]=\"initialDisclaimer\"></mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n    <button mat-raised-button [mat-dialog-close]=\"true\" color=\"primary\">I Agree</button>\r\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n\r\n<ngx-spinner size=\"large\" color=\"#2995cf\">\r\n    <p style=\"font-size: 40px; color: white\">Checking...</p>\r\n</ngx-spinner>\r\n\r\n<div *ngIf=\"hasAccess == true\">\r\n    <header style=\"text-align: left; font-size: 110%;  height: 25px; margin-top: 0px; background-color: black;\">\r\n        <div style=\"color:white; margin-left: 20px;\">Welcome {{ username }}</div>\r\n    </header>\r\n\r\n    <header style=\"text-align:center; font-size: 180%; color:black; background-color: white; height: 85px;\">\r\n        <img src=\"assets/Logo.jpg\" alt=\"NHSLogo\" style=\"float: right; width: 214px; height: 103px; margin-top: -40px; margin-right : 20px;\">\r\n        <h2 style=\"margin-top: 50px; margin-left: 230px;\">Opt Out Checker</h2>\r\n    </header>\r\n\r\n    <div>\r\n        <p style=\"text-align: center; font-size: 180%\">NHS or Hospital Numbers:</p>\r\n        <p style=\"font-size: 135%; color:darkgrey; text-align: center\">Please enter one number per line, any special characters will be removed</p>\r\n    </div>\r\n\r\n    <div style =\"text-align: center;\">\r\n        <p *ngIf=\"btnShowEmptyMessage\">You Must Enter Text to Check the Opt Out Status </p>\r\n        <p *ngIf=\"btnShowCopyMessage\" style=\"font-size: 135%\">Copied to Clipboard</p>\r\n        <p *ngIf=\"resultsReplacedMessage\" style=\"font-size: 115%\">{{ resultsReplaced }} Result(s) have been removed due to formatting - Please enter only Patient and Hosptial Numbers</p>\r\n    </div>\r\n\r\n    <div class=\"textboxDiv\">\r\n        <div class=\"textAreaDiv\">\r\n            <button type=\"button\" class=\"copyButton\" (click)=\"btnCopyClicked(userInput)\"><i class=\"fa fa-copy\"></i>\r\n                <span class=\"copyButtonText\">Copy Results to Clipboard</span>\r\n            </button>\r\n            <textarea id=\"textArea\" [(ngModel)]=\"textInput\" style=\"height: 300px; width: 300px; border: 2px solid black; font-size: 150%\" #userInput></textarea>\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"text-align: center;\">\r\n        <br/>\r\n        <button type=\"button\" class=\"checkButton\" (click)=\"btnCheckClicked(textInput)\">Check</button>\r\n    </div>\r\n\r\n    <footer [innerHTML]=\"trustDisclaimer\"></footer>\r\n</div>\r\n\r\n<div *ngIf=\"hasAccess == false\" class=\"noAccess\">\r\n  <mat-icon>lock</mat-icon>\r\n  <br />\r\n  <p style=\"font-weight: 700; font-size: 180%;\">You do not have the required access for the Opt Out Checker</p>\r\n  <br />\r\n  <br />\r\n  <div [innerHTML]=\"noAccess\"></div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".attribution {\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tright: 0;\r\n\tpadding: 10px;\r\n\tfont-size: small;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFFBQVE7Q0FDUixhQUFhO0NBQ2IsZ0JBQWdCO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXR0cmlidXRpb24ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3R0b206IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRmb250LXNpemU6IHNtYWxsO1xyXG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'PatientOptOutFrontEnd';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./disclaimer/disclaimer.component */ "./src/app/disclaimer/disclaimer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _patient_opt_out_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patient-opt-out.service */ "./src/app/patient-opt-out.service.ts");
/* harmony import */ var _environment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./environment.service */ "./src/app/environment.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm2015/ngx-clipboard.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
















const appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
            _disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_5__["DisclaimerComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_14__["ClipboardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        ],
        entryComponents: [
            _disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_5__["DisclaimerComponent"]
        ],
        providers: [
            _patient_opt_out_service__WEBPACK_IMPORTED_MODULE_7__["PatientOptOutService"],
            _environment_service__WEBPACK_IMPORTED_MODULE_8__["EnvironmentService"]
        ],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/disclaimer/disclaimer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/disclaimer/disclaimer.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2{\r\n    text-align: center;\r\n}\r\n\r\n.mat-dialog-actions{\r\n    justify-content: flex-end;\r\n}\r\n\r\nmat-dialog-content{\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzY2xhaW1lci9kaXNjbGFpbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZGlzY2xhaW1lci9kaXNjbGFpbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctYWN0aW9uc3tcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctY29udGVudHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/disclaimer/disclaimer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/disclaimer/disclaimer.component.ts ***!
  \****************************************************/
/*! exports provided: DisclaimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisclaimerComponent", function() { return DisclaimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _environment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment.service */ "./src/app/environment.service.ts");




let DisclaimerComponent = class DisclaimerComponent {
    constructor(disclaimerRef, environmentService) {
        this.disclaimerRef = disclaimerRef;
        this.environmentService = environmentService;
    }
    ngOnInit() {
        this.initialDisclaimer = this.environmentService.initialDisclaimer;
    }
};
DisclaimerComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _environment_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"] }
];
DisclaimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-disclaimer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./disclaimer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/disclaimer/disclaimer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./disclaimer.component.css */ "./src/app/disclaimer/disclaimer.component.css")).default]
    })
], DisclaimerComponent);



/***/ }),

/***/ "./src/app/environment.service.ts":
/*!****************************************!*\
  !*** ./src/app/environment.service.ts ***!
  \****************************************/
/*! exports provided: EnvironmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentService", function() { return EnvironmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let EnvironmentService = class EnvironmentService {
    constructor(_http) {
        this._http = _http;
    }
    setAllSettings() {
        return this._http.get('./../assets/settings.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((settings) => {
            this.apiUrl = settings.apiUrl;
            this.trustDisclaimer = settings.trustDisclaimer;
            this.initialDisclaimer = settings.initialDisclaimer;
            this.noAccess = settings.noAccess;
        }));
    }
};
EnvironmentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EnvironmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EnvironmentService);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.textboxDiv{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.textAreaDiv{\r\n    position: relative;\r\n    width: 300px;\r\n    height: 300px;\r\n}\r\n.textAreaDiv textarea{\r\n    width: 100%;\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n    resize: vertical;\r\n}\r\n.textAreaDiv button{ \r\n    position: absolute;\r\n    top: 0;\r\n    right: 0; \r\n}\r\n.checkButton{\r\n    font-size: 180%; \r\n    padding: 14px 40px; \r\n    border-radius: 8px; \r\n    color: white;\r\n    background-color: #3f51b5; \r\n    transition-duration: 0.4s;\r\n}\r\n.copyButton{\r\n    font-size: 110%; \r\n    padding: 2px 3px; \r\n    border-radius: 2px;  \r\n    margin-top: 2px;\r\n    margin-right: 2px; \r\n    transition-duration: 0.4s;   \r\n}\r\n.copyButton .copyButtonText{\r\n    visibility: hidden;\r\n    padding: 5px 0;\r\n    color: black;\r\n    font-size: 90%;\r\n    text-align: center;\r\n    position: absolute;\r\n    margin-top: -2px;\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n.copyButton:hover .copyButtonText{\r\n    visibility: visible;\r\n    opacity: 1;\r\n    width: 200px;\r\n}\r\n.checkButton:hover{\r\n    background-color: royalblue;\r\n    color: black;\r\n}\r\n.checkButton:active{\r\n    background-color:royalblue;\r\n    color: black;\r\n    transform: translateY(6px);\r\n}\r\n.copyButton:hover{\r\n    background-color:grey;\r\n    color: black;\r\n}\r\n.copyButton:active{\r\n    background-color:grey;\r\n    color: black;\r\n}\r\n.dialog{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    margin-top: 40px;\r\n}\r\n.alignleft{\r\n    float: left;\r\n}\r\n.alignright{\r\n    float: right;\r\n}\r\nfooter {\r\n    text-align: center; \r\n    font-size: 90%;\r\n    display: block;\r\n    -webkit-margin-before: 1em;\r\n            margin-block-start: 1em;\r\n    -webkit-margin-after: 1em;\r\n            margin-block-end: 1em;\r\n    -webkit-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n}\r\n.noAccess{\r\n    text-align: center;\r\n    font-size: 160%;\r\n    margin-top: 50px; \r\n}\r\nmat-icon{\r\n    color: darkred; \r\n    margin-left: -200px; \r\n    font-size: 200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtBQUNaO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCO0lBRXpCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUVqQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsMEJBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLHlCQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsdUJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRleHRib3hEaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnRleHRBcmVhRGl2e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG4udGV4dEFyZWFEaXYgdGV4dGFyZWF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcbi50ZXh0QXJlYURpdiBidXR0b257IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7IFxyXG59XHJcbi5jaGVja0J1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogMTgwJTsgXHJcbiAgICBwYWRkaW5nOiAxNHB4IDQwcHg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4OyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IFxyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxufVxyXG4uY29weUJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogMTEwJTsgXHJcbiAgICBwYWRkaW5nOiAycHggM3B4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDsgIFxyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7IFxyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyBcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7ICAgXHJcbn1cclxuLmNvcHlCdXR0b24gLmNvcHlCdXR0b25UZXh0e1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDkwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xyXG59XHJcblxyXG4uY29weUJ1dHRvbjpob3ZlciAuY29weUJ1dHRvblRleHR7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG4uY2hlY2tCdXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmNoZWNrQnV0dG9uOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cm95YWxibHVlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCk7XHJcbn1cclxuLmNvcHlCdXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZXk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmNvcHlCdXR0b246YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmV5O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5kaWFsb2d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4uYWxpZ25sZWZ0e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmFsaWducmlnaHR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgZm9udC1zaXplOiA5MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxufVxyXG4ubm9BY2Nlc3N7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2MCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4OyBcclxufVxyXG5tYXQtaWNvbntcclxuICAgIGNvbG9yOiBkYXJrcmVkOyBcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjAwcHg7IFxyXG4gICAgZm9udC1zaXplOiAyMDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _patient_opt_out_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../patient-opt-out.service */ "./src/app/patient-opt-out.service.ts");
/* harmony import */ var _environment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment.service */ "./src/app/environment.service.ts");
/* harmony import */ var _disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../disclaimer/disclaimer.component */ "./src/app/disclaimer/disclaimer.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");







let HomeComponent = class HomeComponent {
    constructor(patientOptOutService, environmentService, disclaimer, spinner) {
        this.patientOptOutService = patientOptOutService;
        this.environmentService = environmentService;
        this.disclaimer = disclaimer;
        this.spinner = spinner;
        this.btnShowEmptyMessage = false;
        this.btnShowCopyMessage = false;
        this.resultsReplacedMessage = false;
    }
    ngOnInit() {
        this.environmentService.setAllSettings().subscribe(() => {
            this.getAccess();
            this.trustDisclaimer = this.environmentService.trustDisclaimer;
            this.noAccess = this.environmentService.noAccess;
        });
    }
    getAccess() {
        this.patientOptOutService.getAuthorization().subscribe((response) => {
            this.hasAccess = response.access;
            this.username = response.username;
            if (this.hasAccess) {
                this.showDisclaimer();
            }
        });
    }
    showDisclaimer() {
        this.disclaimer.open(_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_4__["DisclaimerComponent"], {
            width: '500px',
            height: '325px'
        });
    }
    btnCopyClicked(textInput) {
        textInput.select();
        document.execCommand('copy');
        textInput.setSelectionRange(0, 0);
        //Show message
        this.btnShowCopyMessage = true;
        setTimeout(() => {
            this.btnShowCopyMessage = false;
        }, 2000); //Hides message after 2 seconds
    }
    btnCheckClicked(text) {
        this.spinner.show();
        this.resultsReplaced = 0;
        this.btnShowCopyMessage = false;
        this.resultsReplacedMessage = false;
        let modelArray = [];
        if (text) {
            text = text.trim();
            this.btnShowEmptyMessage = false;
            let lines = text.split(/[\n]+/);
            let regFindNHSLong = (/\d{3}-\d{3}-\d{4}/g);
            let regFindNHSShort = (/\d{10}/g);
            let regFindHospShort = (/[A-Za-z]?[0-9]{6}/g);
            let regFindHospTwoLetters = (/[A-Za-z]{2}[0-9]{6}/g);
            let regReplace = (/[^\dA-Z-]/g);
            lines.forEach(line => {
                line = line.replace('-- OPT OUT', '');
                line = line.replace(regReplace, '');
                if (line.match(regFindNHSLong)) {
                    modelArray.push(line);
                }
                else if (line.match(regFindNHSShort)) {
                    modelArray.push(line);
                }
                else if (line.match(regFindHospShort)) {
                    modelArray.push(line);
                }
                else if (line.match(regFindHospTwoLetters)) {
                    modelArray.push(line);
                }
                else {
                    line = line.replace(regReplace, '');
                    this.resultsReplaced = this.resultsReplaced + 1;
                    this.resultsReplacedMessage = true;
                }
            });
        }
        else {
            this.btnShowEmptyMessage = true;
            this.spinner.hide();
        }
        this.patientOptOutService.checkPatientNumbers(modelArray).subscribe((response) => {
            this.textInput = '';
            function compare(a) {
                if (a.optOut) {
                    return -1;
                }
                else if (!a.optOut) {
                    return 1;
                }
                return 0;
            }
            response.sort(compare);
            response.forEach(i => {
                this.textInput += i.number + ' ';
                if (i.optOut == true) {
                    this.textInput += '-- OPT OUT';
                }
                else {
                    this.textInput += '';
                }
                this.textInput += '\n';
            });
            this.spinner.hide();
        }, () => {
            this.spinner.hide();
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _patient_opt_out_service__WEBPACK_IMPORTED_MODULE_2__["PatientOptOutService"] },
    { type: _environment_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/patient-opt-out.service.ts":
/*!********************************************!*\
  !*** ./src/app/patient-opt-out.service.ts ***!
  \********************************************/
/*! exports provided: PatientOptOutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientOptOutService", function() { return PatientOptOutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environment.service */ "./src/app/environment.service.ts");




let PatientOptOutService = class PatientOptOutService {
    constructor(http, environmentService) {
        this.http = http;
        this.environmentService = environmentService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    getAuthorization() {
        return this.http.get(this.environmentService.apiUrl + '/api/startup', { headers: this.headers, withCredentials: true });
    }
    checkPatientNumbers(numbers) {
        return this.http.post(this.environmentService.apiUrl + '/api/PatientOptOut', numbers, { headers: this.headers, withCredentials: true });
    }
};
PatientOptOutService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _environment_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"] }
];
PatientOptOutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PatientOptOutService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\PatientOptOut\Patient-OptOut-Checker\PatientOptOutFrontEnd\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map