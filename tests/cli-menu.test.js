const cli = require('../cli/actions')
const { createProgram } = require('../cli')

describe("cli menu", () => {

    beforeEach(() => jest.clearAllMocks())

    test('it calls "display help" command action', () => {
        const actionSpy = jest.spyOn(cli, 'printCommands').mockImplementation(() => {})
        const program = createProgram()
        program.parse(['node','primitive', 'help'])
        expect(actionSpy).toHaveBeenCalled()
    })

    test('it calls "launch electron app" command action', () => {
        const actionSpy = jest.spyOn(cli, 'launchElectronApp').mockImplementation(() => {})
        const program = createProgram()
        program.parse(['node','primitive', 'start'])
        expect(actionSpy).toHaveBeenCalled()
    })

    test('it calls "scaffolds npm package" command action', () => {
        const actionSpy = jest.spyOn(cli, 'scaffoldPackageBoilerplate').mockImplementation(() => {})
        const program = createProgram()
        program.parse(['node','primitive', 'package'])
        expect(actionSpy).toHaveBeenCalled()
    })

    test('it calls "release" command action', () => {
        const actionSpy = jest.spyOn(cli, 'release').mockImplementation(() => {})
        const program = createProgram()
        program.parse(['node','primitive', 'release'])
        expect(actionSpy).toHaveBeenCalled()
    })

})