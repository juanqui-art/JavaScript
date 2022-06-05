console.log(sum(10))

function sum(limit) {
    let sumNumbers = 0
    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sumNumbers += i
        }
    }
    return sumNumbers
}