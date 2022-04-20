const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager.js");
const Engr = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");


// need to put questionNextTeamMember in function getRole() in employee.js
// need to create getName(), getId() and getEmail() in employee.js

const questionsManager = [
    {
        type : "input",
        name : "employeeName",
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
            dataManager.employeeName,
            // getRole(),
            dataManager.iD,
            dataManager.email,
            dataManager.officeNumber
        );
        console.log(myManager);
        let employeeName = myManager.getName();
        let role = myManager.getRole();
        let Id = myManager.getId();
        let email = myManager.getemail();
        let officeNumber = myManager.getOfficeNumber();
        console.log(employeeName, role, Id, email, officeNumber);
    chooseNextTeammate();
    })    
}

const nextTeammate = [
    {
        type : "list",
        name : "memberTitle",
        message : "Choose a new team member role or select that you are finished assembling your team.",
        choices : ["Engineer","Intern","I do not wish to add any more team members."]
    }    
];

const nextEngineer = [
    {
        type : "input",
        name : "employeeName",
        message : "What is the engineer's name?",
    },
    {
        type : "input",
        name : "iD",
        message : "What is the engineer's ID number (positve number only)?",
    },
    {
        type : "input",
        name : "email",
        message : "What is the engineer's email address?",
    },
    {
        type : "input",
        name : "officeNumber",
        message : "What is the engineer's GitHub username?",
    }
];

const nextIntern = [
    {
        type : "input",
        name : "employeeName",
        message : "What is the intern's name?",
    },
    {
        type : "input",
        name : "iD",
        message : "What is the intern's ID number (positve number only)?",
    },
    {
        type : "input",
        name : "email",
        message : "What is the intern's email address?",
    },
    {
        type : "input",
        name : "officeNumber",
        message : "What is the intern's GitHub username?",
    }
];




function chooseNextTeammate () {
    inquirer.prompt(nextTeammate)
    .then(choice=>{
    console.log(choice);
    if (choice==='Engineer') {
        inquirer.prompt(nextEngineer)
        .then(dataEngineer=>{
        console.log(dataEngineer);
        const myEngineer = new Engr(
            dataEngineer.employeeName,
            dataEngineer.iD,
            dataEngineer.email,
            dataEngineer.gitHub
        );
        console.log(myEngineer);
        })
    } else if (choice == "Intern") {
        inquirer.prompt(nextIntern)
        .then(dataIntern=>{
        console.log(dataIntern);
        const myIntern = new Intern(
            dataIntern.employeeName,
            dataIntern.iD,
            dataIntern.email,
            dataIntern.school
        );
        })
    } else {
        process.exit();
    }
    })
}
// Calls function init to initialize app
init();


