import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../shared/services/signup.service';

@Component({
  selector: 'app-component-icons',
  templateUrl: './component-icons.component.html',
  styleUrls: ['./component-icons.component.scss']
})
export class ComponentIconsComponent implements OnInit {

  light: {[key: string]: boolean} = {
    scan: false,
    userForm: false,
    familyForm: false,
    done: false
  }

  constructor(private services: SignupService) {
  }
  ngOnInit(): void {
    this.services.checkTheLightCom.subscribe(
      // in future i will make the router params the same name of
      // validation checker to take the current router params then make
      // one operation only
      //  this.light[params] = this.services.validationOf(params) == 'valid' ? true: false;
      (_) => {
        this.light["scan"] = this.services.validationOf("scan") == 'valid' ? true: false;
        this.light["userForm"] = this.services.validationOf("userForm") == 'valid' ? true: false;
        this.light["familyForm"] = this.services.validationOf("familyForm") == 'valid' ? true: false;
        this.light["done"] = this.services.validationOf("submited") == 'true' && this.light["scan"] && this.light["userForm"] && this.light["familyForm"] ? true: false;
      }
    );
    console.log(this.light)
  }
}
