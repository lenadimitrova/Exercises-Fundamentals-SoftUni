function tresureHunt(input) {
    let tresureChest = input.shift().split('|');

    let command = input.shift();
    while (command !== 'Yohoho!') {
        let tokens = command.split(' ');
        let action = tokens.shift();
        switch (action) {
            case 'Loot':
                for (const el of tokens) {
                    if (!tresureChest.includes(el)) {
                        tresureChest.unshift(el);
                    }
                }
                break;
            case 'Drop':
                let index = Number(tokens[0]);
                if (index < 0 || index > tresureChest.length - 1) {
                    command = input.shift();
                    continue;
                }
                let el = tresureChest.splice(index, 1);
                tresureChest.push(el);
                break;
            case 'Steal':
                let stolenItems = Number(tokens[0]);
                let elements = tresureChest.splice(-stolenItems);
                console.log(elements.join(', '));
                break;
        }
        command = input.shift()
    }
    if (tresureChest.length == 0) {
        console.log('Failed treasure hunt.');
    } else {
        let sum = 0;
        for (const el of tresureChest) {
            sum += el.length
        }
        let average = sum / tresureChest.length;
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    }
}
tresureHunt((["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]))