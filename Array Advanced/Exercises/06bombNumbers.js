    function bombNumber(arr1, arr2) {
        let specialNum = arr2[0];
        let specialNumPow = arr2[1];
       
        let detonatedArr = iterateFirstArr(arr1)
        return sumNumsInDetonatedArr(detonatedArr)
       
        function iterateFirstArr(arr) {
          for (let i = 0; i < arr.length; i++) {
            let currentElement = arr[i];
            let indexSpecialEl = arr.indexOf(currentElement);
            let specialIndexMinusPower = indexSpecialEl - specialNumPow
            if(specialIndexMinusPower<0 && currentElement === specialNum ){
              arr.splice(0,(specialNumPow * 2 + 1) + specialIndexMinusPower )
            }else if (currentElement === specialNum && specialNumPow !== 0) {
              arr.splice(specialIndexMinusPower, specialNumPow * 2 + 1);
            }
          }
       
          return arr;
        }
       
        function sumNumsInDetonatedArr(arr){
      if(arr.length>0){
      let result =  arr.reduce((a,b) => a + b)
      return result
      }
      return 0
        }
       
    }
    console.log(bombNumber([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]))
      