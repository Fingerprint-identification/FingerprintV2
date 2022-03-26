/**
 * Data class for personData data
 */
export class PersonalData {
    notional_id ?: number;
    password ?: string = '123456789';
    passwordConfirm  ?: string = '123456789';
    fristName  ?: string;
    lastName ?: string = 'null';
    role ?: string = 'user';
    phone  ?: number;
    email ?: string;
    notionalty  ?: string;
    birthday  ?: Date;
    gender  ?: string;
    place_of_birth  ?: string;
    address ?: string;
    street ?: string;
    disease ?: string[];
    fingerprint  ?: any[];

    constructor(values: PersonalData) {
      Object.assign(this, values);
    }
}
