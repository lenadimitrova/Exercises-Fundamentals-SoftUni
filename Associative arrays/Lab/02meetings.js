function meetings(input) {

    let allMeetings = {};

    for (let line of input) {
        let [weekDay, name] = line.split(" ");

        if (allMeetings.hasOwnProperty(weekDay)) {          // if (allMeetings[weekday])
            console.log(`Conflict on ${weekDay}!`);
        } else {
            allMeetings[weekDay] = name;
            console.log(`Scheduled for ${weekDay}`);
        }
    }
    for (const [weekDay, name] of Object.entries(allMeetings)) {
        console.log(`${weekDay} -> ${name}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])