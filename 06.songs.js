function songs(inputArray) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let lengthList = inputArray.shift();
    let typeListCommand = inputArray.pop();
    let namesOfTheSongs = [];


    for (let i = 0; i < lengthList; i++) {
        let [typeList, name, time] = inputArray[i].split('_');
        namesOfTheSongs.push(new Song(typeList, name, time));
    }

    if (typeListCommand === 'all') {
        namesOfTheSongs.forEach((song) => console.log(song.name));
    }
    else {
        let filtered = namesOfTheSongs.filter((song) => song.typeList === typeListCommand);
        filtered.forEach((song) => console.log(song.name));
    }
}

songs([4,'favorite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favorite_InToTheNight_3:58', 'favorite_LiveItUp_3:48', 'listenLater'])
