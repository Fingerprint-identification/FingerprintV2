import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminData } from '../../models/adminData';
import { SignupManagerService } from '../../shared/signup-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
    this.adminData = this.signUpAuth.getThisDataWithThisNameFromCookies("adminData");

    // Form validation
    this.adminForm = new FormGroup({
      adminId: new FormControl(this.adminData.adminId, [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ]),
      admin_address: new FormControl(this.adminData.admin_address, [
        Validators.required,
      ]),
      admin_street: new FormControl(this.adminData.admin_street, [
        Validators.required,
      ]),
      admin_password: new FormControl(this.adminData.admin_password, [
        Validators.required,
        Validators.minLength(8),
      ]),
      admin_phone: new FormControl(this.adminData.admin_phone, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ]),
    });
  }

  /**
   * this method detect data entered by user about admin edited or not
   */
  FormSubmited() {
    if (this.adminForm.invalid)
      return;
    // check the validation
    if (this.adminForm.valid) {
      this.adminInfo = new AdminData(
        {
          national_id: this.getControlValue('adminId'),
          alias: this.getControlValue('admin_address'),
          details: this.getControlValue('admin_street'),
          password: this.getControlValue('admin_password'),
          passwordConfirm: this.getControlValue('admin_password'),
          phone: this.getControlValue('admin_phone')
        }
      )
      this.signUpAuth.addAdmin(this.adminInfo).then(
        (_) => {
          alert("Admin added successfuly!");
          // delete all data in localStorage after submitting
          this.signUpAuth.clearCookies();
          window.location.reload();
          this.router.navigate(['/Owner/home']);
        }).catch(error => {
          alert("Opps, Some data have problem: User " + error.message)
        });
    }
    console.log(this.adminForm.value)
    this.signUpAuth.saveThisDataWithThisNameInCookies(this.adminForm.value, "adminData");
  }
  getControlValue(control: string): any {
    return this.adminForm.get(control)?.value;
  }
}
