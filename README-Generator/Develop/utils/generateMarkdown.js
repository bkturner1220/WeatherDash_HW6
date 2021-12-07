// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
 # ${data.name}

## Brief Description
   ${data.description}

## Screenshots
   <img src="${data.ssurl}" style="height:250px">

## About this Project
   ${data.about}

## Github Repo Link
   <a href="${data.gitrepo}" target="_blank">${data.gitrepo}</a>
  
## Github Pages Link (Demo)
   <a href="${data.gitpages}" target="_blank">${data.gitpages}</a>

## Contact Information
   Email: <a href="mailto:${data.email}">${data.email}</a>

## License Information
   The application is covered under ${data.license} license.
  
## Contributions for ${data.title}

   ${data.contribution}

## Additional Information
   If you encounter any problems, please feel free to reach out to me by sending me a [Email] to <a href="mailto:${data.email}">${data.email}</a>.
`;
}

module.exports = generateMarkdown;
