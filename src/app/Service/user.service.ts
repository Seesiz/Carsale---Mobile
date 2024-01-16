import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:8080';

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
    const formData = new FormData();
    formData.append('mail', mail);
    formData.append('motDePass', motDePasse);
    try {
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
