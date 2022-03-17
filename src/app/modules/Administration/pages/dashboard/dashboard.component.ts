import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pages: string[] = ['signup', 'checkFingerprint', 'searchUser'];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Active(page: string){
    this.router.url.includes(`/${page}`);
  }

}
