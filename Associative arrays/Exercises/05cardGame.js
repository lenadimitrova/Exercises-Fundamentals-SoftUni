function cardGame(input) {

    let player = {};

    for (const line of input) {
        let [name, cards] = line.split(": ")
        let arrCards = cards.split(" ");

        if (!player[name]) {
            player[name] = [];
        }

        for (const card of arrCards) {

            let uniqueCards = new Set(arrCards)
        }
        player[name].push(uniqueCards)

        console.log(player);

    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])