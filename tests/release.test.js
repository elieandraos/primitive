const path = require('path')
const {exec, cd} = require("shelljs")

const filesystem = require('./../cli/filesystem')
const _release = require('./../cli/release')

const tmpDir = path.join(__dirname, '/tmp')

describe('release pre-requisites', () => {

    beforeAll(  async () => {
        filesystem.createDirectory(tmpDir)
        filesystem.createDirectory(`${tmpDir}/src`)
        filesystem.createFile(`${tmpDir}/.env`)

        await exec('npm init -y', { silent: true, cwd: tmpDir })
        global.console.log = jest.fn().mockImplementation()
    })

    afterAll( () => {
        filesystem.deleteDirectory(tmpDir)
        jest.clearAllMocks()
    })

    test("running from root directory", () => {
        cd(tmpDir)
        expect(_release.isRunningFromRootDirectory()).toBe(true)

        cd(`${tmpDir}/src`)
        expect(_release.isRunningFromRootDirectory()).toBe(false)
    })

    test(".env file exists", () => {
        cd(tmpDir)
        expect(_release.envFileExists()).toBe(true)

        filesystem.deleteFile(`${tmpDir}/.env`)
        expect(_release.envFileExists()).toBe(false)
    })

    test('github token', async () => {
        const valid = await _release.validateGithubToken(process.env.GITHUB_PERSONAL_ACCESS_TOKEN)
        expect(valid).toBe(true)

        const invalid = await _release.validateGithubToken('foo')
        expect(invalid).toBe(false)
    })
})