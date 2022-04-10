import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../../shared/services/signup.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  imgUploaded: boolean = false;

  constructor(public router: Router, private signUpServices: SignupService){}

  ngOnInit(): void {
    this.signUpServices.__uploadedImg$.subscribe({
      next: (res) => {
        this.imgUploaded = res;
      },
      error:()=>{
        this.imgUploaded = false;
      }
    })
    this.imgUploaded = this.signUpServices.checkImgUploaded();
  }
  formatUserInformation(){
    this.signUpServices.deleteThisDataWithThisNameFromCookies("userInformation");
  }
}
