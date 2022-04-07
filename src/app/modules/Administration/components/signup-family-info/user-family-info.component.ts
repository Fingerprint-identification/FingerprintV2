import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../shared/services/signup.service';

@Component({
  selector: 'app-user-family-info',
  templateUrl: './user-family-info.component.html',
  styleUrls: [
    './user-family-info.component.scss',
    '../../shared/admin-global-style.scss',
  ],
})
export class UserFamilyInfoComponent implements OnInit {
  // Local reference to carry Family Entered data
  familyForm!: FormGroup;
  // Local reference to carry Family data from cookies
  familyData !: any;
  // Local reference to carry massegeError happened
  massegeError !: string;
  // Local reference to check if the form submited successfuly
  formSubmited: boolean = false;
  /**
   * @param router to access some properities from router
   * @param signUpAuth to access some signUpAuth services services from signUpAuth services
   */
  constructor(private router: Router, private signUpAuth: SignupService) {

  }

  ngOnInit(): void {
    // to check if the form submitted to display required fields that admin wasn't filled
    this.formSubmited = (window.localStorage.getItem("submited")) ? true: false;
    // Get familyData stored in cookies to put it into formControl value to display to admin for access it
    this.familyData = this.signUpAuth.getThisDataWithThisNameFromCookies("familyData");
     // Form validation
    this.familyForm = new FormGroup({
      mother_FullName: new FormControl(this.familyData.mother_FullName, [
        Validators.required,
        Validators.minLength(3),
      ]),
      motherNationality: new FormControl(this.familyData.motherNationality, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('Egyption'),
      ]),
      motherId: new FormControl(this.familyData.motherId, [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ]),
      fatherFullName: new FormControl(this.familyData.fatherFullName, [
        Validators.required,
        Validators.minLength(3),
      ]),
      fatherNationality: new FormControl(this.familyData.fatherNationality, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('Egyption'),
      ]),
      fatherId: new FormControl(this.familyData.fatherId, [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ]),
    });
  }
  /**
   * this method detect data entered by user about family edited or not
   */
  FormEdited() {
    // check the validation
    if(this.familyForm.valid)
      this.signUpAuth.validationChecker("familyForm", "valid")
    else
      this.signUpAuth.validationChecker("familyForm", "invalid")
    // store data entered by admin about family
    this.signUpAuth.saveThisDataWithThisNameInCookies(this.familyForm.value, "familyData");
  }
}
