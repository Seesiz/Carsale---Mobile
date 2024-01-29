import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';
import axios, { Axios } from 'axios';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'https://carsale-back-production.up.railway.app';

  constructor() {}

  async insertUser(data: any) {
    try {
      const response = await axios.post(`${this.url}/personnes`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async login(mail: any, motDePasse: string) {
    try {
      const formData = new FormData();
      formData.append('mail', mail);
      formData.append('motDePass', motDePasse);
      const response = await axios.post(
        `${this.url}/personnes/login`,
        formData
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
