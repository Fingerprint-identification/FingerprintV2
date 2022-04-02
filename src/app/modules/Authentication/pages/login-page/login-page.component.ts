import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
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
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  /**
   * ngOnInit
   */
  ngOnInit(): void {
  }

}
