export class Titulation {
    id: number;
    name: string;
    description: string;
    areaid: number;

    constructor(id, name, description?, areaid?) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.areaid = areaid;
    }
}