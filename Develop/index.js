// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const { default: Choices } = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [
    {
     type: 'input',
     name: 'title',
     message: 'What is the title of your project?',
    },
    {
     type: 'input',
     name: 'description',
     message: 'Please write a short description of your project.'
    },
    {
     type: 'input',
     name: 'installationInstructions',
     message: 'What are the instructions for installing this application?'
    },
    {
     type: 'input',
     name: 'usageInformation',
     message: 'Please provide usage examples.'
    },
    {
     type: 'input',
     name: 'contributionGuidelines',
     message: 'Describe the guidelines for contributing to this project.'
    },
    {
     type: 'input',
     name: 'testInstructions',
     message: 'Provide instructions on how to test this application.'
    },
    {
     type: 'list',
     name: 'license',
     message: 'Choose a license for your project',
     choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
    },
    {
     type: 'input',
     name: 'githubUsername',
     message: 'What is your GitHub username?',
    },
    {
     type: 'input',
     name: 'githubProfileLink',
     message: 'Please provide a link to your GitHub profile',
    },
    {
     type: 'input',
     name: 'email',
     message: 'Please provide an email address where you can be reached with questions.',
    },
 ];
 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
