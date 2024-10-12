function solve(data) {
    let players = new Map();

    let enumCardPower = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    }
    let enumCardType = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1,
    }
    for (const line of (data)) {
        let tokens = line.split(": ");
        let name = tokens.shift();
        let deckAsString = tokens[0];
        let deckArr = deckAsString.split(", ")

        if (!players.has(name)) {
            players.set(name, new Set())
        }
        for (const card of deckArr) {
            players.get(name).add(card)
        }
    }
    
    for (const [key, value] of players) {
        let sum = 0;
        for (const card of value) {
            let cardInfo = card.split("");
            let type = cardInfo.pop();
            let power = cardInfo.join("");
            let cardPowerAsNum = enumCardPower[power];
            let cardTypeAsNum = enumCardType[type];
            sum += cardPowerAsNum * cardTypeAsNum

        }
        console.log(`${key}: ${sum}`);
    }
}
solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])