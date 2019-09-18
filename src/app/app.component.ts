import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth-service';
import { Title } from '@angular/platform-browser';
import { componentFactoryName } from '@angular/compiler';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: String = "HomePage";

  pages: Array<{title: string, component: String}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen, 
    public auth: AuthService) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Categorias', component: 'CategoriasPage'},
      { title: 'Profile', component: 'ProfilePage'},
      { title: 'Logout', component: ''}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page : { title : string, component : string}) {

    if (page.title == "Logout" && page.component == ""){
      this.auth.logout();
      this.nav.setRoot('HomePage');
    } else {
      this.nav.setRoot(page.component);
    }

  }
}
