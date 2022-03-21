import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

// const AUTH_API = "https://6221f299666291106a1836f7.mockapi.io/api/auth/";

const AUTH_API = `${environment.apiUrl}` + "api/users/";
const REFRESH_TOKEN = 'REFRESH_TOKEN';

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

    GeneratePinCode(phone: string): Observable<any> {
        return this.Http.post(AUTH_API + 'forgotpassword', {
            phone
        });
    }
    Pin(code: number) {
        return this.Http.post(AUTH_API + 'resetPassword', {
            code
        });
    }
    GetUserById(id: number): Observable<any> {
        return this.Http.get(AUTH_API + 'login/' + id);
    }
}