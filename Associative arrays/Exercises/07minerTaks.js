function minerTask(input) {

    let collection = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (!collection[resource]) {
            collection[resource] = 0;
        }
        collection[resource] += quantity

    }
    for (const item in collection) {
        console.log(`${item} -> ${collection[item]}`);
    }
}
minerTask([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])