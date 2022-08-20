const path = require('path')
const {exec, cd} = require("shelljs")

const filesystem = require('./../cli/filesystem')
const _release = require('./../cli/release')

const tmpDir = path.join(__dirname, '/tmp')

describe('release pre-requisites', () => {

    beforeAll(  async () => {
        filesystem.createDirectory(tmpDir)
        filesystem.createDirectory(`${tmpDir}/src`)

        cd(tmpDir)
        await exec('npm init -y', { silent: true })
    })

    afterAll( () => {
        filesystem.deleteDirectory(tmpDir)
    })

    test("running from root directory", () => {
        cd(tmpDir)
        expect(_release.isRunningFromRootDirectory()).toBe(true)

        cd(`${tmpDir}/src`)
        expect(_release.isRunningFromRootDirectory()).toBe(false)
    })

    test('github token', async () => {
        const valid = await _release.validateGithubToken(process.env.GITHUB_PERSONAL_ACCESS_TOKEN)
        expect(valid).toBe(true)

        const invalid = await _release.validateGithubToken('foo')
        expect(invalid).toBe(false)
    })
})