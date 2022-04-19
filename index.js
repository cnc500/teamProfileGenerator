const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee")
const Manager = require("./lib/manager")

// need to put questionNextTeamMember in function getRole() in employee.js
// need to create getName(), getId() and getEmail() in employee.js

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


function init() {
    inquirer.prompt(questionsManager)
        .then(data=>{
        console.log(data);
    })    
}

// Calls function init to initialize app
init();
//    inquirer.prompt(questionNextTeamMember);
    // if (choices==="Engineer"){   
    //     getName(); 
    //     getId(); 
    //     getEmail();
    //     getGithub();
    // } else if (choices==="Intern") {
    //     getName(); 
    //     getId(); 
    //     getEmail();
    //     getSchool();
    // } else {
    //     // message "You have assembles an awesome team!"
    // }
    // }


    //     inquirer.prompt(employee.questionsEngineer);

    // }
    // .then(data=>{
    //     console.log(data);
    // }


