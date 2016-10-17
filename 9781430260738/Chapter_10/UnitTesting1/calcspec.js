describe("Addition", function () {
    it("test add() is defined", function () {
        expect(add).toBeDefined();
    });
    it("test add 2 simple numbers", function () {
        expect(add(1,2)).toEqual(3);
    });
});

describe("Subtraction", function () {
    it("test  subtract() is defined", function () {
        expect(subtract).toBeDefined();
    });
    it("test subtract 2 simple numbers", function () {
        expect(subtract(11, 2)).toEqual(9);
    });
});

describe("Multiplication", function () {
    it("test  multiply() is defined", function () {
        expect(multiply).toBeDefined();
    });
});