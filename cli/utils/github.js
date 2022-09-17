const { validateGitHubToken } = require('validate-github-token')

const validateGithubAccessToken = async (token) => {
    try {
        await validateGitHubToken(
            token,
            {
                scope: { included: ['repo'] }
            }
        )
        return true
    } catch(err) {
        return false
    }
}

module.exports = {
    validateGithubAccessToken
}