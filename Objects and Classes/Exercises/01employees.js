function employees(arr) {
    let employeeList = {};

    arr.forEach(person => {
        employeeList[person] = person.length
    });
    for (const key in employeeList) {
        console.log(`Name: ${key} -- Personal Number: ${employeeList[key]}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])