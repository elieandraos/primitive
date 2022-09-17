const colorette = require('colorette')

const respondOk = (message, additionalInfo = '') => {
    console.log( colorette.green(`✔ ${message}`) + ' ' + colorette.dim(additionalInfo) )
}

const respondError = (message, additionalInfo = '') => {
    console.log( colorette.red(`✖ ${message}`) + ' ' + colorette.dim(additionalInfo) )
}

const respondWarning = (message, additionalInfo = '') => {
    console.log( colorette.yellow(`⚠ ${message}`) + ' ' + colorette.dim(additionalInfo) )
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