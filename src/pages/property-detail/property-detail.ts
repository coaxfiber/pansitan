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

    email = "elton@gmail.co22m"

    checkfav=0;
    checkrate=0;
    loading: Loading;
    property: any;
    image: any;
    rate: any;
    length;
    ratelength;
    sumLoan;
    yourrate = 0;
    constructor( global:GlobalvarsProvider,private alertCtrl: AlertController,public loadingCtrl: LoadingController, public events: Events,public actionSheetCtrl: ActionSheetController,private http:Http, public navCtrl: NavController, public navParams: NavParams, public propertyService: PropertyService, public toastCtrl: ToastController, public admob: AdMobFree) {
        this.property = this.navParams.data;
      this.loading = this.loadingCtrl.create({
      });


      this.email = "elton@gmail.co22m";

         this.http.get('http://localhost/pansit/api.php?action=getimage&g=2&id='+this.property.pansitanid)
          .map(response => response.json())
          .subscribe(res => {

            this.image = res.image;
            this.rate = res.rate;
            this.length = this.image.length;
            this.ratelength = this.rate.length;
            this.loading.dismissAll();
            
            this.sumLoan=0;
            for (var index = 0; index < this.ratelength; index++) {
                 var element = this.rate[index];
                 this.sumLoan = this.sumLoan + parseInt(element.rate);
                 if (element.email==this.email) {
                    this.checkrate=1;
                    this.yourrate = element.rate;
                 }

              }
          this.sumLoan = this.sumLoan/this.ratelength;

          console.log(this.checkrate)

          },error => {
            this.presentAlert("Something went wrong!");
            this.loading.dismissAll();
           } 
           );

         events.subscribe('star-rating:changed', (starRating) => {this.rating(starRating)});
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
  if (this.checkfav == 1) {
    this.http.get('http://localhost/pansit/api.php?action=removefav&type=1&email=' +this.email+ '&id='+this.property.pansitanid)
          .map(response => response.json())
          .subscribe(res => {
            console.log(res)
                   this.checkrate = 0;
                   this.presentToast("Removed from Favorites");
             },error => {
            this.presentToast("Oops! Something went wrong.");
           } 
           );

  }else{

    this.http.get('http://localhost/pansit/api.php?action=savefav&type=1&email=' +this.email+ '&id='+this.property.pansitanid)
          .map(response => response.json())
          .subscribe(res => {
            console.log(res)
                   this.checkrate = 1;
                   this.presentToast("Added to Favorites");
             },error => {
            this.presentToast("Oops! Something went wrong.");
           } 
           );
  }
}

rating(rate){
  this.loading = this.loadingCtrl.create({
      });
  if (this.checkrate == 0) {
    this.http.get('http://localhost/pansit/api.php?action=ratingadd&rate='+rate+'&email=' +this.email+ '&id='+this.property.pansitanid)
          .map(response => response.json())
          .subscribe(res => {
            console.log(res)
            console.log(res)
                   this.checkrate = 1;
                    this.loading.dismissAll();
                   this.presentToast("Rated");
                   this.yourrate = rate;
             },error => {
                  this.loading.dismissAll();
                  this.presentToast("Oops! Something went wrong.");
           } 
           );

  }else{

    this.http.get('http://localhost/pansit/api.php?action=savefav&type=1&email=' +this.email+ '&id='+this.property.pansitanid)
          .map(response => response.json())
          .subscribe(res => {
            console.log(res)
                   this.checkrate = 0;
                   this.presentToast("Added to Favorites");
             },error => {
            this.presentToast("Oops! Something went wrong.");
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