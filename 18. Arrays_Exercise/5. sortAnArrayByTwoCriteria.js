function sortingArrByTwoCriteria(arr) {
    let sortedArrByLength = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedArrByLength.join("\n"));
}
sortingArrByTwoCriteria(['alpha', 'beta', 'gamma']);
sortingArrByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);