const profileDataArgs = process.argv.slice(2, process.argv.length);
const [uName, github] = profileDataArgs;
const fs = require('fs');
const generatePage = require('./src/page-template')

// const printProfileData = profileDataArr => {

//     profileDataArr.forEach(profileItem => console.log(profileItem));

// }
// printProfileData(profileDataArgs);



fs.writeFile('index.html', generatePage(uName, github), err =>{
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output');
});