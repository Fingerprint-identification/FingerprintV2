import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { environment } from 'src/environments/environment';

const AUTH_API = `${environment.apiUrl}` + "api/users/";

@Injectable({
  providedIn: 'root'
})
export class SignupApiService implements OnInit {
  token !: string;
  constructor(private Token: TokenStorageService, private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  sendUserData(userData: any): Promise<any> {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(userData),
    };
    return fetch(AUTH_API + "signup", requestOptions);
  }
  getUserById(id: string): Observable<any>{
    return this.http.get(AUTH_API + 'id/' + id);
  }
  getUserByNationalId(nationalId: string): Observable<any>{
    return this.http.get(AUTH_API + 'national/' + nationalId);
  }
}
