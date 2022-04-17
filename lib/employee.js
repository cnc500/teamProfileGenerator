const inquirer = require("inquirer");
const fs = require("fs");

class Employee {
    constructor(name,iD,email){
        this.name = name;
        this.iD = iD;
        this.email = email;
    }
}

function getRole() {
    const questionNextTeamMember = [
        {
            type : "list",
            name : "choice",
            message : "Which type of team member do you want to add?",
            choices : ["Engineer","Intern","I am finished adding team members."]
        }],
    inquirer.prompt(questionNextTeamMember)
    .then(data=>{
        console.log(data);
    })
}


module.exports = Employee;