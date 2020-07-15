# employee-summary
The goal of this project was to build a node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.

### Prerequisites

* Visual Studio Code https://code.visualstudio.com/

### Execution

* Application in action

![employee-summary](https://user-images.githubusercontent.com/66157077/87494692-8a426f80-c604-11ea-9ac6-c28cf186474f.gif)

* Created Employee parent class 
```
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }
```
* Created list for initial user prompt
```
 function getUserInputs() {
    inquirer.prompt([
        {
        type:"list",
        message: "What team member would you like to create?",
        name: "createdEmployee",
        choices: ["Manager", "Engineer", "Intern", "Done"]
        },
    ])
```            
* Created questions for each class
```
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

```
* Created .then function to log responses and push them to an array.
```
.then(function(response){
        var myIntern = new Intern(response.name, response.id, response.email, response.school);
        employeeList.push(myIntern);
        getUserInputs();
    }) 
```
* Create a function to check if the "Output" directory exists, if not, one will be created. Then, an HTML file will be created and information from the array will be used to populate it.
```
function createTeam() {
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(employeeList), "utf-8")
}
```

## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Deployed Link

* [Deployed Link](https://jdavis3333.github.io/employee-summary/) 


## Authors

* Joe Davis

- [Link to Portfolio](https://jdavis3333.github.io/updated-portfolio/)
- [Link to Github](https://github.com/)
- [Link to LinkedIn](https://www.linkedin.com/)


## License

This project is licensed under the ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg).

