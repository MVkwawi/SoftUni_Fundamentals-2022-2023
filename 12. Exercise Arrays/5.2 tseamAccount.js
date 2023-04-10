function printTseamAccount(arr) {
  //account into arr
  let account = arr
                .shift()
                .split(" ");

  let command = arr.shift();
  while (command !== "Play!") {
    [toDo,  game] = command.split(' ');
    
    switch (toDo) {
        case 'Install': 
            if (!account.includes(game)) {
                account.push(game);
            }
        break;
        case 'Uninstall': 
            if (account.includes(game)) {
                let index = account.indexOf(game);
                account.splice(index, 1);
            }
        break;
        case 'Update': 
            if (account.includes(game)) {
                let index = account.indexOf(game);
                let movingGame = account.splice(index, 1);
                account.push(movingGame);
            }
        break;
        case 'Expansion':   
            [updtGame, expansion] = game.split('-');     
            if (account.includes(updtGame)) {
                

                let index = account.indexOf(updtGame);
                let gameEspansion = updtGame + ':' + expansion;

                account.splice(index + 1, 0, gameEspansion);     
            }
        break;
    }
    command = arr.shift();
  }
  console.log(account.join(' '));
}
printTseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);

printTseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']);