import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

  export class RegisterService {

    registersUrl = 'http://localhost:4200/register';

    constructor(private http: HttpClient) { }

    listRegisters() {
        return this.http.get<Array<any>>(this.registersUrl);
    }
  }