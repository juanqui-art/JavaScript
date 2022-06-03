const array = [0, null , undefined, 1, 2, 3,]

function countTruty(array) {
    let count = 0
    for (const item of array) {
        if (item){
            count ++
        }
    }
    return count
}

console.log(countTruty(array))