// create array to store switch case for license selection
// switch case chosen over if-else because of fixed data value.
let license = [];
function generateMarkdown(data) {
  switch (data.license) {
    case "ECLIPSE":
      license[0] =
        "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]";
      license[1] = "(https://opensource.org/licenses/EPL-1.0)";
      break;
    case "MIT":
      license[0] =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      license[1] = "(https://opensource.org/licenses/MIT)";
      break;
    case "Apache":
      license[0] =
        "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      license[1] = "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost":
      license[0] =
        "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
      license[1] = "(https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "NONE":
      return "";
  }
  // once license is selected, returns the badge in the markdown
  // table of contents should be created in case of a long README
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation} is used to install dependencies.
  ## License
  ${license[0]}
  ${license[1]}
  ## Credits
  ${data.credits}
  ## Screenshots
  ## Reach Me @:
  * Github: ${data.username} LINK: (https://github.com/${data.username})
  * Email: ${data.email}`;
}




//Export function for use with index.js.
module.exports = generateMarkdown;