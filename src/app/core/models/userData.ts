/**
 * Data class for personData data
 */
export class PersonalData {
    notional_id ?: string;
    password ?: string = '123456789';
    passwordConfirm  ?: string = '123456789';
    fristName  ?: string;
    lastName ?: string = 'any';
    role ?: string = 'user';
    phone  ?: string;
    email ?: string;
    notionalty  ?: string;
    birthday  ?: string;
    gender  ?: string;
    place_of_birth  ?: string;
    address ?: string;
    street ?: string;
    disease ?: string[];
    fingerprint ?: any[];

    constructor(values: PersonalData) {
      Object.assign(this, values);
    }
}
