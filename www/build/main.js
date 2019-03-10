webpackJsonp([0],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PropertyDetailPage = (function () {
    function PropertyDetailPage(actionSheetCtrl, navCtrl, navParams, propertyService, toastCtrl, admob) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.propertyService = propertyService;
        this.toastCtrl = toastCtrl;
        this.admob = admob;
        this.property = this.navParams.data;
        this.showBanner();
    }
    PropertyDetailPage.prototype.showBanner = function () {
        var bannerConfig = {
            autoShow: true,
            id: 'ca-app-pub-1127440969430875/2860746143'
        };
        this.admob.banner.config(bannerConfig);
        this.admob.banner.prepare().then(function () {
            // success
        }).catch(function (e) { return console.log(e); });
    };
    return PropertyDetailPage;
}());
PropertyDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-property-detail',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\property-detail\property-detail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Property</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-card *ngIf="property.id">\n\n        <img src="{{property.picture}}"/>\n\n        <ion-card-content>\n\n            <h2 class="card-title">{{property.title}}</h2>\n\n            <p>{{property.address}}</p>\n\n        </ion-card-content>\n\n        <ion-list>\n\n\n\n            <ion-item>\n\n                <ion-icon item-left name="list-box"></ion-icon>\n\n                <h3>Type</h3>\n\n                <ion-note item-right>{{property.type}}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left name="call"></ion-icon>\n\n                <h3>Contact</h3>\n\n                <ion-note item-right>{{property.contact}}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left name="pricetag"></ion-icon>\n\n                <h3>Asking Price</h3>\n\n                <ion-note item-right>{{property.price}}</ion-note>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        \n\n\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\property-detail\property-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock__["a" /* PropertyService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__["a" /* AdMobFree */]])
], PropertyDetailPage);

//# sourceMappingURL=property-detail.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalvarsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the GlobalvarsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var GlobalvarsProvider = (function () {
    function GlobalvarsProvider(http) {
        this.http = http;
        this.email = 'elton';
    }
    GlobalvarsProvider.prototype.getMyValue = function () {
        return this.email;
    };
    GlobalvarsProvider.prototype.setMyValue = function (value) {
        this.email = value;
    };
    return GlobalvarsProvider;
}());
GlobalvarsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], GlobalvarsProvider);

//# sourceMappingURL=globalvars.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_brokers__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BrokerService = (function () {
    function BrokerService() {
    }
    BrokerService.prototype.findAll = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_brokers__["a" /* default */]);
    };
    BrokerService.prototype.findById = function (id) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_brokers__["a" /* default */][id - 1]);
    };
    return BrokerService;
}());
BrokerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
], BrokerService);

//# sourceMappingURL=broker-service-mock.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 135;

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__property_detail_property_detail__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PropertyListPage = (function () {
    function PropertyListPage(loadingCtrl, navCtrl, service, config, http) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.service = service;
        this.config = config;
        this.http = http;
        this.searchKey = "";
        this.viewMode = "list";
        this.loading = this.loadingCtrl.create({
            content: 'loading stayinns...',
        });
        this.loading.present();
        this.http.get('http://pmt.i-tugue.com/stayinn-backend/api.php?action=get_app_list')
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.properties = res;
            _this.loading.dismissAll();
        }, function (Error) {
            alert("No Internet Connection!");
        });
        this.findAll();
    }
    PropertyListPage.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__property_detail_property_detail__["a" /* PropertyDetailPage */], property);
    };
    PropertyListPage.prototype.onInput = function (event) {
        var _this = this;
        this.service.findByName(this.searchKey)
            .then(function (data) {
            _this.properties = data;
            if (_this.viewMode === "map") {
                _this.showMarkers();
            }
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    PropertyListPage.prototype.onCancel = function (event) {
        this.findAll();
    };
    PropertyListPage.prototype.findAll = function () {
        var _this = this;
        this.service.findAll()
            .then(function (data) { return _this.properties = data; })
            .catch(function (error) { return alert(error); });
    };
    PropertyListPage.prototype.showMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.map("map").setView([17.610569, 121.730092], 12);
            __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; techventures.ph'
            }).addTo(_this.map);
            _this.showMarkers();
            _this.map.locate({ setView: false, maxZoom: 12 });
            _this.map.on('locationfound', function (e) {
                var radius = e.accuracy / 2;
                var popup = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.popup();
                popup
                    .setLatLng(e.latlng)
                    .setContent("You are currently here!")
                    .openOn(_this.map);
                __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.circle(e.latlng, radius).addTo(_this.map);
            });
            function onLocationError(e) {
            }
            _this.map.on('locationerror', onLocationError);
        });
    };
    PropertyListPage.prototype.showMarkers = function () {
        var _this = this;
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.layerGroup([]);
        this.properties.forEach(function (property) {
            if (property.lat, property.long) {
                var LeafIcon = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.Icon.extend({
                    options: {
                        iconSize: [24, 33]
                    }
                });
                var flag = new LeafIcon({ iconUrl: 'assets/leaflet/images/marker-icon.png' });
                if (property.type == 'Hotel') {
                    flag = new LeafIcon({ iconUrl: 'assets/leaflet/images/hotelflag.png' });
                }
                if (property.type == 'Motel') {
                    flag = new LeafIcon({ iconUrl: 'assets/leaflet/images/motelflag.png' });
                }
                if (property.type == 'Apartment') {
                    flag = new LeafIcon({ iconUrl: 'assets/leaflet/images/apartmentflag.png' });
                }
                if (property.type == 'Transient') {
                    flag = new LeafIcon({ iconUrl: 'assets/leaflet/images/boardflag.png' });
                }
                if (property.type == 'Boarding/Bed Spacer') {
                    flag = new LeafIcon({ iconUrl: 'assets/leaflet/images/bedflag.png' });
                }
                if (property.type == 'Dormitory') {
                    flag = new LeafIcon({ iconUrl: 'assets/leaflet/images/dormflag.png' });
                }
                var marker = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.marker([property.lat, property.long], { icon: flag }).on('click', function (event) { return _this.openPropertyDetail(event.target.data); });
                marker.data = property;
                _this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    };
    return PropertyListPage;
}());
PropertyListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-property-list',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\property-list\property-list.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-searchbar [(ngModel)]="searchKey" (ionInput)="onInput($event)"\n\n                       (ionCancel)="onCancel($event)"></ion-searchbar>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n      <ion-select placeholder="-select type-" [(ngModel)]="searchKey" (ionChange)="onInput($event)"\n\n                       (cancel)="onCancel($event)" style="width:50%;float:left;"> \n\n        <ion-option value="Apartment">Apartment</ion-option>\n\n        <ion-option value="Boarding/Bed Spacer">Boarding/Bed Spacer</ion-option>\n\n        <ion-option value="Dormitory">Dormitory</ion-option>\n\n        <ion-option value="Hotel">Hotel</ion-option>\n\n        <ion-option value="Motel">Motel</ion-option>\n\n        <ion-option value="Transient">Transient</ion-option>\n\n      </ion-select>\n\n    \n\n    <ion-list *ngIf="viewMode===\'list\'">\n\n\n\n        <ion-item-sliding *ngFor="let property of properties">\n\n            <button ion-item (click)="openPropertyDetail(property)">\n\n                <ion-thumbnail item-left>\n\n                    <img src="{{property.thumbnail}}"/>\n\n                </ion-thumbnail>\n\n                <h2>{{property.title}}</h2>\n\n                <p>{{property.address}}</p>\n\n            </button>\n\n        </ion-item-sliding>\n\n\n\n    </ion-list>\n\n    <div *ngIf="viewMode===\'map\'" style="width:100%;height:90%;" id="map"></div>\n\n</ion-content>\n\n\n\n<ion-footer padding>\n\n    <ion-segment [(ngModel)]="viewMode">\n\n       \n\n        <ion-segment-button value="list">\n\n            <ion-icon name="list"></ion-icon>\n\n        </ion-segment-button>\n\n         <ion-segment-button value="map" (ionSelect)="showMap()">\n\n            <ion-icon name="map"></ion-icon>\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\property-list\property-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock__["a" /* PropertyService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
], PropertyListPage);

//# sourceMappingURL=property-list.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WelcomePage = (function () {
    function WelcomePage() {
    }
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\welcome\welcome.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Home</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-bounce>\n\n    <ion-slides>\n\n\n\n        <ion-slide style="background-image: url(\'assets/img/slide_properties.jpg\')">\n\n            <p>Your Stay Inns is just a few taps away! Select Stay Inns in the menu to start your search.</p>\n\n        </ion-slide>\n\n\n\n        <ion-slide style="background-image: url(\'assets/img/slide_brokers.jpg\')">\n\n            <p>TechventuresPH making IT easy.</p>\n\n        </ion-slide>\n\n\n\n    </ion-slides>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\welcome\welcome.html"*/
    })
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\about\about.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>About</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <div class="about-header">\n\n        <img src="assets/img/logo.png">\n\n    </div>\n\n\n\n    <div padding class="about-info">\n\n\n\n        <h4>TechVenturesph</h4>\n\n\n\n        <p>\n\n           An I.T. Solutions Company based in the Philippines. Providing Web Development, Mobile App Development, Network Setup and Trainings & Seminars. Tell me more about <a href="https://www.facebook.com/techventuresph/?ref=br_rs" target="_blank">TechVenturesph</a>\n\n        </p>\n\n        <h4>Hackthenorth.ph</h4>\n\n\n\n        <p>\n\n          The largest ICT and Hacker Conference in Northern Philippines.Tell me more about <a href="http://hackthenorth.ph/landing" target="_blank">Hackthenorth.ph</a>\n\n        </p>\n\n        <h4>The developer</h4>\n\n        \n\n        <p>\n\n          <b>Elton John Emmanuel C. Bagne</b><br>\n\n          Chat me for help in the app :) <a href="https://www.facebook.com/coaxfiber" target="_blank">FB Profile</a>\n\n        </p>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountPage = (function () {
    function AccountPage(navCtrl, navParams, facebook) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.facebook = facebook;
        this.fblogin();
    }
    AccountPage.prototype.fblogin = function () {
        var _this = this;
        this.facebook.login(['email', 'public_profile']).then(function (response) {
            _this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(function (profile) {
                _this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] };
            });
        });
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\account\account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Account</ion-title>\n    </ion-navbar>\n</ion-header>\n\n \n<ion-content padding>\n \n  <ion-card *ngIf="userData">\n    <ion-card-header>{{ userData.username }}</ion-card-header>\n    <ion-card-content>\n      <p>Email: {{ userData.email }}</p>\n    </ion-card-content>\n    <img [src]="userData.picture" />\n  </ion-card>\n \n</ion-content>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\account\account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddstayinnPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_leaflet__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_globalvars_globalvars__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(111);
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
 * Generated class for the AddstayinnPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddstayinnPage = (function () {
    function AddstayinnPage(alertCtrl, facebook, fb, navCtrl, globalvars, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.facebook = facebook;
        this.navCtrl = navCtrl;
        this.globalvars = globalvars;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.lastImage = null;
        this.long = '';
        this.lat = '';
        this.username = '';
        this.buttonDisabled = true;
        this.form = fb.group({
            name: fb.group({
                title: '',
                address: '',
                contact: '',
                price: '',
                type: '',
            }),
        });
        this.username = this.globalvars.getMyValue();
        this.showMap();
        this.fblogin();
        this.presentConfirm();
    }
    AddstayinnPage.prototype.fblogin = function () {
        var _this = this;
        this.facebook.login(['email', 'public_profile']).then(function (response) {
            _this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(function (profile) {
                _this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] };
            });
        });
    };
    AddstayinnPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Fb Login',
            message: 'Stay inn Locator requires you to login to your fb account to add an stay inn location.',
            buttons: [
                {
                    text: 'Close App',
                    role: 'cancel',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    AddstayinnPage.prototype.testform = function () {
        if (this.form.value.name.title == '' || this.form.value.name.address == '' || this.form.value.name.contact == '' || this.form.value.name.price == '' || this.form.value.name.type == '' || this.lastImage == null || this.long == '' || this.lat == '') {
            alert("Fill all the Fields on the form.");
        }
        else {
            this.uploadImage();
        }
    };
    AddstayinnPage.prototype.showMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map2 = __WEBPACK_IMPORTED_MODULE_7_leaflet___default.a.map("map2").setView([17.610569, 121.730092], 12);
            __WEBPACK_IMPORTED_MODULE_7_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; techventures.ph'
            }).addTo(_this.map2);
            var popup = __WEBPACK_IMPORTED_MODULE_7_leaflet___default.a.popup();
            _this.map2.on('click', function (e) {
                popup
                    .setLatLng(e.latlng)
                    .setContent("<b>Selected Location</b><br>Coordinates: <br>lat: " + e.latlng.lat.toString() + "<br>lng: " + e.latlng.lng.toString())
                    .openOn(_this.map2);
                _this.long = e.latlng.lng;
                _this.lat = e.latlng.lat;
                _this.buttonDisabled = false;
                //console.log(this.form.value.name.title);
            });
        });
    };
    AddstayinnPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    AddstayinnPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    AddstayinnPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    AddstayinnPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    AddstayinnPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    AddstayinnPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    AddstayinnPage.prototype.uploadImage = function () {
        var _this = this;
        // Destination URL
        var url = "http://pmt.i-tugue.com/stayinn-backend/upload.php?title=" + this.form.value.name.title + "&address=" + this.form.value.name.address + "&contact=" + this.form.value.name.contact + "&price=" + this.form.value.name.price + "&type=" + this.form.value.name.type + "&long=" + this.long + "&lat=" + this.lat + "&email=" + this.userData.email + "&name=" + this.userData.username;
        this.form.value.name.title = null;
        this.form.value.name.address = null;
        this.form.value.name.contact = null;
        this.form.value.name.price = null;
        this.form.value.name.type = null;
        this.long = null;
        this.lat = null;
        // File for Upload
        var targetPath = this.pathForImage(this.lastImage);
        // File name only
        var filename = this.lastImage;
        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'fileName': filename }
        };
        var fileTransfer = this.transfer.create();
        this.loading = this.loadingCtrl.create({
            content: 'Adding your Stay Inn...',
        });
        this.loading.present();
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            _this.loading.dismissAll();
            _this.presentToast('location succesfully Added. Wait for the Admin to approve the Stay inn. Maximum of 24 hours.');
            _this.form.reset();
        }, function (err) {
            _this.loading.dismissAll();
            _this.presentToast('Error while uploading file.');
        });
        this.lastImage = null;
    };
    return AddstayinnPage;
}());
AddstayinnPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-addstayinn',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\addstayinn\addstayinn.html"*/'<!--\n  Generated template for the AddstayinnPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button> \n    <ion-title>Add Stay Inns</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-label>&nbsp;Select your stay inn location</ion-label>\n\n<div #map2  id="map2" style="width:100%;height:400px !important;"></div>\n <form [formGroup]="form">\n  \n <ion-toolbar color="primary">\n    <ion-buttons>\n      <button ion-button icon-left (click)="presentActionSheet()">\n        <ion-icon name="camera"></ion-icon>Select Image\n      </button>\n      <img src="{{pathForImage(lastImage)}}" style="width: 100%" [hidden]="lastImage === null">\n\n    </ion-buttons>\n  </ion-toolbar>\n\n      <div formGroupName="name">\n      <ion-item>\n      <ion-label  stacked>Title:</ion-label>\n      <ion-input  formControlName="title" placeholder="Aling Nena\'s Boarding House"></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-label  stacked>Address:</ion-label>\n      <ion-textarea formControlName="address" placeholder="p sherman 42 wallaby way sydney"></ion-textarea>\n      </ion-item>\n      <ion-item>\n      <ion-label  stacked>Contact:</ion-label>\n      <ion-input  formControlName="contact" placeholder="09XXXXXXXXX"></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-label  stacked>Price:</ion-label>\n      <ion-input  formControlName="price" placeholder="P1000 - P3000"></ion-input>\n      </ion-item>\n      <ion-item>\n    <ion-label   stacked>Type</ion-label>\n    <ion-select formControlName="type" >\n      <ion-option value="Apartment">Apartment</ion-option>\n      <ion-option value="Boarding/Bed Spacer">Boarding/Bed Spacer</ion-option>\n      <ion-option value="Dormitory">Dormitory</ion-option>\n      <ion-option value="Hotel">Hotel</ion-option>\n      <ion-option value="Motel">Motel</ion-option>\n      <ion-option value="Transient">Transient</ion-option>\n    </ion-select>\n  </ion-item>\n      </div>\n\n  <ion-buttons>\n       <button ion-button block (click)="testform()">\n        <ion-icon name="ion-plus-circled"></ion-icon>Add Stay Inn\n      </button>\n    </ion-buttons>\n    \n    </form>\n<!--<form (ngSubmit)="logForm()">\n      <ion-item>\n        <ion-label>Title</ion-label>\n        <ion-input type="text" [(ngModel)]="todo.title" formControlName="title"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Address</ion-label>\n        <ion-textarea [(ngModel)]="todo.address" formControlName="address"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>Contact</ion-label>\n        <ion-input type="text" [(ngModel)]="todo.contact" formControlName="contact"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Price</ion-label>\n        <ion-input type="text" [(ngModel)]="todo.price" formControlName="price"></ion-input>\n      </ion-item>\n  <ion-item>\n        <ion-label>\n          Type\n        </ion-label>\n\n        <ion-select formControlName="option" [(ngModel)]="todo.type">\n          <ion-option value="1">Option 1</ion-option>\n          <ion-option value="2">Option 2</ion-option>\n          <ion-option value="3">Option 3</ion-option>\n          <ion-option value="4">Option 4</ion-option>\n        </ion-select>\n      </ion-item>\n        <button ion-button type="submit" block>Add Todo</button>\n    </form>\n    </div>-->\n    \n  \n</ion-content>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\addstayinn\addstayinn.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
], AddstayinnPage);

//# sourceMappingURL=addstayinn.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_broker_service_mock__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrokerDetailPage = (function () {
    function BrokerDetailPage(navCtrl, navParams, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.broker = this.navParams.data;
        service.findById(this.broker.id).then(function (broker) { return _this.broker = broker; });
    }
    return BrokerDetailPage;
}());
BrokerDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-broker-detail',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\broker-detail\broker-detail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Broker</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="broker">\n\n\n\n    <ion-card>\n\n\n\n        <ion-card-content>\n\n            <img src="{{broker.picture}}"/>\n\n            <h2>{{broker.name}}</h2>\n\n            <h3>{{broker.title}}</h3>\n\n        </ion-card-content>\n\n\n\n        <ion-list>\n\n            <a href="tel:{{broker.Phone__c}}" ion-item>\n\n                <ion-icon name="call" item-left></ion-icon>\n\n                <p>Call Office</p>\n\n                <h2>{{broker.phone}}</h2>\n\n            </a>\n\n            <a href="tel:{{broker.phone}}" ion-item>\n\n                <ion-icon name="call" item-left></ion-icon>\n\n                <p>Call Mobile</p>\n\n                <h2>{{broker.mobilePhone}}</h2>\n\n            </a>\n\n            <a href="tel:{{broker.phone}}" ion-item>\n\n                <ion-icon name="text" item-left></ion-icon>\n\n                <p>Text</p>\n\n                <h2>{{broker.mobilePhone}}</h2>\n\n            </a>\n\n            <a href="mailto:{{broker.email}}" ion-item>\n\n                <ion-icon name="mail" item-left></ion-icon>\n\n                <p>Email</p>\n\n                <h2>{{broker.email}}</h2>\n\n            </a>\n\n        </ion-list>\n\n\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\broker-detail\broker-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_broker_service_mock__["a" /* BrokerService */]])
], BrokerDetailPage);

//# sourceMappingURL=broker-detail.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(291);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_property_list_property_list__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_property_detail_property_detail__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_broker_list_broker_list__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_broker_detail_broker_detail__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_favorite_list_favorite_list__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_account__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_addstayinn_addstayinn__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_property_service_mock__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_broker_service_mock__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_facebook__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_globalvars_globalvars__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_transfer__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_path__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_admob_free__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_property_list_property_list__["a" /* PropertyListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_property_detail_property_detail__["a" /* PropertyDetailPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_favorite_list_favorite_list__["a" /* FavoriteListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_broker_list_broker_list__["a" /* BrokerListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_broker_detail_broker_detail__["a" /* BrokerDetailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_addstayinn_addstayinn__["a" /* AddstayinnPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_18_ngx_facebook__["a" /* FacebookModule */].forRoot(),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_addstayinn_addstayinn__["a" /* AddstayinnPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_property_list_property_list__["a" /* PropertyListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_property_detail_property_detail__["a" /* PropertyDetailPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_favorite_list_favorite_list__["a" /* FavoriteListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_broker_list_broker_list__["a" /* BrokerListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_broker_detail_broker_detail__["a" /* BrokerDetailPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_14__providers_property_service_mock__["a" /* PropertyService */],
            __WEBPACK_IMPORTED_MODULE_15__providers_broker_service_mock__["a" /* BrokerService */], __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__["a" /* Facebook */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_20__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_property_list_property_list__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_account_account__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_addstayinn_addstayinn__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_globalvars_globalvars__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_admob_free__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {BrokerListPage} from '../pages/broker-list/broker-list';
//import {FavoriteListPage} from '../pages/favorite-list/favorite-list';




//import { AlertController } from 'ionic-angular';


var MyApp = (function () {
    function MyApp(admob, platform, globalvars, statusBar, splashScreen /*,private alertCtrl: AlertController*/) {
        this.admob = admob;
        this.platform = platform;
        this.globalvars = globalvars;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen; /*,private alertCtrl: AlertController*/
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        this.launchInterstitial();
        //this.presentConfirm();
        this.appMenuItems = [
            { title: 'Stay Inns', component: __WEBPACK_IMPORTED_MODULE_4__pages_property_list_property_list__["a" /* PropertyListPage */], icon: 'home' },
            { title: 'Add Stay Inns', component: __WEBPACK_IMPORTED_MODULE_8__pages_addstayinn_addstayinn__["a" /* AddstayinnPage */], icon: 'md-add-circle' },
        ];
        this.accountMenuItems = [
            { title: 'Account', component: __WEBPACK_IMPORTED_MODULE_7__pages_account_account__["a" /* AccountPage */], icon: 'ios-contact' },
        ];
        this.helpMenuItems = [
            { title: 'Featured', component: __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */], icon: 'bookmark' },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */], icon: 'information-circle' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.launchInterstitial = function () {
        var interstitialConfig = {
            autoShow: true,
            id: 'ca-app-pub-1127440969430875/8807385000'
            //id: Your Ad Unit ID goes here
        };
        this.admob.interstitial.config(interstitialConfig);
        this.admob.interstitial.prepare().then(function () {
            // success
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <ion-content>\n\n\n\n    <img src="assets/img/logo.png" class="menu-logo"/>\n\n    \n\n    <ion-list>\n\n      <ion-list-header>\n\n        Stay Inn Tuguegarao\n\n      </ion-list-header>\n\n      <button menuClose ion-item *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n\n        {{menuItem.title}}\n\n      </button>\n\n    \n\n      <button menuClose ion-item *ngFor="let menuItem of helpMenuItems" (click)="openPage(menuItem)">\n\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n\n        {{menuItem.title}}\n\n      </button>\n\n    \n\n      <button menuClose ion-item *ngFor="let menuItem of accountMenuItems" (click)="openPage(menuItem)">\n\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n\n        {{menuItem.title}}\n\n      </button>\n\n    </ion-list>\n\n\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_9__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] /*,private alertCtrl: AlertController*/])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_broker_service_mock__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__broker_detail_broker_detail__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrokerListPage = (function () {
    function BrokerListPage(navCtrl, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        service.findAll().then(function (data) { return _this.brokers = data; });
    }
    BrokerListPage.prototype.openBrokerDetail = function (broker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__broker_detail_broker_detail__["a" /* BrokerDetailPage */], broker);
    };
    return BrokerListPage;
}());
BrokerListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-broker-list',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\broker-list\broker-list.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Brokers</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-list>\n\n\n\n        <button ion-item *ngFor="let broker of brokers" (click)="openBrokerDetail(broker)">\n\n            <ion-avatar item-left>\n\n                <img src="{{broker.picture}}"/>\n\n            </ion-avatar>\n\n            <h2>{{broker.name}}</h2>\n\n            <p>{{broker.title}}</p>\n\n        </button>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\broker-list\broker-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_broker_service_mock__["a" /* BrokerService */]])
], BrokerListPage);

//# sourceMappingURL=broker-list.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var brokers = [
    {
        id: 1,
        name: "Caroline Kingsley",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "caroline@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
    },
    {
        id: 2,
        name: "Michael Jones",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "michael@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
    },
    {
        id: 3,
        name: "Jonathan Bradley",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "jonathan@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg"
    },
    {
        id: 4,
        name: "Jennifer Wu",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "jen@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg"
    },
    {
        id: 5,
        name: "Olivia Green",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "olivia@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg"
    },
    {
        id: 6,
        name: "Miriam Aupont",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "miriam@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/miriam_aupont.jpg"
    },
    {
        id: 7,
        name: "Michelle Lambert",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "michelle@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michelle_lambert.jpg"
    },
    {
        id: 8,
        name: "Victor Ochoa",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "victor@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/victor_ochoa.jpg"
    }
];
/* harmony default export */ __webpack_exports__["a"] = (brokers);
//# sourceMappingURL=mock-brokers.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__property_detail_property_detail__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoriteListPage = (function () {
    function FavoriteListPage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.getFavorites();
    }
    FavoriteListPage.prototype.itemTapped = function (favorite) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__property_detail_property_detail__["a" /* PropertyDetailPage */], favorite.property);
    };
    FavoriteListPage.prototype.deleteItem = function (favorite) {
        var _this = this;
        this.service.unfavorite(favorite)
            .then(function () {
            _this.getFavorites();
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    FavoriteListPage.prototype.getFavorites = function () {
        var _this = this;
        this.service.getFavorites()
            .then(function (data) { return _this.favorites = data; });
    };
    return FavoriteListPage;
}());
FavoriteListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-favorite-list',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\favorite-list\favorite-list.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Favorites</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item-sliding *ngFor="let favorite of favorites">\n\n            <button ion-item (click)="itemTapped(favorite)">\n\n                <ion-thumbnail item-left>\n\n                    <img src="{{favorite.property.thumbnail}}"/>\n\n                </ion-thumbnail>\n\n                <h2>{{favorite.property.title}}</h2>\n\n                <p>{{favorite.property.city}}, {{favorite.property.state}} ∙ {{favorite.property.price}}</p>\n\n            </button>\n\n            <ion-item-options>\n\n                <button danger (click)="deleteItem(favorite)">Delete</button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\favorite-list\favorite-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock__["a" /* PropertyService */]])
], FavoriteListPage);

//# sourceMappingURL=favorite-list.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PropertyService = (function () {
    function PropertyService(http) {
        var _this = this;
        this.http = http;
        this.favoriteCounter = 0;
        this.favorites = [];
        this.http.get('http://pmt.i-tugue.com/stayinn-backend/api.php?action=get_app_list')
            .map(function (response) { return response.json(); })
            .subscribe(function (res) { return _this.properties = res; });
    }
    PropertyService.prototype.findAll = function () {
        return Promise.resolve(this.properties);
    };
    PropertyService.prototype.findById = function (id) {
        return Promise.resolve(this.properties[id - 1]);
    };
    PropertyService.prototype.findByName = function (searchKey) {
        var key = searchKey.toUpperCase();
        return Promise.resolve(this.properties.filter(function (property) {
            return (property.title + ' ' + property.address + ' ' + property.type + ' ' + property.description).toUpperCase().indexOf(key) > -1;
        }));
    };
    PropertyService.prototype.getFavorites = function () {
        return Promise.resolve(this.favorites);
    };
    PropertyService.prototype.favorite = function (property) {
        this.favoriteCounter = this.favoriteCounter + 1;
        this.favorites.push({ id: this.favoriteCounter, property: property });
        return Promise.resolve();
    };
    PropertyService.prototype.unfavorite = function (favorite) {
        var index = this.favorites.indexOf(favorite);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    };
    PropertyService.prototype.getproperties = function () {
        return Promise.resolve(this.properties);
    };
    return PropertyService;
}());
PropertyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], PropertyService);

//# sourceMappingURL=property-service-mock.js.map

/***/ })

},[273]);
//# sourceMappingURL=main.js.map