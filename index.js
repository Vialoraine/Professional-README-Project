// Importing packages
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const markDown = require("./utils/generateMarkdown.js");

// Questions stored to be prompted by Inquirer
const questions = [
  {
    type: "input",
    message: "What is your project's Title?",
    name: "title",
  },
  {
    type: "input",
    message: "Provide a short description of your project:",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["ECLIPSE", "MIT", "Apache", "Boost", "NONE"],
  },
  {
    type: "input",
    message: "What are the steps required to install your project",
    name: "installation",
  },
  {
    type: "input",
    message: "What features does your project include?",
    name: "features",
  },
  {
    type: "input",
    message:
      "List your collaboraters with Gitub profile links or links to any tutorials used",
    name: "credits",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

//Function initializing Inquirer to prompt for the README information and create the README file.
function promptQuestions() {
  inquirer
    .prompt(questions)
    .then((response) => {
      writeToFile("README.md", markDown(response));
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function to create a new file if specified file does not exist.
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Call function
promptQuestions();
