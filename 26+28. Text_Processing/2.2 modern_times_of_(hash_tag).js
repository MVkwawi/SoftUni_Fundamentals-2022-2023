function findHashTagWords(sentence) {
    let sentenceArr = sentence.split(' ');

    for (const word of sentenceArr) {
        if (word.startsWith('#')) {
            if (word.length > 1) {
                let wordToPrint = word.slice(1);
                
                if (/^[a-zA-Z]+$/.test(wordToPrint)) {
                        console.log(wordToPrint);
                }
                
            }
        }
    }
}

findHashTagWords('Nowadays everyone uses # to tag a #special word in #socialMedia');

findHashTagWords('The symbol # is known #variously in English-speaking #regions as the #number sign');