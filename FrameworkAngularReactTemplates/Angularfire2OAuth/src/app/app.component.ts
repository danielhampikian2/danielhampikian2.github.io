import { Component } from '@angular/core';

import { Platform, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

import { filter, switchMap } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { AuthenticatorService } from './providers/authenticator';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Settings',
      url: '/settings',
      icon: 'cog'
    },
    {
      title: 'Chat',
      url: '/chat',
      icon: 'chatboxes'
    }
  ];

  rootPage: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private events: Events,
    private auth: AngularFireAuth,
    private db: AngularFireDatabase,
    private authenticatorService: AuthenticatorService,
    private router: Router
  ) {
    platform.ready().then(() => {
      // Verify if user is logged in
      auth.authState.subscribe(oAuthData => {
        oAuthData ? router.navigateByUrl('/chat') : router.navigateByUrl('/login');
      });

      // Load use details into service object
      authenticatorService.userDetails$ = auth.authState.pipe(
        filter(oAuthData => !!oAuthData && !!oAuthData.uid),
        switchMap(oAuthData => {
          authenticatorService.userRef = db.object('users/' + oAuthData.uid);
          return authenticatorService.userRef.valueChanges();
        }),
        filter(userDetails => !!userDetails)
      );

      // Available events for Authentication
      this.events.subscribe('user:login', eventData => {
        const user = eventData.user || eventData;
        console.log('This was trigger by the user:login event.');
        const userRef = this.db.object(`users/${user.uid}`);

        const dataToPersist: any = {};
        console.log(user);
        dataToPersist.provider  = user.isAnonymous ? 'anonymous' : user.providerData[0].providerId;
        dataToPersist.uid = user.uid;
        dataToPersist.avatar = user.providerData[0] && user.providerData[0].photoURL || 'assets/icon/no-avatar.png';

        dataToPersist.fullName = user.displayName || 'Anonymous';
        dataToPersist.email = user.email;

        userRef.set(dataToPersist);
      });

      this.events.subscribe('user:create', eventData => {
        console.log('This was trigger by the user:create event.');
      });

      this.events.subscribe('user:resetPassword', eventData => {
        console.log('This was trigger by the user:resetPassword event.');
      });
    });
  }

  signOut() {
    this.auth.auth.signOut();
  }
}
