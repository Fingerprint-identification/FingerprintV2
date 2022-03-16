import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = "https://6221f299666291106a1836f7.mockapi.io/api/auth/";

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

    constructor(private Http: HttpClient) {
    }

    Login(notional_id: number, password: number): Observable<any> {
        return this.Http.post(AUTH_API + 'login', {
            password,
            notional_id
        });
    }

    GetUserById(id: number): Observable<any> {
        return this.Http.get(AUTH_API + 'login/' + id);
    }
    
}
