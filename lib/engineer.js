const Employee = require('./employee');

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

module.exports = Engr;