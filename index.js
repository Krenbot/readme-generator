// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project\'s name?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Can you write a short description of your project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How do we install your project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How do we use your project',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'How can we contribute to your project?',
        name: 'contribution'
    },
    {
        type: 'list',
        message: 'Select a license:',
        choices: ['Apache', 'MIT', 'GPL', 'OSL'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Please enter your email:',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'ghuser'
    },
    {
        type: 'input',
        message: 'What is your GitHub repo linK?',
        name: 'ghrepo'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(
        `./dist/${fileName}`, data
    )
 }




// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((response) => {
            console.log(response)
            writeToFile('readme.md', generateMarkdown(response))
        }

        )
}

// Function call to initialize app
init();
