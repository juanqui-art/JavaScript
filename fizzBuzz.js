function fizzBuzz(input) {
    if (typeof(input) === 'number' ){
        if (input % 3 === 0 && input % 5 === 0) {
            return 'FizzBuzz'
        } else if (input % 5 === 0) {
            return 'Buzz'
        } else if (input % 3 === 0) {
            return 'Fizz'
        }else {
            return input
        }
    }
    return 'Not a number'
}

console.log(fizzBuzz(true))