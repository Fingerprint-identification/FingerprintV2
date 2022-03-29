import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async, delay, Observable, tap } from 'rxjs';
import { PersonalData } from 'src/app/core/models/userData';
import { environment } from 'src/environments/environment';

// const AUTH_API = "https://6221f299666291106a1836f7.mockapi.io/api/auth/";
const convertImg_API = "https://5818-197-54-114-107.ngrok.io/";
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
    Confirm(password: string, passwordConfirm: string) {
        return this.Http.patch(AUTH_API + 'updateForgotPassword', {
            password,
            passwordConfirm
        });
    }
    GetUserById(id: number): Observable<any> {
        return this.Http.get(AUTH_API + 'login/' + id);
    }

    sendImgToConvert(requestOptions: any): Promise<any>{
        return fetch(convertImg_API + "convertImageToMatrix", requestOptions);
    }
    sendUserData(userData: any): Promise<any>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(userData),
        };
        return fetch("https://still-escarpment-38033.herokuapp.com/api/users/signup", requestOptions);
    }

}