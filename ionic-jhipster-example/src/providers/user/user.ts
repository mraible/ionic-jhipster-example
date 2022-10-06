import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';
import { LoginService } from '../auth/login.service';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class User {
  _user: any;
  _userFBId: any;

  constructor(public api: Api, public loginService: LoginService, private fb: Facebook) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
    this.loginService.login(accountInfo).then((res) => {
      this._loggedIn(res);
      return Observable.of(res);
    }).catch((err) => {
      console.error('ERROR', err);
      return Observable.throw(err);
    });
  }

   /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    return this.api.post('register', accountInfo, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    }).share();
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this.loginService.logout();
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user;
  }

  /**
   * SignUp with facebook
   */
  loginFacebook(): Promise<any> {
    return this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {
        this._userFBId = res.authResponse.userID;
      });

  }

  accessFacebookApi(): Promise<any> {
    if(!this._userFBId){
      Promise.reject('Error: Unauthorize to access API. Missing id user');
    }
    return this.fb.api('/' + this._userFBId + '?fields=id,name,gender,email,picture', ['public_profile', 'email']);   
  }

  registerFacebookMobile(accountInfo: any) {
    return this.api.post('registerFacebookMobile', accountInfo, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    }).share();
  }
}
