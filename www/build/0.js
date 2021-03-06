webpackJsonp([0],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(loadingCtrl, app, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // Gradient logic from https://codepen.io/quasimondo/pen/lDdrF
        // NOTE: I'm not using this logic anymore, but if you want to use somehow, somewhere,
        // A programmatically way to make a nice rainbow effect, there you go.
        // NOTE: It probably won't work because it will crash your phone as this method is heavy \o/
        this.colors = new Array([62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]);
        this.step = 0;
        // color table indices for:
        // [current color left,next color left,current color right,next color right]
        this.colorIndices = [0, 1, 2, 3];
        // transition speed
        this.gradientSpeed = 0.00005;
        this.gradient = '';
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            duration: 500
        });
        loading.onDidDismiss(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        });
        loading.present();
    };
    LoginPage.prototype.goToSignup = function () {
        // this.navCtrl.push(SignupPage);
    };
    LoginPage.prototype.updateGradient = function () {
        var _this = this;
        var c00 = this.colors[this.colorIndices[0]];
        var c01 = this.colors[this.colorIndices[1]];
        var c10 = this.colors[this.colorIndices[2]];
        var c11 = this.colors[this.colorIndices[3]];
        var istep = 1 - this.step;
        var r1 = Math.round(istep * c00[0] + this.step * c01[0]);
        var g1 = Math.round(istep * c00[1] + this.step * c01[1]);
        var b1 = Math.round(istep * c00[2] + this.step * c01[2]);
        var color1 = 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')';
        var r2 = Math.round(istep * c10[0] + this.step * c11[0]);
        var g2 = Math.round(istep * c10[1] + this.step * c11[1]);
        var b2 = Math.round(istep * c10[2] + this.step * c11[2]);
        var color2 = 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')';
        this.gradient = "-webkit-gradient(linear, left top, right bottom, from(" + color1 + "), to(" + color2 + "))";
        this.step += this.gradientSpeed;
        if (this.step >= 1) {
            this.step %= 1;
            this.colorIndices[0] = this.colorIndices[1];
            this.colorIndices[2] = this.colorIndices[3];
            // pick two new target color indices
            // do not pick the same as the current one
            this.colorIndices[1] =
                (this.colorIndices[1] + Math.floor(1 + Math.random() * (this.colors.length - 1)))
                    % this.colors.length;
            this.colorIndices[3] =
                (this.colorIndices[3] + Math.floor(1 + Math.random() * (this.colors.length - 1)))
                    % this.colors.length;
        }
        setInterval(function () { _this.updateGradient(); }, 40);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\login\login.html"*/'<ion-content padding class="transparent-header">\n  <ion-header>\n    <ion-navbar>\n    </ion-navbar>\n  </ion-header>\n  <img class="logo" src="assets/img/logo/logo-instagram.png" />\n  <div padding>\n    <ion-item>\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" placeholder="Password"></ion-input>\n    </ion-item>\n    <button ion-button block outline (click)="login()" color="light" class="login-button">Login</button>\n  </div>\n  <div class="strike">\n    <span>OR</span>\n  </div>\n  <button ion-button block clear (click)="login()" color="light" class="login-button"><ion-icon name="logo-facebook"></ion-icon> Login with Facebook</button>\n</ion-content>\n<ion-footer>\n  <ion-toolbar class="footer">\n    <div (click)="goToSignup()">\n      <span>Don\'t have an account? <strong>Sign up here</strong>.</span>\n    </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=0.js.map