function blackFlag(input) {
    let days = Number(input.shift());
    let plunder = Number(input.shift());
    let expectedPlunder = Number(input.shift());
    let totalPlunder = days * plunder;

    for (let i = 1; i <= days; i++) {
        if (i % 3 === 0) {
            totalPlunder = totalPlunder + (plunder * 0.5)
        }
        if (i % 5 === 0) {
            totalPlunder = totalPlunder - (totalPlunder * 0.30) 
        }
    }
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let plunderNeeded = expectedPlunder - totalPlunder;
        let percentage = (plunderNeeded / expectedPlunder) * 100
        console.log(`Collected only ${percentage}% of the plunder.`);
    }
}
// blackFlag((["5", "40", "100"]));
blackFlag((["10", "20", "380"]));