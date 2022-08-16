#!/usr/bin/env node
const commander = require('commander')
const colorette = require('colorette')
const { launchElectronApp } = require('./../cli/ecosystem')

const program = new commander.Command()

program.helpOption(false)

program
    .command('ecosystem')
    .description('It\'s like Laravel forge for your local environment')
    .action(() => {
        launchElectronApp()
    })

program
    .command('npm:package')
    .description('Scaffold npm package boilerplate')
    .action(() => {
        console.log('Scaffold npm package boilerplate')
    })

program
    .command('npm:release')
    .description('publish npm package to npm and create github release')
    .option('--github', 'publish to github', false)
    .action((options) => {
        console.log(`will publish to npm and github ${options.github}`)
    })

program
    .command('help', { isDefault: true})
    .description('list all available commands')
    .action(() => {
        console.log(colorette.yellow('Available commands:\n'))

        const commands = [
            { name: 'ecosystem         ', description: "It's like Laravel forge for your local environment"},
            { name: 'npm:create-package', description: "Scaffolds npm package boilerplate"},
            { name: 'npm:release       ', description: "publish npm package to npm and create github release"},
        ]

        commands.forEach( command => {
            console.log(
                colorette.green(command.name) + '    ' + command.description
            )
        })

        console.log('\n')
    })

program.parse(process.argv)
