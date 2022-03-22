import { FormGroup } from "@angular/forms";

export class ValidationData {
constructor(formGroupName: FormGroup, controlName: string, minLength: number, maxLength: number = 100){}
}
