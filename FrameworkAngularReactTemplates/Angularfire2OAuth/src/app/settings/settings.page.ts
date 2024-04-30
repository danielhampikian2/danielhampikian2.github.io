import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AuthenticatorService } from '../providers/authenticator';
import { Loader } from '../providers/loader';
import { User } from '../providers/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  userFormBuilder: FormGroup;
  userDetails: User;

  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private loader: Loader,
    private alertCtrl: AlertController,
    public authenticatorService: AuthenticatorService,
  ) {
    authenticatorService.userDetails$.subscribe(userDetails => {
      this.userFormBuilder.patchValue({ fullName: userDetails.fullName });
    });

    this.userFormBuilder = this.formBuilder.group({
      fullName: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  updateUserSettings() {
    console.log('updating user details on firebase ' + this.constructor.name);
    const fullName = this.userFormBuilder.get('fullName').value;
    this.loader.show('Updating your settings...');
    this.authenticatorService.userRef.update({ fullName: fullName })
    .then((user) => {
        this.loader.hide();
        this.alertCtrl.create({
          header: 'Success',
          message: 'Details updated',
          buttons: [{ text: 'Ok' }]
        }).then(alert => alert.present());
    })
    .catch((e) => {
      this.loader.hide();
      console.error(`Password Login Failure:`, e);
      this.alertCtrl.create({
        header: 'Error',
        message: `Failed to update details. ${e.message}`,
        buttons: [{ text: 'Ok' }]
      }).then(alert => alert.present());
    });
  }
}
