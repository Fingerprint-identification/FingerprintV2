import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pages: string[] = ['scan', 'userInfo', 'familyInfo', 'done'];
  mainUrl: string = 'Admin/signup' + '/';
  lastUrlSegment !: string;
  indexOfPage !: number;

  newPageUrl: string = this.mainUrl + 'scan';

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }

  GetCurrentPath() {
    this.lastUrlSegment = this.router.url.split('?')[0].split('/').pop()!;
    this.indexOfPage = this.pages.indexOf(this.lastUrlSegment!);
  }
  Back() {
    this.GetCurrentPath();
    if (this.indexOfPage == 0 || this.indexOfPage == -1)
      return;
    this.newPageUrl = this.mainUrl + this.pages[this.indexOfPage - 1];
    this.router.navigate([this.newPageUrl]);
  }
  Next() {
    this.GetCurrentPath();
    if (this.indexOfPage == this.pages.length - 1 || this.indexOfPage == -1)
      return;
    this.newPageUrl = this.mainUrl + this.pages[this.indexOfPage + 1];
    this.router.navigate([this.newPageUrl]);

  }
}
