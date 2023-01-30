// function to generate markdown for README
function generateMarkdown(data, markupType) {
  let formatedData = data;

  switch (markupType) {
    case 'H1': 
            formatedData = `# ${data}`;
            return formatedData;
    case 'H2': 
            formatedData = `## ${data}`;
            return formatedData;
    case 'H3': 
            formatedData = `### ${data}`;
            return formatedData;
    case 'H4':
            formatedData = `#### ${data}`;
            return formatedData;
    case 'H5':
            formatedData = `##### ${data}`;
            return formatedData;
    case 'H6':
            formatedData = `###### ${data}`;
            return formatedData;
    case 'OL':
            formatedData = `<num>. ${data}`;
            return formatedData;    
    case 'UL': 
            formatedData = `- ${data}`;
            return formatedData;    

  }
};

module.exports = generateMarkdown;
