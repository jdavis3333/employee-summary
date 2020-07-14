// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./employee")

class Intern extends Employee {
    constructor () {
        this.school = school;
        this.getRole = "Intern"; //is this how to override?
    }
}