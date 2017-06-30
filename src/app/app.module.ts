import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

/** Firebase Angular Fire needed import */
import { AngularFireModule } from 'angularfire2';   //  Angular Fire to access firebase
import { AngularFireAuth } from 'angularfire2/auth';

/** Declarations Import */
import { MyApp } from './app.component';            //  App Component is here
import { HomePage } from '../pages/home/home';      //  Home page once logged in is here
import { LoginPage } from '../pages/login/login';   //  Login page to login
import { SignupPage } from '../pages/signup/signup'; // SignupPage to signup and then login

/** Providers Declaration */
import { AuthProvider } from '../providers/auth/auth';   

/** Firebase Constants */
export const firebaseConfig = {
    apiKey: "AIzaSyAI6rpfHq_A0rTZblYd-oQyfqgOP8gI9YQ",
    authDomain: "vmcreations-ba72f.firebaseapp.com",
    databaseURL: "https://vmcreations-ba72f.firebaseio.com",
    storageBucket: "vmcreations-ba72f.appspot.com",
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthProvider
  ]
})
export class AppModule {}
