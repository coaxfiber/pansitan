import {Component} from '@angular/core';
import {ActionSheetController,  NavController, NavParams, ToastController} from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock/property-service-mock';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import {Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Events } from 'ionic-angular';
import {LoadingController, Loading } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
 
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
@Component({
    selector: 'page-property-detail',
    templateUrl: 'property-detail.html'
})
export class PropertyDetailPage {

    email = ""

    ctrrate = false;
    fav:any;
    checkfav=0;
    checkrate=0;
    loading: Loading;
    property: any;
    image: any;
    rate: any;
    length=0;
    ratelength=0;
    sumLoan = 0;
    yourrate = 0;
    yourrateid=0;
    finalrate=0;
    constructor( global:GlobalvarsProvider,private alertCtrl: AlertController,public loadingCtrl: LoadingController, public events: Events,public actionSheetCtrl: ActionSheetController,private http:Http, public navCtrl: NavController, public navParams: NavParams, public propertyService: PropertyService, public toastCtrl: ToastController, public admob: AdMobFree) {
        this.property = this.navParams.data;
      this.ctrrate = false;
      this.loading = this.loadingCtrl.create({
        content: 'Loading...',
      });


      this.email = "elton@gmail.com";

         this.http.get('http://localhost/pansit/api.php?action=getimage&g=1&id='+this.property.pansitanid+'&email='+this.email)
          .map(response => response.json())
          .subscribe(res => {
            this.image = res.image;
            this.rate = res.rate;

            this.length = this.image.length;

            if (this.rate!=null) {
              this.ratelength = this.rate.length;
            }
            this.loading.dismissAll();

            for (var index = 0; index < this.ratelength; index++) {
                 var element = this.rate[index];
                 this.sumLoan = this.sumLoan + parseInt(element.rate);
                 if (element.email==this.email) {
                    this.checkrate=1;
                    this.yourrate = element.rate;
                    this.yourrateid = element.rateid;
                 }
            }
            this.finalrate = this.sumLoan/this.ratelength;
            console.log(res.fav)
            if (res.fav != null) {
              this.checkfav=1;
              this.fav = res.fav;
            }


          },error => {
            this.presentAlert("Something went wrong!");
            this.loading.dismissAll();
           } 
           );

         events.subscribe('star-rating:changed', (starRating) => {
           if (this.ctrrate == false) {

             this.ctrrate = true;
             this.rating(starRating); 
           }
         });
        //this.showBanner();
    }


presentAlert(val:any) {
            let alert = this.alertCtrl.create({
              title: 'Alert',
              subTitle: val,
              buttons: ['Dismiss']
            });
            alert.present();
          }

favorites(){

  this.loading = this.loadingCtrl.create({
        content: 'Loading...',
      });
  if (this.checkfav == 1) {
    this.http.get('http://localhost/pansit/api.php?action=removefave&type=1&email=' +this.email+ '&id='+this.property.pansitanid)
          .map(response => response.json())
          .subscribe(res => {
            if (res.status == "success") {
              // code...
                   this.checkfav = 0;
                   this.presentToast("Removed from Favorites");
                }else
                {
                      this.presentToast("Oops! Something went wrong.");
                  }
             },error => {
            this.presentToast("Oops! Something went wrong.");
           } 
           );

  }else{

    this.http.get('http://localhost/pansit/api.php?action=savefave&type=1&email=' +this.email+ '&id='+this.property.pansitanid)
          .map(response => response.json())
          .subscribe(res => {
            console.log(res)
                    if (res.status == "success") {
              // code...
                   this.checkfav = 1;
                   this.presentToast("Added to Favorites");
                }else
                {
                      this.presentToast("Oops! Something went wrong.");
                  }
             },error => {
            this.presentToast("Oops! Something went wrong.");
           } 
           );
  }
}

rating(rate){
  this.loading = this.loadingCtrl.create({
        content: 'Loading...',
      });
  if (this.checkrate == 0) {
    this.http.get('http://localhost/pansit/api.php?action=ratingadd&rate='+rate+'&email=' +this.email+ '&id='+this.property.pansitanid)
          .map(response => response.json())
          .subscribe(res => {
                   this.loading.dismissAll();
            if (res.status == "success") {
                  this.loading.dismissAll();
                   this.checkrate = 1;
                   this.presentToast("Rated");
                   this.yourrate = rate;
                   this.ratelength=this.ratelength+1;
                   this.sumLoan=this.sumLoan+rate;
                   this.finalrate = (this.sumLoan)/(this.ratelength);
                   this.ctrrate = false;
              }else{
                  this.presentToast("Oops! Something went wrong.");
              }
             },error => {
                  this.loading.dismissAll();
                  this.presentToast("Oops! Something went wrong.");
                   this.ctrrate = false;
           } 
           );

  }else{
    this.http.get('http://localhost/pansit/api.php?action=ratingedit&rateid='+this.yourrateid+'&rate='+rate+'&email=' +this.email+ '&id='+this.property.pansitanid)
          .map(response => response.json())
          .subscribe(res => {
             this.loading.dismissAll();
            if (res.status == "success") {
                   this.presentToast("Rate Updated");
                   this.sumLoan = this.sumLoan - this.yourrate;
                   this.yourrate = rate;
                   this.sumLoan = this.sumLoan + this.yourrate;
                   this.finalrate = (this.sumLoan)/(this.ratelength);
                   this.ctrrate = false;
              }else{
                    this.presentToast("Rate update Failed");
                   this.ctrrate = false;
              }
             },error => {
                   this.loading.dismissAll();
                    this.presentToast("Oops! Something went wrong.");
                   this.ctrrate = false;
           } 
           );
  }

             
}

showBanner() {
 
        let bannerConfig: AdMobFreeBannerConfig = {
            autoShow: true,
            isTesting: true
            //id: 'ca-app-pub-1127440969430875/2860746143'
        };
 
        this.admob.banner.config(bannerConfig);
 
        this.admob.banner.prepare().then(() => {
            // success
        }).catch(e => console.log(e));
 
    }

    presentToast(x) {
    let toast = this.toastCtrl.create({
      message: x,
      duration: 2000
    });
    toast.present();
  }

}