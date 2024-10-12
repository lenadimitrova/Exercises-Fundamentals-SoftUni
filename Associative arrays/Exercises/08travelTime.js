function travelTime(data) {

    let vacationList = {};

    for (const line of data) {
        let [country, city, cost] = line.split(" > ");
        cost = Number(cost);

        if (vacationList[country]) {
            if (vacationList[country][city]) {
                let price = vacationList[country][city];
                if (price > cost) {
                    vacationList[country][city] = cost
                }
            } else {
                vacationList[country][city] = cost;
            }
        } else {
            vacationList[country] = {
                [city]: cost
            }
        }

    }
    for (const country of Object.keys(vacationList).sort((a,b) => a.localeCompare(b))) {
        let forPrint = country + " -> "
        let entries =  Object.entries(vacationList[country]).sort(([a,valA], [b, valB]) => valA - valB);
        for (const [key, value] of entries) {
            forPrint += key + " -> " + value + " "
            
        }
        console.log(forPrint);
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])