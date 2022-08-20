const _release = require('./../cli/release')

describe('release pre-requisites check', () => {
    test('it passes a valid github token', async () => {
        const isValid = await _release.validateGithubToken(process.env.GITHUB_PERSONAL_ACCESS_TOKEN)
        expect(isValid).toBe(true)
    })

    test('it fails with invalid github token', async () => {
        const isValid = await _release.validateGithubToken('foo')
        expect(isValid).toBe(false)
    })
})