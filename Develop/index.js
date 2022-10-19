// Included packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

//Created an array of questions for user input = [];
inquirer
  .prompt([

    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'How would you describe this?',
    },git 
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
    //
    {
      type: 'list',
      name: 'license',
      choices: ['MIT License', new inquirer.Separator(), 'Apache License 2.0', new inquirer.Separator(), 'GNU General Public License v3.0']
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
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github name?',
    }

  ])
  .then((answers) => {
    const readmeContent = generateReadme(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')

    )
  })

function renderLicenseBadge(license) {

  if (license === 'MIT License') {
    return `![GitHub license](https://img.shields.io/badge/license-MIT-blue)`
  }

  if (license === 'Apache License 2.0') {
    return `![GitHub license](https://img.shields.io/badge/license-Apache--2.0_OR_MIT-blue?style=flat-square)`
  }

  if (license === 'GNU General Public License v3.0') {
    return `![GitHub license](https://img.shields.io/badge/license-GPLv3-blue)`
  }

}

const generateReadme = ({ title, description, installation, usage, license, contributing, tests, email, github }) =>
  `# ${title}
${renderLicenseBadge(license)}
## Table of Contents - 
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#tests)
* [Questions](#questions)

## Description - 
${description}

## Installation - 
${installation}

## Usage - 
${usage}

## License - 
${license}

## Contributing - 
${contributing}

## Tests - 
${tests}

## Questions? - 
Email me with any questions [${email}](mailto:${email}) <br/>

[Here is a link to my Github](https://github.com/${github}) for other projects

`

