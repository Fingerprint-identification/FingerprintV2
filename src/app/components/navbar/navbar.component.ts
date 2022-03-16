import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
/**
 * Navbar component
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;
  /**
   * Constructor
   */

  constructor(private TokenStorage: TokenStorageService, private Auth: AuthService) { }

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    this.isLoggedIn = this.Auth.isLoggedin();
  }

  Logout() {
    this.Auth.SignOut();
    this.isLoggedIn = false;
  }

}
