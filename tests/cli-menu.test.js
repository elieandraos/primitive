//https://javascript.plainenglish.io/how-to-test-a-node-js-command-line-tool-2735ea7dc041

const { createProgram } = require('./../cli/program')

//jest.mock('printCommands', () => jest.fn())

describe("cli menu", () => {
    it('shows menu', () => {
        //console.log = jest.fn()

        const printCommands = jest.fn(() => {}).mockName('printCommands')

        const program = createProgram()
        program.parse(['primitive'])

        expect(printCommands).toHaveBeenCalled()
    })
})