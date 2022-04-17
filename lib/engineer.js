const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name,iD,email,gitHub) {
        super(name,iD,email);
        this.gitHub = gitHub;
    }
}