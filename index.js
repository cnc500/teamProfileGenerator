const inquirer = require("inquirer");
const fs = require("fs");
const employee = require("./lib/employee")
const manager = require("./lib/manager")

// need to put questionNextTeamMember in function getRole() in employee.js
// need to create getName(), getId() and getEmail() in employee.js




function init() {
    inquirer.prompt(employee.questionsManager);
        getRole();
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
}

