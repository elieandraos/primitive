const { validateGithubAccessToken } = require("../../cli/utils/github");

describe('Github unit test suite', () => {
    test('it validates the personal access token', async () => {
        const valid = await validateGithubAccessToken(process.env.GITHUB_PERSONAL_ACCESS_TOKEN)
        expect(valid).toBe(true)

        const invalid = await validateGithubAccessToken('foo')
        expect(invalid).toBe(false)
    })
})