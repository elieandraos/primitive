#!/usr/bin/env node
const { createProgram }  = require('./../cli/program')

const program = createProgram()
program.parse(process.argv)
