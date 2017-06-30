import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { AngularFireAuth } from 'angularfire2/auth';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public af: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  /** Getting user data */
  getUserData() {
    return Observable.create(observer => {
      this.af.authState.subscribe(authData => {
        if(authData) {
          
        } else {
          observer.error();
        }
      })
    })
  }

  /** A simple method to login with email and password */
  loginWithEmail(credentials) {
    return Observable.create( observer => {
      this.af.auth.signInWithEmailAndPassword(credentials.email,credentials.password).then(user => {
        observer.next(user);
      }, error => {
        observer.error(error);
      })
    })
  }

  /** Simple method to signup with email and password */
  signupWithEmail(credentials) {
    return Observable.create( observer => {
      this.af.auth.createUserWithEmailAndPassword(credentials.email, credentials.password).then(user => {
        observer.next(user);
      }, error => {
        observer.error(error);
      })
    })
  }



}
