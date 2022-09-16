const path = require('path')
const { exec, cd } = require('shelljs')

const tmpDir = path.join(__dirname, '/tmp')
const filesystem = require('./../cli/filesystem')
const helper = require('./../cli/release')
const { release } = require('./../cli/actions')
const { INVALID_ROOT, ENV_FILE_NOT_FOUND } = require('./../cli/release/errors')

jest.setTimeout(30000)
describe('Release feature test suite', () => {

    beforeAll(  async () => {
        global.console.log = jest.fn().mockImplementation()

        filesystem.createDirectory(tmpDir)
        filesystem.createDirectory(`${tmpDir}/src`)
        filesystem.createFile(`${tmpDir}/.env`)

        await exec('npm init -y', { silent: true, cwd: tmpDir })
    })

    afterAll( () => {
        filesystem.deleteDirectory(tmpDir)
        jest.clearAllMocks()
    })

    test("it fails if not running from the root directory", async () => {
        cd(`${tmpDir}/src`)
        await expect(release()).rejects.toBe(INVALID_ROOT)
    })

    test("it fails if .env file does not exist", async () => {
        const promptEnvFileCreation = jest.spyOn(helper, 'promptEnvFileCreation').mockImplementation(() => false)
        const scaffoldEnvFile = jest.spyOn(helper, 'scaffoldEnvFile').mockImplementation(() => {})

        cd(tmpDir)
        filesystem.deleteFile(`${tmpDir}/.env`)

        await expect(release()).rejects.toBe(ENV_FILE_NOT_FOUND)
        expect(promptEnvFileCreation).toHaveBeenCalled()
        expect(scaffoldEnvFile).not.toHaveBeenCalled()
    })

    test("it prompts the user to create a .env file if it does not exist", async () => {
        const promptEnvFileCreation = jest.spyOn(helper, 'promptEnvFileCreation').mockImplementation(() => true)

        cd(tmpDir)
        await expect(release()).resolves.toBe(true)
        expect(promptEnvFileCreation).toHaveBeenCalled()
    })
})