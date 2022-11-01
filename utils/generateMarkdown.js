//Returns a license badge based on which license is passed in
// If there is no license, return an empty string
//'Apache', 'MIT', 'GPL'
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return '![License](https://img.shields.io/badge/license-Apache-blue)'
  } else if (license === 'MIT') {
    return '![License](https://img.shields.io/badge/license-MIT-informational)'
  } else if (license === 'GPL') {
    return '![License](https://img.shields.io/badge/license-GPL-blue)'
  } else {
    return ''
  }
}

//Returns the license link
//If there is no license, return an empty string
//'Apache', 'MIT', 'GPL'
function renderLicenseLink(license) {
  if (license === 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0/'
  } else if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT/'
  } else if (license === 'GPL') {
    return 'https://www.gnu.org/licenses/gpl-3.0.en.html/'
  } else {
    return ''
  }
}

//Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (data.license === 'None') {
    return ''
  } else {
    return `##License: ${data.license}: ${renderLicenseLink(data.license)}`
  }
}

//Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

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
[${data.license}](${renderLicenseLink(data.license)})

# Questions? Contact:
## GitHub:
[${data.ghuser}](https://github.com/${data.ghuser})
## Email:
${data.email}
`;
}

module.exports = generateMarkdown;

// ## License:
// ${data.license}

// ${renderLicenseSection(license)}
// ${renderLicenseBadge(license)}

// ![badge](https://img.shields.io/github/last-commit/${data.ghuser}/${data.ghrepo})