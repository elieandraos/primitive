const commander = require('commander')
const release = require('./release')
const { printCommands, launchElectronApp, scaffoldPackageBoilerplate } = require('./actions')

const createProgram = () => {
    const program = new commander.Command()

    //program.helpOption(false)

    program
        .command('help', { isDefault: true})
        .description('list all available commands')
        .action(() => {
            printCommands()
        })

    program
        .command('start')
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
        .description('Publish package to npmjs and create github release/tag')
        .option('--github', 'publish to github', false)
        .action(async ({github}) => {
            try {
                await release(github)
            }
            catch (e) {

            }
        })

    return program
}

module.exports = {
    createProgram
}