// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
.prompt([

    {
        type: 'input',
        name : 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe this?',
      },
      {
        type: 'input',
        name: 'table of contents',
        message: 'Tell me about your table of contents?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How is this being installed?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage for this?',
      },
      {
        type: 'input',
        name: 'license',
        message: 'What kind of license would you like to use?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'who helped you by contributing to this?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Tests??',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Questions??',
      },

])
.then((answers) =>{
const readmeContent = generateReadme(answers);

fs.writeFile('README.md', readmeContent,  (err) =>
err ? console.log(err) : console.log('Successfully created README!')

)
})

const generateReadme = ({ title, description, tableofcontents, installation, usage, license, contributing, tests, questions}) => 
`# ${title}

## Description ${description}

## Table of Contents ${tableofcontents}

## Installation ${installation}

## Usage ${usage}

## License ${license}

## Contributing ${contributing}

## Tests ${tests}

## Questions ${questions}

`
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();


// Function call to initialize app
// Creating a Clone, but where does it go?

