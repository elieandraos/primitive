const commander = require('commander')
const cli = require('./actions')

const createProgram = () => {
    const program = new commander.Command()

    program.helpOption(false)

    program
        .command('help', { isDefault: true})
        .description('list all available commands')
        .action(() => {
            cli.printCommands()
        })

    program
        .command('start')
        .description('Manage your local dev environment')
        .action(() => {
            cli.launchElectronApp()
        })

    program
        .command('package')
        .description('Scaffold npm package boilerplate')
        .action(() => {
            cli.scaffoldPackageBoilerplate()
        })

    program
        .command('release')
        .description('Publish package to npmjs and create github release/tag')
        .option('--github', 'publish to github', false)
        .action(({github}) => {
            cli.release(github)
        })

    return program
}

module.exports = {
    createProgram
}