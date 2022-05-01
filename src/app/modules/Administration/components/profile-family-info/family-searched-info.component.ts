import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonalData } from 'src/app/modules/Administration/models/userData';
import { FamilyData } from '../../models/familyData';
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
  // Local reference to carry updated value
  updatedData: PersonalData = {};
  // Local array to store familayDisplayed data
  displayedFamilyData !: FamilyData;
  // user id
  userId !: string;
  /**
   * @param router to access some properities from router
   * @param signUpAuth to access some signUpAuth services services from signUpAuth services
   */
  constructor(private router: Router, private signUpAuth: SignupService) {

  }

  ngOnInit(): void {
    // to check if the form submitted to display required fields that admin wasn't filled
    // this.formSubmited = (window.localStorage.getItem("submited")) ? true: false;
    if (this.signUpAuth.getThisDataWithThisNameFromCookies("familyProfile") === "false") {
      // Get familyData stored in cookies to put it into formControl value to display to admin for access it
      this.familyData = this.signUpAuth.getThisDataWithThisNameFromCookies("userInformation");
      // store user national id
      this.userId = this.signUpAuth.getThisDataWithThisNameFromCookies("userInformation")._id;
      // store data that admin sent for family
      this.assignDataToDisplayedFamilyData([this.familyData.mother_id, this.familyData.father_id]);
    }
    else {// Get familyData stored in cookies to put it into formControl value to display to admin for access it
      this.displayedFamilyData = this.signUpAuth.getThisDataWithThisNameFromCookies("familyProfile");
    }

    // Form validation
    this.familyForm = new FormGroup({
      mother_FullName: new FormControl(this.displayedFamilyData.motherFristName, [
        Validators.required,
        Validators.minLength(3),
      ]),
      motherNationality: new FormControl(this.displayedFamilyData.mothernationality!.charAt(0).toUpperCase() + this.displayedFamilyData.mothernationality!.slice(1),[
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('Egyption'),
      ]),
      motherId: new FormControl(this.displayedFamilyData.motherNotionalId, [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ]),
      fatherFullName: new FormControl(this.displayedFamilyData.fatherFristName, [
        Validators.required,
        Validators.minLength(3),
      ]),
      fatherNationality: new FormControl(this.displayedFamilyData.fathernationality!.charAt(0).toUpperCase() + this.displayedFamilyData.fathernationality!.slice(1), [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('Egyption'),
      ]),
      fatherId: new FormControl(this.displayedFamilyData.fatherNotionalId, [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ]),
    });
  }
  /**
   * this method detect data entered by user about family edi ted or not
   */
  FormEdited() {
    // check the validation
    if (this.familyForm.valid)
      this.signUpAuth.makeValidationOf("familyProfileForm", "valid")
    else
      this.signUpAuth.makeValidationOf("familyProfileForm", "invalid")
    this.updateFamilyProfileLocal();
  }
  userEditInfo(key: keyof PersonalData, value: any) {
    this.updatedData[key] = value;
  }
  updateData() {
    const userValidation = this.signUpAuth.validationOf("userProfileForm");
    const familyValidation = this.signUpAuth.validationOf("familyProfileForm");
    // Get userData stored in cookies to put it into formControl value to display to admin for access it
    const userInfo = this.signUpAuth.getThisDataWithThisNameFromCookies("userInformation");
    // Form validation
    if (userValidation === 'valid') {
      let userUpdatedData: PersonalData = this.signUpAuth.getThisDataWithThisNameFromCookies("userUpdatedData");
      userUpdatedData['father'] = this.updatedData.father;
      userUpdatedData['mother'] = this.updatedData.mother;
      this.signUpAuth.saveThisDataWithThisNameInCookies(this.updatedData, "userUpdatedData");
      console.log(userUpdatedData)
      if (userUpdatedData !== 'false') {
        // send request to update
        console.log(userInfo.child)
        this.signUpAuth.updateUserById(userInfo.child.id, userUpdatedData).subscribe({
          next: (res) => {
            this.signUpAuth.deleteThisDataWithThisNameFromCookies("userInformation");
            this.signUpAuth.saveThisDataWithThisNameInCookies(res, "userInformation");
            alert("User Updated successfully");
            this.signUpAuth.clearUserDataAfterSubmit();
          }, error: (error) => {
            alert(error);
          }
        })
      }
    } else {
      this.skippedFields();
    }
    if (familyValidation === 'valid') {
      if (JSON.stringify(this.updatedData) === '{}') {
        // send request to update family data
      }
    } else {
      this.skippedFields();
    }
  }
  assignDataToDisplayedFamilyData(data: any) {
    this.displayedFamilyData = {
      motherFristName: data[0].fristName,
      motherNotionalId: data[0].national_id,
      mothernationality: data[0].nationality,
      fatherFristName: data[1].fristName,
      fatherNotionalId: data[1].national_id,
      fathernationality: data[1].nationality
    }
    console.log("D", this.displayedFamilyData)
    this.signUpAuth.saveThisDataWithThisNameInCookies(this.displayedFamilyData, "familyProfile");
  }
  updateFamilyProfileLocal() {
    this.displayedFamilyData = {
      motherFristName: this.getControlValue('mother_FullName'),
      motherNotionalId: this.getControlValue('motherId'),
      mothernationality: this.getControlValue('motherNationality'),
      fatherFristName: this.getControlValue('father_FullName'),
      fatherNotionalId: this.getControlValue('fatherId'),
      fathernationality: this.getControlValue('fatherNationality'),
    }
    // update stored data entered by admin about family
    this.signUpAuth.saveThisDataWithThisNameInCookies(this.displayedFamilyData, "familyProfile");
  }

  getControlValue(control: string) {
    return this.familyForm.get(control)?.value;
  }

  skippedFields() {
    alert("Please some fields you skipped is required!");
    return;
  }

  /**
   * Delete user data
   * @params user national id
   */
   deleteUser(){
    this.signUpAuth.deleteUserByNationalId(this.userId);
   }
}


