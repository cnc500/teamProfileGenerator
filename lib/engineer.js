// This Employee constructor function is brought in.  
const Employee = require('./Employee');

// Engr is a constructor function used to create a new Engineer with their name,
// ID, email address (these first three brought in from the Employee function) and gitHub username.
class Engr extends Employee {
    constructor(employeeName,iD,email,gitHub) {
        super(employeeName,iD,email);
        this.gitHub = gitHub;
    }

    getGitHub = function () {
        return this.gitHub
    }

    getRole = function () {
        return 'Engineer';
    }
}

// Function is exported for use in index.js
module.exports = Engr;