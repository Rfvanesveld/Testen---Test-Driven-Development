const getWordLengths = require("./Opdracht-2 Wordlengths");

test("Get word lengths", function () {
    const words = ["sun", "potato", "roundabout", "pizza"];
    const expected = [3, 6, 10, 5];

    const output = getWordLengths(words);
    expect(output).toEqual(expected);
});