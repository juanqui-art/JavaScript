const numbers = []

function getMax(array) {
    if (array.length === 0) {
        return undefined;
    }
    return array.reduce((a, b) => a > b ? a : b)
}
console.log(getMax(numbers))