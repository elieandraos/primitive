const { validateGithubAccessToken } = require("../utils/github")
const { respondOk, abortWithError, respondWarning } = require("../utils/console")

const {
    INVALID_ROOT,
    ENV_FILE_NOT_FOUND,
    INVALID_GITHUB_TOKEN,
    CHANGELOG_FILE_NOT_FOUND
} = require("./errors")

const {
    isRunningFromRootDirectory,
    envFileExists,
    promptEnvFileCreation,
    scaffoldEnvFile,
    changelogFileExists,
    promptChangelogFileCreation,
    scaffoldChangelogFile
} = require("./tasks")

const release = async (github = false) => {
    try {
        isRunningFromRootDirectory() ?
            respondOk('Running from package root') :
            abortWithError(INVALID_ROOT, 'You must run the command from the package root directory')

        if(envFileExists())
            respondOk('.env file exists')
        else {
            respondWarning('.env file not found')
            const confirmed = await promptEnvFileCreation()

            if(confirmed) {
                scaffoldEnvFile()
                respondOk('.env file created', 'Fill-in its variables and re-run the release process')
            }
            else {
                abortWithError(ENV_FILE_NOT_FOUND)
            }
        }

        if(changelogFileExists())
            respondOk('changelog file exists')
        else {
            respondWarning('changelog file not found')
            const confirmed = await promptChangelogFileCreation()

            if(confirmed) {
                scaffoldChangelogFile()
                respondOk('.changelog file created', 'Fill-in the release notes')
            }
            else {
                abortWithError(CHANGELOG_FILE_NOT_FOUND)
            }
        }

        // const validToken = await validateGithubAccessToken(process.env.GITHUB_PERSONAL_ACCESS_TOKEN)
        // validToken ?
        //     respondOk('Github token is valid') :
        //     abortWithError(INVALID_GITHUB_TOKEN, 'Update GITHUB_PERSONAL_ACCESS_TOKEN in your .env file with a valid token')

        return true
        // check if gitHub user/repos branch exists (https://docs.github.com/en/rest/repos/repos#get-a-repository)

        // check if logged in to npm

        // validate npm  package version

        // check if git initialized and nothing staged (nothing to commit)

        // check if the local branch is the release branch configured
    }
    catch (e) {
        throw e
    }
}

module.exports = release