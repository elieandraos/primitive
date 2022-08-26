const colorette = require('colorette')

const respondOk = (message, additionalInfo = '') => {
    console.log( colorette.green(`✔ ${message}`))

    if(additionalInfo)
        console.log( colorette.dim(additionalInfo))
}

const respondError = (message, additionalInfo = '') => {
    console.log( colorette.red(`✖ ${message}`))

    if(additionalInfo)
        console.log( colorette.dim(additionalInfo))
}

const respondWarning = (message, additionalInfo = '') => {
    console.log( colorette.yellow(`⚠ ${message}`))

    if(additionalInfo)
        console.log( colorette.dim(additionalInfo))
}

const abort = () => process.exit(1)

const abortWithError = (message, additionalInfo = '') => {
    respondError(message, additionalInfo)
    abort()
}

module.exports = {
    respondOk,
    respondError,
    respondWarning,
    abort,
    abortWithError
}