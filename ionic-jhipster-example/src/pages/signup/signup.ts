import { LoginService } from './../../providers/auth/login.service';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { login: string, email: string, firstName: string, lastName: string, password: string, langKey: string, imageUrl: string } = {
    login: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    langKey: 'en',
    imageUrl: ''
  };

  accountLoginFb: { username: string, password: string };

  toast;

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public loginService: LoginService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doSignup() {
    // set login to same as email
    this.account.login = this.account.email;
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      //console.log('error in signup', err);
      // ^^ results in 'You provided 'undefined' where a stream was expected'
      //this.navCtrl.push(MainPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }


  doSignUpFacebook() {
    this.user.loginFacebook()
      .then((res) => {
        this.user.accessFacebookApi()
          .then((res) => {
            this.account = {
              login: res.email,
              email: res.email,
              firstName: res.name,
              lastName: '',
              password: this.user._userFBId,
              langKey: 'en',
              imageUrl: res.picture.data.url
            };

            this.user.registerFacebookMobile(this.account)
              .subscribe(
              (res) => {
                this.doLogin(this.user._userFBId);
              },
              (err) => {
                // Unable to sign up
                this.presentToastMessage('Registering with Facebook failed');
              });
          })
          .catch((err) => {
            // Unable to sign up
            this.presentToastMessage('Registering with Facebook failed');
          });
      })
      .catch((err) => {
        // Unable to sign up
        this.presentToastMessage('Registering with Facebook failed');
      })
  }

  doLogin(userId) {
    this.accountLoginFb = {
      username: this.account.login,
      password: userId
    };
    this.loginService.login(this.accountLoginFb).then((response) => {
      console.log('response: ' + response);
      this.navCtrl.setRoot(MainPage);
    }, (err) => {
      console.error('err fail-->' + JSON.stringify(err));
      // Unable to sign up
      this.account.password = '';
      this.presentToastMessage('Loging with Facebook failed');
    });
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
