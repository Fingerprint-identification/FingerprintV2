import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';

import { PersonalData } from 'src/app/core/models/userData';

import { SignupService } from '../../shared/services/signup.service';

/**
 * @pagesRequirements class this class contains all variables we
 * need for move between pages
 */
export class pagesRequirements {
  // Local referance that carry all pages to make back, next btns in it
  pages: string[] = ['scan', 'signupUser', 'signupFamily', 'done'];
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

}

/**
 * @swapBetweenPages this class extend @pagesRequirements
 * to access variables in it and in this class we make function that access
 * navigation and make two buttons back and next buttons
 * need for move between pages
 */
export class swapBetweenPages extends pagesRequirements {
  /**
   * @param router we use it to access navigation to
   * make back and next buttons
   */
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
  getCurrentPath(condition: number): void {
    this.lastUrlSegment = this.router.url.split('?')[0].split('/').pop()!;
    this.indexOfPage = this.pages.indexOf(this.lastUrlSegment!);
    if (this.indexOfPage == this.pages.length - condition) {
      this.submit = true;
    } else {
      this.submit = false;
    }
  }

  // back btn
  backBtn(): void {
    this.getCurrentPath(0);
    this.submit = false;
    if (this.indexOfPage == 0 || this.indexOfPage == -1)
      return;
    this.newPageUrl = this.mainUrl + this.pages[this.indexOfPage - 1];
    this.router.navigate([this.newPageUrl]);
  }
  // next btn
  nextBtn(): void {
    this.getCurrentPath(2);
    if (this.indexOfPage == this.pages.length - 1 || this.indexOfPage == -1)
      return;
    this.newPageUrl = this.mainUrl + this.pages[this.indexOfPage + 1];
    this.router.navigate([this.newPageUrl]);
  }

};

/**
* @ButtonsComponent this class extends @swapBetweenPages to access buttons and swap between
* pages dependent on user interactive
*/
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})

export class ButtonsComponent extends swapBetweenPages implements OnInit {
  /**
   * Local reference (dataType : PersonalData) that store all the user data
   * to send it to api
   */
  dataOfUser !: PersonalData;

  /**
   * this variables stored in cookies, and we store it from each form in cookies
   * .to access it here and know our data that'll send to api
   */
  private userDataCookiesName: string = "userData";
  private familyDataCookiesName: string = "familyData";
  private diseasesCookiesName: string = "diseases";
  private fingerprintMatrixCookiesName: string = "fingerprint";

  private userData !: any;
  private familyData !: any;
  private diseases !: any;
  private fingerprintMatrix !: any;

  /**
   *  method to assign the data selected from cookies to variables to access it to send to api
   */
  executeGettingData(): void {
    this.userData = this.signUpAuth.getThisDataWithThisNameFromCookies(this.userDataCookiesName);
    this.familyData = this.signUpAuth.getThisDataWithThisNameFromCookies(this.familyDataCookiesName);
    this.diseases = this.signUpAuth.getThisDataWithThisNameFromCookies(this.diseasesCookiesName);
    this.fingerprintMatrix = this.signUpAuth.getThisDataWithThisNameFromCookies(this.fingerprintMatrixCookiesName);
  }

  /**
   * @param __router to get the last url word from navigation
   * @param signUpAuth to access some signUpAuth services
   * @param spinner we use it to access spinner
   */
  constructor
    (
      private __router: Router,
      private signUpAuth: SignupService,
      private spinner: NgxSpinnerService
    ) {
    super(__router);
  }
  // by default make it specifiy the condition
  ngOnInit(): void {
    super.getCurrentPath(1);
  }
  // back btn
  back(): void {
    super.backBtn();
  }
  // next btn
  next(): void {
    super.nextBtn();
  }

  submitForm(): void {
    // run spinner
    this.spinner.show();
    // Admin add submition true in localStorage to make all forms check
    this.signUpAuth.makeformSubmitted("true");
    // check if the family form is valid and user form is valid and it was applied in userForm and familyForm
    if (this.signUpAuth.getValidationChecker("familyForm") === 'valid' && this.signUpAuth.getValidationChecker("userForm") === 'valid') {
      this.executeGettingData();
      if (this.userData !== 'false' && this.fingerprintMatrix !== 'false' && this.familyData !== 'false') {
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
          fingerprint: this.fingerprintMatrix,
          father_id: this.familyData.fatherId,
          mother_id: this.familyData.motherId
        });
        // sending User data to api
        this.signUpAuth.sendUserData(this.dataOfUser).then(
          (_) => {
            this.spinner.hide();
            alert("User added successfuly!");
            // delete all data in localStorage after submitting
            this.signUpAuth.clearUserDataAfterSubmit();
            // make form not submitted for new user
            this.signUpAuth.makeformSubmitted("false");
            this.router.navigate(['/Admin/signup/scan']);
          }).catch(error => {
            this.spinner.hide();
            alert("Opps, Some data have problem: User " + error.message)
          });
      }
    } else {
      this.spinner.hide();
      alert("Please some fields you skipped is required!");
      return;
    }
  }
}
