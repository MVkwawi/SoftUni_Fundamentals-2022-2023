function censoredWords(str, word) {
    let wordLength = word.length; 
    let star = '*';
    let censor = star.repeat(wordLength);

    let text = str;
    while (text.includes(word)) {
        text = text.replace(word, censor)
    }

    console.log(text);
}

censoredWords('A small sentence with some words', 'small');

censoredWords('Find the hidden word', 'hidden');