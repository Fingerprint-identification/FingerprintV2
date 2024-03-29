import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { environment } from 'src/environments/environment';

const AUTH_API = `${environment.apiUrl}` + "api/v1/users";

@Injectable({
  providedIn: 'root'
})
export class SignupApiService implements OnInit {
  token !: string;
  constructor(private Token: TokenStorageService, private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  addUser(userData: any): Promise<any> {
    var myHeaders = new Headers();
    const token = this.Token.GetToken();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(userData),
    };
    return fetch(AUTH_API, requestOptions);
  }
  updateUserById(id: string, updatedData: any): Observable<any>{
    return this.http.put(AUTH_API + '/updateUserData/' + id, {updatedData})
  }
  getUserById(id: string): Observable<any>{
    return this.http.get(AUTH_API + '/' + id);
  }
  getUserByNationalId(nationalId: string): Observable<any>{
    return this.http.get(AUTH_API + '?search=' + nationalId);
  }
  deleteUserByNationalId(userId: string): Observable<any>{
    return this.http.delete(AUTH_API + '/' + userId);
  }
}
