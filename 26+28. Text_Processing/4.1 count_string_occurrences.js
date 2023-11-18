function occurrenceCount(str, word) {
    let counter = 0;

    let text = str.split(' ');
    for (const w of text) {
        if (w === word) {
            counter ++;
        }
    }

    console.log(counter);
}

occurrenceCount('This is a word and it also is a sentence',
'is'
);

occurrenceCount('softuni is great place for learning new programming languages',
'softuni'
);