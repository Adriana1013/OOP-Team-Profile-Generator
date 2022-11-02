const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    // pulls school
  }
  getSchool() {
    return this.school;
  }
//   overridden to return intern
  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;