import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { environment } from 'src/environments/environment';

const AUTH_API = `${environment.apiUrl}` + "api/v1/users";

@Injectable({
  providedIn: 'root'
})
export class SignupManagerApiService {
  token !: string;
  constructor(private Token: TokenStorageService, private http: HttpClient) {
  }


  addAdmin(adminData: any): Promise<any> {
    var myHeaders = new Headers();
    const token = this.Token.GetToken();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(adminData),
    };
    return fetch(AUTH_API+'/owner', requestOptions);
  }

  deleteUserByNationalId(userId: string): Observable<any>{
    return this.http.delete(AUTH_API + '/' + userId);
  }
}
