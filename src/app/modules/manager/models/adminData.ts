/**
 * Data class for personData data
 */
export class AdminData {
    national_id ?: string;
    password ?: string;
    passwordConfirm  ?: string;
    name ?: string = "string";
    phone  ?: string;
    email ?: string = "example@gmail.net2";
    nationality  ?: string = "Egyption";
    birthday  ?: Date = new Date('22-03-2022T00:00:00');
    gender  ?: string = "Male";
    birthplace  ?: string = "cairo";
    alias ?: string;
    details ?: string;
    city ?: string = "Cairo";
    disease ?: string[] = ["e","e"];
    fingerprint ?: any[] = [[0],[0]];
    mother ?: string = "99999999999999";
    father ?: string = "88888888888888";
    constructor(values: AdminData) {
      Object.assign(this, values);
    }
}
