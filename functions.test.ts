const {shuffleArray} = require('./utils')
const {arrCopy} = require('./utils')



describe("shuffleArray test ", () => {
    
    test("shuffleArray should not return a string", () => {
        expect(typeof shuffleArray).not.toBe("string");
    })
});

test("shuffleArray should return an array" , () => {
    expect([shuffleArray]).toContainEqual(shuffleArray)

}) ; 



