const core = require('@actions/core');                 // Importing packages from node modules
const github = require('@actions/github');

try {

//  throw( new Error("Some error message"));               // Simulate some errors

    const name = core.getInput('who-to-greet');
    console.log('Hello ${name}');                          // Loging Input

    const time = new Date();
    core.setOutput("time", time.toTimeString());           // Setting Output

    console.log(JSON.stringify(github, null, '\t'));

} catch (error) {

    core.setFailed('error.message')

}