import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../shared/services/signup.service';

@Component({
  selector: 'app-family-searched-info',
  templateUrl: './family-searched-info.component.html',
  styleUrls: ['./family-searched-info.component.scss', '../../shared/admin-global-style.scss']
})
export class FamilySearchedInfoComponent implements OnInit {
  familyData !: any;
  constructor(private signUpServices: SignupService){}
  ngOnInit(): void {
    this.familyData = this.signUpServices.getUserSignUpData("userInformation");
  }

}
