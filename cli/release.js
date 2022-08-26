require('dotenv').config()

const inquirer = require('inquirer')
const filesystem = require('./filesystem')
const colorette = require('colorette')
const { validateGitHubToken } = require('validate-github-token')

const validateGithubToken = async (token) => {
    try {
        await validateGitHubToken(
            token,
            {
                scope: { included: ['repo'] }
            }
        )
        return true
    } catch(err) {
        return false
    }
}

const isRunningFromRootDirectory = () => {
    return filesystem.isFile(`${process.cwd()}/package.json`)
}

const envFileExists = () => {
    return filesystem.isFile(`${process.cwd()}/.env`)
}

const confirmEnvFileCreation = async () => {
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
    validateGithubToken,
    isRunningFromRootDirectory,
    envFileExists,
    confirmEnvFileCreation,
    scaffoldEnvFile
}