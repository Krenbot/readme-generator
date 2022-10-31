// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

![badge](https://img.shields.io/github/last-commit/${data.ghuser}/${data.ghrepo})
TODO: Add more badges

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Contact](#contact)

## Description:
 ${data.description}

## Installation:
${data.installation}

## Usage:
${data.usage}

## Contribution:
${data.contribution}

## Tests:
${data.tests}

## License:
${data.license}

# Questions? Contact:
## Email:
${data.email}
## GitHub User:
${data.ghuser}`;
}

module.exports = generateMarkdown;