const Employee = require('./employee');

class Manager extends Employee {
    constructor(name,iD,email,officeNumber) {
        super(name,iD,email);
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
