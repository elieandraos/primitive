const { exec, cd } = require("shelljs")
const colorette = require("colorette")
const _release = require('./release')
const { INVALID_ROOT, ENV_FILE_NOT_FOUND, INVALID_GITHUB_TOKEN } = require('./release/errors')
const { respondOk, respondWarning, abortWithError } = require('./console')

const launchElectronApp = () => {
    const dir = '@elieandraos/primitive'
    const { stdout } = exec('npm root -g', { silent: true })
    const root = stdout.trim() + '/' + dir

    cd(root)
    exec('npm i && npm run electron:start')
}

const printCommands = () => {
    console.log(colorette.yellow('Available commands:\n'))

    const commands = [
        { name: 'start    ', description: "Manage your local dev environment"},
        { name: 'package  ', description: "Scaffold npm package boilerplate"},
        { name: 'release  ', description: "Publish package to npmjs and create github release/tag"},
        { name: 'help     ', description: "List all available commands"},
    ]

    commands.forEach( command => {
        console.log(
            colorette.green(command.name) + '    ' + colorette.dim(command.description)
        )
    })

    console.log('\n')
}

const scaffoldPackageBoilerplate = () => {
    //console.log('Scaffold npm package boilerplate')
}

const release = async () => {
    try {
        // root directory check
        _release.isRunningFromRootDirectory() ?
            respondOk('Running from package root') :
            abortWithError(INVALID_ROOT, 'You must run the command from the package root directory')

        // .env file check
        if(_release.envFileExists())
            respondOk('.env file exists')
        else {
            respondWarning('.env file not found')
            const confirmed = await _release.promptEnvFileCreation()

            if(confirmed) {
                _release.scaffoldEnvFile()
                respondOk('.env file created', 'Fill-in its variables and re-run the release process')
            }
            else {
                abortWithError(ENV_FILE_NOT_FOUND)
            }
        }

        // check if changelog file exists, if not scaffold it

        // check if gitHub token is valid with repos scope
        const validToken = await _release.validateGithubToken(process.env.GITHUB_PERSONAL_ACCESS_TOKEN)
        validToken ?
            respondOk('Github token is valid') :
            abortWithError(INVALID_GITHUB_TOKEN, 'Update GITHUB_PERSONAL_ACCESS_TOKEN in your .env file with a valid token')

        return true
        // check if gitHub user/repos branch exists (https://docs.github.com/en/rest/repos/repos#get-a-repository)

        // check if logged in to npm

        // validate npm  package version

        // check if git initialized and nothing staged (nothing to commit)

        // check if the local branch is the release branch configured
    }
    catch (e) {
        throw e
    }
}

module.exports = {
    printCommands,
    launchElectronApp,
    scaffoldPackageBoilerplate,
    release
}