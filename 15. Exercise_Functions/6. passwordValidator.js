function passwordValidator(password) {
    
    let digitCount = 0;
    let passwordLength = password.length;
    let unrequiredSymbols = false;

    for (let i = 0; i < passwordLength; i ++) {
        let currentSymbol = password[i].charCodeAt();

        let isDigit = currentSymbol >= 48 && currentSymbol <= 57;
        let isSmallLetter = currentSymbol >= 97 && currentSymbol <= 122;
        let isCapitalLetter = currentSymbol >= 65 && currentSymbol <= 90;
        
        if (isDigit) {
            digitCount ++;
        }
        
        if (!isDigit && !isSmallLetter && !isCapitalLetter) {
            unrequiredSymbols = true;
        }
    }

    if (passwordLength < 6 || passwordLength > 10) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (unrequiredSymbols) {
        console.log('Password must consist only of letters and digits');
    }
    if (digitCount < 2) {
        console.log('Password must have at least 2 digits');
    }
    if (digitCount >= 2 && !unrequiredSymbols && (passwordLength >= 6 && passwordLength <= 10)) {
        console.log('Password is valid');
    }
}

    
passwordValidator('MyPass123');