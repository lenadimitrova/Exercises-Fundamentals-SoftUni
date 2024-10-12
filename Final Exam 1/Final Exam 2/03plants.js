function plants(input) {
    let plantsInfo = {};
    numberOfPlants = Number(input.shift());

    for (let i = 0; i < numberOfPlants; i++) {
        let tokens = input[i].split('<->');
        let plantsName = tokens[0];
        let rarity = Number(tokens[1]);

        plantsInfo[plantsName] = {
            rarity: rarity,
            ratings: [],
        }
    }
    let line = input.shift();
    while (line === 'Exhibition') {
        let [command, args] = line.split(': ');
        let [name, argument] = args.split(' - ');
        if (plantsInfo[plantsName]) {
            switch (command) {
                case 'Rate':
                    let rating = Number(argument);
                    plantsInfo[plantsName].ratings.push(rating);
                    break;
                case 'Update':
                    let rarity = Number(argument);
                    plantsInfo[plantsInfo].rarity = rarity;
                    break;
                case 'Reset':
                    plantsInfo[plantsName].ratings = [];
                    break;
            }

        } else {
            console.log('error');
        }
        line = input.shift();
    }
    console.log('Plants for the exhibition:');

    for (const plantsName in plantsInfo) {
        let sum = 0;
        let ratingsCount = plantsInfo[plantsName].ratings.length;

        for (const rating of plantsInfo[plantsName].ratings) {
            sum += rating;
        }
        let average = sum / ratingsCount;
        if (!average) {
            average = 0;
        }
        console.log(`- ${plantsName}; Rarity: ${plantsInfo[plantsName].rarity}; Rating: ${average}`);
    }
}
plants((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]))