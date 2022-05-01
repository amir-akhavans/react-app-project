const core = require('@actions/core');                 // Importing packages from node modules
const github = require('@actions/github');             // Octokit function is imported from this GITHUB package

async function run() {                                 // await function can only run inside async function
    try {
        const token = core.getInput('token');
        const title = core.getInput('title');
        const body = core.getInput('body');
        const assignees = core.getInput('assignees');

        const octokit = new github.GitHub(token);                        // Octokit is an api request which creates an issue 
                                                                        // pass the 'token' received from inputs to authenticate our requests
        const response =  await octokit.issues.create({                  // await means wait for the result to be put in response variable then go to next line (setOutput).
    //   owner: github.context.repo.owner,
    //   repo: github.context.repo.repo,
        ...github.context.repo,                          // This line is equal to two above lines
        title,                                           // if key is equal to value, we pass just the key   ( title: tile )
        body,
        assignees: assignees ? assignees.split('\n') : undefined  // creates array of assigness, otherwise passes undefined to ignore it
        }); 
        
        core.setOutput("issue", JSON.stringify(response.data));        // JSON.stringify() passes the output as string
    
    }   catch (error) {
        core.setFailed(error.message);
    }
}                                                                  // End of async function

run();                               // Invoke async function run