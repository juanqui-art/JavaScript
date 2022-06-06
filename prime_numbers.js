showsPrimes(20);

function showsPrimes(limit) {
    for (let number = 0; number <= limit; number++) {
        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(number)
    }
}