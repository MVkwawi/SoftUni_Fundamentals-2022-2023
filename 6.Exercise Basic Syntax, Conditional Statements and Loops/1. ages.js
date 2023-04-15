function ages(age) {
    let currentAge = age;

    if (currentAge < 0) {
        console.log("out of bounds");
    } else if(currentAge <=2){
        console.log("baby");
    } else if (currentAge <= 13) {
        console.log("child");
    } else if (currentAge <= 19) {
        console.log("teenager");
    } else if (currentAge <= 65) {
        console.log("adult");
    } else if (currentAge >= 66) {
        console.log("elder");
    }
}
ages(-1);