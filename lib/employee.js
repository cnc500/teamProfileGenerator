// This Employee constructor function is used to create a new employee with their name,
// ID, and email address.
class Employee {
    constructor(employeeName,iD,email){
        this.employeeName = employeeName;
        this.iD = iD;
        this.email = email;
    }

    getName = function(){
        return this.employeeName;
    }

    getId = function(){
        return this.iD;
    }

    getemail = function(){
        return this.email;
    }

    getRole = function(){
        return "Employee";
    }
}
// Function is exported for use in index.js
module.exports = Employee;