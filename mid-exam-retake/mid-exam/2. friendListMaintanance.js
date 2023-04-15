function frindListMaintanance (reportInfo) {
    let names = [reportInfo[0]];
    let namesToString = names.toString();

    let blackListNamesCount = 0;
    let blacklistedNames = [];
    let lostNames = 0;
    let lostNamesArray = [];
    
    for(let i = 1; i <= reportInfo.length; i++){
        let currentCommand = reportInfo[i];
        let name;
        let index;

        if(currentCommand.includes('Blacklist')) {
            blackListNamesCount ++;
            name = currentCommand.replace('Blacklist ', '');

            if (namesToString.includes(name)) {
                console.log(`${name} was blacklisted.`);
            } else {
                console.log(`${name} was not found`);
            }

            blacklistedNames += name;

        } else if (currentCommand.includes('Error')) {
            index = Number(currentCommand.replace('Error ', ''));

            if (blacklistedNames.includes(names[index]) && lostNamesArray.includes(names[index])) {
            } else {
            lostNames ++;
            names = names.splice(index, 'Lost');
            }

        } else if (currentCommand.includes('Change')) {

            names = names.splice(index, 'name');
        } else if (currentCommand.includes('Report')) {
            break;
        }
    }

    // console.log(commands);
}
frindListMaintanance(['Mike, John, Eddie',
                    'Blacklist Mike',
                    'Error 0',
                    'Report']);