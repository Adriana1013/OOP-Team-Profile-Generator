const createManager= function (manager) {
  return `
  <div class="col-4 mt-4">
  <div class="card h-100">
  <div class="card-header">
    <h3>${manager.name}</h3>
    <h4>Manager</h4>
  </div>
    <div class="card-body">
      <p class="id">ID: ${manager.id}</p>
      <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
      <p class="office">Office Number: ${manager.officeNumber}</p>
      </div>
    </div>
  </div>
  `;
}

// create Engineer card
const createEngineer = function (engineer) {
  return `
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
        <h3>${engineer.name}</h3>
        <h4>Engineer</h4>
      </div>
        <div class="card-body">
          <p class="id">ID: ${engineer.id}</p>
          <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
          <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
  </div>
  `
}

// create Intern card 
const generateIntern = function (intern) {
  return `
  <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h3>${intern.name}</h3>
              <h4>Intern</h4>
          </div>
          <div class="card-body">
              <p class="id">ID: ${intern.id}</p>
              <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
              <p class="school">School: ${intern.school}</p>
          </div>
  </div>
</div>
  `
};

// push array to page 
generateProfiles = (data) => {

  // array for cards 
  styleArray = []; 

  for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole(); 

      // call manager function
      if (role === 'Manager') {
          const managerCard = createManager(employee);

          styleArray.push(managerCard);
      }

      // call engineer function
      if (role === 'Engineer') {
          const engineerCard = createEngineer(employee);
          styleArray.push(engineerCard);
      }

      // call intern function 
      if (role === 'Intern') {
          const internCard = generateIntern(employee);
          styleArray.push(internCard);
      }
      
  }

  // joining strings 
  const employeeLists = styleArray.join('')

  // return to generated page
  const generateTeam = generateTeamPage(employeeLists); 
  return generateTeam;

}

// generate html page 
const generateTeamPage = function (employeeLists) {   
return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav class="navbar">
      <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
    </nav>
  </header>
    <main>
        <div class="container">
            <div class="row justify-content-center">
                ${employeeLists}
            </div>
        </div>
    </main>
    
</body>
</html>
`;
}

module.exports = generateProfiles; 