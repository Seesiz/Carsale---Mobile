import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';
import { ErrorService } from '../Service/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, NgIf],
})
export class LoginComponent implements OnInit {
  ngOnInit() {
    if (localStorage.getItem('carsaleTokken') != null) {
      this.router.navigateByUrl('/home/accueil');
    }
  }

  changeState: boolean = false;
  form = 'max-height: 90%; left: 5%; overflow-y: auto';
  divstyle = 'divstyle-login';
  dataToInsert: any = {};
  error: any = {};
  connected: any = {};

  constructor(
    private userService: UserService,
    private router: Router,
    private ErrorService: ErrorService
  ) {
    this.ErrorService.data$.subscribe((value) => (this.error = value));
  }

  makeChangeState() {
    if (this.changeState) {
      this.form =
        'max-height: 90%; left: 100%; overflow-y: auto; transform: translateX(-105%)';
      this.divstyle = 'divstyle-logon';
    } else {
      this.form = 'max-height: 90%; left: 5%; overflow-y: auto';
      this.divstyle = 'divstyle-login';
    }
  }

  async login() {
    //Mampety fontsiny aloha
    localStorage.setItem('CarSalTokken', '');
    localStorage.setItem('CarsalidPersonne', '');
    this.connected = {
      statut: true,
    };
    this.router.navigateByUrl('/home/accueil');
    /*  this.dataToInsert = {
      mail: this.dataToInsert.mail ? this.dataToInsert.mail : '',
      motDePass: this.dataToInsert.motDePass ? this.dataToInsert.motDePass : '',
    };

    for (let item of Object.keys(this.dataToInsert)) {
      if (this.dataToInsert[item].trim() == '') {
        this.error = {
          statut: true,
          message: 'Tous les champs doivent être remplies',
        };
        this.ErrorService.updateData(this.error);
        return;
      }
    }
    try {
      const response = await this.userService.login(
        this.dataToInsert.mail,
        this.dataToInsert.motDePass
      );
      if (!response.statut) {
        this.error = {
          statut: true,
          message: response.message,
        };
        this.ErrorService.updateData(this.error);
        return;
      }
      localStorage.setItem('CarSalTokken', response.tokken.valeurtokken);
      localStorage.setItem(
        'CarsalidPersonne',
        response.tokken.personne.idPersonne
      );
      this.connected = {
        statut: true,
      };
      this.ConnectionService.updateData(this.connected);
      this.router.navigateByUrl('');
    } catch (error) {
      this.error = {
        statut: true,
        message: error,
      };
      this.ErrorService.updateData(this.error);
      return;
    }*/
  }

  async insertData() {
    /*this.dataToInsert = {
      mail: this.dataToInsert.mail ? this.dataToInsert.mail : '',
      motDePass: this.dataToInsert.motDePass ? this.dataToInsert.motDePass : '',
      nom: this.dataToInsert.nom ? this.dataToInsert.nom : '',
      prenom: this.dataToInsert.prenom ? this.dataToInsert.prenom : '',
      sexe: this.dataToInsert.sexe ? this.dataToInsert.sexe : '',
      dateNaissance: this.dataToInsert.dateNaissance
        ? this.dataToInsert.dateNaissance
        : '',
      contact: this.dataToInsert.contact ? this.dataToInsert.contact : '',
      cin: this.dataToInsert.cin ? this.dataToInsert.cin : '',
    };

    let match = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.exec(
      this.dataToInsert.dateNaissance
    );

    if (!match) {
      this.error = {
        statut: true,
        message: 'Format de la date INVALID',
      };
      this.ErrorService.updateData(this.error);
      return;
    }

    for (let item of Object.keys(this.dataToInsert)) {
      if (this.dataToInsert[item].toString().trim() == '') {
        this.error = {
          statut: true,
          message: 'Tous les champs doivent être remplies',
        };
        this.ErrorService.updateData(this.error);
        return;
      }
    }

    try {
      const response = await this.userService.insertUser(this.dataToInsert);
      if (!response.statut) {
        this.error = {
          statut: true,
          message: response.message,
        };
        this.ErrorService.updateData(this.error);
        return;
      }
      localStorage.setItem('CarSalTokken', response.tokken.valeurtokken);
      localStorage.setItem(
        'CarsalidPersonne',
        response.tokken.personne.idPersonne
      );
      this.connected = {
        statut: true,
      };
      this.ConnectionService.updateData(this.connected);
      this.router.navigateByUrl('');
    } catch (error) {
      this.error = {
        statut: true,
        message: error,
      };
      this.ErrorService.updateData(this.error);
      return;
    }*/
  }
}
