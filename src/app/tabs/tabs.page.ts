import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../Service/error.service';
import { Router } from '@angular/router';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import { GeneraliserService } from '../Service/generaliser.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {
  error: any = {};
  token: string = '';

  constructor(
    private ErrorService: ErrorService,
    private router: Router,
    private GenericService: GeneraliserService
  ) {
    this.ErrorService.data$.subscribe((value) => (this.error = value));
  }
  async ngOnInit() {
    this.addListeners();
    this.registerPushNotifications();
    if (localStorage.getItem('CarSalTokken') == null) {
      this.router.navigateByUrl('');
    } else {
      await this.checkNotification('');
      setInterval(async () => {
        await this.checkNotification('Rappel:');
      }, 50000);
    }
  }

  async checkNotification(message: string) {
    const allLastMessage = await this.GenericService.getAll(
      'messages/contacts?idUser=' + localStorage.getItem('CarsalidPersonne')
    );
    const lastContact = allLastMessage.contacts as any[];
    let countMessage = 0;
    lastContact.map((element) => {
      if (element.etat == 0) countMessage += 1;
    });
    await this.GenericService.insert('notification/token', {
      title: 'Carsale',
      message: message + `Vous avez ${countMessage} nouveaux messages`,
      topic: message + `Vous avez ${countMessage} nouveaux messages`,
      token: this.token,
    });
  }

  addListeners = async () => {
    await PushNotifications.addListener('registration', (token) => {
      this.token = token.value;
    });

    await PushNotifications.addListener('registrationError', (err) => {
      alert('Registration error' + err.error);
    });

    await PushNotifications.addListener(
      'pushNotificationReceived',
      (notification) => {
        //alert('Push notification received' + JSON.stringify(notification));
      }
    );

    await PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification) => {
        //alert('Push notification performed' + JSON.stringify(notification));
      }
    );
  };

  async registerPushNotifications() {
    let permStatus = await PushNotifications.checkPermissions();
    //alert(JSON.stringify(permStatus));

    if (permStatus.receive === 'prompt') {
      permStatus = await PushNotifications.requestPermissions();
    }

    if (permStatus.receive !== 'granted') {
      alert('User denied permission!');
    }

    if (permStatus.receive === 'granted') {
      try {
        await PushNotifications.register();
      } catch (error) {
        alert(JSON.stringify(error));
      }
    }
  }
}
