/**
 * Data class for personData data
 */
export class PersonalData {
    national_id ?: string;
    password ?: string = '123456789';
    passwordConfirm  ?: string = '123456789';
    name ?: string;
    phone  ?: string;
    email ?: string;
    nationality  ?: string;
    birthday  ?: Date;
    gender  ?: string;
    birthplace  ?: string;
    alias ?: string;
    details ?: string;
    city ?: string;
    disease ?: string[];
    fingerprint ?: any[];
    mother ?: string;
    father ?: string;
    constructor(values: PersonalData) {
      Object.assign(this, values);
    }
}
