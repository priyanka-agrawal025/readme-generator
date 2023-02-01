const inquirer = require('inquirer');
const fs = require('fs/promises')

function generateReadme(answers) {
    const { repository, description, installation, usage, contribution, license, badge, feature } = answers;
    return `# ${repository}
## Description
${description}
    
## Table of Contents 
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
    
## Installation
${installation}
## Usage
${usage}
![alt text](assets/images/screenshot.png)
    
## Credits
${contribution}
## License
${license}
    
## Badges
${badge}
    
## Features
$${feature}
    
## How to Contribute`
}


inquirer
    .prompt([
        {
            type: 'input',
            name: 'repository',
            message: 'What is the title of your repository?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'A short description of your application...'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What is the installation process for this application (if any is required)?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Input a screenshot of your application using Markdown syntax (![alt text](assets/images/screenshot.png))'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'If there are any contributors, list them here...'
        },
        {
            type: 'input',
            name: 'license',
            message: 'Add your license here...'
        },
        {
            type: 'input',
            name: 'badge',
            message: 'Add your badge/s here...'
        },
        {
            type: 'input',
            name: 'feature',
            message: 'If your application has any special features, describe them here...'
        }
    ])
    .then((answers) => {
        const newReadme = generateReadme(answers);
        fs.removeFile;
        fs.writeFile("README.md", newReadme)
            .then(() =>
            console.log("Profile Saved!!"))
            .catch(error => `An error occurred: ${error}`);
    })

    