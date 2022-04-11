//FizzBuzz function.
// Returns "Fizz" if number is divisible by 3
// Returns "Buzz" if number is divisible by 5
// Returns "FizzBuzz" if number is divisible by 3 and 5

function fizzBuzz(number){
    if (number !== 0 && number !== null && Number.isInteger(number) === true) {
        let Result = Array();
        if (number % 3 === 0) {
            Result.push("Fizz")
        }
        if (number % 5 === 0) {
            Result.push("Buzz")
        }
        return Result.join('')
    }
    else return "Error"
}

module.exports = fizzBuzz;