import { Jsonp } from "@angular/http/src/http";
import { JSONPBackend } from "@angular/http/src/backends/jsonp_backend";

export class Person {
    public id: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public mobile: string;
    public gender: string;
    public birth: Date;
    public death: Date;
    public father: Person;
    public mother: Person;
    public spouse: Person;
    public isPrimary: boolean;

    constructor(data: any) {
        this.id = data.id;
        this.firstName = data.firstName || data.first_name;
        this.lastName = data.lastName || data.last_name;
        this.email = data.email;
        this.mobile = data.mobile;
        this.gender = data.gender;
        this.birth = data.birth;
        this.father = data.father;
        this.mother = data.mother;
        if (data.spouse) {
            this.spouse = new Person(data.spouse);
        }
        this.isPrimary = (data.primary == 'true');
    }

    public toApiObject() {
        return {
            "first_name": this.firstName,
            "last_name": this.lastName,
            "email": this.email,
            "mobile": this.mobile,
            "gender": this.gender,
            "birth": this.birth,
            "death": this.death,
        }
    }

    public fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}
