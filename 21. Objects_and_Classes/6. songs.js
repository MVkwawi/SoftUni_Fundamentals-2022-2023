function listSongsOnCommand(input) {

    let songsToPrint = [];
    let songNum = input.shift();
    let songTypeToAquare = input.pop();

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < songNum; i ++) {
        let [type, name, time] = input[i].split('_');

        let song = new Song(type, name, time);
        songsToPrint.push(song);
    }

    if (songTypeToAquare === 'all') {
        songsToPrint.forEach((a) => console.log(a.name));
    } else {
        let filtered = songsToPrint.filter((a) => a.type === songTypeToAquare);
        filtered.forEach((a) => console.log(a.name));
    }
    
}
listSongsOnCommand([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);
    