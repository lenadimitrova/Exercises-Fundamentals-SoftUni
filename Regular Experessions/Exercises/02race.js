function race(data) {

    let participants = data.shift().split(', ');
    let result = {};
    let name = /[A-Za-z]/g;
    let distance = /\d/g;

    for (const line of data) {
        if (line === 'end of race') {
            break;
        }
        let matchName = line.match(name).join('');
        let matchDistance = line.match(distance).join('');

        if (participants.includes(matchName)) {
            let totalDistance = 0;
            for (const digit of matchDistance) {
                totalDistance += Number(digit)
            }
            if (!result[matchName]) {
                result[matchName] = totalDistance
            } else {
                result[matchName] += totalDistance;
            }
        }
    }
    let sortedResult = Object.entries(result).sort((a,b) => b[1] - a[1]);

    let firstPlace = sortedResult[0][0];
    let secondPlace = sortedResult[1][0];
    let thirdPlace = sortedResult[2][0];
    console.log(`1st place: ${firstPlace}`);
    console.log(`2nd place: ${secondPlace}`);
    console.log(`3rd place: ${thirdPlace}`);
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])