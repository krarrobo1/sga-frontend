import { Role } from './Role';
import { Titulation } from './Titulation';

export class User {
    ci: string;
    name: string;
    lastname: string;
    dateofbirth: string;
    titulation: Titulation;
    rol: Role;
    status: boolean;
    constructor(ci: string, name: string, lastname: string, dateofbirth: string, role: Role, titulation: Titulation, status: boolean) {
        this.ci = ci;
        this.name = name;
        this.lastname = lastname;
        this.titulation = titulation;
        this.dateofbirth = dateofbirth;
        this.rol = role;
        this.status = status;
    }
}
