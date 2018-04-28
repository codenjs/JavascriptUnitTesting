var assert = chai.assert;

suite("Mocha", function () {
    suite("fizzBuzz.print", function () {
        test("When input is not a multiple of 3 or 5 Then return input", function () {
            var output = fizzBuzz.print(1);
            assert.equal(output, 1);
        });
        test("When input is a multiple of 3 Then return Fizz", function () {
            var output = fizzBuzz.print(3);
            assert.equal(output, "Fizz");
        });
        test("When input is a multiple of 5 Then return Buzz", function () {
            var output = fizzBuzz.print(5);
            assert.equal(output, "Buzz");
        });
        test("When input is a multiple of 3 and 5 Then return FizzBuzz", function () {
            var output = fizzBuzz.print(15);
            assert.equal(output, "FizzBuzz");
        });
    });

    suite("fizzBuzz.printAll", function () {
        test("Returns a delimited list starting from 1", function () {
            var output = fizzBuzz.printAll(6);
            assert.equal(output, "1, 2, Fizz, 4, Buzz, Fizz");
        });
    });
});
