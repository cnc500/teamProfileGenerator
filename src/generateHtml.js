function generateHtml(dataManager) {
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        <header class="col-12 mb-3 text-center">
            <h2 class = "title">My Team</h2>
        </header>
        <div class="shade list-group col-2">
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
                <button type="button" class="btn btn-lg btn-info btn-block ">Email ${dataManager.email} </button>  </button>
                <!-- <button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button> -->
                <!-- <button class="mb-1 ">ID #</button> -->
              </div>
              <div class="d-flex w-100 justify-content-between">
                <button type="button" class="btn btn-lg btn-info ml-5 mr-2">Office # ${dataManager.officeNumber}</button>
                <!-- <button class="mb-1 ">ID #</button> -->
              </div>
            </a>
          </div>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="./teamProfileGenerator/index.js"></script>
    </body>
    </html>
`;}

module.exports = generateHtml;
