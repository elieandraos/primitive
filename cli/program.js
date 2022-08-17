const commander = require('commander')
const colorette = require('colorette')

const { launchElectronApp } = require('./ecosystem/index.js')
const { release } = require('./release/index.js')
const { scaffoldPackageBoilerplate } = require('./package/index.js')

const createProgram = () => {
    const program = new commander.Command()

    program.helpOption(false)

    program
        .command('ecosystem')
        .description('Manage your local dev environment')
        .action(() => {
            launchElectronApp()
        })

    program
        .command('package')
        .description('Scaffold npm package boilerplate')
        .action(() => {
            scaffoldPackageBoilerplate()
        })

    program
        .command('release')
        .description('publish package to npmjs and create github release/tag')
        .option('--github', 'publish to github', false)
        .action(({github}) => {
            release(github)
        })

    program
        .command('help', { isDefault: true})
        .description('list all available commands')
        .action(() => {
            printCommands()
        })

    return program
}

const printCommands = () => {
    console.log(colorette.yellow('Available commands:\n'))

    const commands = [
        { name: 'ecosystem', description: "Manage your local dev environment"},
        { name: 'package  ', description: "Scaffold npm package boilerplate"},
        { name: 'release  ', description: "publish package to npmjs and create github release/tag"},
        { name: 'help  ', description: "list all available commands"},
    ]

    commands.forEach( command => {
        console.log(
            colorette.green(command.name) + '    ' + colorette.dim(command.description)
        )
    })

    console.log('\n')
}

exports.createProgram = createProgram
exports.printCommands = printCommands