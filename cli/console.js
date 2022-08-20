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

const abortWithError = (message, additionalInfo = '') => {
    respondError(message, additionalInfo)
    process.exit(1)
}

module.exports = {
    respondOk,
    respondError,
    abortWithError
}