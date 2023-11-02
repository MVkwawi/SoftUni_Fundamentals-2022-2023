function oddOccurrances(string) {
    let words = {};
    let wordsArr = string.toLowerCase().split(' ');

    for (const str of wordsArr) {
        if(!words.hasOwnProperty(str)) {
            words[str] = 0;
        }
        words[str] ++;
    }

    let filteredWords = Object.keys(words).filter((a) => words[a] % 2 === 1);

    console.log(filteredWords.join(' '));
}

oddOccurrances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrances('Cake IS SWEET is Soft CAKE sweet Food');