function convertToJSON(firstName, lastName, hairColor) {

    let myInfo = {};

    myInfo.name = firstName
    myInfo.lastName = lastName
    myInfo.hairColor = hairColor;

   // let text = JSON.stringify(myInfo);
    console.log(JSON.stringify(myInfo));
}
convertToJSON('George', 'Jones', 'Brown')