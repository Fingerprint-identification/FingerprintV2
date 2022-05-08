import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminData } from '../../models/adminData';
import { SignupManagerService } from '../../shared/signup-manager.service';

@Component({
  selector: 'app-delete-admin',
  templateUrl: './delete-admin.component.html',
  styleUrls: ['./delete-admin.component.scss']
})
export class DeleteAdminComponent implements OnInit {
  // Local reference to carry admin Entered data
  adminForm!: FormGroup;
  // Local reference to carry admin data from cookies
  adminData !: any;
  // Local reference to carry admin data to send
  adminInfo !: AdminData;
  // Local reference to carry massegeError happened
  massegeError !: string;
  // Local reference to check if the form submited successfuly
  formSubmited: boolean = false;
  /**
   * @param router to access some properities from router
   * @param signUpAuth to access some signUpAuth services services from signUpAuth services
   */
  constructor(private router: Router, private signUpAuth: SignupManagerService) {

  }

  ngOnInit(): void {
    // Form validation
    this.adminForm = new FormGroup({
      adminId: new FormControl('', [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ])
    });
  }

  /**
   * this method detect data entered by user about admin edited or not
   */
   delete() {
    if (this.adminForm.invalid)
      return;
    // check the validation
    if (this.adminForm.valid) {
      this.signUpAuth.deleteAdmin(this.getControlValue('adminId'));
    }
    this.signUpAuth.saveThisDataWithThisNameInCookies(this.adminForm.value, "adminData");
  }
  getControlValue(control: string): any {
    return this.adminForm.get(control)?.value;
  }
}
