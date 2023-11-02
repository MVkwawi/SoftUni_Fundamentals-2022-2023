function wordsTracker(array) {
    let words = array.shift().split(' ');
    let searchForWords = {};

    for (const el of words) {
        searchForWords[el] = 0;
    }

    for (const word of array) {
        if (searchForWords.hasOwnProperty(word)) {
            searchForWords[word] ++;
        }
    }

    let sortedByWordCount = Object.entries(searchForWords).sort(([a, b], [aa, bb]) => bb - b);

    for (const [word, count] of sortedByWordCount) {
        console.log(`${word} - ${count}`);
    }
}
wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);

wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);