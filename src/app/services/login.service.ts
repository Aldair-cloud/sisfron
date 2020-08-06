import { Login } from '../models/usuario';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; 

@Injectable()
export class LoginService{
    private HttpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(
        private _http: HttpClient
    ){}

    save(login:Login){
        return this._http.post<any>('http://localhost:8080/' + 'create',login,{headers: this.HttpHeaders});
    }
}