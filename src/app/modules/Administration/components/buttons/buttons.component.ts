import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalData } from 'src/app/core/models/userData';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  pages: string[] = ['scan', 'userInfo', 'familyInfo', 'done'];
  mainUrl: string = 'Admin/signup' + '/';
  lastUrlSegment !: string;
  indexOfPage !: number;
  submit: boolean = false;
  newPageUrl: string = this.mainUrl + 'scan';
  DataOfUser !: PersonalData;

  constructor(
    private router: Router, private TokenStorage: TokenStorageService, private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  GetCurrentPath() {
    this.lastUrlSegment = this.router.url.split('?')[0].split('/').pop()!;
    this.indexOfPage = this.pages.indexOf(this.lastUrlSegment!);
  }
  Back() {
    this.GetCurrentPath();
    this.submit = false;

    if (this.indexOfPage == 0 || this.indexOfPage == -1)
      return;
    this.newPageUrl = this.mainUrl + this.pages[this.indexOfPage - 1];
    this.router.navigate([this.newPageUrl]);
  }
  Next() {
    this.GetCurrentPath();
    if(this.indexOfPage == this.pages.length - 2){
      this.submit = true;
    }else{
      this.submit = false;
    }
    if (this.indexOfPage == this.pages.length - 1 || this.indexOfPage == -1)
      return;
    this.newPageUrl = this.mainUrl + this.pages[this.indexOfPage + 1];
    this.router.navigate([this.newPageUrl]);
  }


  Submit(){
    const UserData = this.TokenStorage.GetUserSignUpData('userData');
    const FamilyData = this.TokenStorage.GetUserSignUpData('familyData');
    const Diseases = this.TokenStorage.GetUserSignUpData('Diseases');
    this.DataOfUser = new PersonalData({
      notional_id: UserData.ID,
      fristName: UserData.FullName,
      phone: UserData.Phone,
      email: UserData.Email,
      notionalty: UserData.Nationality,
      birthday: UserData.BirthDate,
      gender: UserData.Gender,
      place_of_birth: UserData.BirthPlace,
      address: UserData.Address,
      street: UserData.Street,
      disease: Diseases,
      fingerprint:[[1.2, 2.2, 33], [1.2, 2.2, 33], [1.2, 2.2, 33]]
    });
    console.log(this.DataOfUser);
  }
}
