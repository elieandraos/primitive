const {exec, cd} = require("shelljs")
const colorette = require("colorette")
const _release = require('./release')

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
    console.log('Scaffold npm package boilerplate')
}

const release = async (publishToGithub = true) => {
    // check if running from root directory
    console.log(_release.isRunningFromRootDirectory())

    // check if env file exists, if not scaffold it

    // check if changelog file exists, if not scaffold it

    // check if gitHub token is valid with repos scope
    const validToken = await _release.validateGithubToken(process.env.GITHUB_PERSONAL_ACCESS_TOKEN)
    console.log(validToken)

    // check if gitHub user/repos/release branch exists

    // check if logged in to npm

    // check if git initialized and nothing staged (nothing to commit)

    // check if the local branch is the release branch configured

}

module.exports = {
    printCommands,
    launchElectronApp,
    scaffoldPackageBoilerplate,
    release
}