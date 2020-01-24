export class Role {
    id: number;
    name: string;
    description: string;
    categoryid: number;
    constructor(id, name, description?, categoryid?) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.categoryid = categoryid;
    }
}