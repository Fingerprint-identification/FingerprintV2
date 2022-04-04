import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SignupService } from '../../shared/services/signup.service';

@Component({
  selector: 'app-user-searched-info',
  templateUrl: './user-searched-info.component.html',
  styleUrls: ['./user-searched-info.component.scss', '../../shared/admin-global-style.scss']
})
export class UserSearchedInfoComponent implements OnInit {
  userData !: any;
  constructor(private signUpServices: SignupService){}

  ngOnInit(): void {
    this.userData = this.signUpServices.getUserSignUpData("userInformation");
  }
  AddDiseases(){
  }
}
