import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Events } from '@ionic/angular';
import { Loader } from '../providers/loader';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})

export class RegistrationPage implements OnInit {
  user: any;

  constructor(
    private events: Events,
    public navCtrl: NavController,
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    private formBuilder: FormBuilder,
    private loader: Loader,
    private alertCtrl: AlertController
  ) {
    this.user = formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      passwordConfirmation: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() {
  }

  // Create user using form builder controls
  createUser() {
    const fullName = this.user.controls.fullName.value;
    const email = this.user.controls.email.value;
    const password = this.user.controls.password.value;
    const passwordConfirmation = this.user.controls.passwordConfirmation.value;
    this.loader.show('Creating user...');

    new Promise((resolve, reject) => {
      if (passwordConfirmation !== password) {
        reject(new Error('Password does not match'));
      } else {
        resolve();
      }
    })
    .then(() => {
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    })
    .then((user: any) => {
      this.events.publish('user:create', user);
      // Login if successfuly creates a user
      return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    })
    .then((authData: any) => {
      const user = authData.user || authData;
      // CUSTOMISE: Here you can add more fields to your user registration
      // those fields will be stored on /users/{uid}/
      const userRef = this.db.object('/users/' + user.uid);
      userRef.set({
        uid: user.uid,
        provider: user.providerId,
        email: email,
        fullName: fullName
      });
      this.loader.hide();
    })
    .catch((e) => {
      this.loader.hide();
      this.alertCtrl.create({
        header: 'Error',
        message: `Failed to login. ${e.message}`,
        buttons: [{ text: 'Ok' }]
      }).then(alert => alert.present());
    });
  }
}
