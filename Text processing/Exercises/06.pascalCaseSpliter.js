function pascalCaseSpliter(string) {

    let result = string[0];
    let lower = string.toLowerCase();

    for (let index = 1; index < string.length; index++) {
       if (string[index] !== lower[index]) {
        result += ", "
       }
        result += string[index];
    }
    console.log(result);
}
pascalCaseSpliter('SplitMeIfYouCanHaHaYouCantOrYouCan')