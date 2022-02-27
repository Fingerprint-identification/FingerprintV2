/**
 * User Class for users
 */

export class User {
   /**
   * Local referance for user Id
   */
    Id!: number;
    /**
    * Local referance for user FirstName
    */
    FirstName!: string;
    /**
    * Local referance for user LastName
    */
    LastName!: string;
    /**
    * Local referance for user UserName
    */
    UserName!: string;
    /**
    * Local referance for user Role admin or user
    */
    Role!: string;
    /**
    * Local referance for user Token
    */
    Token?: string;
}
