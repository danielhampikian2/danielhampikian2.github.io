import { Injectable } from '@angular/core';
import { Events } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireObject } from '@angular/fire/database';
import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';
import { Loader } from './loader';
import { Config } from '../config';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticatorService {

  public userRef: AngularFireObject<any>;
  public userDetails$: Observable<any>;

  constructor(
    private events: Events,
    private afAuth: AngularFireAuth,
    private facebook: Facebook,
    private twitterConnect: TwitterConnect,
    private googlePlus: GooglePlus,
    private loader: Loader
  ) {}

  anonymousUser(): Promise<any> {
    const promise = new Promise<any>((resolve, reject) => {
      this.loader.show('Logging as Anonymous');
      this.afAuth.auth.signInAnonymously()
      .then((user) => {
        this.loader.hide();
        this.events.publish('user:login', user);
        resolve(user);
      })
      .catch(e => {
        this.loader.hide();
        console.error('Anonymous Login Failure:', e);
        reject(e);
      });
    });
    return promise;
  }

  // BROWSER MODE ON
  // Use this to enable oAuth in browser - eg ionic serve
  // ---------------------------------------------------------
  signInWithOAuthBrowserMode(provider: string): Promise<any> {
    const promise = new Promise<any>((resolve, reject) => {
      this.loader.show(`Logging with ${provider} (Browser Mode)`);
      this.afAuth.auth.signInWithPopup(this.resolveProvider(provider))
      .then((user) => {
        resolve(user);
        this.events.publish('user:login', user.user);
        this.loader.hide();
      })
      .catch(e => {
        this.loader.hide();
        console.error(`${provider} Login Failure:`, e);
        reject(e);
      });
    });
    return promise;
  }

  private resolveProvider(provider: string) {
    switch (provider) {
      case 'Google':
        return new firebase.auth.GoogleAuthProvider();
      case 'Facebook':
        return new firebase.auth.FacebookAuthProvider();
      case 'Twitter':
        return new firebase.auth.TwitterAuthProvider();
    }
  }

  // BROWSER MODE OFF
  // oAuth using ionic-native plugins
  // Use this function instead of the one above to run this app on your phone
  signInWithOAuth(provider: string) {
    this.loader.show('oAuth signin...');
    switch (provider) {
      case 'Google':
        return this.googlePlus.login(
          {
            scopes: '',
            webClientId: Config.WEB_CLIENT_ID,
            offline: true,
          }).then((result) => {
            const creds = firebase.auth.GoogleAuthProvider.credential(result.idToken);
            this.loader.hide();
            return this.oAuthWithCredential(provider, creds);
          })
          .catch((e) => {
            this.loader.hide();
            return Promise.reject(e);
          });
      case 'Facebook':
        return this.facebook.login(['email', 'public_profile']).then((result) => {
          const creds = firebase.auth.FacebookAuthProvider.credential(result.authResponse.accessToken);
          this.loader.hide();
          return this.oAuthWithCredential(provider, creds);
        })
        .catch((e) => {
          this.loader.hide();
          if (e.errorMessage) {
            return Promise.reject(e.errorMessage);
          } else {
            return Promise.reject(e);
          }
        });
      case 'Twitter':
        return this.twitterConnect.login().then((result) => {
          const creds = firebase.auth.TwitterAuthProvider.credential(result.token, result.secret);
          this.loader.hide();
          return this.oAuthWithCredential(provider, creds);
        })
        .catch((e) => {
          this.loader.hide();
          return Promise.reject(e);
        });
    }
  }

  // Perform login using user and password
  login(email: string, password: string) {
    const promise = new Promise<any>((resolve, reject) => {
      this.loader.show('Logging with Firebase email/password');
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.loader.hide();
        this.events.publish('user:login', user);
        resolve(user);
      })
      .catch(e => {
        this.loader.hide();
        console.error(`Password Login Failure:`, e);
        reject(e);
      });
    });
    return promise;
  }

  // Reset password
  resetPassword(email) {
    const promise = new Promise<any>((resolve, reject) => {
      this.loader.show('Resetting your password');
      firebase.auth().sendPasswordResetEmail(email).
        then((result: any) => {
        this.loader.hide();
        this.events.publish('user:resetPassword', result);
        resolve();
      }).catch((e: any) => {
        this.loader.hide();
        reject(e);
      });
    });
    return promise;
  }

  // Signin with credentials
  private oAuthWithCredential(provider: string, creds: any): Promise<any> {
    const promise = new Promise<any>((resolve, reject) => {
      this.loader.show('oAuth login...');
      this.afAuth.auth.signInWithCredential(creds)
      .then((user) => {
        this.events.publish('user:login', user);
        this.loader.hide();
        resolve(user);
      })
      .catch(e => {
        this.loader.hide();
        console.error(`${provider} Login Failure:`, e);
        reject(e);
      });
    });
    return promise;
  }
}
