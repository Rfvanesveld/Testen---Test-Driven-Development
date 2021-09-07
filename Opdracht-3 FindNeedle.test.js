const findNeedle = require("./Opdracht-3 FindNeedle");

test("Find the needle", function () {
    const words = ["house", "train", "slide", "needle", "book"];
    const expected = 3;

    const output = findNeedle(words, "needle");
    expect(output).toEqual(expected);
});