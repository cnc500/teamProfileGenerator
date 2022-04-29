// The File System node module is brought in to later help create the html file using 
// writeFileSync. 
const fs = require("fs");

// This function is used to call three different functions (addManager, addEngineer & 
// addIntern) selected by the role of the team member.  These respective functions 
// generate and add that portion of the html code to the html file appropriate for each 
// role of the team member.  Finally, the html file is generated using writeFileSync.
function generate(team) {
  var page = [];
  for (var i = 0; i < team.length; i++) {
      if (team[i].getRole()=== "Manager") {
          var managerHtml = addManager(team[i])
          page.push(managerHtml);
      }
      else if (team[i].getRole() === "Engineer"){
        var engineHtml = addEngineer(team[i])
        page.push(engineHtml);
      }
      else if (team[i].getRole() === "Intern"){
        var internHtml = addIntern(team[i])
        page.push(internHtml);
      }
    }
  fs.writeFileSync("./dist/index.html", built(page))
}

// This function effectively builds the html document generating the everything surrounding
// the employees/team members and than adds them using page from the generate function
// above.
function built (page) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="/src/css/style.css">
  </head>
  
  <body>
      <header class="col-12 mb-3 text-center">
          <h2 class = "title">My Team</h2>
      </header>
      <div class = "row m-2">
      ${page}
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      <script src="./teamProfileGenerator/index.js"></script>
  </body>
  </html>`
}

// This function is used to generate the portion of the html file that will be used for adding
// the team manager.
function addManager(dataManager) {
    return`
        <div class="shade list-group col-lg-3 col-sm-9">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
              <!-- <div class="d-flex w-100 justify-content-between"> -->
                <h1 class="mb-3">${dataManager.employeeName}</h1>
                <h2>Manager</h2>
            </a>
            <a href="#" class="list-group-item list-group-item-action flex-row align-items-center ">
              <div class="mb-3 mt-3">
                <button type="button" class="btn btn-lg btn-info ml-5 mr-5 ">ID # ${dataManager.iD}   </button>
                <!-- <button class="mb-1 ">ID #</button> -->
              </div>
              <div class="mb-3">
                <button type="button" class="btn btn-lg btn-info btn-block SendEmail">Email ${dataManager.email} </button>  </button>
                <!-- <button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button> -->
                <!-- <button class="mb-1 ">ID #</button> -->
              </div>
              <div class="d-flex w-100 justify-content-between">
                <button type="button" class="btn btn-lg btn-info ml-5 mr-2">Office # ${dataManager.officeNumber}</button>
                <!-- <button class="mb-1 ">ID #</button> -->
              </div>
            </a>
          </div>
    
`;}

// This function is used to generate the portion of the html file that will be used for adding
// a team engineer.
function addEngineer(eng){
    return `
    <div class="shade list-group col-2">
    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
      <!-- <div class="d-flex w-100 justify-content-between"> -->
        <h1 class="mb-3">${eng.employeeName}</h1>
        <h2>Engineer</h2>
    </a>
    <a href="#" class="list-group-item list-group-item-action flex-row align-items-center ">
      <div class="mb-3 mt-3">
        <button type="button" class="btn btn-lg btn-info ml-5 mr-5 ">ID # ${eng.iD}   </button>
        <!-- <button class="mb-1 ">ID #</button> -->
      </div>
      <div class="d-flex w-100 justify-content-between">
        <a href="mailto:${eng.email}">
        <button type="button" class="btn btn-lg btn-info btn-block ">Email ${eng.email} </button>
        </a>
      </div>
      <div class="d-flex w-100 justify-content-between">
        <a href="https://github.com/${eng.gitHub}">
        <button type=button class="btn btn-lg btn-info ml-5 mr-2">GitHub ${eng.gitHub}</button>
        </a>
      </div>
    </a>
  </div>
    `
}

// This function is used to generate the portion of the html file that will be used for adding
// a team intern.
function addIntern (intern) {
    return `
    <div class="shade list-group col-2">
    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
      <!-- <div class="d-flex w-100 justify-content-between"> -->
        <h1 class="mb-3">${intern.employeeName}</h1>
        <h2>Intern</h2>
    </a>
    <a href="#" class="list-group-item list-group-item-action flex-row align-items-center ">
      <div class="mb-3 mt-3">
        <button type="button" class="btn btn-lg btn-info ml-5 mr-5 ">ID # ${intern.iD}   </button>
        <!-- <button class="mb-1 ">ID #</button> -->
      </div>
      <div class="mb-3">
        <button type="button" class="btn btn-lg btn-info btn-block ">Email ${intern.email} </button>  </button>
        <!-- <button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button> -->
        <!-- <button class="mb-1 ">ID #</button> -->
      </div>
      <div class="d-flex w-100 justify-content-between">
        <button type="button" class="btn btn-lg btn-info ml-5 mr-2">School ${intern.school}</button>
        <!-- <button class="mb-1 ">ID #</button> -->
      </div>
    </a>
  </div>
    `
}

// Function is exported for use in index.js
module.exports = generate;
