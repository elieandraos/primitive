const fs  = require('fs')
const path = require('path')

const exists = (src) => {
    return fs.existsSync(src)
}

const isDirectory = (src) => {
    if (!exists(src)) return false

    const stat = fs.statSync(src)
    return stat.isDirectory()
}

const isFile = (path) => {
    if (!exists(path)) return false

    const stat = fs.statSync(path)
    return stat.isFile()
}

const createDirectory = (dir, options = {}) => {
    fs.mkdirSync(dir, options)
}

const createFile = (path, content = '') => {
    fs.writeFile(path, content,  (err) => {
        if (err) throw err
    })
    return true
}

const deleteDirectory = (dir, callback = () => {}) => {
    try {
        fs.rm(dir, {recursive: true, force: true}, callback)
    } catch (err) {
        throw err
    }
}

const deleteFile = (path) => {
    try {
        fs.unlinkSync(path)
    } catch(err) {
        throw err
    }
}

const emptyDirectory = (src) => {
    if (!isDirectory(src)) throw `directory ${src} does not exist`

    for (const file of fs.readdirSync(src)) {
        const abs = path.resolve(src, file)

        if (fs.lstatSync(abs).isDirectory()) {
            emptyDirectory(abs)
            fs.rmdirSync(abs)
        } else {
            fs.unlinkSync(abs)
        }
    }
}

const copy = (src, dest) => {
    if (!exists(src)) throw `No such file or directory ${src}`

    isDirectory(src) ? copyDir(src, dest) : copyFile(src, dest)
}

const copyFile = (src, dest) => {
    fs.copyFileSync(src, dest)
}

const copyDir = (src, dest) => {
    createDirectory(dest, { recursive: true })

    for (const file of fs.readdirSync(src)) {
        const srcFile = path.resolve(src, file)
        const destFile = path.resolve(dest, file)
        copy(srcFile, destFile)
    }
}

module.exports = {
    exists,
    isDirectory,
    isFile,
    createDirectory,
    emptyDirectory,
    copy,
    deleteDirectory,
    deleteFile,
    createFile
}