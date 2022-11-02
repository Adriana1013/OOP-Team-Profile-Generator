const Employee = require("../lib/employee");

describe('Employee list', () => {
    const employee = new Employee('Joey', 1013, 'joey@gmail.com');
    expect(employee.name).toBe('Joey');
    expect(employee.id).toBe('1013');
    expect(employee.email).toBe('joey@gmail.com');
})

test("set name", () => {
    const employee = new Employee('Joey', 1013, 'joey@gmail.com');
    expect(employee.getName()).toBe('Joey');
});

test("set id", () => {
    const employee = new Employee('Joey', 1013, 'joey@gmail.com');
    expect(employee.getId()).toBe('1013');
});

test("set email", () => {
    const employee = new Employee('Joey', 1013, 'joey@gmail.com');
    expect(employee.getEmail()).toBe('joey@gmail.com');
});

test("set role", () => {
    const employee = new Employee('Joey', 1013, 'joey@gmail.com');
    expect(employee.getRole()).toBe('Employee');
});