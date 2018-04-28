/// <reference path="../../SampleWebSite/Scripts/FizzBuzz.js" />

QUnit.module("QUnit", function () {
    QUnit.module("fizzBuzz.print", function () {
        QUnit.test("When input is not a multiple of 3 or 5 Then return input", function (assert) {
            var output = fizzBuzz.print(1);
            assert.equal(output, 1);
        });
        QUnit.test("When input is a multiple of 3 Then return Fizz", function (assert) {
            var output = fizzBuzz.print(3);
            assert.equal(output, "Fizz");
        });
        QUnit.test("When input is a multiple of 5 Then return Buzz", function (assert) {
            var output = fizzBuzz.print(5);
            assert.equal(output, "Buzz");
        });
        QUnit.test("When input is a multiple of 3 and 5 Then return FizzBuzz", function (assert) {
            var output = fizzBuzz.print(15);
            assert.equal(output, "FizzBuzz");
        });
    });

    QUnit.module("fizzBuzz.printAll", function () {
        QUnit.test("Returns a delimited list starting from 1", function (assert) {
            var output = fizzBuzz.printAll(6);
            assert.equal(output, "1, 2, Fizz, 4, Buzz, Fizz");
        });
    });
});
