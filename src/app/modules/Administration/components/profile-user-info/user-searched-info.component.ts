import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SignupService } from '../../shared/services/signup.service';

@Component({
  selector: 'app-user-searched-info',
  templateUrl: './user-searched-info.component.html',
  styleUrls: ['./user-searched-info.component.scss', '../../shared/admin-global-style.scss']
})
export class UserSearchedInfoComponent implements OnInit {
  // Local reference to carry diseases
  diseases: string[] = [];
  // Local BehaviorSubject to carry diseases
  diseasesSubject$ = new BehaviorSubject<string[]>(null!);
  // Local reference to carry User Entered data
  userForm !: FormGroup;
  // Local reference to carry User data from cookies
  userData !: any;
  // Local reference to carry massegeError happened
  massegeError !: string;
  // Local reference to check if the form submited successfuly
  formSubmited: boolean = false;
  /**
   * @param router to access some properities from router
   * @param signUpAuth to access some signUpAuth services services
   */
  constructor(private router: Router, private signUpAuth: SignupService) { }

  ngOnInit(): void {
    // Get userData stored in cookies to put it into formControl value to display to admin for access it
    this.userData = this.signUpAuth.getUserSignUpData("userInformation");

    // Form validation
    this.userForm = new FormGroup({
      fullName: new FormControl(this.userData.fullName, [
        Validators.required,
        Validators.minLength(3),
      ]),
      gender: new FormControl(this.userData.gender, [Validators.required]),
      nationality: new FormControl(this.userData.nationality, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('Egyption'),
      ]),
      id: new FormControl(this.userData.id, [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ]),
      birthDate: new FormControl(this.userData.birthDate, [Validators.required]),
      birthPlace: new FormControl(this.userData.birthPlace, [Validators.required]),
      phone: new FormControl(this.userData.phone, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ]),
      email: new FormControl(this.userData.email, [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      street: new FormControl(this.userData.street, [Validators.required]),
      address: new FormControl(this.userData.address, [Validators.required]),
      diseases: new FormControl(''),
    });

    // get deseases from cookies to display to user
    this.diseases = (this.signUpAuth.getDiseases("diseases"));
    // Added deseases to this subject
    this.diseasesSubject$.next([...this.diseases]);
  }
  /**
   * This function detect the diseases user entred
   * @param diseases
   */
  AddDiseases(diseases: HTMLInputElement) {
    if (diseases.value !== '') {
      this.diseases.push(diseases.value);
      this.diseasesSubject$.next([...this.diseases]);
      // save diseases in cookies
      this.signUpAuth.saveDiseases([...this.diseases], "diseases");
    }
  }
  /**
  * this method detect data entered by user about user edited or not
  */
  FormEdited() {
    // check the validation
    if (this.userForm.valid) {
      this.signUpAuth.validationChecker("userForm", "valid")
    }
    else
      this.signUpAuth.validationChecker("userForm", "invalid");
    // store data entered by admin about user info
    this.signUpAuth.saveUserSignUpData(this.userForm.value, "userData");
  }
}
