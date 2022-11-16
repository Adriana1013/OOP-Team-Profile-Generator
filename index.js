const generateProfiles = require('./src/generateTeam');
const fs = require('fs'); 
const inquirer = require('inquirer');

// All profiles
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern'); 
const Manager = require('./lib/manager');

//Array
const profileArray = []; 

const setManager = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'managerName',
      message: 'What is the managers name?', 
        },
    {
      type: 'input',
      name: 'managerId',
      message: "Please share the managers ID",
        },
    {
      type: 'input',
      name: 'managerEmail',
      message: "Please share the managers email",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Please enter the managers office number",
    }
    ])
    .then(result => {
        const  { managerName, managerId, managerEmail, officeNumber } = result; 
        const manager = new Manager (managerName, managerId, managerEmail, officeNumber);

        profileArray.push(manager); 
    })
};

const buildTeam = () => {

  return inquirer.prompt ([
    {
      type: 'list',
      name: 'role',
      message: "Please choose the role you would like to add",
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: "What is the name of this employee?", 
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter this employees ID number",
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the employees email address",
    },
    {
      type: 'input',
      name: 'github',
      message: "Please share this employees github username",
      when: (input) => input.role === "Engineer",
    },
    {
      type: 'input',
      name: 'school',
      message: "What school does the intern attend?",
      when: (input) => input.role === "Intern",
    },
    {
      type: 'confirm',
      name: 'confirmBuildTeam',
      message: 'Would you like to add more team members?',
      default: false
    }
    ])
    .then(teamDetails => {

        let { name, id, email, role, github, school, confirmBuildTeam } = teamDetails; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
        }

        profileArray.push(employee); 

        if (confirmBuildTeam) {
            return buildTeam(profileArray); 
        } else {
            return profileArray;
        }
    })

};


// function to create HTML page
const writeFile = data => {
    fs.writeFile('./dist/profiles.html', data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Done!")
        }
    })
}; 

setManager()
  .then(buildTeam)
  .then(profileArray => {
    return generateProfiles(profileArray);
  })
  .then(fileHTML => {
    return writeFile(fileHTML);
  })
  .catch(err => {
 console.log(err);
  });