function biscuitFactory(input) {
    let biscuitsPerDay = Number(input.shift());
    let workersCount = Number(input.shift());
    let otherCompanyProduction = Number(input.shift());

    let biscuitProductionPerMonth = (biscuitsPerDay * workersCount) * 30
    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0) {
            biscuitProductionPerMonth -= (biscuitsPerDay * workersCount) * 0.25
        }

    }
    console.log(biscuitProductionPerMonth);
   // console.log(`You have produced ${biscuitProductionPerMonth} biscuits for the past month.`);

    // let diff = biscuitProductionPerMonth - otherCompanyProduction;
    // let percentage = (diff / otherCompanyProduction) * 100

    // if (biscuitProductionPerMonth > otherCompanyProduction) {
    //     console.log(`You produce ${percentage.toFixed(2)} percent more biscuits`);
    // } else {
    //     let diff2 = otherCompanyProduction - biscuitProductionPerMonth
    //     let percentage2 = (diff2 / otherCompanyProduction) * 100
    //     console.log(`You produce ${percentage.toFixed(2)} percent less biscuits`);
    // }
}
biscuitFactory(["78", "8", "16000"]);
biscuitFactory(["65", "12", "26000"]);
biscuitFactory(["163", "16", "67020"]);