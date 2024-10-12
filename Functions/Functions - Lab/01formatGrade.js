function gradeTable(grade) {
    if (grade < 3) {
        console.log("Fail (2)");
    } else if (grade > 3 && grade < 3.50) {
        console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade < 4.5) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade < 5.5) {
        console.log(`Very good (${grade.toFixed(2)})`);
    } else {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}
gradeTable(3.33)
gradeTable(4.5)
gradeTable(2.99)