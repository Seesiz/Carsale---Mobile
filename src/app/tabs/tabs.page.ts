import { Component } from '@angular/core';
import { ErrorService } from '../Service/error.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  error: any = {};

  constructor(private ErrorService: ErrorService, private router: Router) {
    this.ErrorService.data$.subscribe((value) => (this.error = value));
  }
  ngOnInit() {
    if (localStorage.getItem('CarSalTokken') == null) {
      this.router.navigateByUrl('');
    }
  }
}
