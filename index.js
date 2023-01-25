const fs = require("fs").promises;
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

var usrFileName = '';
var ansCnt = 1;
var qIndex = 0;

// array of questions for user
const questions = [
    {
        name: 'file_name',
        message: 'What would you like the filename to be?',
        default: './gen-readme/README.md'
    },
    {
        name: 'content',
        message: 'Enter main title section heading:',
        default: 'BIG TITLE'
    },
    {
        name: 'content',
        message: 'Enter application description section heading:',
        default: 'Description'
    },
    {
        type: 'editor',
        name: 'content',
        message: 'Enter application description:'
    },
    {
        type: 'editor',
        name: 'content',
        message: 'Enter table of contents',
        default: 'Table of Contents'
    },
    {
        name: 'content',
        message: 'Enter install instructions section heading:',
        default: 'Installation'
    },
    {
        type: 'editor',
        name: 'content',
        message: 'Enter install instructions:'
    },
    {
        name: 'content',
        message: 'Enter usage instructions section heading:',
        default: 'Usage'
    },
    {
        type: 'editor',
        name: 'content',
        message: 'Enter usage instructions:'
    },
    {
        name: 'content',
        message: 'Enter credits section heading:',
        default: 'Credits'
    },
    {
        type: 'editor',
        name: 'content',
        message: 'Enter credits for you application:'
    },
    {
        name: 'content',
        message: 'Enter license section heading:',
        default: 'Licenses'
    },
    {
        type: 'editor',
        name: 'content',
        message: 'Enter the license type:'
    },
    {
        name: 'content',
        message: 'Enter badges section heading:',
        default: 'Badges'
    },
    {
        type: 'editor',
        name: 'content',
        message: 'Enter badges details:'
    },
    {
        name: 'content',
        message: 'Enter application features section heading:',
        default: 'Features'
    },
    {
        type: 'editor',
        name: 'content',
        message: 'Enter the features of the application:'
    },
    {
        name: 'content',
        message: 'Enter contribute section heading:',
        default: 'How To Contribute'
    },
    {
        type: 'editor',
        name: 'content',
        message: 'Enter details on how to contribute:'
    },
    {
        name: 'content',
        message: 'Enter testing section heading:',
        default: 'Tests'
    },
    {
        type: 'editor',
        name: 'content',
        message: 'Enter any testing that was performed:'
    }
];

function filterForMarkd(input) {

    switch(input) {
        case 'main title':
            return utils.h(1, input);
        case 'heading':
            return utils.h(2, input);
        case 'default': 
            return 'nothing';
    }
};

// function to write README file
function writeToFile(data) {

    console.log('In writeToFile Func');

    if (ansCnt == 1) {
        console.log('Inside if statement for creating file');
        console.log(`Data contains: ${data.file_name}`);
        console.log(`Data contains: ${data.content}`);

        return fs.writeFile(data.file_name, '')
        .then(() => {
            console.log(`Your file (${data.file_name}) has been created`);
            usrFileName = data.file_name;
            ansCnt++;
        });
    } else {
        console.log('Inside if statement for adding info to file');

        return fs.appendFile(usrFileName, `${data.content}\n`)
        .then(() => {
            console.log(`Writing to file (${usrFileName})`);
            console.log(`And the contents is:\n${data.content}`);
        });
    }
};

function promptTheUser() {
    console.log('##############################');
        inquirer.prompt(questions[qIndex])
            .then(writeToFile)
            .then( data => {
                qIndex++;
                promptTheUser();
            });
};

function cycleUserPrompts() {
    console.log('----Hello and Welcome to the Git Readme gen app!----');
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'choice',
            message: 'Would you like to generate a git Readme file?'
        }  
    ]).then(data => {

        if (data.choice) {
            return promptTheUser();
        };

        console.log('Thanks for using our app!\n');

    });
};



// function to initialize program
function init() {
    cycleUserPrompts();
}

// function call to initialize program
init();


// Best Prac Readme Template

// # <Your-Project-Title>

// ## Description

// Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

// - What was your motivation?
// - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
// - What problem does it solve?
// - What did you learn?

// ## Table of Contents (Optional)

// If your README is long, add a table of contents to make it easy for users to find what they need.

// - [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)

// ## Installation

// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

// ## Usage

// Provide instructions and examples for use. Include screenshots as needed.

// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

//     ```md
//     ![alt text](assets/images/screenshot.png)
//     ```

// ## Credits

// List your collaborators, if any, with links to their GitHub profiles.

// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

// If you followed tutorials, include links to those here as well.

// ## License

// The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

// ---

// 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

// ## Badges

// ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

// Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

// ## Features

// If your project has a lot of features, list them here.

// ## How to Contribute

// If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

// ## Tests

// Go the extra mile and write tests for your application. Then provide examples on how to run them here.