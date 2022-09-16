const github = require("../../cli/release");

describe('Github unit test suite', () => {
    test('it validates the personal access token', async () => {
        const valid = await github.validateGithubToken(process.env.GITHUB_PERSONAL_ACCESS_TOKEN)
        expect(valid).toBe(true)

        const invalid = await github.validateGithubToken('foo')
        expect(invalid).toBe(false)
    })
})