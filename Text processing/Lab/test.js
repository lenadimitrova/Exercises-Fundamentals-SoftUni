// function solve(text, word) {

//     while (text.includes(word)) {
//         text = text.replace(word, "*".repeat(word.length));
//         console.log(text);
//     }

// }
// solve('Find the hidden word', 'hidden')

function christmasTree(input) {
    let n = Number(input[0]);
    for (let i = 0; i <= n; i++) {
        let stars = "*".repeat(i);
        let spaces = " ".repeat(n - i);
        let body = " | ";
        let row = spaces + stars + body + stars + spaces;
        console.log(row);
    }
}
christmasTree(["10"])