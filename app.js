const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { doesNotMatch } = require("assert");
var employeeList = [];

function getUserInputs() {
    inquirer.prompt([
        {
        type:"list",
        message: "What team member would you like to create?",
        name: "createdEmployee",
        choices: ["Manager", "Engineer", "Intern", "Done"]
        },
    ])
    .then(teamMember => {
        switch(teamMember.createdEmployee) {
            case "Engineer":
                engineer();
                break;
            case "Manager":
                manager();
                break;
            case "Intern":
                intern();
                break;
            case "Done":
                createTeam();
                break;
        }
    })

}

function manager() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Name",
            name: "name"
        },
        {
            type: "input",
            message: "What is your employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your employee email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "officeNumber"
        },
    ])
    .then(function(response){
        var myManager = new Manager(response.name, response.id, response.email, response.officeNumber);
        employeeList.push(myManager);
        getUserInputs();
    }) 
}

function engineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Name",
            name: "name"
        },
        {
            type: "input",
            message: "What is your employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your employee email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your github username?",
            name: "github"
        },
    ])
    .then(function(response){
        var myEngineer = new Engineer(response.name, response.id, response.email, response.github);
        employeeList.push(myEngineer);
        getUserInputs();
    }) 
}

function intern() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Name",
            name: "name"
        },
        {
            type: "input",
            message: "What is your employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your employee email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your school?",
            name: "school"
        },
    ])
    .then(function(response){
        var myIntern = new Intern(response.name, response.id, response.email, response.school);
        employeeList.push(myIntern);
        getUserInputs();
    }) 
}

function createTeam() {
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(employeeList), "utf-8")
}
getUserInputs();

