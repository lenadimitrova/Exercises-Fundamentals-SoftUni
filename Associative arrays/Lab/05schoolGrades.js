function schoolGrades(input) {

    let studentRecord = {};

    for (const line of input) {

        let studentsArr = line.split(" ");
        let name = studentsArr.shift()
        let grades = studentsArr.map(x => Number(x));

        if (studentRecord[name]) {
            studentRecord[name] = studentRecord[name].concat(grades);
        } else {
            studentRecord[name] = grades;
        }
    }
   let studentsEntries = Object.entries(studentRecord);
   let soretedEntries = studentsEntries.sort((a,b) => a[0].localeCompare(b[0]));

    for (const [name, grades] of soretedEntries) {
        let grades = studentRecord[name]
        let sum = 0;
        for (const grade of grades) {
            sum += grade;
        }
        let averageSum = sum / grades.length

        console.log(`${name}: ${averageSum.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])