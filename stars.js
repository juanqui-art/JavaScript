showStars(4);

// function showStars(rows) {
//     for (let i = 0; i <= rows; i++){
//         console.log("*".repeat(i))
//     }
//         }
function showStars(rows) {
    for (let row = 0; row <= rows; row++) {
        let pattern = ""
        for (let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern)
    }
}