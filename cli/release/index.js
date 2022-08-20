require('dotenv').config()
const { validateGitHubToken } = require('validate-github-token')

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

module.exports = {
    validateGithubToken
}