import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss'],
})
export class AnnonceComponent implements OnInit {
  @Input() data: any = {};

  isFavorite: boolean = false;
  iconEtat: string = 'regular';
  isShow: boolean = false;
  class: string = 'card one col-12';
  isShowDetail: boolean = false;
  showDetail: string = 'voirDetail VoirInactive';
  isConnected: boolean = false;
  me: number = 0;
  favoriseurs: number = 0;

  ngOnInit() {
    const me = localStorage.getItem('CarsalidPersonne');
    if (me != null) {
      this.me = Number.parseInt(me);
      this.data.favoriseur.map((user: number) => {
        if (this.me == user) {
          this.iconEtat = 'solid';
          this.isFavorite = true;
        }
      });
      this.favoriseurs = this.data.favoriseur.length;
    }
  }

  makeShow() {
    this.isShow = !this.isShow;
    if (this.isShow) {
      this.class = 'card one one_active col-12';
    } else {
      this.class = 'card one col-12';
    }
  }

  makeShowDetail() {
    this.isShowDetail = !this.isShowDetail;
    if (!this.isShowDetail) {
      this.showDetail = 'voirDetail VoirInactive';
    } else {
      this.showDetail = 'voirDetail';
    }
  }
}
