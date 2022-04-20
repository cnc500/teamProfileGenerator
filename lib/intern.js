const Employee = require('./employee');

class Intern extends Employee {
    constructor(employeeName,iD,email,school) {
        super(employeeName,iD,email);
        this.school = school;
    }
    getSchool = function () {
        return this.school;
    }

    getRole = function () {
        return 'Intern';
    }
}

module.exports = Intern;