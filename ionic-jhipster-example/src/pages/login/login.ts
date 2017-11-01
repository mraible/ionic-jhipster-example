import { FacebookLoginResponse } from '@ionic-native/facebook';
import { User } from './../../providers/user/user';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { MainPage } from '../pages';
import { LoginService } from '../../providers/auth/login.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { username: string, password: string } = {
    username: '',
    password: ''
  };

  toast;

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public loginService: LoginService,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public user: User) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin() {
    this.loginService.login(this.account).then((response) => {
      console.log('response: ' + response);
      this.navCtrl.push(MainPage);
    }, (err) => {
      // Unable to log in
      this.account.password = '';
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  doLoginFacebook() {
    this.user.loginFacebook()
      .then((res: FacebookLoginResponse) => {
        this.user.accessFacebookApi()
          .then((res) => {
            this.account = {
              username: res.email,
              password: this.user._userFBId
            };
            this.doLogin();
          })
          .catch((err) => {
            console.error('Error Facebook ->' + JSON.stringify(err));
            this.presentToastMessage('Error login to Facebook');
          })
      })
      .catch((err) => {
        console.error('Error Facebook ->' + JSON.stringify(err));
        this.presentToastMessage('Error login to Facebook');
      })

  }

  presentToastMessage(message) {
    this.toast = this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      position: 'top'
    });
    this.toast.present();
  }
}
