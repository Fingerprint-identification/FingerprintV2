import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PersonalData } from 'src/app/core/models/userData';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

export class pagesRequirements {
  // Local referance that carry all pages to make back, next btns in it
  pages: string[] = ['scan', 'userInfo', 'familyInfo', 'done'];
  // Local referance carry the last substring from the routing
  lastUrlSegment !: string;
  // Local referance to carry the index of the page when loop in array of pages
  indexOfPage !: number;
  // Local referance to check the submition
  submit: boolean = false;
  // Local referance to carry the main URL
  mainUrl: string = 'Admin/signup' + '/';
  // Local referance carry the new page url assigned ot it and
  // by defult it's location is the first page
  newPageUrl: string = this.mainUrl + this.pages[0];

  constructor() { }
}
export class swapBetweenPages extends pagesRequirements {

  constructor(public router: Router) {
    super();
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

  // back btn
  backBtn() {
    this.getCurrentPath(0);
    this.submit = false;
    if (this.indexOfPage == 0 || this.indexOfPage == -1)
      return;
    this.newPageUrl = this.mainUrl + this.pages[this.indexOfPage - 1];
    this.router.navigate([this.newPageUrl]);
  }
  // next btn
  nextBtn() {
    this.getCurrentPath(2);
    if (this.indexOfPage == this.pages.length - 1 || this.indexOfPage == -1)
      return;
    this.newPageUrl = this.mainUrl + this.pages[this.indexOfPage + 1];
    this.router.navigate([this.newPageUrl]);
  }

};

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})

export class ButtonsComponent extends swapBetweenPages implements OnInit {
  dataOfUser !: PersonalData;

  private userDataCookiesName: string = "userData";
  private familyDataCookiesName: string = "familyData";
  private diseasesCookiesName: string = "diseases";
  private fingerprintMatrixCookiesName: string = "fingerprint";

  private userData !: any;
  private familyData !: any;
  private diseases !: any;
  private fingerprintMatrix !: any;

  executeGettingData() {
    this.userData = this.TokenStorage.GetUserSignUpData(this.userDataCookiesName);
    this.familyData = this.TokenStorage.GetUserSignUpData(this.familyDataCookiesName);
    this.diseases = this.TokenStorage.GetUserSignUpData(this.diseasesCookiesName);
    this.fingerprintMatrix = this.TokenStorage.GetUserSignUpData(this.fingerprintMatrixCookiesName);
  }

  /**
   * @param router to get the last url word from navigation
   * @param TokenStorage to access token services from token storage
   * @param auth to access some auth services services from auth services
   */
  constructor(
    private __router: Router,
    private TokenStorage: TokenStorageService,
    private auth: AuthService,
    private spinner: NgxSpinnerService) {

    super(__router);
  }
  // by default make it specifiy the condition
  ngOnInit(): void {
    super.getCurrentPath(1);
  }
  // back btn
  back() {
    super.backBtn();
  }
  // next btn
  next() {
    super.nextBtn();
  }

  submitForm() {
    // run spinner
    this.spinner.show();
    // Admin add submition true in localStorage to make all forms check
    window.localStorage.setItem("submited", "true");
    // check if the family form is valid and user form is valid and it was applied in userForm and familyForm
    if (this.auth.GetValidationChecker("familyForm") === 'valid' && this.auth.GetValidationChecker("userForm") === 'valid') {
      this.executeGettingData();
      if (this.userData && this.familyData) {
        // Create Class Personal Data
        this.dataOfUser = new PersonalData({
          notional_id: this.userData.id,
          password: "123456789",
          passwordConfirm: "123456789",
          fristName: this.userData.fullName,
          lastName: "null",
          role: "user",
          phone: this.userData.phone,
          email: this.userData.email,
          notionalty: this.userData.nationality,
          birthday: this.userData.birthDate,
          gender: this.userData.gender,
          place_of_birth: this.userData.birthPlace,
          address: this.userData.address,
          street: this.userData.street,
          disease: this.diseases,
          fingerprint: [[2],[3]],
          father_id: this.familyData.fatherId,
          mother_id: this.familyData.motherId
        });
        // sending User data to api
        this.auth.sendUserData(this.dataOfUser)
          .then(
            (res: any) => {
              this.spinner.hide();
              alert("User added successfuly!");
              this.TokenStorage.ClearUserDataAfterSubmit();
              this.router.navigate(['/Admin/signup/scan']);
            }).catch(error => {
              this.spinner.hide();
              alert("Opps, Some data have problem")
            });
      }
      // this.TokenStorage.ClearUserDataAfterSubmit();
    } else {
      this.spinner.hide();
      alert("Please some fields you skipped is required!");
      return;
    }
  }
}
