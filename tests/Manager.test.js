const Manager = require("../lib/manager");

describe("manager", () => {
    const manager = new Manager('Jordan', 0722, 'jordan@gmail.com', 13);
    expect(manager.name).toBe('Jordan');
    expect(manager.id).toEqual(0722);
    expect(manager.email).toBe('jordan@gmail.com');
    expect(manager.officeNumber).toBe(13);
});

test("office number", () => {
    const manager = new Manager('Jordan', 0722, 'jordan@gmail.com', 13);
    expect(manager.getOfficeNumber()).toEqual(0722);
});

test("role", () => {
    const manager = new Manager('Jordan', 0722, 'jordan@gmail.com', 13);
    expect(manager.getRole()).toBe('Manager');
});