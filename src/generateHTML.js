const generateManager = function(manager) {
    return 
    `
    <div class = "col-md-4">
        <div class = "card-header">
            <h2>${manager.name}<h2>
            <h4>Manager<h4>
        </div>
        <div class = "card-body">
            <p class = "id">ID: ${manager.id}</p>
            <p class = "email">Email: <a hfref = "mailto:${manager.email}">${managers.email}</a></p>
            <p class = "office">Office Number: ${manager.office}</p>
        </div>
    </div>
    `
};

const generateEngineer = function(engineer) {
    return
    `
    <div class = "col-md-4">
        <div class = "card-header">
            <h2>${engineer.name}<h2>
            <h4>Engineer<h4>
        </div>
        <div class = "card-body">
            <p class = "id">ID: ${engineer.id}</p>
            <p class = "email">Email: <a hfref = "mailto:${engineer.email}">${engineer.email}</a></p>
            <p class = "github">Github: ${engineer.github}</p>
        </div>
    </div>
    `
};

const generateIntern = function(intern) {
    return
    `
    <div class = "col-md-4">
        <div class = "card-header">
            <h2>${intern.name}<h2>
            <h4>Intern<h4>
        </div>
        <div class = "card-body">
            <p class = "id">ID: ${intern.id}</p>
            <p class = "email">Email: <a hfref = "mailto:${intern.email}">${intern.email}</a></p>
            <p class = "office">School: ${intern.school}</p>
        </div>
    </div>
    `
};

generateHTML = (data) => {
    teamPage = [];

    for (let i = 0; i < data.length; i++) {
        const employeeMemeber = data[i];
        const employeeRole = employeeMemeber.getRole();

        if (role === "Manager") {
            const managersCard = generateManager(employee);
            teamPage.push(managersCard);
        }
        if (role === "Engineer") {
            const engineersCard = generateEngineer(employee);
            teamPage.push(engineersCard);
        }
        if (role === "Intern") {
            const internsCard = generateIntern(employee);
            teamPage.push(internsCard);
        }
    }
    const employeesCards = teamPage.join("");
    const teamGenerate = generateTeams(employeesCards);
    return teamGenerate;
};

const generateTeams = function(employeesCards) {
    return 
    `
    <!DOCTYPE html>
<html lang="en">

  <head>
    <title>Flexbox Alignment</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Team Profiles</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel = "stylesheet" href = "./dist/style.css />
  </head>

  <body>
    <header>Team Profiles</header>

    <main>
        <div class = "container">
            <div class = "row justify-content-center" id = "members-cards">
            ${employeesCards}
            </div>
        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js" integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous"></script>
  </body>

</html>
    `
};

module.exports = generateHTML;