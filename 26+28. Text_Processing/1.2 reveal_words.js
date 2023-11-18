function revealCensoredWords(wordsToReveal, sentence) {
    let newText = sentence;
 
    wordsToReveal = wordsToReveal.split(', ');
    for (const word of wordsToReveal) {
        let wordLength = word.length; 
        let starLenght = '*'.repeat(wordLength);

        if (newText.includes(starLenght)) {
            newText = newText.replace(starLenght, word);
        }
    }

    console.log(newText);
}

revealCensoredWords('great',
'softuni is ***** place for learning new programming languages'
);

revealCensoredWords('great, learning',
'softuni is ***** place for ******** new programming languages'
);