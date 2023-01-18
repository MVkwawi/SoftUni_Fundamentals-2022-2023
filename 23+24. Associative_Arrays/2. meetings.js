function meetingScheduling (array) {
    let meetingList = {};

    for (const el of array) {
        let [day, name] = el.split(' ');

        if(meetingList[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetingList[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const [day, name] of Object.entries(meetingList)) {
        console.log(`${day} -> ${name}`);
    }
}

meetingScheduling(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);