const { default: thumbWar } = require("./prc");
import * as utils from "../utils"

test("returns winner", () => {
    const winner = thumbWar("Ken Wheeler", "Kent C. doddss")
    
    expect(["Ken Wheeler", "Kent C. doddss"].includes(winner)).toBe(true)
})



test("returns winner", () => {
    const originalWinner = utils.getWinner;
    // utils.getWinner = (p1, p2) => p2;
    utils.getWinner = (...args) => {
        utils.getWinner.mock.calls.push(args)
        return args[1]
        
    }

    utils.getWinner.mock = { calls: [] }
    const winner = thumbWar("Ken Wheeler", "Kent C. doddss")
    expect(winner).toBe("Kent C. doddss")
    expect(utils.getWinner.mock.calls).toHaveLength(2)
    utils.getWinner.mock.calls.forEach(args => {
        expect(args).toEqual(["Ken Wheeler", "Kent C. doddss"])
    })

    // const winner = thumbWar("Ken Wheeler", "Kent C. doddss")
    // expect(winner).toBe("Kent C. doddss")


    utils.getWinner = originalWinner;
})


test("returns winner", () => {
    const originalGetWinner = utils.getWinner;
    utils.getWinner = jest.fn((p1, p2) => p2)
    const winner = thumbWar("Ken Wheeler", "Kent C. doddss")
    expect(winner).toBe("Kent C. doddss")
    expect(utils.getWinner).toHaveBeenCalledTimes(2);
    utils.getWinner.mock.calls.forEach(args => {
        expect(args).toEqual(["Ken Wheeler", "Kent C. doddss"])
    })

    utils.getWinner = originalGetWinner;
    
})

///using spyOn

test("returns winner", () => {
    jest.spyOn(utils,"getWinner")

    utils.getWinner.mockImplementation((p1, p2) => p2)
    const winner = thumbWar("Ken Wheeler", "Kent C. dodd")

    expect(winner).toBe("Kent C. dodd")

    utils.getWinner.mockRestore
})


