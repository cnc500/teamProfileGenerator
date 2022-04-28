// This Employee constructor function is brought in.  
const Employee = require('./Employee');

// Manager is a constructor function used to create a new Manager with their name,
// ID, email address (these first three brought in from the Employee function) and office nymber.
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

// Function is exported for use in index.js
module.exports = Manager;
