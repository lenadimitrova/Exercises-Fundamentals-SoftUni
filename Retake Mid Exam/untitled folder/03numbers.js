function numbers(input){
    let arr = input.split(' ');
    let sum = 0;
    
    for (const el of arr) {
        let number = Number(el);
        sum +=number
    }
    let average = sum / arr.length;
    
    let sortedArr= arr.sort((a,b) => b - a).filter(num => (num > average)).splice(0,5);
    console.log(sortedArr.join(' '));

    if(sortedArr.length === 0){
        console.log('No');
    }
}
numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');