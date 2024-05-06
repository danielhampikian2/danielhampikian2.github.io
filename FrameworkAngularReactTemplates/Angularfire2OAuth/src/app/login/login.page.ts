import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthenticatorService } from '../providers/authenticator';
import { RegistrationPage } from '../registration/registration.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  userFormBuilder: any;

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private platform: Platform,
    private authenticator: AuthenticatorService,
    private router: Router,
  ) {
    this.userFormBuilder = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  ionViewWillLoad() {
  }

  doSomethingAfterUserLogin(user) {
    console.log('Do something after login :)');
  }

  // Anonymous user login
  anonymousUser() {
    this.authenticator.anonymousUser()
    .then((user) => {
      this.doSomethingAfterUserLogin(user);
    })
    .catch((e) => {
      this.alertCtrl.create({
        header: 'Error',
        message: `Failed to login ${e.message}`,
        buttons: [{ text: 'Ok' }]
      }).then(alert => alert.present());
    });
  }

  signInWithOAuth(provider: string) {
    this.platform.is('cordova') ? this.authenticator.signInWithOAuth(provider) : this.authenticator.signInWithOAuthBrowserMode(provider)
    .then((user) => {
      this.doSomethingAfterUserLogin(user);
    })
    .catch((e) => {
      this.alertCtrl.create({
        header: 'Error',
        message: `Failed to login ${e}`,
        buttons: [{ text: 'Ok' }]
      }).then(alert => alert.present());
    });
  }

  // Perform login using user and password
  login() {
    const email = this.userFormBuilder.controls.email.value;
    const password = this.userFormBuilder.controls.password.value;
    this.authenticator.login(email, password)
    .then((user) => {
      this.doSomethingAfterUserLogin(user);
    })
    .catch((e) => {
      this.alertCtrl.create({
        header: 'Error',
        message: `Failed to login ${e.message}`,
        buttons: [{ text: 'Ok' }]
      }).then(alert => alert.present());
    });
  }

  // Push registration view
  signUp() {
    this.router.navigateByUrl('registration');
  }

  // Reset password
  resetPassword() {
    this.alertCtrl.create({
      header: 'Reset your password',
      message: 'Enter your email so we can send you a link to reset your password',
      inputs: [ { type: 'email', name: 'email', placeholder: 'Email' } ],
      buttons: [
        { text: 'Cancel', handler: data => {} },
        {
          text: 'Done',
          handler: data => {
            this.authenticator.resetPassword(data.email)
            .then(() => {
              this.alertCtrl.create({
                header: 'Success',
                message: 'Your password has been reset - Please check your email for further instructions.',
                buttons: [{ text: 'Ok' }]
              }).then(alert => alert.present());
            })
            .catch((e) => {
              this.alertCtrl.create({
                header: 'Error',
                message: `Failed to login ${e.message}`,
                buttons: [{ text: 'Ok' }]
              }).then(alert => alert.present());
            });
          }
        }
      ]
    }).then(alert => alert.present());
  }

}
