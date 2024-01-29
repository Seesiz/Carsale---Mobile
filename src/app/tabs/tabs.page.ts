import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../Service/error.service';
import { Router } from '@angular/router';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {
  error: any = {};

  constructor(private ErrorService: ErrorService, private router: Router) {
    this.ErrorService.data$.subscribe((value) => (this.error = value));
  }
  ngOnInit() {
    this.addListeners();

    if (localStorage.getItem('CarSalTokken') == null) {
      this.router.navigateByUrl('');
    }
  }

  addListeners = async () => {
    await PushNotifications.addListener('registration', (token) => {
      console.log('----------------FCM Token: ', token.value);
      console.log('Registration token:' + token.value);
    });

    await PushNotifications.addListener('registrationError', (err) => {
      alert('Registration error' + err.error);
    });

    await PushNotifications.addListener(
      'pushNotificationReceived',
      (notification) => {
        alert('Push notification received' + JSON.stringify(notification));
      }
    );

    await PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification) => {
        alert('Push notification performed' + JSON.stringify(notification));
      }
    );
  };

  async registerPushNotifications() {
    let permStatus = await PushNotifications.checkPermissions();
    alert(JSON.stringify(permStatus));

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

  getDeliveredNotifications = async () => {
    const notificationList = await PushNotifications.getDeliveredNotifications;
    alert('delivered notifications ' + JSON.stringify(notificationList));
  };
}
