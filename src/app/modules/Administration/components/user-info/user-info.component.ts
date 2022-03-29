import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: [
    './user-info.component.scss',
    '../../global-style/admin-global-style.scss',
  ],
})
export class UserInfoComponent implements OnInit {
  // Local reference to carry diseases
  diseases : string[] = [];
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
   * @param TokenStorage to access token services from token storage
   * @param router to access some properities from router
   * @param auth to access some auth services services from auth services
   */
  constructor(private TokenStorage: TokenStorageService, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    // Get userData stored in cookies to put it into formControl value to display to admin for access it
    this.userData = this.TokenStorage.GetUserSignUpData("userData");
    // to check if the form submitted to display required fields that admin wasn't filled
    this.formSubmited = (window.localStorage.getItem("submited")) ? true : false;
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
  }
  // store user Diseases
  AddDiseases(diseases: HTMLInputElement) {
    this.diseases.push(diseases.value);
    this.diseasesSubject$.next([...this.diseases]);
    // save diseases in cookies
    this.TokenStorage.SaveDiseases([...this.diseases], "diseases");
  }

  // store user data when changed
  FormEdited() {
    if (this.userForm.valid)
      this.auth.ValidationChecker("userForm", "valid")
    else
      this.auth.ValidationChecker("userForm", "invalid");

    this.TokenStorage.SaveUserSignUpData(this.userForm.value, "userData");
  }
}
