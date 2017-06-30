import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';

import { SignupPage } from '../signup/signup';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  form: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loading: LoadingController, public auth: AuthProvider) {
    this.form = {
      email: '',
      password: ''
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  /** If already registered then login using the following function. Check firebase and login */
  login() {

    /** Show Loading till they login */
    let loading = this.loading.create({
      content: 'Please Wait..'
    });
    loading.present();

    /** check authentication from provider */
    this.auth.loginWithEmail(this.form).subscribe(response => {
      console.log(response);
      loading.dismiss();
    })

  }

  /** Opening Signup page */
  openSignupPage() {
    this.navCtrl.push(SignupPage);
  }

}
