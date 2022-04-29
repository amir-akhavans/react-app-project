module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/amir-akhavans/react-app-project",
    plugins: [
        '@semantic-release/commit-analyzer',           // Analyses commit messages and decides what the next version will be based on the commit messages
        '@semantic-release/release-notes-generator',   // Generates release notes based on commit messages descriptions
    //  '@semantic-release/npm',                       //used if you are releasing an npm package
        ['@semantic-release/github', {                 // uses for creating a Github release
            assets: [                                  // Sometimes the release has some assets and options
                { path: "build.zip", label: "build"},  // when we run 'npx semantic-release' it tries to find these two following files and upload them as assets
                { path: "coverage.zip", label: "coverage"}
            ]
       
        }]
    ]

} 