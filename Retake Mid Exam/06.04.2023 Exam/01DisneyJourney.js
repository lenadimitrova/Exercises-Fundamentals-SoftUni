function disney(input){
    let journeyCost = Number(input.shift());
    let months = Number(input.shift());

    let savedMoneyPerMonth = journeyCost * 0.25;
    let totalSavings = savedMoneyPerMonth;
    
    for (let i = 0; i < months; i++){
        totalSavings += journeyCost* 0.25
        
        if(i % 2 === 1){
            totalSavings = (totalSavings * 0.16);
            totalSavings += journeyCost* 0.25
        }
        if(i % 4 === 1){
            totalSavings += totalSavings * 0.25
        }
    }

}
disney((["1000", "4"]) )