const core = require('@actions/core');                 // Importing packages from node modules
const github = require('@actions/github');

try {

//  throw( new Error("Some error message"));               // Simulate some errors
    core.debug('Debug Message');                           // Runs only if debuging is enabled 
    core.warning('Warning Message'); 
    core.error('Error Message'); 

    const name = core.getInput('who-to-greet');
    core.setSecret('name');                                // Anything typed inside () won't be visible and ***** is shown instead
    console.log('Hello ${name}');                          // Loging Input

    const time = new Date();
    core.setOutput("time", time.toTimeString());           // Setting Output

    core.startGroup('Logging Github Object');
    console.log(JSON.stringify(github, null, '\t'));
    core.endGroup();

    core.exportVariable("HELLO", "hello");  // Set Environment Variables   ---->  HELLO: hello

}   catch (error) {

    core.setFailed('error.message');

}