function companyUsers(input) {

    let employeeInfo = {};

    for (const line of input) {
        let [company, employeeId] = line.split(" -> ");
        // let company = data[0];
        // let employeeId = data[1];

        if (!employeeInfo[company]) {
            employeeInfo[company] = [];
        }
        employeeInfo[company].push(employeeId)
    }
    let sortedCompany = Object.entries(employeeInfo).sort((a, b) => a[0].localeCompare(b[0]));

    sortedCompany.forEach(element => {
        const companyName = element[0];
        const allIds = element[1];

        console.log(companyName);

        let uniqueIds = new Set(allIds);
        for (const id of uniqueIds) {

            console.log(`-- ${id}`);
        }
    });
}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345'])