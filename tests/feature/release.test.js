const path = require('path')
const inquirer = require('inquirer')
const { exec, cd } = require('shelljs')
const tasks = require('../../cli/release/tasks')
const release = require('../../cli/release')
const { INVALID_ROOT, ENV_FILE_NOT_FOUND, CHANGELOG_FILE_NOT_FOUND} = require('../../cli/release/errors')
const { createDirectory, createFile, deleteDirectory, deleteFile, isDirectory } = require('../../cli/utils/filesystem')

const tmpDir = path.join(__dirname, '/tmp')

const setup = () => {
    createDirectory(tmpDir)
    createDirectory(`${tmpDir}/src`)
    createFile(`${tmpDir}/.env`)
    createFile(`${tmpDir}/changelog.md`)
}

jest.setTimeout(30000)
global.console.log = jest.fn().mockImplementation()
inquirer.prompt = jest.fn().mockImplementation()

jest.mock('../../cli/release/tasks', () => ({
    ...jest.requireActual('../../cli/release/tasks'),
    promptEnvFileCreation: jest.fn().mockResolvedValue(false),
    scaffoldEnvFile: jest.fn(),
    promptChangelogFileCreation: jest.fn().mockResolvedValue(false),
    scaffoldChangelogFile: jest.fn(),
}))

describe('Release feature test suite', () => {

    beforeEach(  async () => {
        if(isDirectory(tmpDir))
            deleteDirectory(tmpDir, setup)
        else
            setup()

        await exec('npm init -y', { silent: true, cwd: tmpDir })
    })

    afterEach( () => {
        jest.clearAllMocks()
    })

    test("it fails if not running from the root directory", async () => {
        cd(`${tmpDir}/src`)
        await expect(release()).rejects.toBe(INVALID_ROOT)
    })

    test("it fails if .env file does not exist", async () => {
        cd(tmpDir)
        deleteFile(`${tmpDir}/.env`)

        await expect(release()).rejects.toBe(ENV_FILE_NOT_FOUND)
        expect(tasks.promptEnvFileCreation).toHaveBeenCalled()
        expect(tasks.scaffoldEnvFile).not.toHaveBeenCalled()
    })

    test("it prompts the user to create a .env file if it does not exist", async () => {
        tasks.promptEnvFileCreation.mockResolvedValue(true)

        cd(tmpDir)
        await expect(release()).resolves.toBe(true)
        expect(tasks.promptEnvFileCreation).toHaveBeenCalled()
        expect(tasks.scaffoldEnvFile).toHaveBeenCalled()
    })

    test("it fails if changelog file does not exist", async () => {
        cd(tmpDir)
        deleteFile(`${tmpDir}/changelog.md`)

        await expect(release()).rejects.toBe(CHANGELOG_FILE_NOT_FOUND)
        expect(tasks.promptChangelogFileCreation).toHaveBeenCalled()
        expect(tasks.scaffoldChangelogFile).not.toHaveBeenCalled()
    })

    test("it prompts the user to create a changelog file if it does not exist", async () => {
        tasks.promptChangelogFileCreation.mockResolvedValue(true)

        cd(tmpDir)
        await expect(release()).resolves.toBe(true)
        expect(tasks.promptChangelogFileCreation).toHaveBeenCalled()
        expect(tasks.scaffoldChangelogFile).toHaveBeenCalled()
    })
})