function passwordValidator(password) {

    function charNumber (password) {
        let passwordLength = password.length;

        if (passwordLength > 5 && passwordLength < 11) {
            return true;
        } else {
            return 'Password should be between 6 and 10 characters';
        }
    }
    let charCheck = charNumber(password);

    //check if the password is between 6-10 characters

    function lettersDigits(password) {
        

      // should have at least two digits
    }  
    }
    //check if the password has only letters and digits

    
passwordValidator('logIn');