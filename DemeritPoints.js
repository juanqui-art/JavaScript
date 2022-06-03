function checkSpeed(speed) {
    let points = 0
    const kmporpoint = 5
    if (speed <=70 + kmporpoint){
        return 'ok'
    }
    points = Math.floor((speed - 70) / kmporpoint)
    if (points > 12){
        return 'Licensed suspended'
    }
    return points
}
console.log(Math.floor(80))

console.log(checkSpeed(82))