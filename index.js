// This is where inquirer and fs are brought in as well as the JavaScript files with their respective constructor functions
// including Employee.js, Manager.js, Engineer.js, and Intern.js  Additionally, generateHtml is brought in which generates 
// the HTML file.  Finally, the array employees is created here as an empy array, but will capture all employee information
// that is required for generateHtml to work correctly displaying all team members. 
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engr = require("./lib/Engineer.js");
const Int = require("./lib/Intern.js");
const generate = require("./src/generateHtml")
var employees = [];

// The questionsManager is used to begin the prompts for the user to enter data about the team manager.
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

// Function init uses inquirer to prompt the user questions regarding the team manager and to
// put that information into the empty array employees first so that later, the team manager's
// info will always be displayed first.  Finally, init calls the next function, chooseNextTeammate.
function init() {
    inquirer.prompt(questionsManager)
        .then(dataManager=>{
        const myManager = new Manager(
            dataManager.employeeName,
            dataManager.iD,
            dataManager.email,
            dataManager.officeNumber
        );
        employees.push(myManager);
    chooseNextTeammate();
    })    
}

// Here in nextTeammate, the information is provided for the user to choose whether to add an engineer
// or an intern to the team, or if the team is completed and no more team members are to be added.
const nextTeammate = [
    {
        type : "list",
        name : "memberTitle",
        message : "Choose a new team member role or select that you are finished assembling your team.",
        choices : ["Engineer","Intern","I do not wish to add any more team members."]
    }    
];

// This function with inquirer prompts the user to provide information about the team members
// that are engineers.
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
// The above engineer information is now captured in myEngineer and then added to the employees array.
// ChooseNextTeammate is then called again.
.then(dataEngineer=>{
    var myEngineer = new Engr(
        dataEngineer.employeeName,
        dataEngineer.iD,
        dataEngineer.email,
        dataEngineer.gitHub
    );
    employees.push(myEngineer);
    chooseNextTeammate ();
    })
}

// The nextIntern array is used for the user to enter data about an intern being added to the team.
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

// The chooseNectTeammate function is used to first prompt nextTeamate and then choose between
// three separate courses of action depending upon whether an engineer is chosen, an intern
// is chosen, or the team is completed.  In the first case when an engineer is chosen, the
// the nextEngineer function is called. In the second case when an intern is chosen, the 
// nextIntern questions are prompted followed by that informtion captured in myIntern and then
// added to the employees array.  Finally, in the last case when no more teammembers is selected
// by the user, the generate function is called.
function chooseNextTeammate () {
    inquirer.prompt(nextTeammate)
    .then(choice=>{
    if (choice.memberTitle === 'Engineer') {
        nextEngineer()
    } else if (choice.memberTitle === "Intern") {
        inquirer.prompt(nextIntern)
        .then(dataIntern=>{
        const myIntern = new Int(
            dataIntern.employeeName,
            dataIntern.iD,
            dataIntern.email,
            dataIntern.school
        );
        employees.push(myIntern);

        chooseNextTeammate ();
        })
    } else {
        generate(employees);
    }
    })
}
// Calls function init to initialize app
init();
