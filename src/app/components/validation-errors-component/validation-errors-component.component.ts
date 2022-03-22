import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { ValidationData } from 'src/app/core/models/validationData';

@Component({
  selector: 'app-validation-errors-component',
  templateUrl: './validation-errors-component.component.html',
  styleUrls: ['./validation-errors-component.component.scss']
})
export class ValidationErrorsComponentComponent implements OnInit {
  @Input() Form !: FormGroup;
  @Input() control !: string;
  @Input() MassegeError !: string;
  @Input() maxLength !: number;
  @Input() minLength !: number;
  @Input() pattern !: string;

  constructor() { }

  ngOnInit(): void {

  }

  FormError(control: string, error: string): any {
    return this.Form.controls[control].hasError(error);
  }

}
