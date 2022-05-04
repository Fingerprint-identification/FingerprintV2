import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from 'express';
import { SignupService } from 'src/app/modules/Administration/shared/services/signup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Local reference to carry manager Entered data
  managerForm!: FormGroup;
  // Local reference to carry manager data from cookies
  managerData !: any;
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
  }

  /**
   * this method detect data entered by user about manager edited or not
   */
   FormEdited() {
    // check the validation
    if(this.managerForm.valid)
      this.signUpAuth.makeValidationOf("managerForm", "valid")
    else
      this.signUpAuth.makeValidationOf("managerForm", "invalid")
    // store data entered by admin about manager
    this.signUpAuth.saveThisDataWithThisNameInCookies(this.managerForm.value, "managerData");
  }
}
