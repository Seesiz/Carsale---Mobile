import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class GeneraliserService {
  url: string = 'http://localhost:8080';
  constructor() {}

  async getAll(path: string) {
    try {
      const response = await axios.get(`${this.url}/${path}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async insert(path: string, data: any) {
    try {
      const response = await axios.post(`${this.url}/${path}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async insertWithTokken(path: string, data: any, headers: any) {
    try {
      const response = await axios.post(`${this.url}/${path}`, data, {
        headers,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async modifier(path: string, data: any) {
    try {
      const response = await axios.put(`${this.url}/${path}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async delete(path: string, id: number) {
    try {
      const response = await axios.delete(`${this.url}/${path}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
