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
  // Local referance that carry all pages to make back, next btns in it
  pages: string[] = ['scan', 'userInfo', 'familyInfo', 'done'];
  // Local referance to carry the main URL
  mainUrl: string = 'Admin/signup' + '/';
  // Local referance carry the last substring from the routing
  lastUrlSegment !: string;
  // Local referance to carry the index of the page when loop in array of pages
  indexOfPage !: number;
  // Local referance to check the submition
  submit: boolean = false;
  // Local referance carry the new page url assigned ot it and
  // by defult it's location is the first page
  newPageUrl: string = this.mainUrl + this.pages[0];
  // Local referance carry the data of the user that will send to backend
  dataOfUser !: PersonalData;
  /**
   *
   * @param router to get the last url word from navigation
   * @param TokenStorage to access token services from token storage
   * @param auth to access some auth services services from auth services
   */
  constructor(
    private router: Router, private TokenStorage: TokenStorageService, private auth: AuthService) {
  }
  // Function that get the current page from url and check the postion of the page in array
  // if this postion of page is the last page if
  // true => make the next btn is submit btn
  // false => make it back btn
  // condition have three cases
  // case 0 => if we wand two apply this operation in the back btn
  // case 1 => if we check if the admin in the last page and make refresh the subbmition
  // won't change and still submit
  // case 2 if the admin click btn next in the page before the last page
  // so we change the btn after this click to submit btn
  getCurrentPath(condition: number) {
    this.lastUrlSegment = this.router.url.split('?')[0].split('/').pop()!;
    this.indexOfPage = this.pages.indexOf(this.lastUrlSegment!);
    if (this.indexOfPage == this.pages.length - condition) {
      this.submit = true;
    } else {
      this.submit = false;
    }
  }
  // by default make it specifiy the condition
  ngOnInit(): void {
    this.getCurrentPath(1);
  }
  // back btn
  back() {
    this.getCurrentPath(0);
    this.submit = false;
    if (this.indexOfPage == 0 || this.indexOfPage == -1)
      return;
    this.newPageUrl = this.mainUrl + this.pages[this.indexOfPage - 1];
    this.router.navigate([this.newPageUrl]);
  }
  // next btn
  next() {
    this.getCurrentPath(2);
    if (this.indexOfPage == this.pages.length - 1 || this.indexOfPage == -1)
      return;
    this.newPageUrl = this.mainUrl + this.pages[this.indexOfPage + 1];
    this.router.navigate([this.newPageUrl]);
  }

  submitForm() {
    // Admin add submition true in localStorage to make all forms check
    // if it's have some required fields doesn't filled
    window.localStorage.setItem("submited", "true");
    // check if the family form is valid and user form is valid and it was applied in userForm and familyForm
    if (this.auth.GetValidationChecker("familyForm") === 'valid' && this.auth.GetValidationChecker("userForm") === 'valid') {
      const UserData = this.TokenStorage.GetUserSignUpData('userData');
      const FamilyData = this.TokenStorage.GetUserSignUpData('familyData');
      const Diseases = this.TokenStorage.GetUserSignUpData('Diseases');
      this.dataOfUser = new PersonalData({
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
        fingerprint: [[1.2, 2.2, 33], [1.2, 2.2, 33], [1.2, 2.2, 33]]
      });
      // this.TokenStorage.ClearUserDataAfterSubmit();
      console.log(this.dataOfUser);
    } else {
      alert("Please some fields you skipped is required!");
      return;
    }
  }
}
