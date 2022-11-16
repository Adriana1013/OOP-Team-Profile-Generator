const Intern = require("../lib/intern");

describe('Intern', () => {
    const intern = new Intern('Jackie', 1116, 'jackie@gmail.com', 'DePaul');
    expect(intern.name).toBe('Jackie');
    expect(intern.id).toBe(1116);
    expect(intern.email).toBe('jackie@gmail.com');
    expect(intern.school).toBe('DePaul');
  
});

test(" school", () => {
    const intern = new Intern('Jackie', 1116, 'jackie@gmail.com', 'DePaul');
    expect(intern.getSchool()).toBe(DePaul);
  
});

test("role", () => {
    const intern = new Intern('Jackie', 1116, 'Jackie@gmail.com', 'DePaul');
    expect(intern.getRole()).toBe('Intern');
  
});