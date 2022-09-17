require('dotenv').config()

const inquirer = require('inquirer')
const filesystem = require('../utils/filesystem')
const colorette = require('colorette')

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

module.exports = {
    isRunningFromRootDirectory,
    envFileExists,
    promptEnvFileCreation,
    scaffoldEnvFile
}