import { Role } from './Role';
import { Titulation } from './Titulation';

export interface User {
    ci: string;
    name: string;
    lastname: string;
    dateofbirth: string;
    titulation: Titulation;
    rol: Role;
    status: boolean;
}
