/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 396:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 716:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(396);                 // Importing packages from node modules
const github = __nccwpck_require__(716);             // Octokit function is imported from this GITHUB package

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
})();

module.exports = __webpack_exports__;
/******/ })()
;