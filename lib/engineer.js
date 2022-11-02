const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    // pulling github username
  }
  getGithub() {
    return this.github;
    // overridden to return engineer
  }
  getRole(){
    return 'Engineer'
  }
}

module.exports = Engineer;