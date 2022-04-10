import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../shared/services/signup.service';

@Component({
  selector: 'app-family-searched-info',
  templateUrl: './family-searched-info.component.html',
  styleUrls: ['./family-searched-info.component.scss', '../../shared/admin-global-style.scss']
})
export class FamilySearchedInfoComponent implements OnInit {
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
    // this.formSubmited = (window.localStorage.getItem("submited")) ? true: false;
    // Get familyData stored in cookies to put it into formControl value to display to admin for access it
    this.familyData = this.signUpAuth.getThisDataWithThisNameFromCookies("userInformation");
     // Form validation
    this.familyForm = new FormGroup({
      mother_FullName: new FormControl(this.familyData.mother_id.fristName, [
        Validators.required,
        Validators.minLength(3),
      ]),
      motherNationality: new FormControl(this.familyData.mother_id.notionalty, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('Egyption'),
      ]),
      motherId: new FormControl(this.familyData.mother_id.notional_id, [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ]),
      fatherFullName: new FormControl(this.familyData.father_id.fristName, [
        Validators.required,
        Validators.minLength(3),
      ]),
      fatherNationality: new FormControl(this.familyData.father_id.notionalty, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('Egyption'),
      ]),
      fatherId: new FormControl(this.familyData.father_id.notional_id, [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ]),
    });
  }
}
