export class User {

    constructor(public username: string,
                public firstName: string,
                public lastName: string,
                public password: string, 
                public email: string,
                public profileImagePath: string,
                public authorities: string[]) {

    }
}