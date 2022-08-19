#!/usr/bin/env node
const { createProgram }  = require('../cli')

const program = createProgram()
program.parse(process.argv)
