require('dotenv').config()

const inquirer = require('inquirer')
const colorette = require('colorette')
const filesystem = require('../utils/filesystem')

const isRunningFromRootDirectory = () => {
    return filesystem.isFile(`${process.cwd()}/package.json`)
}

const envFileExists = () => {
    return filesystem.isFile(`${process.cwd()}/.env`)
}

const promptEnvFileCreation = async () => {
    const questions = [
        {
            type: 'confirm',
            name: 'scaffoldEnvFile',
            prefix: '',
            message: colorette.dim('Generate .env file?'),
        }
    ]

    const { scaffoldEnvFile } = await inquirer.prompt(questions)
    return scaffoldEnvFile
}

const scaffoldEnvFile = () => {
    filesystem.copy(`${process.cwd()}/cli/stubs/.env.stub`, `${process.cwd()}/.env`)
}

const changelogFileExists = () => {
    return filesystem.isFile(`${process.cwd()}/changelog.md`)
}

const promptChangelogFileCreation = async () => {
    const questions = [
        {
            type: 'confirm',
            name: 'scaffoldChangelogFile',
            prefix: '',
            message: colorette.dim('Generate changelog file?'),
        }
    ]

    const { scaffoldChangelogFile } = await inquirer.prompt(questions)
    return scaffoldChangelogFile
}

const scaffoldChangelogFile = () => {
    filesystem.copy(`${process.cwd()}/cli/stubs/changelog.stub`, `${process.cwd()}/changelog.md`)
}

module.exports = {
    isRunningFromRootDirectory,
    envFileExists,
    promptEnvFileCreation,
    scaffoldEnvFile,
    changelogFileExists,
    promptChangelogFileCreation,
    scaffoldChangelogFile
}