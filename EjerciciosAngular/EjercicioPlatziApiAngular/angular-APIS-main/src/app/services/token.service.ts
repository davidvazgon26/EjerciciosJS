import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

/*
nuestro token lo podemos guardar en:
In memory storage
LocalStorage & SessionStorage
Cookie storage
*/
export class TokenService {
  constructor() {}

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }
}
