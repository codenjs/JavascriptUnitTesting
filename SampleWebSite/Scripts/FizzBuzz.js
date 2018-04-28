var fizzBuzz = (function () {

    function print(i) {
        var multipleOf3 = i % 3 == 0;
        var multipleOf5 = i % 5 == 0;

        if (multipleOf3 && multipleOf5)
            return "FizzBuzz";
        else if (multipleOf3)
            return "Fizz";
        else if (multipleOf5)
            return "Buzz";
        else
            return i;
    }

    function printAll(i) {
        var output = "";
        for (var j = 1; j <= i; j++) {
            if (j > 1)
                output += ", ";
            output += print(j);
        }
        return output;
    }

    return {
        print: print,
        printAll: printAll
    };

})();
