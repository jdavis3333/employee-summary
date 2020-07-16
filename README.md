# employee-summary
The goal of this project was to build a node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.

### Prerequisites

* Visual Studio Code https://code.visualstudio.com/

### Execution

* Application in action

![employee-summary](https://user-images.githubusercontent.com/66157077/87494692-8a426f80-c604-11ea-9ac6-c28cf186474f.gif)

* All tests passed
```
 PASS  test/Engineer.test.js
  √ Can set GitHUb account via constructor (3 ms)
  √ getRole() should return "Engineer"
  √ Can get GitHub username via getGithub() (1 ms)

 PASS  test/Manager.test.js
  √ Can set office number via constructor argument (2 ms)
  √ getRole() should return "Manager"
  √ Can get office number via getOffice()

 PASS  test/Employee.test.js
  √ Can instantiate Employee instance (2 ms)
  √ Can set name via constructor arguments
  √ Can set id via constructor argument
  √ Can set email via constructor argument (1 ms)
  √ Can get name via getName()
  √ Can get id via getId()
  √ Can get email via getEmail()
  √ getRole() should return "Employee" (1 ms)

 PASS  test/Intern.test.js
  √ Can set school via constructor (2 ms)
  √ getRole() should return "Intern"
  √ Can get school via getSchool()

Test Suites: 4 passed, 4 total
Tests:       17 passed, 17 total
Snapshots:   0 total
Time:        2.736 s, estimated 3 s
Ran all test suites matching /test\\*/i.
```

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

