const Employee = require('./employee');

class Intern extends Employee {
    constructor(name,iD,email,school) {
        super(name,iD,email);
        this.school = school;
    }
}