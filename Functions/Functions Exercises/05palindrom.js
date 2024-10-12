function palindrom (arr) {

    for (const number of arr) {
        let numberAsString = number.toString();
        let reversedNumbeer = numberAsString.split('').reverse().join('');

        if (numberAsString === reversedNumbeer){
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
palindrom([123,323,421,121]);