// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === '' || license === 'None') {
    return '';
  } else {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === '' || license === 'None') {
    return '';
  } else {
    return `(https://img.shields.io/badge/License-${license}.svg)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === '' || license === 'None') {
    return '';
  } else {
    return `## License\n\n${renderLicenseBadge(license)}\n\nLink: ${renderLicenseLink(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installationInstructions}

  ## Usage
  ${data.usageInformation}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributionGuidelines}

  ## Tests
  ${data.testInstructions}

  ## Questions
  If you have any questions, feel free to reach out to ${data.githubUsername} via [GitHub](${data.githubProfileLink}) or email at ${data.email}.
  `;
}

export default generateMarkdown;
