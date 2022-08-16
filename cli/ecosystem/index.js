const {exec, cd } = require('shelljs')

exports.launchElectronApp = () => {
    const dir = '@elieandraos/primitive'
    const { stdout } = exec('npm root -g', { silent: true })
    const root = stdout.trim() + '/' + dir

    cd(root)
    exec('npm i && npm run electron:start')
}