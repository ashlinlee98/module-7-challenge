// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js'; 

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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.error(err);
        } else {
          console.log("file written successfully");
        }
      });
}

// TODO: Create a function to initialize app
async function init() {
    try {
        // Prompts the user and waits for the answers
        const answers = await inquirer.prompt(questions);
    
        // Passes the answers to the generateMarkdown function
        const markdown = generateMarkdown(answers);
    
        // Feeds markDown into writeToFile function
        writeToFile('README.md', markdown);
    
        console.log('README.md has been generated successfully.');
      } catch (error) {
        if (error.isTtyError) {
          console.log("Prompt couldn't be rendered in the current environment");
        } else {
          console.log("Something else went wrong: ", error);
        }
      }
}

// Function call to initialize app
init();
