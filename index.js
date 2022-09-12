// const to link generateHTML.js and node applications
const generateHTML = require("./src/generateHTML");
const fs = require("fs");
const inquirer = require("inquirer");

// const for each class role
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

const team = [];

// questions for the manager role
const newManager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the name of the manager?",
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!")
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID number?",
            validate: managerID => {
                if (managerID) {
                    return true;
                } else {
                    console.log("Please enter the manager's ID!")
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?",
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log("Please enter the manager's email!")
                }
            }
        },
        {
            type: "input",
            name: "office",
            message: "What is the manager's office number?",
            validate: managerOffice => {
                if (managerOffice) {
                    return true;
                } else {
                    console.log("Please enter the manager's office number!")
                }
            }
        }
    ])
    // adds manager into an array
    .then (addManager => {
        const {name, id, email, office} = addManager;
        const managerEl = new manager (name, id, email, office);

        team.push(managerEl);
        console.log(managerEl);
    })
};

// questions for the employee role (engineer or intern)
const newEmployee = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the name of the employee?",
            validate: employeeName => {
                if (employeeName) {
                    return true;
                } else {
                    console.log("Please enter the employee's name!")
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's ID number?",
            validate: employeeID => {
                if (employeeID) {
                    return true;
                } else {
                    console.log("Please enter the employee's ID!")
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?",
            validate: employeeEmail => {
                if (employeeEmail) {
                    return true;
                } else {
                    console.log("Please enter the employee's email!")
                }
            }
        },
        {
            type: "list",
            name: "role",
            message: "What is the employee's role?",
            choices: ["Engineer", "Intern"]
        },
        // question only for engineer that adds github username
        {
            type: "input",
            name: "github",
            message: "What is the engineer's Github username?",
            when: (input) => input.role === "Engineer",
            validate: engineerGithub => {
                if (engineerGithub) {
                    return true;
                } else {
                    console.log("Please enter the engineer's github name!")
                }
            }
        },
        // question only for intern that adds school name
        {
            type: "input",
            name: "school",
            message: "What is the intern's school name?",
            when: (input) => input.role === "Intern",
            validate: internSchool => {
                if (internSchool) {
                    return true;
                } else {
                    console.log("Please enter the intern's school name!")
                }
            }
        },
        // allows user to add more employees 
        {
            type: "confirm",
            name: "addMoreEmployees",
            message: "Do you want to add more employees?",
            default: false
        }
    ])
    // adds the new employee with the proper information into the array
    .then (addEmployee => {
        let {name, id, email, role, github, school, addMoreEmployees} = addEmployee;
        let employeeEl;
        if (role === "Engineer") {
            employeeEl = new engineer (name, id, email, github);
            console.log(employeeEl);
        } else if (role === "Intern") {
            employeeEl = new intern (name, id, email, school);
            console.log(employeeEl);
        }
        team.push(employeeEl);

        if (addMoreEmployees) {
            return newEmployee(team);
        } else {
            return team;
        }
    })
};

// puts all the data into an index.html file and logs a success message
const writeFile = data => {
    fs.writeFile("./dist/index.html", data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Success! The profile has been created!")
        }
    })
};

newManager()
    .then(newEmployee)
    .then(team => {
        return generateHTML(team);
    })
    .then(newHTML => {
        return writeFile(newHTML);
    })
    .catch(err => {
        console.log(err);
    });
