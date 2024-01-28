import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { AnnonceComponent } from '../annonce/annonce.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, Tab1PageRoutingModule],
  declarations: [Tab1Page, AnnonceComponent],
})
export class Tab1PageModule {}
