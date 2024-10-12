function sortBy2Criteria(input){
    let sortedArray = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
    
   sortedArray.forEach(element => {     // forEach is equivallent to forOf loop
    console.log(element);
   });
}
sortBy2Criteria(['alpha', 'beta', 'gamma'])

// When compare by two criteria we check if the first one is true, if so we ignore the second one.
// Creating a comparing function by 2 criteria can be achieved by first comparing by the main criteria, if the 2 items are different (the result of the compare is not 0) - return the result as the result of the comparing function. If the two items are the same by the main criteria (the result of the comparison is 0), we need to compare by the second criteria and the result of that comparison is the result of the comparing function