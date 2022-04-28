module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/amir-akhavans/react-app-project",
    plugins: [
        '@semantic-release/commit-analyzer', // Analyses commit messages and decides what the next version will be based on the commit messages
        '@semantic-release/release-notes-generator',   // Generates release notes based on commit messages descriptions
    //  '@semantic-release/npm',       //used if you are releasing an npm package
        '@semantic-release/github'   // uses for creating a Github release
    ],

} 