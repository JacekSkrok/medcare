export interface User {
    id?: any;
    firstname: string;
    lastname: string;
    birthdate: Date;
    email: string;
    country: string;
    city: string;
    street: string;
    propertyNumber: string;
}
export class User implements User{
    id?: any;
    firstname: string;
    lastname: string;
    constructor(){
        this.id = '';
        this.firstname = '';
        this.lastname = '';
        this.birthdate = new Date();
    }
}