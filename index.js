const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee.js")
const Manager = require("./lib/manager.js")

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
        .then(dataManager=>{
        console.log(dataManager);
        const myManager = new Manager(
            dataManager.name,
            // getRole(),
            dataManager.iD,
            dataManager.email,
            dataManager.officeNumber
        );
        console.log(myManager);
        let name = myManager.getName();
        let role = myManager.getRole();
        let Id = myManager.getId();
        let email = myManager.getemail();
        let officeNumber = myManager.getOfficeNumber();
        console.log(name, role, Id, email, officeNumber);
    chooseNextTeammate();
    })    
}

const nextTeammate = [


]


function chooseNextTeammate() {
    {
        type : "list",
        name : "officeNumber",
        message : "What is your team manager's office number?",
    },
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


