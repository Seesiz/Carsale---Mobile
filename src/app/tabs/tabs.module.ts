import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { Router } from '@angular/router';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, TabsPageRoutingModule],
  declarations: [TabsPage],
})
export class TabsPageModule {
  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('carsaleTokken') == null) {
      this.router.navigateByUrl('login');
    }
  }
}
