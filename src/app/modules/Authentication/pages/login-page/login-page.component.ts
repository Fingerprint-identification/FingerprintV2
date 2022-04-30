import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
/**
 * Login page component
 */
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss', '../../shared/global-style.component.scss']
})
export class LoginPageComponent implements OnInit {

  TitleOfComingPage !: string;
  /**
   * Constructor
   */
  constructor(private Http: HttpClient, private token: TokenStorageService) {
  }

  /**
   * ngOnInit
   */
  ngOnInit(): void {
  }

}
