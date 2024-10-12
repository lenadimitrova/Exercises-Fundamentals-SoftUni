function zoo(input) {
    let animals = {};

    let command = input.shift();
    while (command !== 'End') {
        let commandArr = command.split(': ');
        let action = commandArr[0];
        let args = commandArr[1].split('-');
        let name = args[0];
        let foodQuantity = args[1];
        let area = args[2];

        animals[name] = {
            neededFood: 0,
            area: area
        }

        switch (action) {
            case 'Add':
                if (!animals[name]) {
                    animals[name] = foodQuantity
                }
                foodQuantity++
                break;
            case 'Feed':
                if(animals[name])

        }
        command = input.shift();
    }


}
zoo((["Add: Adam-4500-ByTheCreek",
    "Add: Maya-7600-WaterfallArea",
    "Add: Maya-1230-WaterfallArea",
    "Feed: Jamie-2000",
    "EndDay"]))