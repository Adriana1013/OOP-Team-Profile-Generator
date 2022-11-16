const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    const engineer = new Engineer('Mark', 0630, 'mark@gmail.com', 'https://github.com/Adriana1013');
    expect(engineer.name).toBe("Mark");
    expect(engineer.id).toBe(0630);
    expect(engineer.email).toBe('mark@gmail.com');
    expect(engineer.github).toBe('https://github.com/Adriana1013');
 
})
  
test("github", () => {
    const engineer = new Engineer("Mark", 0630, 'mark@gmail.com', 'https://github.com/Adriana1013');
    expect(engineer.getGithub()).tobe("https://github.com/Adriana1013");
  
});

test("set role", () => {
    const engineer = new Engineer("Mark", 0630, 'mark@gmail.com', 'https://github.com/Adriana1013');
    expect(engineer.getRole()).toBe('Engineer');
  }); 