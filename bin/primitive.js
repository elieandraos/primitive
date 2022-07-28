#!/usr/bin/env node
const {exec, cd } = require('shelljs');

const dir = process.argv.length === 3 && process.argv[2] === '--local' ? 'primitive' : '@elieandraos/primitive'
const { stdout } = exec('npm root -g', { silent: true })
const root = stdout.trim() + '/' + dir

cd(root)
exec('npm run electron:start')