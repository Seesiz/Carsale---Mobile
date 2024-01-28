import { Component } from '@angular/core';
import { GeneraliserService } from '../Service/generaliser.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  data: any[] = [];

  constructor(
    private generaliserService: GeneraliserService
  ) {
  }
  
  async ngOnInit() {
    await this.getMyAnnonce();
  }

  async getMyAnnonce() {
    try {
      var idAnnonceur = localStorage.getItem('CarsalidPersonne');
      const response = await this.generaliserService.getAll('annonces/myannonce?idUser=' + idAnnonceur);
      this.data = response;
    } catch (error) {
      alert(error);
    }
  }
  
}
