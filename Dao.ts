import {User} from './User';

let fs = require('fs');

class Dao {
    users: User[];

    constructor() {
        let file = JSON.parse(fs.readFileSync('..\\users.json', 'UTF-8'));
        this.users = file.map((item: User) => new User(item.id, item.name, item.password,
            item.dateOfBirth, item.dateOfFirstLogin, item.dateOfLastNotification,
            item.information));
    }

    getUsers() {
        return this.users;
    }

    getUserById(id: number) {
        let currentUser = this.users.find((item: User) => item.id === id);
        if (currentUser) return currentUser;
        else return 'Something was wrong';
    }

    addUser(name?: string,
            password?: string,
            dateOfBirth?: Date,
            dateOfFirstLogin?: Date,
            dateOfLastNotification?: Date,
            information?: string
    ) {
        let newUser = new User(this.users.length + 1, name, password, dateOfBirth, dateOfFirstLogin,
            dateOfLastNotification, information);
        this.users.push(newUser);
    }

    updateUser(id: number,
               name?: string,
               password?: string,
               dateOfBirth?: Date,
               dateOfFirstLogin?: Date,
               dateOfLastNotification?: Date,
               information?: string
    ) {
        let currentUser = this.users.find((item: User) => item.id === id);
        if (currentUser) {
            currentUser.updateUser(name, password, dateOfBirth, dateOfFirstLogin,
                dateOfLastNotification, information);
            return currentUser;
        }
        else return 'Something was wrong';
    }

    deleteUser(id: number) {
        let currentUser = this.users.find((item: User) => item.id === id);
        if (currentUser) {
            this.users.splice(id - 1, 1);
            return currentUser;
        }
        else return 'Something was wrong';
    }

    /*saveChanges(){
        fs.writeFileSync('..\\users.json', JSON.stringify(this.users), 'utf-8');
    }*/
}

export const dao = new Dao();