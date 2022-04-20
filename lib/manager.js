const Employee = require('./employee');

class Manager extends Employee {
    constructor(employeeName,iD,email,officeNumber) {
        super(employeeName,iD,email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber = function () {
        return this.officeNumber;
    }

    getRole = function () {
        return 'Manager';
    }
}



module.exports = Manager;
