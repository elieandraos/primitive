require('dotenv').config()

const { validateGitHubToken } = require('validate-github-token')
const filesystem = require('../filesystem');

const validateGithubToken = async (token) => {
    try {
        await validateGitHubToken(
            token,
            {
                scope: {
                    included: ['repo']
                }
            }
        )
        return true
    } catch(err) {
        return false
    }
}

const isRunningFromRootDirectory = () => {
    return filesystem.isFile(process.cwd() + '/package.json')
}

module.exports = {
    validateGithubToken,
    isRunningFromRootDirectory
}