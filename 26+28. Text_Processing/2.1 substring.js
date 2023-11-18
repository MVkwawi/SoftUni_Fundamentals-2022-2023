function subString(str, stratIndex, count) {
    let endIndex = stratIndex + count;
    let result = str.substring(stratIndex, endIndex);
    console.log(result);
}

subString('ASentence', 1, 8);

subString('SkipWord', 4, 7);