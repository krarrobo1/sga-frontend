
export class Post {
    id: number;
    autorid: string;
    title: string;
    description: string;
    content: string;
    category: any;
    createdat: Date;
    constructor({id, autorid, title, description, content, createdat, category}) {
        this.id = id;
        this.title = title;
        this.autorid = autorid;
        this.description = description;
        this.content = content;
        this.createdat = new Date(createdat);
        this.category = category;
    }

    get formatedate() {
        return this.createdat.toDateString();
    }
}
