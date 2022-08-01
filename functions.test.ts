const {shuffleArray} = require('./utils')



describe("shuffleArray test ", () => {
    
    test("shuffleArray should not return a string", () => {
        expect(typeof shuffleArray).not.toBe("string");
    })
});

test("shuffleArray should return an array" , () => {
    expect([shuffleArray]).toContainEqual(shuffleArray)

}) ; 

test("shuffleArray is the same length as the argument passed in " , () => {
    expect(shuffleArray.length).toEqual[5]
})



