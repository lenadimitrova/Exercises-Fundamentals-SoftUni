function charactersInRange(char1, char2) {

    let startIndex = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let endIndex = Math.max(char2.charCodeAt(), char1.charCodeAt());
    let symbolArr = [];
    
    for (let i = startIndex + 1; i < endIndex; i++) {
     let currentSymbol = String.fromCharCode(i);
     symbolArr.push(currentSymbol);
    }
    console.log(symbolArr.join(' '));
}
charactersInRange('a', 'd' );
charactersInRange('#', ':');
charactersInRange('C', '#' );