/**
 * Data class for personData data
 */
export class AdminData {
    national_id ?: string;
    password ?: string;
    passwordConfirm  ?: string;
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
    role ?: string;
    mother ?: string;
    father ?: string;
    constructor(values: AdminData) {
      Object.assign(this, values);
    }
}
