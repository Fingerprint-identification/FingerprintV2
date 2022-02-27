import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";

import { Router } from "@angular/router";

import { BehaviorSubject, map, Observable, tap } from "rxjs";

import { User } from "src/app/core/models/user";

import { environment } from "src/environments/environment";

/**
 * Auth services injectable
 */
@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  /**
   * Local BehaviorSubject
   */
  /*
  private UserSubject!: BehaviorSubject<User>;
  public user!: Observable<User>;
  isLoggedIn = false;

  constructor(private router: Router, private http: HttpClient) {
    this.UserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("user") || "{}")
    );
    this.user = this.UserSubject.asObservable();
  }

  public get userValue(): User {
    return this.UserSubject.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}login`, {
        username,
        password,
      })
      .pipe(
        map((user) => {
          if (user && user.token) {
            localStorage.setItem("token", user.token);
            this.isLoggedIn = true;
          }
          this.UserSubject.next(user);
          return user;
        })
    );
  }

  getToken(){
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    this.UserSubject.next(null!);
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }*/

}




