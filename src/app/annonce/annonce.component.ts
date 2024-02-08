import { Component, Input, OnInit } from '@angular/core';
import { GeneraliserService } from '../Service/generaliser.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss'],
})
export class AnnonceComponent implements OnInit {
  @Input() data: any = {};

  class: string = 'card one col-12';
  isConnected: boolean = false;
  me: number = 0;

  ngOnInit() {
    const me = localStorage.getItem('CarsalidPersonne');
    if (me != null) {
      this.me = Number.parseInt(me);
      console.log(this.data);
    }
  }

  constructor(private generaliserService: GeneraliserService) {}

  async vendu(annonce: any) {
    await this.generaliserService.modifier(
      'annonces/etat?idAnnonce=' + annonce.id + '&etat=' + 20,
      null
    );
    annonce.etat = 20;
  }

  async supprimer(annonce: any) {
    await this.generaliserService.modifier(
      'annonces/etat?idAnnonce=' + annonce.id + '&etat=' + 5,
      null
    );
    annonce.etat = 5;
  }
}
