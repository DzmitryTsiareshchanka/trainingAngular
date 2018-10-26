export class User {
    id: number;
    name: string;
    password: string;
    dateOfBirth: Date;
    dateOfFirstLogin: Date;
    dateOfLastNotification: Date;
    information: string;

    constructor
    (
        id: number = 0,
        name: string = 'My name',
        password: string = '123',
        dateOfBirth: Date = new Date(),
        dateOfFirstLogin: Date = new Date(),
        dateOfLastNotification: Date = new Date(),
        information: string = 'My information'
    ) {
        this.id = +id;
        this.name = name;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.dateOfFirstLogin = dateOfFirstLogin;
        this.dateOfLastNotification = dateOfLastNotification;
        this.information = information;
    }

    updateUser(
        name: string = 'New name',
        password: string = 'New password',
        dateOfBirth: Date = new Date(),
        dateOfFirstLogin: Date = new Date(),
        dateOfLastNotification: Date = new Date(),
        information: string = 'New information'
    ) {
        this.name = name;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.dateOfFirstLogin = dateOfFirstLogin;
        this.dateOfLastNotification = dateOfLastNotification;
        this.information = information;
    }
}