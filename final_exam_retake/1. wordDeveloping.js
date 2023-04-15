function wordDeveloping(input) {
    let string = '';

    let tempStr = '';

    let currentString = input.shift();
    while (currentString !== 'End') {
        let toDo = currentString.split(' ');
        let command = toDo[0];

        switch (command) {
            case 'Add': 
            let substr = toDo[1];
            tempStr = string + substr;
            string = tempStr;
            break;
            // case 'Upgrade': 
            // break;
            case 'Print': 
                console.log(string);
            break;
            // case 'Index': 
            // break;
            // case 'Remove': 
            // break;
        }
        
        currentString = input.shift();
    }
}

wordDeveloping(["Add University",
"Remove i",
"End"]);