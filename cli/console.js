const colorette = require('colorette')

const respondOk = (message, additionalInfo = '') => {
    console.log( colorette.green(`✔ ${message}`))
    console.log( colorette.dim(additionalInfo))
}

const respondError = (message, additionalInfo = '') => {
    console.log( colorette.red(`✖ ${message}`))
    console.log( colorette.dim(additionalInfo))
}

const respondWarning = (message, additionalInfo = '') => {
    console.log( colorette.yellow(`⚠ ${message}`))
    console.log( colorette.dim(additionalInfo))
}

const abortWithError = (message, additionalInfo = '') => {
    respondError(message, additionalInfo)
    throw message
}

module.exports = {
    respondOk,
    respondError,
    respondWarning,
    abortWithError
}