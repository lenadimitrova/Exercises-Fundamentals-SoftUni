function party(input) {

    let regularGuests = [];
    let vipGuests = [];

    let guest = input.shift()

    while (guest !== 'PARTY') {
        let isVip = !isNaN(guest[0])
       
        if (isVip) {
            vipGuests.push(guest)
        } else {
            regularGuests.push(guest)
        }
        guest = input.shift()
    }
   let allGuests = vipGuests.concat(regularGuests)
    
   for (const guest of input) {
    allGuests.splice(allGuests.indexOf(guest), 1)
   }

   console.log(allGuests.length);
   allGuests.forEach(guest => console.log(guest))

}
party(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'])