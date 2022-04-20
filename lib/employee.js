const inquirer = require("inquirer");
const fs = require("fs");

class Employee {
    constructor(name,iD,email){
        this.name = name;
        this.iD = iD;
        this.email = email;
    }

    getName = function(){
        return this.name;
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

// function getRole()  supposed to return Employee ???


module.exports = Employee;

//     const questionNextTeamMember = [
//         {
//             type : "list",
//             name : "choice",
//             message : "Which type of team member do you want to add?",
//             choices : ["Engineer","Intern","I am finished adding team members."]
//         }],
//     inquirer.prompt(questionNextTeamMember)
//     .then(data=>{
//         console.log(data);
//     })
// }


