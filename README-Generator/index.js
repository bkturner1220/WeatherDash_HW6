const fs = require('fs');
// const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your Project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your Project:'
    },
    {
        type: 'input',
        name: 'ssurl',
        message: 'Please provide a link to a screenshot of your project'
    },
    {
        type: 'input',
        name: 'about',
        message: 'Please tell us about this Project:'
    },
    {
        type: 'input',
        name: 'gitrepo',
        message: 'Please tell us what your Github Repository url is for this Project:'
    },
    {
        type: 'input',
        name: 'gitpages',
        message: 'Please tell us what your Github Pages demo url is for this Project:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'N/A']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?'
    },

];

// Nodejs FS File Function to write to recently created README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        // If there is an error, will report an error.
        err ? console.error(err) : console.log(`Your README.md file has been created.`)
    );
}

// init function program
function init() {
    //  Begin to ask questions with inquirer function
    inquirer.prompt(questions).then((answers) => {
        const data = generateMarkdown(answers);
        console.log(answers);
        // File created according to answers provided
        writeToFile('README.md', data);
    })
}

// initialize init
init();