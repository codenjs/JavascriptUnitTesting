/// <reference path="../../SampleWebSite/Scripts/FizzBuzz.js" />

describe("Jasmine", function () {
    describe("fizzBuzz.print", function () {
        it("returns the input when input is not a multiple of 3 or 5", function () {
            var output = fizzBuzz.print(1);
            expect(output).toEqual(1);
        });
        it("returns Fizz when input is a multiple of 3", function () {
            var output = fizzBuzz.print(3);
            expect(output).toEqual("Fizz");
        });
        it("returns Buzz when input is a multiple of 5", function () {
            var output = fizzBuzz.print(5);
            expect(output).toEqual("Buzz");
        });
        it("returns FizzBuzz when input is a multiple of 3 and 5", function () {
            var output = fizzBuzz.print(15);
            expect(output).toEqual("FizzBuzz");
        });
    });

    describe("fizzBuzz.printAll", function () {
        it("returns a delimited list starting from 1", function () {
            var output = fizzBuzz.printAll(6);
            expect(output).toEqual("1, 2, Fizz, 4, Buzz, Fizz");
        });
    });
});
