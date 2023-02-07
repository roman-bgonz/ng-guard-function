import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  getToken = () => {
    return localStorage.getItem('token') ? true : false;
  };

  login = (user: any) => {
    localStorage.setItem('token', JSON.stringify(user));
  };

  logout = () => {
    localStorage.removeItem('token');
  };
}
