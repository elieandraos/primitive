const { exec, cd } = require("shelljs")
const colorette = require("colorette")

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

module.exports = {
    printCommands,
    launchElectronApp,
    scaffoldPackageBoilerplate,
}