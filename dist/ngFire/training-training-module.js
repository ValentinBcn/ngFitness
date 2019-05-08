(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["training-training-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/map.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/map.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/map */ "./node_modules/rxjs-compat/_esm5/operator/map.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.map = _operator_map__WEBPACK_IMPORTED_MODULE_1__["map"];
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/map.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/map.js ***!
  \********************************************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function map(project, thisArg) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(project, thisArg)(this);
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./src/app/training/current-training/current-training.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/training/current-training/current-training.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".current-training{\r\n    padding: 30px;\r\n}"

/***/ }),

/***/ "./src/app/training/current-training/current-training.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/training/current-training/current-training.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"current-training\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <mat-progress-spinner mode=\"determinate\" [value]=\"progress\" color=\"accent\"></mat-progress-spinner>\n    <h1> {{progress}}% </h1>\n    <p> You can do it ! </p>\n    <button mat-raised-button color=\"warn\" (click)=\"onStop()\">Stop</button>\n</section>"

/***/ }),

/***/ "./src/app/training/current-training/current-training.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/training/current-training/current-training.component.ts ***!
  \*************************************************************************/
/*! exports provided: CurrentTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentTrainingComponent", function() { return CurrentTrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _stop_training_stop_training_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stop-training/stop-training.component */ "./src/app/training/current-training/stop-training/stop-training.component.ts");
/* harmony import */ var _training_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../training.service */ "./src/app/training/training.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CurrentTrainingComponent = /** @class */ (function () {
    function CurrentTrainingComponent(dialog, trainingService) {
        this.dialog = dialog;
        this.trainingService = trainingService;
        this.progress = 0;
    }
    CurrentTrainingComponent.prototype.ngOnInit = function () {
        this.startOrResumeTimer();
    };
    CurrentTrainingComponent.prototype.startOrResumeTimer = function () {
        var _this = this;
        var step = this.trainingService.getRunningExercice().duration / 100 * 1000;
        this.timer = setInterval(function () {
            _this.progress = _this.progress + 1;
            if (_this.progress >= 100) {
                _this.trainingService.completeExercice();
                clearInterval(_this.timer);
            }
        }, step);
    };
    CurrentTrainingComponent.prototype.onStop = function () {
        var _this = this;
        clearInterval(this.timer);
        var dialogRef = this.dialog.open(_stop_training_stop_training_component__WEBPACK_IMPORTED_MODULE_2__["StopTrainingComponent"], {
            data: {
                progress: this.progress
            }
        });
        ;
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.trainingService.cancelExercice(_this.progress);
            }
            else {
                _this.startOrResumeTimer();
            }
        });
    };
    CurrentTrainingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-current-training',
            template: __webpack_require__(/*! ./current-training.component.html */ "./src/app/training/current-training/current-training.component.html"),
            styles: [__webpack_require__(/*! ./current-training.component.css */ "./src/app/training/current-training/current-training.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _training_service__WEBPACK_IMPORTED_MODULE_3__["TrainingService"]])
    ], CurrentTrainingComponent);
    return CurrentTrainingComponent;
}());



/***/ }),

/***/ "./src/app/training/current-training/stop-training/stop-training.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/training/current-training/stop-training/stop-training.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/training/current-training/stop-training/stop-training.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/training/current-training/stop-training/stop-training.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Are you sure ?</h1>\n<mat-dialog-content>\n  <p> You've made {{passedData.progress}}%</p>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"true\">I'm done</button>\n  <button mat-button [mat-dialog-close]=\"false\">Keep Going</button>\n\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/training/current-training/stop-training/stop-training.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/training/current-training/stop-training/stop-training.component.ts ***!
  \************************************************************************************/
/*! exports provided: StopTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopTrainingComponent", function() { return StopTrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var StopTrainingComponent = /** @class */ (function () {
    function StopTrainingComponent(passedData) {
        this.passedData = passedData;
    }
    StopTrainingComponent.prototype.ngOnInit = function () {
    };
    StopTrainingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stop-training',
            template: __webpack_require__(/*! ./stop-training.component.html */ "./src/app/training/current-training/stop-training/stop-training.component.html"),
            styles: [__webpack_require__(/*! ./stop-training.component.css */ "./src/app/training/current-training/stop-training/stop-training.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], StopTrainingComponent);
    return StopTrainingComponent;
}());



/***/ }),

/***/ "./src/app/training/new-training/new-training.component.css":
/*!******************************************************************!*\
  !*** ./src/app/training/new-training/new-training.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-training{\r\n    padding:30px;\r\n\r\n}\r\n\r\nmat-card{\r\n    padding: 2rem 1rem;\r\n}\r\n\r\nspan.title{\r\n    font-family: Segoe UI;\r\n    text-align: center;\r\n    font-weight: 100;\r\n    font-size: 19px;\r\n    text-transform: uppercase;\r\n}"

/***/ }),

/***/ "./src/app/training/new-training/new-training.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/training/new-training/new-training.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"new-training\" fxLayout fxLayoutAlign=\"center\">\n  <form (ngSubmit)=\"onStartTraining(f)\" #f=\"ngForm\">\n    <mat-card fxFlex.xs=\"100%\" fxFlex=\"400px\">\n      <mat-card-title fxLayoutAlign=\"center\"> \n        <span class=\"title\">\n            LET'S DO THIS !\n\n        </span>\n      </mat-card-title>\n      <mat-card-content fxLayoutAlign=\"center\">\n        <mat-form-field *ngIf=\"!isLoading && myExercices\">\n          <mat-select placeholder=\"Your exercice\" ngModel name=\"exercice\" required>\n            <mat-option *ngFor=\"let singleEx of myExercices\" [value]=\"singleEx.id\">\n              {{singleEx.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </mat-card-content>\n      <mat-card-actions fxLayoutAlign=\"center\" *ngIf=\"!isLoading\">\n        <button *ngIf=\"myExercices\" type=\"submit\" mat-button [disabled]=\"f.invalild\">Start</button>\n        <button *ngIf=\"!myExercices\" type=\"button\" mat-button (click)=\"fetchExercices()\">Pick an exercice</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</section>"

/***/ }),

/***/ "./src/app/training/new-training/new-training.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/training/new-training/new-training.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTrainingComponent", function() { return NewTrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _training_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../training.service */ "./src/app/training/training.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _shared_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/ui.service */ "./src/app/shared/ui.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewTrainingComponent = /** @class */ (function () {
    function NewTrainingComponent(trainingService, db, uiService) {
        this.trainingService = trainingService;
        this.db = db;
        this.uiService = uiService;
        this.isLoading = false;
    }
    NewTrainingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadSpinner = this.uiService.loadingStateChange.subscribe(function (res) { return _this.isLoading = res; });
        this.exercicesSub = this.trainingService.exercicesChanged.subscribe(function (exercices) {
            _this.myExercices = exercices;
        });
    };
    NewTrainingComponent.prototype.onStartTraining = function (form) {
        this.trainingService.startExercise(form.value.exercice);
    };
    NewTrainingComponent.prototype.fetchExercices = function () {
        this.trainingService.fetchAvailableExercices();
    };
    NewTrainingComponent.prototype.ngOnDestroy = function () {
        if (this.exercicesSub) {
            this.exercicesSub.unsubscribe();
        }
        if (this.loadSpinner) {
            this.loadSpinner.unsubscribe();
        }
    };
    NewTrainingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-training',
            template: __webpack_require__(/*! ./new-training.component.html */ "./src/app/training/new-training/new-training.component.html"),
            styles: [__webpack_require__(/*! ./new-training.component.css */ "./src/app/training/new-training/new-training.component.css")]
        }),
        __metadata("design:paramtypes", [_training_service__WEBPACK_IMPORTED_MODULE_1__["TrainingService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _shared_ui_service__WEBPACK_IMPORTED_MODULE_4__["UIService"]])
    ], NewTrainingComponent);
    return NewTrainingComponent;
}());



/***/ }),

/***/ "./src/app/training/past-trainings/past-trainings.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/training/past-trainings/past-trainings.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{margin: 0};"

/***/ }),

/***/ "./src/app/training/past-trainings/past-trainings.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/training/past-trainings/past-trainings.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign =\"center center\">\n  <mat-form-field fxFlex=\"35%\">\n    <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-8 offset-md-2\">\n\n\n<mat-table [dataSource]=\"dataSource\" matSort >\n  <ng-container matColumnDef=\"date\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{ element.date.toDate() | date}}</mat-cell>\n  </ng-container>\n  \n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell *matHeaderCellDef>Exercice</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{ element.name}}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"calories\" >\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Calories</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{ element.calories | number}}</mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"duration\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Time</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{ element.duration | number}}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"state\">\n    <mat-header-cell *matHeaderCellDef>State</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{ element.state }}</mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n</mat-table>\n<mat-paginator [length]=\"100\"\n              [pageSize]=\"3\"\n              [pageSizeOptions]=\"[5, 10, 20]\">\n</mat-paginator>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/training/past-trainings/past-trainings.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/training/past-trainings/past-trainings.component.ts ***!
  \*********************************************************************/
/*! exports provided: PastTrainingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastTrainingsComponent", function() { return PastTrainingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _training_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../training.service */ "./src/app/training/training.service.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PastTrainingsComponent = /** @class */ (function () {
    function PastTrainingsComponent(trainingService) {
        this.trainingService = trainingService;
        this.displayedColumns = ['date', 'name', 'calories', 'duration', 'state'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    PastTrainingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exercicesSub = this.trainingService.finishedExercicesChanged.subscribe(function (exercices) {
            _this.dataSource.data = exercices;
        });
        this.trainingService.fetchCompletedOrCancelledExercice();
    };
    PastTrainingsComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    PastTrainingsComponent.prototype.doFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    PastTrainingsComponent.prototype.ngOnDestroy = function () {
        if (this.exercicesSub) {
            this.exercicesSub.unsubscribe();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], PastTrainingsComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], PastTrainingsComponent.prototype, "paginator", void 0);
    PastTrainingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-past-trainings',
            template: __webpack_require__(/*! ./past-trainings.component.html */ "./src/app/training/past-trainings/past-trainings.component.html"),
            styles: [__webpack_require__(/*! ./past-trainings.component.css */ "./src/app/training/past-trainings/past-trainings.component.css")]
        }),
        __metadata("design:paramtypes", [_training_service__WEBPACK_IMPORTED_MODULE_2__["TrainingService"]])
    ], PastTrainingsComponent);
    return PastTrainingsComponent;
}());



/***/ }),

/***/ "./src/app/training/training-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/training/training-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TrainingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingRoutingModule", function() { return TrainingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _training_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./training.component */ "./src/app/training/training.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _training_component__WEBPACK_IMPORTED_MODULE_2__["TrainingComponent"] }
];
var TrainingRoutingModule = /** @class */ (function () {
    function TrainingRoutingModule() {
    }
    TrainingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TrainingRoutingModule);
    return TrainingRoutingModule;
}());



/***/ }),

/***/ "./src/app/training/training.component.css":
/*!*************************************************!*\
  !*** ./src/app/training/training.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/training/training.component.html":
/*!**************************************************!*\
  !*** ./src/app/training/training.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group *ngIf=\"!onGoingTraining\">\n  <mat-tab  label=\"New Exercices\"> \n    <app-new-training></app-new-training>\n  </mat-tab>\n  <mat-tab label=\"Past Exercices\">\n    <app-past-trainings></app-past-trainings>\n  </mat-tab>\n</mat-tab-group>\n<app-current-training *ngIf=\"onGoingTraining\"></app-current-training>"

/***/ }),

/***/ "./src/app/training/training.component.ts":
/*!************************************************!*\
  !*** ./src/app/training/training.component.ts ***!
  \************************************************/
/*! exports provided: TrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingComponent", function() { return TrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _training_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training.service */ "./src/app/training/training.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrainingComponent = /** @class */ (function () {
    function TrainingComponent(trainingService) {
        this.trainingService = trainingService;
        this.onGoingTraining = false;
    }
    TrainingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exerciceSub = this.trainingService.exerciceChanged.subscribe(function (exercice) {
            if (exercice) {
                _this.onGoingTraining = true;
            }
            else {
                _this.onGoingTraining = false;
            }
        });
    };
    TrainingComponent.prototype.ngOnDestroy = function () {
        if (this.exerciceSub) {
            this.exerciceSub.unsubscribe();
        }
    };
    TrainingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-training',
            template: __webpack_require__(/*! ./training.component.html */ "./src/app/training/training.component.html"),
            styles: [__webpack_require__(/*! ./training.component.css */ "./src/app/training/training.component.css")]
        }),
        __metadata("design:paramtypes", [_training_service__WEBPACK_IMPORTED_MODULE_1__["TrainingService"]])
    ], TrainingComponent);
    return TrainingComponent;
}());



/***/ }),

/***/ "./src/app/training/training.module.ts":
/*!*********************************************!*\
  !*** ./src/app/training/training.module.ts ***!
  \*********************************************/
/*! exports provided: TrainingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingModule", function() { return TrainingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _current_training_current_training_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-training/current-training.component */ "./src/app/training/current-training/current-training.component.ts");
/* harmony import */ var _new_training_new_training_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-training/new-training.component */ "./src/app/training/new-training/new-training.component.ts");
/* harmony import */ var _past_trainings_past_trainings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./past-trainings/past-trainings.component */ "./src/app/training/past-trainings/past-trainings.component.ts");
/* harmony import */ var _training_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./training.component */ "./src/app/training/training.component.ts");
/* harmony import */ var _current_training_stop_training_stop_training_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./current-training/stop-training/stop-training.component */ "./src/app/training/current-training/stop-training/stop-training.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _training_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./training-routing.module */ "./src/app/training/training-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TrainingModule = /** @class */ (function () {
    function TrainingModule() {
    }
    TrainingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_current_training_current_training_component__WEBPACK_IMPORTED_MODULE_1__["CurrentTrainingComponent"],
                _new_training_new_training_component__WEBPACK_IMPORTED_MODULE_2__["NewTrainingComponent"],
                _past_trainings_past_trainings_component__WEBPACK_IMPORTED_MODULE_3__["PastTrainingsComponent"],
                _training_component__WEBPACK_IMPORTED_MODULE_4__["TrainingComponent"],
                _current_training_stop_training_stop_training_component__WEBPACK_IMPORTED_MODULE_5__["StopTrainingComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _training_routing_module__WEBPACK_IMPORTED_MODULE_7__["TrainingRoutingModule"]
            ],
            exports: [],
            entryComponents: [_current_training_stop_training_stop_training_component__WEBPACK_IMPORTED_MODULE_5__["StopTrainingComponent"]]
        })
    ], TrainingModule);
    return TrainingModule;
}());



/***/ })

}]);
//# sourceMappingURL=training-training-module.js.map