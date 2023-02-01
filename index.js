const inquirer = require('inquirer');
const fs = require('fs/promises')

function generateReadme(answers) {
    const { repository } = answers;
    return `# ${repository}
## Description
    
## Table of Contents (Optional)
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
    
## Installation
    
## Usage
    
![alt text](assets/images/screenshot.png)
    
## Credits
    
## License
    
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    
## Badges
    
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
    
Badges aren't necessary, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
## Features
    
If your project has a lot of features, list them here.
    
## How to Contribute`
}


inquirer
    .prompt([
        {
            type: 'input',
            name: 'repository',
            message: 'What is the title of your repository?'
        },
    ])
    .then((answers) => {
        const newReadme = generateReadme(answers);
        fs.removeFile;
        fs.writeFile("README.md", newReadme)
            .then(() =>
            console.log("Profile Saved!!"))
            .catch(error => `An error occurred: ${error}`);
    })