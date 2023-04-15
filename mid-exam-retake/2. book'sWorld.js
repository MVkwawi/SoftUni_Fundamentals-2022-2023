function favoriteBookGenres(input) {
  let newFavoriteGenres = input
                    .shift()
                    .split(" | ");

  let currentLine = input.shift();

  while (currentLine !== 'Stop!') {
    let [command, genreOne, genreTwo] = currentLine.split(' '); 
    let indexOne = Number(genreOne);
    let indexTwo = Number(genreTwo);

    switch (command) {
        case 'Join': 
        if (!newFavoriteGenres.includes(genreOne)) {
            newFavoriteGenres.push(genreOne);
        }
        break;
        case 'Drop': 
        if (newFavoriteGenres.includes(genreOne)) {
            let index = newFavoriteGenres.indexOf(genreOne);
            newFavoriteGenres.splice(index, 1);
        }
        break;
        case 'Replace': 
        if (newFavoriteGenres.includes(genreOne) && !newFavoriteGenres.includes(genreTwo)) {
          let indexOfGenreOne = newFavoriteGenres.indexOf(genreOne);
          newFavoriteGenres.splice(indexOfGenreOne, 1, genreTwo);
        }
        break;
        case 'Prefer': 
        if (newFavoriteGenres[indexOne] && newFavoriteGenres[indexTwo]) {
          let itemOne = newFavoriteGenres[indexOne];
          let itemTwo = newFavoriteGenres[indexTwo];

          newFavoriteGenres.splice(indexOne, 1, itemTwo);
          newFavoriteGenres.splice(indexTwo, 1, itemOne);
          
        }
        break;
    }

    currentLine = input.shift();
  }

  console.log(newFavoriteGenres.join(' '));
}

favoriteBookGenres(["Romance | Fiction | Horror | Mystery", 
"Drop Romance", 
"Join Fantasy", 
"Prefer 1 2", 
"Stop!"]);

favoriteBookGenres((["Poetry | Romance",
"Drop Children",
"Replace Fantasy Crime",
"Stop!"]));

favoriteBookGenres((["Thriller | Young | Crime",
"Join Political",
"Replace Young Fairytale",
"Prefer 6 2",
"Stop!"]));
