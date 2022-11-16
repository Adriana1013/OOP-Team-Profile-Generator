const Employee = require("./employee");

class Manager extends Employee {
  constructor(managerName, managerId, managerEmail, officeNumber) {
    super(managerName, managerId, managerEmail);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;