import { Component } from '@angular/core';
import { ErrorService } from '../Service/error.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  error: any = {};

  constructor(private ErrorService: ErrorService) {
    this.ErrorService.data$.subscribe((value) => (this.error = value));
  }
}
