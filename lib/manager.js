const Employee = require('./employee');

class Manager extends Employee {
    constructor(name,iD,email,officeNumber) {
        super(name,iD,email);
        this.officeNumber = officeNumber;
    }
}

const questionsManager = [
    {
        type : "input",
        name : "name",
        message : "What is the name of your team's manager?",
    },
    {
        type : "input",
        name : "iD",
        message : "What is your team manager's ID number (positve number only)?",
    },
    {
        type : "input",
        name : "email",
        message : "What is your team manager's email address?",
    },
    {
        type : "input",
        name : "officeNumber",
        message : "What is your team manager's office number?",
    },
];

module.exports = Manager;
