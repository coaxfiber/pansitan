webpackJsonp([9],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditProfile = (function () {
    function EditProfile(navCtrl, navParams, viewCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        // You can get this data from your API. This is a dumb data for being an example.
        this.user_data = {
            profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
            name_surname: 'Can Delibas',
            username: 'candelibas',
            website: 'https://github.com/candelibas',
            description: 'Software developer, open-source lover & Invoker spammer',
            email: 'candelibas00@gmail.com',
            phone: '',
            gender: 'male'
        };
    }
    EditProfile.prototype.updateProfile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            duration: 200
        });
        loader.present().then(function () { return _this.navCtrl.pop(); }); // Get back to profile page. You should do that after you got data from API
    };
    EditProfile.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return EditProfile;
}());
EditProfile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-edit-profile',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\edit-profile\edit-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Edit Profile</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="updateProfile()">\n        <ion-icon name="checkmark" color="primary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <!-- Profile picture -->\n  <div text-center>\n    <img [src]="user_data.profile_img" class="edit-avatar" alt="">\n    <p class="change-text">Change Photo</p>\n  </div>\n\n  <!-- Form -->\n  <ion-item>\n    <ion-label> \n      <ion-icon name="clipboard" color="gray"></ion-icon>\n    </ion-label>\n    <ion-input type="text" [value]="user_data.name_surname"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label> \n      <ion-icon name="person" color="gray"></ion-icon>\n    </ion-label>\n    <ion-input type="text" [value]="user_data.username"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label> \n      <ion-icon name="globe" color="gray"></ion-icon>\n    </ion-label>\n    <ion-input type="text" [value]="user_data.website"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>\n      <ion-icon name="quote" color="gray"></ion-icon>\n    </ion-label>\n    <ion-textarea placeholder="" [value]="user_data.description"></ion-textarea>\n  </ion-item>\n\n  <!-- Private information form -->\n  <div margin-top padding-top>\n    <h4 no-margin no-padding class="info-text">Private Information</h4>\n    <hr class="custom-hr" color="gray">\n  </div>\n  \n  <ion-item>\n    <ion-label> \n      <ion-icon name="mail" color="gray"></ion-icon>\n    </ion-label>\n    <ion-input type="text" [value]="user_data.email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label> \n      <ion-icon name="phone-portrait" color="gray"></ion-icon>\n    </ion-label>\n    <ion-input type="text" [value]="user_data.phone" placeholder="Add your phone"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>\n      <ion-icon name="transgender" color="gray"></ion-icon>\n    </ion-label>\n    <ion-select class="custom-select" [(ngModel)]="user_data.gender">\n      <ion-option value="male">Male</ion-option>\n      <ion-option value="female">Female</ion-option>\n      <ion-option value="none">Not Specified</ion-option>\n    </ion-select>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\edit-profile\edit-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */]])
], EditProfile);

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageDetail = (function () {
    function MessageDetail(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.send_like_icon = false;
        this.likeBtnVisible = false;
        this.messages = []; // You can get all the chat details from your API
        this.sender = this.navParams.get('sender');
        this.profile_img = this.navParams.get('profile_img');
        this.last_message = this.navParams.get('last_message');
    }
    MessageDetail.prototype.sendLike = function () {
        if (this.send_like_icon === false) {
            this.send_like_icon = true;
        }
        // Allow heart effect
        this.likeBtnVisible = !this.likeBtnVisible;
    };
    return MessageDetail;
}());
MessageDetail = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-message-detail',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\message-detail\message-detail.html"*/'<ion-header>\n\n  <ion-navbar color="white">\n    <ion-title>{{ sender }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-note><p text-center no-padding no-margin>April 1, 7:29 PM</p></ion-note>\n    \n    <!-- Sender -->\n    <ion-item no-lines no-margin no-padding text-wrap>\n      <ion-avatar item-left>\n        <img [src]="profile_img">\n      </ion-avatar>\n      <div class="chatbox">LOL. Still using Ionic instead of native techs? It\'s 2017 mate.</div>\n    </ion-item>\n\n    <!-- Me -->\n    <ion-item no-lines no-margin no-padding text-wrap>\n      <ion-avatar item-right>\n        <img src="https://avatars1.githubusercontent.com/u/918975?v=3&s=460">\n      </ion-avatar>\n      <div margin-left class="chatbox chatbox-right">You are doomed bruh! ;)</div>\n    </ion-item>\n\n    \n    <ion-item no-lines no-margin no-padding text-wrap>\n      <ion-avatar item-left>\n        <img [src]="profile_img">\n      </ion-avatar>\n      <div class="chatbox">{{ last_message }}</div>\n    </ion-item>\n\n    <!-- Heart icon -->\n    <ion-item no-lines no-margin no-padding text-wrap *ngIf="send_like_icon" item-right>\n      <ion-avatar item-right>\n        <img src="https://avatars1.githubusercontent.com/u/918975?v=3&s=460">\n      </ion-avatar>\n      <div text-right [ngClass]="{\'like-msg-btn\': likeBtnVisible }">\n        <ion-icon name="heart" [ngClass]="{\'like-btn\': likeBtnVisible, \'heart-size\': true }" color="danger"></ion-icon>\n      </div>\n    </ion-item>\n\n</ion-content>\n<!-- Footer -->\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons start left>\n      <button ion-button icon-right color="black">\n        <ion-icon name="images"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-input type="text" value=""></ion-input>\n    <ion-buttons end>\n      <button ion-button icon-right color="black" (click)="sendLike()">\n        <ion-icon name="heart-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\message-detail\message-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], MessageDetail);

//# sourceMappingURL=message-detail.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewMessage = (function () {
    function NewMessage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user_checked = false;
        this.input_visible = false;
        this.friends = [
            {
                id: 1,
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                username: 'candelibas'
            },
            {
                id: 2,
                profile_img: 'https://pbs.twimg.com/profile_images/726955832785571840/8OxhcDxl_400x400.jpg',
                username: 'maxlynch'
            },
            {
                id: 3,
                profile_img: 'http://ionicframework.com/dist/preview-app/www/assets/img/sarah-avatar.png.jpeg',
                username: 'ashleyosama'
            },
            {
                id: 4,
                profile_img: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa_400x400.jpeg',
                username: 'adam_bradley'
            },
            {
                id: 5,
                profile_img: 'https://avatars1.githubusercontent.com/u/1024025?v=3&s=120',
                username: 'linus_torvalds'
            }
        ];
    }
    NewMessage.prototype.checkBox = function (username) {
        console.log('Username: ' + username);
        this.input_visible = true;
    };
    return NewMessage;
}());
NewMessage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-new-message',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\new-message\new-message.html"*/'<ion-header>\n\n  <ion-navbar color="white">\n    <ion-title>New Message</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n\n  <ion-item>\n    <ion-label color="black">To:</ion-label>\n    <ion-input type="text" placeholder="Search"></ion-input>\n  </ion-item>\n\n  <ion-item *ngFor="let f of friends">\n    <ion-label>\n        <img [src]="f.profile_img" class="list-img" alt="">\n        <span class="list-username">{{ f.username }}</span>\n      </ion-label>\n    <ion-checkbox item-right color="primary" (ionChange)="checkBox(f.username)" checked="false"></ion-checkbox>\n  </ion-item>\n</ion-content>\n<!-- Footer -->\n<ion-footer *ngIf="input_visible">\n  <ion-toolbar>\n    <ion-buttons start left>\n      <button ion-button icon-right color="black">\n        <ion-icon name="images"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-input type="text" value=""></ion-input>\n    <ion-buttons end>\n      <button ion-button icon-right color="black">\n        <ion-icon name="heart-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\new-message\new-message.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], NewMessage);

//# sourceMappingURL=new-message.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_post_modal_post__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__options_options__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tagged_profile_tagged_profile__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__saved_profile_saved_profile__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Profile = (function () {
    function Profile(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        // You can get this data from your API. This is a dumb data for being an example.
        this.images = [
            {
                id: 1,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e35/13473123_1544898359150795_654626889_n.jpg'
            },
            {
                id: 2,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e35/12940826_1673029922963013_921771297_n.jpg'
            },
            {
                id: 3,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e15/10852865_738738146215825_1258215298_n.jpg'
            },
            {
                id: 4,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e15/891528_841068522581102_1591061904_n.jpg'
            },
            {
                id: 5,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-frx5-1.cdninstagram.com/t51.2885-15/e35/10809765_1474804169496730_887570428_n.jpg'
            },
            {
                id: 6,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e15/891515_1524153351163603_439436363_n.jpg'
            }
        ];
    }
    // Define segment for everytime when profile page is active
    Profile.prototype.ionViewWillEnter = function () {
        this.profile_segment = 'grid';
    };
    Profile.prototype.goEditProfile = function () {
        // Open it as a modal page
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile__["a" /* EditProfile */]);
        modal.present();
    };
    Profile.prototype.goOptions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__options_options__["a" /* Options */], {});
    };
    Profile.prototype.goTaggedProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tagged_profile_tagged_profile__["a" /* TaggedProfile */]);
    };
    Profile.prototype.goSavedProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__saved_profile_saved_profile__["a" /* SavedProfile */]);
    };
    // Triggers when user pressed a post
    Profile.prototype.pressPhoto = function (user_id, username, profile_img, post_img) {
        this.presentModal(user_id, username, profile_img, post_img);
    };
    // Set post modal
    Profile.prototype.presentModal = function (user_id, username, profile_img, post_img) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_post_modal_post__["a" /* ModalPost */], {
            user_id: user_id,
            username: username,
            profile_img: profile_img,
            post_img: post_img
        }, // This data comes from API!
        { showBackdrop: true, enableBackdropDismiss: true });
        modal.present();
    };
    return Profile;
}());
Profile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\profile\profile.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="white">\n\n    <ion-title>candelibas</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="person-add" class="badge-container">\n\n          <span class="custom-badge">3</span>\n\n        </ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="goOptions()">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-row padding>\n\n    <!-- Avatar -->\n\n    <ion-col col-3>\n\n      <img src="https://avatars1.githubusercontent.com/u/918975?v=3&s=120" class="avatar" alt="">\n\n    </ion-col>\n\n    <!-- Information about user -->\n\n    <ion-col col-3 text-center >\n\n      <h6>21</h6>\n\n      <p no-padding no-margin>posts</p>\n\n    </ion-col>\n\n    <ion-col col-3 text-center>\n\n      <h6>114</h6>\n\n      <p no-paddin no-margin>rated</p>\n\n    </ion-col>\n\n    <ion-col col-3 text-center>\n\n      <h6>119</h6>\n\n      <p no-paddin no-margin>favorites</p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <!-- Edit/follow button -->\n\n  <ion-row no-padding no-margin>\n\n    <ion-col no-padding no-margin col-4></ion-col>\n\n      <ion-col no-padding no-margin text-center col-8>\n\n      <button class="edit-button" (click)="goEditProfile()">Edit your profile</button>\n\n    </ion-col>\n\n    <ion-col col-3></ion-col>\n\n  </ion-row>\n\n\n\n  <!-- Profile info -->\n\n  <div padding>\n\n    <p no-margin no-padding><b>Can Delibas</b></p>\n\n    <p no-padding no-margin class="info">Software developer, open-source lover, invoker spammer & heavy metal guitarist</p>\n\n    <p no-padding no-margin class="info"><a href="#">github.com/candelibas</a></p>\n\n  </div>\n\n\n\n  <!-- Segments -->\n\n  <div>\n\n    <ion-segment [(ngModel)]="profile_segment">\n\n      <ion-segment-button value="grid">\n\n        <ion-icon name="apps"></ion-icon>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="list">\n\n        <ion-icon name="list"></ion-icon>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="tagged" (click)="goTaggedProfile()">\n\n        <ion-icon name="photos"></ion-icon>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="saved" (click)="goSavedProfile()">\n\n        <ion-icon name="bookmark"></ion-icon>\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <!-- Segment content -->\n\n  <div [ngSwitch]="profile_segment">\n\n    <ion-list *ngSwitchCase="\'grid\'">\n\n      <ion-grid>\n\n        <ion-row >\n\n          <ion-col col-4 class="grid_img" *ngFor="let i of images" (press)="pressPhoto(i.id, i.username, i.profile_img, i.post_img)">\n\n            <img [src]="i.post_img" alt="">\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'list\'">\n\n      \n\n\n\n    </ion-list>\n\n  </div>\n\n  \n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
], Profile);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Options; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the Options page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Options = (function () {
    function Options(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Options.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Options');
    };
    return Options;
}());
Options = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-options',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\options\options.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Options</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <h4 no-margin no-padding class="info-text">Invite Friends</h4>\n    <hr class="custom-hr" color="gray">\n    <ion-item><ion-icon name="logo-facebook" color="facebook"></ion-icon> Invite Facebook Friends</ion-item>\n    <ion-item>Invite Friends</ion-item>\n  </div>\n\n  <div padding-top margin-top>\n    <h4 no-margin no-padding class="info-text">Follow People</h4>\n    <hr class="custom-hr" color="gray">\n    <ion-item><ion-icon name="logo-facebook" color="facebook"></ion-icon> Facebook Friends</ion-item>\n    <ion-item><ion-icon name="contacts" color="primary"></ion-icon> Contacts</ion-item>\n  </div>\n\n  <div padding-top margin-top>\n    <h4 no-margin no-padding class="info-text">Account</h4>\n    <hr class="custom-hr" color="gray">\n    <ion-item>Story Settings</ion-item>\n    <ion-item>Edit Profile</ion-item>\n    <ion-item>Change Password</ion-item>\n    <ion-item>Blocked Users</ion-item>\n    <ion-item>\n      <ion-label color="black">Private Account</ion-label>\n      <ion-toggle checked="true"></ion-toggle>\n    </ion-item>\n  </div>\n\n  <div padding-top margin-top>\n    <h4 no-margin no-padding class="info-text">About</h4>\n    <hr class="custom-hr" color="gray">\n    <ion-item>Ads</ion-item>\n    <ion-item>Privacy Policy</ion-item>\n    <ion-item>Terms of Service</ion-item>\n  </div>\n\n  <div padding-top margin-top>\n    <hr class="custom-hr" color="gray">\n    <ion-item>Clear History</ion-item>\n    <ion-item>Log Out</ion-item>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\options\options.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], Options);

//# sourceMappingURL=options.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaggedProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaggedProfile = (function () {
    function TaggedProfile(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // You can get this data from your API. This is a dumb data for being an example.
        this.images = [
            {
                id: 1,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e35/13473123_1544898359150795_654626889_n.jpg'
            },
            {
                id: 2,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e35/12940826_1673029922963013_921771297_n.jpg'
            },
            {
                id: 3,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e15/10852865_738738146215825_1258215298_n.jpg'
            }
        ];
    }
    return TaggedProfile;
}());
TaggedProfile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-tagged-profile',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\tagged-profile\tagged-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Photos of You</ion-title>\n    <ion-buttons end right>\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row >\n      <ion-col col-4 class="grid_img" *ngFor="let i of images">\n        <img [src]="i.post_img" alt="">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\tagged-profile\tagged-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], TaggedProfile);

//# sourceMappingURL=tagged-profile.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SavedProfile = (function () {
    function SavedProfile(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // You can get this data from your API. This is a dumb data for being an example.
        this.images = [
            {
                id: 1,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e35/13473123_1544898359150795_654626889_n.jpg'
            },
            {
                id: 2,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e35/12940826_1673029922963013_921771297_n.jpg'
            }
        ];
    }
    return SavedProfile;
}());
SavedProfile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-saved-profile',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\saved-profile\saved-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Saved</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n\n  <ion-toolbar text-center>\n    <p>Only you can see what you\'ve saved</p>\n  </ion-toolbar>\n\n  <ion-grid>\n    <ion-row >\n      <ion-col col-4 class="grid_img" *ngFor="let i of images">\n        <img [src]="i.post_img" alt="">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\saved-profile\saved-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], SavedProfile);

//# sourceMappingURL=saved-profile.js.map

/***/ }),

/***/ 126:
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
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/comments/comments.module": [
		337,
		8
	],
	"../pages/edit-profile/edit-profile.module": [
		338,
		7
	],
	"../pages/login/login.module": [
		339,
		0
	],
	"../pages/message-detail/message-detail.module": [
		340,
		6
	],
	"../pages/new-message/new-message.module": [
		345,
		5
	],
	"../pages/options/options.module": [
		341,
		4
	],
	"../pages/profile/profile.module": [
		342,
		3
	],
	"../pages/saved-profile/saved-profile.module": [
		343,
		2
	],
	"../pages/tagged-profile/tagged-profile.module": [
		344,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 140;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_popover__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_messages__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Home = (function () {
    function Home(navCtrl, popoverCtrl, app) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.app = app;
        this.like_btn = {
            color: 'black',
            icon_name: 'heart-outline'
        };
        this.tap = 0;
        // You can get this data from your API. This is a dumb data for being an example.
        this.stories = [
            {
                id: 1,
                img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                user_name: 'candelibas'
            },
            {
                id: 2,
                img: 'https://pbs.twimg.com/profile_images/726955832785571840/8OxhcDxl_400x400.jpg',
                user_name: 'maxlynch'
            },
            {
                id: 3,
                img: 'http://ionicframework.com/dist/preview-app/www/assets/img/sarah-avatar.png.jpeg',
                user_name: 'ashleyosama'
            },
            {
                id: 4,
                img: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa_400x400.jpeg',
                user_name: 'adam_bradley'
            },
            {
                id: 5,
                img: 'https://avatars1.githubusercontent.com/u/1024025?v=3&s=120',
                user_name: 'linus_torvalds'
            }
        ];
    }
    Home.prototype.likeButton = function () {
        if (this.like_btn.icon_name === 'heart-outline') {
            this.like_btn.icon_name = 'heart';
            this.like_btn.color = 'danger';
            // Do some API job in here for real!
        }
        else {
            this.like_btn.icon_name = 'heart-outline';
            this.like_btn.color = 'black';
        }
    };
    Home.prototype.tapPhotoLike = function (times) {
        this.tap++;
        if (this.tap % 2 === 0) {
            this.likeButton();
        }
    };
    Home.prototype.presentPostPopover = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__post_popover__["a" /* PostPopover */]);
        popover.present();
    };
    Home.prototype.goMessages = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__messages_messages__["a" /* Messages */]);
    };
    Home.prototype.swipePage = function (event) {
        if (event.direction === 1) {
            console.log("Swap Camera");
        }
        if (event.direction === 2) {
            this.goMessages();
        }
    };
    Home.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return Home;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
], Home.prototype, "content", void 0);
Home = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="white">\n\n    <ion-buttons start left>\n\n      <button color="black" ion-button icon-only>\n\n        <ion-icon name="camera"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    \n\n    <ion-title style="border: 1px solid #ccc" (click)="scrollToTop()">Pansitan</ion-title>\n\n\n\n    <ion-buttons end right>\n\n      <button color="black" ion-button icon-only (click)="goMessages()">\n\n        <ion-icon name="paper-plane"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <!-- Story line \n\n  <ion-scroll class="story" scrollX="true">\n\n    <div class="story_scroll" *ngFor="let s of stories">\n\n      <div class="story_img_bg">\n\n      <img no-margin no-padding class="story_img" [src]="s.img"></div>\n\n      <p no-margin no-padding text-center class="story_text">{{ s.user_name }}</p>\n\n    </div>\n\n  </ion-scroll>\n\n-->\n\n  <hr no-margin no-padding>\n\n  <div (swipe)="swipePage($event)">\n\n\n\n    <!-- Cards -->\n\n    <ion-card no-padding padding-bottom no-margin class="card">\n\n\n\n      <ion-row>\n\n        <ion-col col-10>\n\n          <ion-item>\n\n        <ion-avatar item-left>\n\n          <img src="http://ionicframework.com/dist/preview-app/www/assets/img/sarah-avatar.png.jpeg">\n\n        </ion-avatar>\n\n        <h2 style="font-weight: bold">ashleyosama</h2>\n\n        <p>Cyprus</p>\n\n        \n\n      </ion-item>\n\n        </ion-col >\n\n        <ion-col col-2>\n\n          <button no-margin no-padding clear color="black" ion-button icon-only style="float: right; top: 15px" (click)="presentPostPopover()">\n\n            <ion-icon name="more"></ion-icon>\n\n        </button>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n\n\n      <img src="http://ionicframework.com/dist/preview-app/www/assets/img/advance-card-bttf.png" (tap)="tapPhotoLike($event)">\n\n\n\n      <p no-margin no-padding>\n\n        <button clear ion-button icon-only (click)="likeButton()" class="like-btn">\n\n          <ion-icon no-padding [name]="like_btn.icon_name" color="{{ like_btn.color }}" class="icon-space"></ion-icon>\n\n        </button>\n\n        <button clear ion-button icon-only>\n\n          <ion-icon no-padding isActive="false" color="black" name="ios-text-outline" class="icon-space" style="font-weight: bold"></ion-icon>\n\n        </button>\n\n        <button clear ion-button icon-only>\n\n          <ion-icon no-padding isActive="false" color="black" name="paper-plane" class="icon-space"></ion-icon>\n\n        </button>\n\n        <button no-margin no-padding clear color="black" ion-button icon-only style="float: right">\n\n          <ion-icon name="ios-bookmark-outline"></ion-icon>\n\n        </button>\n\n      </p>\n\n      <hr>\n\n\n\n      <ion-card-content>\n\n        <p class="like-content"><ion-icon name="heart"></ion-icon> 250 likes</p>\n\n        <p><b>techcrunch</b> Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n\n      \n\n        <ion-note style="font-size: 12px">\n\n          11h ago\n\n        </ion-note>\n\n      </ion-card-content>\n\n\n\n    </ion-card>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], Home);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPopover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostPopover = (function () {
    function PostPopover(viewCtrl, toastCtrl) {
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
    }
    PostPopover.prototype.close = function () {
        this.presentToast();
        this.viewCtrl.dismiss();
    };
    PostPopover.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Notification',
            duration: 2000
        });
        toast.present();
    };
    return PostPopover;
}());
PostPopover = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        template: "\n    <ion-list>\n      <button ion-item (click)=\"close()\">Report</button>\n      <button ion-item (click)=\"close()\">Copy Share URL</button>\n      <button ion-item (click)=\"close()\">Turn on Post Notifications</button>\n      <button ion-item (click)=\"close()\">Share on Messenger</button>\n    </ion-list>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
], PostPopover);

//# sourceMappingURL=post-popover.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Messages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_detail_message_detail__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_message_new_message__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Messages = (function () {
    function Messages(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        // You can get this data from your API. This is a dumb data for being an example.
        this.messages = [
            {
                id: 1,
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                sender: 'candelibas',
                last_message: 'How you doin?',
                time: '6h'
            },
            {
                id: 2,
                profile_img: 'https://pbs.twimg.com/profile_images/726955832785571840/8OxhcDxl_400x400.jpg',
                sender: 'maxlynch',
                last_message: 'LOL. Ionic in 2017',
                time: '11h'
            },
            {
                id: 3,
                profile_img: 'http://ionicframework.com/dist/preview-app/www/assets/img/sarah-avatar.png.jpeg',
                sender: 'ashleyosama',
                last_message: 'Wanna hang out?',
                time: '1d'
            },
            {
                id: 4,
                profile_img: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa_400x400.jpeg',
                sender: 'adam_bradley',
                last_message: 'Typescript <3 me',
                time: '3d'
            },
            {
                id: 5,
                profile_img: 'https://avatars1.githubusercontent.com/u/1024025?v=3&s=120',
                sender: 'linus_torvalds',
                last_message: 'I am installing Ubuntu right now.',
                time: '6d'
            }
        ];
    }
    Messages.prototype.goNewMessage = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__new_message_new_message__["a" /* NewMessage */]);
    };
    Messages.prototype.goMessageDetail = function (sender, profile_img, last_message) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__message_detail_message_detail__["a" /* MessageDetail */], { sender: sender, profile_img: profile_img, last_message: last_message });
    };
    return Messages;
}());
Messages = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-messages',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\messages\messages.html"*/'<ion-header>\n\n  <ion-navbar color="white">\n    <ion-title>Messages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item no-lines *ngFor="let m of messages" (click)="goMessageDetail(m.sender, m.profile_img, m.last_message)">\n      <ion-avatar item-left>\n        <img [src]="m.profile_img">\n      </ion-avatar>\n      <h2 style="font-weight: bold">{{ m.sender }}</h2>\n      <p>{{ m.last_message }} <ion-note item-right style="padding-left: 2px">{{ m.time }}</ion-note></p>\n      \n    </ion-item>\n  </ion-list>\n\n</ion-content>\n<ion-footer (click)="goNewMessage()">\n  <ion-toolbar>\n     <p text-center><ion-icon name="add"></ion-icon> New Message</p>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\messages\messages.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], Messages);

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_post_modal_post__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Search = (function () {
    function Search(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        // You can get this data from your API. This is a dumb data for being an example.
        this.search_data = [
            {
                id: 1,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e35/13473123_1544898359150795_654626889_n.jpg'
            },
            {
                id: 2,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e35/12940826_1673029922963013_921771297_n.jpg'
            },
            {
                id: 3,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e15/10852865_738738146215825_1258215298_n.jpg'
            },
            {
                id: 4,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e15/891528_841068522581102_1591061904_n.jpg'
            },
            {
                id: 5,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-frx5-1.cdninstagram.com/t51.2885-15/e35/10809765_1474804169496730_887570428_n.jpg'
            },
            {
                id: 6,
                username: 'candelibas',
                profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
                post_img: 'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e15/891515_1524153351163603_439436363_n.jpg'
            }
        ];
    }
    // Get search items from input with your API
    Search.prototype.getItems = function () {
    };
    // Triggers when user pressed a post
    Search.prototype.pressPhoto = function (user_id, username, profile_img, post_img) {
        this.presentModal(user_id, username, profile_img, post_img);
    };
    // Set post modal
    Search.prototype.presentModal = function (user_id, username, profile_img, post_img) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_post_modal_post__["a" /* ModalPost */], {
            user_id: user_id,
            username: username,
            profile_img: profile_img,
            post_img: post_img
        }, // This data comes from API!
        { showBackdrop: true, enableBackdropDismiss: true });
        modal.present();
    };
    return Search;
}());
Search = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\search\search.html"*/'<ion-header>\n    <ion-searchbar class="searchbar" (input)="getItems($event)"></ion-searchbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let s of search_data" class="grid_img" col-4 (press)="pressPhoto(s.id, s.username, s.profile_img, s.post_img)">\n        <img [src]="s.post_img" alt="">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
], Search);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notifications; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock_property_service_mock__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__property_detail_property_detail__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(74);
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









var Notifications = (function () {
    function Notifications(navCtrl, service, config, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.config = config;
        this.http = http;
        this.searchKey = "";
        this.viewMode = "map";
        this.http.get('http://pmt.i-tugue.com/stayinn-backend/api.php?action=get_app_list')
            .map(function (response) { return response.json(); })
            .subscribe(function (res) { return _this.properties = res; });
        this.findAll();
    }
    Notifications.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__property_detail_property_detail__["a" /* PropertyDetailPage */], property);
    };
    Notifications.prototype.onInput = function (event) {
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
    Notifications.prototype.onCancel = function (event) {
        this.findAll();
    };
    Notifications.prototype.findAll = function () {
        var _this = this;
        this.service.findAll()
            .then(function (data) { return _this.properties = data; })
            .catch(function (error) { return alert(error); });
    };
    Notifications.prototype.showMap = function () {
        var _this = this;
        if (this.viewMode == "list") {
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
            // code...
        }
    };
    Notifications.prototype.showMarkers = function () {
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
    return Notifications;
}());
Notifications = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\notifications\notifications.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-searchbar [(ngModel)]="searchKey" (ionInput)="onInput($event)"\n\n                       (ionCancel)="onCancel($event)"></ion-searchbar>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-segment [(ngModel)]="viewMode">\n\n       \n\n        <ion-segment-button value="list">\n\n            <ion-icon name="list"></ion-icon>\n\n        </ion-segment-button>\n\n         <ion-segment-button value="map" (ionSelect)="showMap()">\n\n            <ion-icon name="map"></ion-icon>\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n    \n\n    <ion-list *ngIf="viewMode===\'list\'">\n\n\n\n        <ion-item-sliding *ngFor="let property of properties">\n\n            <button ion-item (click)="openPropertyDetail(property)">\n\n                <ion-thumbnail item-left>\n\n                    <img src="{{property.thumbnail}}"/>\n\n                </ion-thumbnail>\n\n                <h2>{{property.title}}</h2>\n\n                <p>{{property.address}}</p>\n\n            </button>\n\n        </ion-item-sliding>\n\n\n\n    </ion-list>\n\n    <div *ngIf="viewMode===\'map\'" style="width:100%;height:90%;" id="map"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\notifications\notifications.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock_property_service_mock__["a" /* PropertyService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
], Notifications);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalvarsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(48);
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
        console.log('Hello GlobalvarsProvider Provider');
    }
    return GlobalvarsProvider;
}());
GlobalvarsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], GlobalvarsProvider);

//# sourceMappingURL=globalvars.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock_property_service_mock__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__property_detail_property_detail__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(74);
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
    function PropertyListPage(navCtrl, loadingCtrl, service, config, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.config = config;
        this.http = http;
        this.searchKey = "";
        this.viewMode = "list";
        this.loading = this.loadingCtrl.create({
            content: 'Loading farmers...',
        });
        this.http.get('http://localhost/pansit/api.php?action=get_app_list')
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.properties = res;
            _this.loading.dismissAll();
        }, function (error) {
            _this.loading.dismissAll();
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
            if (property.lati, property.longti) {
                var LeafIcon = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.Icon.extend({
                    options: {
                        iconSize: [24, 33]
                    }
                });
                var flag = new LeafIcon({ iconUrl: 'assets/leaflet/images/marker-icon.png' });
                var marker = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.marker([property.lati, property.longti], { icon: flag }).on('click', function (event) { return _this.openPropertyDetail(event.target.data); });
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
        selector: 'page-property-list',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\property-list\property-list.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-searchbar [(ngModel)]="searchKey" (ionInput)="onInput($event)"\n\n                       (ionCancel)="onCancel($event)"></ion-searchbar>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    \n\n    <ion-segment [(ngModel)]="viewMode">\n\n       \n\n        <ion-segment-button value="list">\n\n            <ion-icon name="list"></ion-icon>\n\n        </ion-segment-button>\n\n         <ion-segment-button value="map" (ionSelect)="showMap()">\n\n            <ion-icon name="map"></ion-icon>\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n    <div style="height: 2px"></div>\n\n\n\n    <ion-list *ngIf="viewMode===\'list\'">\n\n\n\n        <ion-item-sliding *ngFor="let property of properties">\n\n            <button ion-item (click)="openPropertyDetail(property)">\n\n                <ion-thumbnail item-left>\n\n                    <img src="http://localhost/pansit/uploads/s1.jpg"/>\n\n                </ion-thumbnail>\n\n                <h2>{{property.name}}</h2>\n\n                <p>{{property.address}}</p>\n\n            </button>\n\n        </ion-item-sliding>\n\n\n\n    </ion-list>\n\n\n\n    <div *ngIf="viewMode===\'map\'" style="width:100%;height:90%;" id="map"></div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\property-list\property-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock_property_service_mock__["a" /* PropertyService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
], PropertyListPage);

//# sourceMappingURL=property-list.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__ = __webpack_require__(310);
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
 * Generated class for the UploadImagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UploadImagePage = (function () {
    function UploadImagePage(sanitization, actionSheetCtrl, camera, file, alertCtrl, toastCtrl) {
        this.sanitization = sanitization;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.file = file;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.serverUrl = "http://jquery-file-upload.appspot.com/";
        this.isUploading = false;
        this.uploadingProgress = {};
        this.uploadingHandler = {};
        this.images = [];
        this.util = (function (_this) {
            return {
                removeFromArray: function (array, item) {
                    var index = array.indexOf(item);
                    if (index !== -1) {
                        array.splice(index, 1);
                    }
                },
                confirm: function (text, title, yes, no) {
                    if (title === void 0) { title = ''; }
                    if (yes === void 0) { yes = "Yes"; }
                    if (no === void 0) { no = "No"; }
                    return new Promise(function (resolve) {
                        _this.alertCtrl.create({
                            title: title,
                            message: text,
                            buttons: [
                                {
                                    text: no,
                                    role: 'cancel',
                                    handler: function () {
                                        resolve(false);
                                    }
                                },
                                {
                                    text: yes,
                                    handler: function () {
                                        resolve(true);
                                    }
                                }
                            ]
                        }).present();
                    });
                },
                trustImages: function () {
                    _this.imagesValue = _this.images.map(function (val) {
                        return {
                            url: val,
                            sanitized: _this.sanitization.bypassSecurityTrustStyle("url(" + val + ")")
                        };
                    });
                },
                showToast: function (text) {
                    _this.toastCtrl.create({
                        message: text,
                        duration: 5000,
                        position: 'bottom'
                    }).present();
                }
            };
        })(this);
    }
    UploadImagePage.prototype.uploadImages = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.isUploading = true;
            Promise.all(_this.images.map(function (image) {
                return _this.uploadImage(image);
            }))
                .then(resolve)
                .catch(function (reason) {
                _this.isUploading = false;
                _this.uploadingProgress = {};
                _this.uploadingHandler = {};
                reject(reason);
            });
        });
    };
    UploadImagePage.prototype.abort = function () {
        if (!this.isUploading)
            return;
        this.isUploading = false;
        for (var key in this.uploadingHandler) {
            this.uploadingHandler[key].abort();
        }
    };
    // ======================================================================
    UploadImagePage.prototype.removeImage = function (image) {
        var _this = this;
        if (this.isUploading)
            return;
        this.util.confirm("Are you sure to remove it?").then(function (value) {
            if (value) {
                _this.util.removeFromArray(_this.imagesValue, image);
                _this.util.removeFromArray(_this.images, image.url);
            }
        });
    };
    UploadImagePage.prototype.showAddImage = function () {
        var _this = this;
        if (!window['cordova']) {
            var input_1 = document.createElement('input');
            input_1.type = 'file';
            input_1.accept = "image/x-png,image/gif,image/jpeg";
            input_1.click();
            input_1.onchange = function () {
                var blob = window.URL.createObjectURL(input_1.files[0]);
                _this.images.push(blob);
                _this.util.trustImages();
            };
        }
        else {
            new Promise(function (resolve, reject) {
                var actionSheet = _this.actionSheetCtrl.create({
                    title: 'Add a photo',
                    buttons: [
                        {
                            text: 'From photo library',
                            handler: function () {
                                resolve(_this.camera.PictureSourceType.PHOTOLIBRARY);
                            }
                        },
                        {
                            text: 'From camera',
                            handler: function () {
                                resolve(_this.camera.PictureSourceType.CAMERA);
                            }
                        },
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                reject();
                            }
                        }
                    ]
                });
                actionSheet.present();
            }).then(function (sourceType) {
                if (!window['cordova'])
                    return;
                var options = {
                    quality: 100,
                    sourceType: sourceType,
                    saveToPhotoAlbum: false,
                    correctOrientation: true
                };
                _this.camera.getPicture(options).then(function (imagePath) {
                    _this.images.push(imagePath);
                    _this.util.trustImages();
                });
            }).catch(function () {
            });
        }
    };
    UploadImagePage.prototype.uploadImage = function (targetPath) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.uploadingProgress[targetPath] = 0;
            if (window['cordova']) {
                var options = {
                    fileKey: "files[]",
                    fileName: targetPath,
                    chunkedMode: false,
                    mimeType: "multipart/form-data",
                };
                var fileTransfer = new __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__["a" /* TransferObject */]();
                _this.uploadingHandler[targetPath] = fileTransfer;
                fileTransfer.upload(targetPath, _this.serverUrl, options).then(function (data) {
                    resolve(JSON.parse(data.response));
                }).catch(function () {
                    askRetry();
                });
                fileTransfer.onProgress(function (event2) {
                    _this.uploadingProgress[targetPath] = event2.loaded * 100 / event2.total;
                });
            }
            else {
                var xhr_1 = new XMLHttpRequest();
                xhr_1.open('GET', targetPath, true);
                xhr_1.responseType = 'blob';
                xhr_1.onload = function (e) {
                    if (xhr_1['status'] != 200) {
                        _this.util.showToast("Your browser doesn't support blob API");
                        console.error(e, xhr_1);
                        askRetry();
                    }
                    else {
                        var blob = xhr_1['response'];
                        var formData = new FormData(), xhr2_1 = new XMLHttpRequest();
                        formData.append('files[]', blob);
                        _this.uploadingHandler[targetPath] = xhr2_1;
                        xhr2_1.onreadystatechange = function () {
                            if (xhr2_1.readyState === 4) {
                                if (xhr2_1.status === 200)
                                    resolve(JSON.parse(xhr2_1.response));
                                else
                                    askRetry();
                            }
                        };
                        xhr2_1.upload.onprogress = function (event) {
                            _this.uploadingProgress[targetPath] = event.loaded * 100 / event.total;
                        };
                        xhr2_1.open('POST', _this.serverUrl, true);
                        xhr2_1.send(formData);
                    }
                };
                xhr_1.send();
            }
            var askRetry = function () {
                // might have been aborted
                if (!_this.isUploading)
                    return reject(null);
                _this.util.confirm('Do you wish to retry?', 'Upload failed').then(function (res) {
                    if (!res) {
                        _this.isUploading = false;
                        for (var key in _this.uploadingHandler) {
                            _this.uploadingHandler[key].abort();
                        }
                        return reject(null);
                    }
                    else {
                        if (!_this.isUploading)
                            return reject(null);
                        _this.uploadImage(targetPath).then(resolve, reject);
                    }
                });
            };
        });
    };
    return UploadImagePage;
}());
UploadImagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-upload-image',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\upload-image\upload-image.html"*/'<!--\n\n  Generated template for the UploadImagePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Select Photos</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<div>\n\n  <div class="images-wrapper">\n\n    <div class="image-wrapper" *ngFor="let image of imagesValue">\n\n      <ion-icon class="remove-image" name="close" *ngIf="!isUploading" (click)="removeImage(image)"></ion-icon>\n\n      <div class="image" [style.background-image]="image.sanitized">\n\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="\n\n             [class.uploading]="isUploading" alt=""/>\n\n        <ion-spinner *ngIf="isUploading && uploadingProgress[image.url]<100"></ion-spinner>\n\n\n\n        <ion-icon name="checkmark" *ngIf="isUploading && uploadingProgress[image.url]==100"></ion-icon>\n\n        <div *ngIf="isUploading" class="progress-bar">\n\n          <div class="progress" [style.width]="(uploadingProgress[image.url]||0)+\'%\'"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="image-wrapper add-image-btn" *ngIf="!isUploading" (click)="showAddImage()">\n\n      <div class="image">\n\n        <ion-icon name="add"></ion-icon>\n\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt=""/>\n\n      </div>\n\n    </div>\n\n  </div>\n\n    <button ion-button block outline (click)="uploadImages()" >Upload</button>\n\n</div>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\upload-image\upload-image.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Platform */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */]])
], UploadImagePage);

//# sourceMappingURL=upload-image.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comments; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the Comments page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Comments = (function () {
    function Comments(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Comments.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Comments');
    };
    return Comments;
}());
Comments = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-comments',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\comments\comments.html"*/'<!--\n  Generated template for the Comments page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>comments</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\comments\comments.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], Comments);

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__property_list_property_list__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__upload_image_upload_image__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = (function () {
    function TabsPage(camera) {
        this.camera = camera;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* Home */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* Search */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_6__upload_image_upload_image__["a" /* UploadImagePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__["a" /* Notifications */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* Profile */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_5__property_list_property_list__["a" /* PropertyListPage */];
    }
    TabsPage.prototype.openCamera = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            //let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" swipeBackEnabled="true" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab6Root" tabIcon="restaurant"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabIcon="aperture" (click)="openCamera()"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabIcon="person"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(286);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_post_popover__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_search__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_modal_post_modal_post__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_messages_messages__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_message_detail_message_detail__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_new_message_new_message__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_profile_edit_profile__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tagged_profile_tagged_profile__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_saved_profile_saved_profile__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_options_options__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_comments_comments__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_property_service_mock_property_service_mock__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_upload_image_upload_image__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_property_list_property_list__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_property_detail_property_detail__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_admob_free__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ionic3_star_rating__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_globalvars_globalvars__ = __webpack_require__(149);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* Home */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_post_popover__["a" /* PostPopover */],
            __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* Search */],
            __WEBPACK_IMPORTED_MODULE_7__pages_modal_post_modal_post__["a" /* ModalPost */],
            __WEBPACK_IMPORTED_MODULE_8__pages_messages_messages__["a" /* Messages */],
            __WEBPACK_IMPORTED_MODULE_9__pages_message_detail_message_detail__["a" /* MessageDetail */],
            __WEBPACK_IMPORTED_MODULE_10__pages_new_message_new_message__["a" /* NewMessage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__["a" /* Notifications */],
            __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* Profile */],
            __WEBPACK_IMPORTED_MODULE_13__pages_edit_profile_edit_profile__["a" /* EditProfile */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tagged_profile_tagged_profile__["a" /* TaggedProfile */],
            __WEBPACK_IMPORTED_MODULE_15__pages_saved_profile_saved_profile__["a" /* SavedProfile */],
            __WEBPACK_IMPORTED_MODULE_16__pages_options_options__["a" /* Options */],
            __WEBPACK_IMPORTED_MODULE_17__pages_comments_comments__["a" /* Comments */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_property_list_property_list__["a" /* PropertyListPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_property_detail_property_detail__["a" /* PropertyDetailPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_upload_image_upload_image__["a" /* UploadImagePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_28_ionic3_star_rating__["a" /* StarRatingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/comments/comments.module#CommentsModule', name: 'Comments', segment: 'comments', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfileModule', name: 'EditProfile', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/message-detail/message-detail.module#MessageDetailModule', name: 'MessageDetail', segment: 'message-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/options/options.module#OptionsModule', name: 'Options', segment: 'options', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfileModule', name: 'Profile', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/saved-profile/saved-profile.module#SavedProfileModule', name: 'SavedProfile', segment: 'saved-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tagged-profile/tagged-profile.module#TaggedProfileModule', name: 'TaggedProfile', segment: 'tagged-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/new-message/new-message.module#NewMessageModule', name: 'NewMessage', segment: 'new-message', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* Home */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_post_popover__["a" /* PostPopover */],
            __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* Search */],
            __WEBPACK_IMPORTED_MODULE_7__pages_modal_post_modal_post__["a" /* ModalPost */],
            __WEBPACK_IMPORTED_MODULE_8__pages_messages_messages__["a" /* Messages */],
            __WEBPACK_IMPORTED_MODULE_9__pages_message_detail_message_detail__["a" /* MessageDetail */],
            __WEBPACK_IMPORTED_MODULE_10__pages_new_message_new_message__["a" /* NewMessage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__["a" /* Notifications */],
            __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* Profile */],
            __WEBPACK_IMPORTED_MODULE_13__pages_edit_profile_edit_profile__["a" /* EditProfile */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tagged_profile_tagged_profile__["a" /* TaggedProfile */],
            __WEBPACK_IMPORTED_MODULE_15__pages_saved_profile_saved_profile__["a" /* SavedProfile */],
            __WEBPACK_IMPORTED_MODULE_16__pages_options_options__["a" /* Options */],
            __WEBPACK_IMPORTED_MODULE_17__pages_comments_comments__["a" /* Comments */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_property_list_property_list__["a" /* PropertyListPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_property_detail_property_detail__["a" /* PropertyDetailPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_upload_image_upload_image__["a" /* UploadImagePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__["a" /* Camera */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_23__providers_property_service_mock_property_service_mock__["a" /* PropertyService */],
            __WEBPACK_IMPORTED_MODULE_29__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
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
        this.http.get('http://localhost/pansit/api.php?action=get_app_list')
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
            return (property.name + ' ' + property.address + property.specialty).toUpperCase().indexOf(key) > -1;
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

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPost; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalPost = (function () {
    function ModalPost(viewCtrl, navParams, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.like_btn = {
            color: 'black',
            icon_name: 'heart-outline'
        };
        this.modal_data = {};
        this.modal_data = {
            id: this.navParams.get('user_id'),
            username: this.navParams.get('username'),
            profile_img: this.navParams.get('profile_img'),
            post_img: this.navParams.get('post_img')
        };
    }
    ModalPost.prototype.ionViewDidLoad = function () { };
    ModalPost.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalPost.prototype.likeButton = function () {
        if (this.like_btn.icon_name === 'heart-outline') {
            this.like_btn.icon_name = 'heart';
            this.like_btn.color = 'danger';
        }
        else {
            this.like_btn.icon_name = 'heart-outline';
            this.like_btn.color = 'black';
        }
    };
    ModalPost.prototype.goUserProfile = function (userId) {
        console.log("User id: " + userId);
    };
    return ModalPost;
}());
ModalPost = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-modalpost',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\modal-post\modal-post.html"*/'<ion-content class="main-modal">\n  <div class="modal">\n\n    <ion-row>\n      <ion-col col-2>\n        <img [src]="modal_data.profile_img" class="avatar-modal" alt=""> \n      </ion-col>\n\n      <ion-col col-8>\n        <p (click)="profile()">{{ modal_data.username }}</p>\n      </ion-col>\n\n      <!-- If you wish, you can add close icon too. Just delete comment code -->\n      <ion-col col-2><span style="float: right" (click)="dismiss()"><ion-icon name="ios-close-circle-outline"></ion-icon></span></ion-col>\n\n    </ion-row>\n\n    <!-- Post image -->\n    <div>\n      <img [src]="modal_data.post_img" alt="">\n    </div>\n\n    <ion-row text-center>\n      <ion-col col-3 no-margin no-padding>\n        <button clear ion-button icon-only style="margin-top: 2px" class="like-btn" (click)="likeButton()">\n          <ion-icon [name]="like_btn.icon_name" color="{{ like_btn.color }}"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-3 no-margin no-padding>\n        <button no-margin no-padding clear color="black" ion-button icon-only (click)="goUserProfile(1)">\n          <ion-icon name="person"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-3 no-margin no-padding>\n        <button clear color="black" ion-button icon-only style="margin-top: 2px">\n          <ion-icon name="paper-plane"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-3 no-margin no-padding style="margin-bottom: 5px">\n        <button clear color="black" ion-button icon-only>\n          <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\modal-post\modal-post.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
], ModalPost);

//# sourceMappingURL=modal-post.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock_property_service_mock__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_globalvars_globalvars__ = __webpack_require__(149);
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
    function PropertyDetailPage(global, alertCtrl, loadingCtrl, events, actionSheetCtrl, http, navCtrl, navParams, propertyService, toastCtrl, admob) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.actionSheetCtrl = actionSheetCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.propertyService = propertyService;
        this.toastCtrl = toastCtrl;
        this.admob = admob;
        this.email = "";
        this.ctrrate = false;
        this.checkfav = 0;
        this.checkrate = 0;
        this.length = 0;
        this.ratelength = 0;
        this.sumLoan = 0;
        this.yourrate = 0;
        this.yourrateid = 0;
        this.finalrate = 0;
        this.property = this.navParams.data;
        this.ctrrate = false;
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
        });
        this.email = "elton@gmail.com";
        this.http.get('http://localhost/pansit/api.php?action=getimage&g=1&id=' + this.property.pansitanid + '&email=' + this.email)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.image = res.image;
            _this.rate = res.rate;
            _this.length = _this.image.length;
            if (_this.rate != null) {
                _this.ratelength = _this.rate.length;
            }
            _this.loading.dismissAll();
            for (var index = 0; index < _this.ratelength; index++) {
                var element = _this.rate[index];
                _this.sumLoan = _this.sumLoan + parseInt(element.rate);
                if (element.email == _this.email) {
                    _this.checkrate = 1;
                    _this.yourrate = element.rate;
                    _this.yourrateid = element.rateid;
                }
            }
            _this.finalrate = _this.sumLoan / _this.ratelength;
            console.log(res.fav);
            if (res.fav != null) {
                _this.checkfav = 1;
                _this.fav = res.fav;
            }
        }, function (error) {
            _this.presentAlert("Something went wrong!");
            _this.loading.dismissAll();
        });
        events.subscribe('star-rating:changed', function (starRating) {
            if (_this.ctrrate == false) {
                _this.ctrrate = true;
                _this.rating(starRating);
            }
        });
        //this.showBanner();
    }
    PropertyDetailPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    PropertyDetailPage.prototype.favorites = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
        });
        if (this.checkfav == 1) {
            this.http.get('http://localhost/pansit/api.php?action=removefave&type=1&email=' + this.email + '&id=' + this.property.pansitanid)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                if (res.status == "success") {
                    // code...
                    _this.checkfav = 0;
                    _this.presentToast("Removed from Favorites");
                }
                else {
                    _this.presentToast("Oops! Something went wrong.");
                }
            }, function (error) {
                _this.presentToast("Oops! Something went wrong.");
            });
        }
        else {
            this.http.get('http://localhost/pansit/api.php?action=savefave&type=1&email=' + this.email + '&id=' + this.property.pansitanid)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                console.log(res);
                if (res.status == "success") {
                    // code...
                    _this.checkfav = 1;
                    _this.presentToast("Added to Favorites");
                }
                else {
                    _this.presentToast("Oops! Something went wrong.");
                }
            }, function (error) {
                _this.presentToast("Oops! Something went wrong.");
            });
        }
    };
    PropertyDetailPage.prototype.rating = function (rate) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
        });
        if (this.checkrate == 0) {
            this.http.get('http://localhost/pansit/api.php?action=ratingadd&rate=' + rate + '&email=' + this.email + '&id=' + this.property.pansitanid)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.loading.dismissAll();
                if (res.status == "success") {
                    _this.loading.dismissAll();
                    _this.checkrate = 1;
                    _this.presentToast("Rated");
                    _this.yourrate = rate;
                    _this.ratelength = _this.ratelength + 1;
                    _this.sumLoan = _this.sumLoan + rate;
                    _this.finalrate = (_this.sumLoan) / (_this.ratelength);
                    _this.ctrrate = false;
                }
                else {
                    _this.presentToast("Oops! Something went wrong.");
                }
            }, function (error) {
                _this.loading.dismissAll();
                _this.presentToast("Oops! Something went wrong.");
                _this.ctrrate = false;
            });
        }
        else {
            this.http.get('http://localhost/pansit/api.php?action=ratingedit&rateid=' + this.yourrateid + '&rate=' + rate + '&email=' + this.email + '&id=' + this.property.pansitanid)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.loading.dismissAll();
                if (res.status == "success") {
                    _this.presentToast("Rate Updated");
                    _this.sumLoan = _this.sumLoan - _this.yourrate;
                    _this.yourrate = rate;
                    _this.sumLoan = _this.sumLoan + _this.yourrate;
                    _this.finalrate = (_this.sumLoan) / (_this.ratelength);
                    _this.ctrrate = false;
                }
                else {
                    _this.presentToast("Rate update Failed");
                    _this.ctrrate = false;
                }
            }, function (error) {
                _this.loading.dismissAll();
                _this.presentToast("Oops! Something went wrong.");
                _this.ctrrate = false;
            });
        }
    };
    PropertyDetailPage.prototype.showBanner = function () {
        var bannerConfig = {
            autoShow: true,
            isTesting: true
            //id: 'ca-app-pub-1127440969430875/2860746143'
        };
        this.admob.banner.config(bannerConfig);
        this.admob.banner.prepare().then(function () {
            // success
        }).catch(function (e) { return console.log(e); });
    };
    PropertyDetailPage.prototype.presentToast = function (x) {
        var toast = this.toastCtrl.create({
            message: x,
            duration: 2000
        });
        toast.present();
    };
    return PropertyDetailPage;
}());
PropertyDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-property-detail',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\property-detail\property-detail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{property.name}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-card *ngIf="property.pansitanid">\n\n        <ion-slides>\n\n\n\n        <ion-slide  *ngFor="let p of image; let i = index">\n\n            <img src="http://localhost/pansit/uploads/{{ p.imageid }}.jpg"/>\n\n            <p>{{ i + 1 }}/{{ length }}</p>\n\n        </ion-slide>\n\n\n\n    </ion-slides>\n\n        <p style="position: absolute; right: 3px;margin-top: 6px">{{ratelength}} people</p>\n\n         <ionic3-star-rating \n\n            activeIcon = "ios-star"\n\n            defaultIcon = "ios-star-outline"\n\n            activeColor = "#488aff" \n\n            defaultColor = "#488aff"\n\n            readonly="true"\n\n            [rating]="finalrate">\n\n        </ionic3-star-rating> \n\n        <!--<img src="{{property.picture}}"/>-->\n\n        <ion-card-content>\n\n            <h2 class="card-title">{{property.name}}</h2>\n\n            <p>{{property.address}}</p>\n\n        </ion-card-content>\n\n        <ion-list>\n\n            <ion-item *ngIf="property.contact!=\'\'">\n\n                <ion-icon item-left name="call"></ion-icon>\n\n                <h3>Contact</h3>\n\n                <ion-note item-right>{{property.contact}}</ion-note>\n\n            </ion-item>\n\n            <ion-item  *ngIf="property.prices!=\'\'">\n\n                <ion-icon item-left name="pricetag"></ion-icon>\n\n                <h3>Prices</h3>\n\n                <ion-note item-right>{{property.prices}}</ion-note>\n\n            </ion-item>\n\n            <ion-item *ngIf="property.specialty!=\'\'">\n\n                <ion-icon item-left name="list-box"></ion-icon>\n\n                <h3>Specialty</h3>\n\n                <ion-note item-right>{{property.specialty}}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left name="pricetag"></ion-icon>\n\n                <h3>Your rate</h3>\n\n                <ion-note item-right>\n\n                    <ionic3-star-rating \n\n                        activeIcon = "ios-star"\n\n                        defaultIcon = "ios-star-outline"\n\n                        activeColor = "#488aff" \n\n                        defaultColor = "#488aff"\n\n                        readonly="{{ ctrrate }}"\n\n                        [rating]="yourrate">\n\n                    </ionic3-star-rating> \n\n                </ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                <button ion-button block  style="width: 100%;" *ngIf="checkfav==0" (click)="favorites()">Add to Favorites</button>\n\n                <button ion-button block outline  style="width: 100%;" *ngIf="checkfav==1"  (click)="favorites()">Remove from Favorites</button>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        \n\n\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\proj\stay\src\pages\property-detail\property-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock_property_service_mock__["a" /* PropertyService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__["a" /* AdMobFree */]])
], PropertyDetailPage);

//# sourceMappingURL=property-detail.js.map

/***/ })

},[268]);
//# sourceMappingURL=main.js.map