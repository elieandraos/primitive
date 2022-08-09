import path from 'path'
import _ from '@elieandraos/cli-tools'

const root = path.join(__dirname, '../')

try {
    _.release(root).then(() => {
        console.log(('\nDONE! 🎉\n'))
    })
} catch (e) {
    console.log(e)
}