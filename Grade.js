const marks = [90, 80, 8]

// Average 70

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A


function calculateGrade(marks) {
    let suma = 0
    for (const mark of marks) {
        suma += mark
    }
    let average = suma / marks.length
    if (average <= 59) {
        return 'F'
    } else if (average <= 69) {
        return 'D'
    } else if (average <= 79) {
        return 'C'
    }
    else if (average <= 89) {
        return 'B'
    }
    else if (average <= 100) {
        return 'A'
    }
}

console.log(calculateGrade(marks))