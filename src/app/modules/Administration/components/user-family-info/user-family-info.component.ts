import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-user-family-info',
  templateUrl: './user-family-info.component.html',
  styleUrls: [
    './user-family-info.component.scss',
    '../../global-style/admin-global-style.scss',
  ],
})
export class UserFamilyInfoComponent implements OnInit {
  FamilyForm!: FormGroup;
  FamilyData !: any;
  MassegeError !: string;

  constructor(private TokenStorage: TokenStorageService, private router: Router, private auth: AuthService) {

  }

  ngOnInit(): void {

    // get family data from cookies to put it to admin
    this.FamilyData = this.TokenStorage.GetUserSignUpData("familyData");
    this.FamilyForm = new FormGroup({
      // validation of the range of characters that user should enter
      mother_FullName: new FormControl(this.FamilyData.mother_FullName, [
        Validators.required,
        Validators.minLength(3),
      ]),
      mother_Nationality: new FormControl(this.FamilyData.mother_Nationality, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('Egyption'),
      ]),
      mother_ID: new FormControl(this.FamilyData.mother_ID, [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ]),
      father_FullName: new FormControl(this.FamilyData.father_FullName, [
        Validators.required,
        Validators.minLength(3),
      ]),
      father_Nationality: new FormControl(this.FamilyData.father_Nationality, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('Egyption'),
      ]),
      father_ID: new FormControl(this.FamilyData.father_ID, [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ]),
    });
  }
  // store data about user family
  FormEdited() {
    this.TokenStorage.SaveUserSignUpData(this.FamilyForm.value, "familyData");
  }
}
