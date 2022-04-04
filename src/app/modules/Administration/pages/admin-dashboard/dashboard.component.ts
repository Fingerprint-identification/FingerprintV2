import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(public router: Router, private cookieService: CookieService){}
  ngOnInit(): void {
  }
  formatUserInformation(){
    this.cookieService.delete("userInformation");
  }
}
