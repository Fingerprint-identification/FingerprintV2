import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { PersonalData } from 'src/app/core/models/userData';
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
  diseases: string[] = ['animia', 'Diabetes'];
  diseasesSubject$ = new BehaviorSubject<string[]>(null!);
  UserForm !: FormGroup;
  UserData !: any;
  MassegeError !: string;

  constructor(private TokenStorage: TokenStorageService, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.UserData = this.TokenStorage.GetUserSignUpData("userData");

    this.UserForm = new FormGroup({
      FullName: new FormControl(this.UserData.FullName, [
        Validators.required,
        Validators.minLength(3),
      ]),
      Gender: new FormControl(this.UserData.Gender, [Validators.required]),
      Nationality: new FormControl(this.UserData.Nationality, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('Egyption'),
      ]),
      ID: new FormControl(this.UserData.ID, [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ]),
      BirthDate: new FormControl(this.UserData.BirthDate, [Validators.required]),
      BirthPlace: new FormControl(this.UserData.BirthPlace, [Validators.required]),
      Phone: new FormControl(this.UserData.Phone, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ]),
      Email: new FormControl(this.UserData.Email, [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      Street: new FormControl(this.UserData.Street, [Validators.required]),
      Address: new FormControl(this.UserData.Address, [Validators.required]),
      Diseases: new FormControl(''),
    });

    this.diseasesSubject$.next([...this.diseases]);

  }
  // store user Diseases
  AddDiseases(Diseases: HTMLInputElement) {
    this.diseases.push(Diseases.value);
    this.diseasesSubject$.next([...this.diseases]);

    this.TokenStorage.SaveDiseases([...this.diseases], "Diseases");
  }

  // store user data
  FormEdited() {
    this.TokenStorage.SaveUserSignUpData(this.UserForm.value, "userData");
  }
}
