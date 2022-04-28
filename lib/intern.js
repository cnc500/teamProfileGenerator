// This Employee constructor function is brought in.  
const Employee = require('./Employee');

// Int is a constructor function used to create a new Intern with their name,
// ID, email address (these first three brought in from the Employee function) and their 
// school's name.
class Int extends Employee {
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

// Function is exported for use in index.js
module.exports = Int;