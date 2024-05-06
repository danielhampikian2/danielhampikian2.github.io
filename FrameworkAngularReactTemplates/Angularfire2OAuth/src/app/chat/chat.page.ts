import { Component, OnInit, ViewChild  } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticatorService } from '../providers/authenticator';
import { User } from '../providers/user';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  userDetails$: Observable<any>;
  userDetails: User;
  chatControl: any;

  messages: Observable<any>;
  subscription: Subscription;
  message = '';

  constructor(
    public navCtrl: NavController,
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    private formBuilder: FormBuilder,
    private authenticatorService: AuthenticatorService
  ) {
    // Get messages and join with user details
    this.messages = db.list('/messages', ref => ref.orderByKey().limitToLast(5)).valueChanges();

    this.chatControl = this.formBuilder.group({
      message: ['', Validators.required]
    });
    this.userDetails$ = this.authenticatorService.userDetails$;
    this.userDetails$.subscribe(userDetails => {
      this.userDetails = new User(userDetails);
    });
  }

  ngOnInit() {
  }

  sendMessage() {
    console.log('sending message to chat ' + this.constructor.name);

    this.db.list('/messages')
    .push({
      fullName: this.userDetails.fullName,
      provider: this.userDetails.provider,
      avatar: this.userDetails.avatar,
      userUid: this.userDetails.uid,
      value: this.message
    });
    this.message = '';
  }

  ionViewDidLoad() {
  }

  ionViewWillUnload() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
