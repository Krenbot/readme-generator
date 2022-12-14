//Packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

//Array of questions for user input
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
        type: 'input',
        message: 'How can we test your project?',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Select a license:',
        choices: ['Apache', 'MIT', 'GPL', 'None'],
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
        message: 'What is your GitHub repo link? (terminal slug only)',
        name: 'ghrepo'
    },
];

//Write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(
        `./dist/${fileName}`, data)
}

//Initialize app
function init() {
    return inquirer.prompt(questions)
        .then((response) => {
            console.log(response)
            writeToFile('readme.md', generateMarkdown(response))
        })
}

// Function call to initialize app
init();