const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template')

// User Info prompt

 const promptUser = () => {

    return inquirer.prompt([
        {
        type: 'input',
        name: 'uName',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log(`Please enter your name.`);
                return false;
            }
        }
        },
        {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username. (Required)'
        },
        {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:'
        }
    ])
}
    



const promptProject = portfolioData => {
   // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    };
    console.log(`
    
=================

Add a New Project

=================

    `);
    return inquirer.prompt([
        {
        type: 'input',
        name: 'pName',
        message: 'What is the name of your project? (Required)',
        validate: projInput => {
            if (projInput) {
                return true;
            }
            else {
                console.log(`Please enter the project name.`);
                return false;
            }
        }
        },
        {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required).',
        validate: descInput => {
            if (descInput) {
                return true;
            }
            else {
                console.log(`Please enter a description.`);
                return false;
            }
        }
        },
        {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'JQuery', 'Bootstrap', 'Node']
        },
        {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required).',
        validate: linkInput => {
            if (linkInput) {
                return true;
            }
            else {
                console.log(`Please enter your name.`);
                return false;
            }
        }
        },
        {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
        },
        {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
        },
    ]).then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        }
        else {
            return portfolioData;
        }
    });
};
    
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });
    
// const pageHTML = generatePage(uName, github);



// fs.writeFile('./index.html', pageHTML, err =>{
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output');
// });