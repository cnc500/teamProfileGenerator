const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager.js");
const Engr = require("./lib/engineer.js");
const Int = require("./lib/intern.js");
const generate = require("./src/generateHtml")
var employees = [];


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
        // console.log(myManager);
        employees.push(myManager);
        // let employeeName = myManager.getName();
        // let role = myManager.getRole();
        // let Id = myManager.getId();
        // let email = myManager.getemail();
        // let officeNumber = myManager.getOfficeNumber();
        // console.log(employeeName, role, Id, email, officeNumber);

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

function nextEngineer () {
return inquirer.prompt(    [
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
        name : "gitHub",
        message : "What is the engineer's GitHub username?",
    }
])
.then(dataEngineer=>{
    // console.log(dataEngineer);
    var myEngineer = new Engr(
        dataEngineer.employeeName,
        dataEngineer.iD,
        dataEngineer.email,
        dataEngineer.gitHub
    );
    employees.push(myEngineer);
    // console.log(myEngineer);
    chooseNextTeammate ();
    })

}


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
        name : "school",
        message : "What is the school that the intern attended?",
    }
];




function chooseNextTeammate () {
    inquirer.prompt(nextTeammate)
    .then(choice=>{
    // console.log(choice);
    if (choice.memberTitle === 'Engineer') {
        nextEngineer()
    } else if (choice.memberTitle === "Intern") {
        inquirer.prompt(nextIntern)
        .then(dataIntern=>{
        // console.log(dataIntern);
        const myIntern = new Int(
            dataIntern.employeeName,
            dataIntern.iD,
            dataIntern.email,
            dataIntern.school
        );
        employees.push(myIntern);

        console.log(myIntern);
        chooseNextTeammate ();
        })
    } else {
        console.log(employees);
        generate(employees);
    }
    })
}
// Calls function init to initialize app
init();
