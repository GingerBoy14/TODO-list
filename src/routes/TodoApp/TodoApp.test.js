const TodoApp = require("./TodoApp")
// @ponicode
describe("creatTodoItem", () => {
    let inst

    beforeEach(() => {
        inst = new TodoApp.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.creatTodoItem("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.creatTodoItem("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.creatTodoItem("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.creatTodoItem("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.creatTodoItem(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
