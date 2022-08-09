#!/usr/bin/env node
const {exec, cd } = require('shelljs');

const dir = '@elieandraos/primitive'
const { stdout } = exec('npm root -g', { silent: true })
const root = stdout.trim() + '/' + dir

cd(root)
exec('npm i && npm run electron:start')