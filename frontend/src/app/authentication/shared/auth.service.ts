import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor() { }

  login(user: any) {
    return new Promise((resolve) => {
      resolve(true);
    });
  }

  register(register: any) {
    return new Promise((resolve) => {
      resolve(true);
    });
  }
}
