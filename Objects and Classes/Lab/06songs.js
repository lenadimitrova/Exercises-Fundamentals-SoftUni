function songList(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.songName = name;
            this.duration = time;
        }
    }
    let songCount = input.shift();
    let album = input.pop();
    let songs = [];

    for (let i = 0; i < songCount; i++) {
        let [typeList, name, duration] = input[i].split("_")
        let song = new Song(typeList, name, duration);
        songs.push(song);
    }
    if (album === "all") {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.typeList === album)    
        filtered.forEach((i) => console.log(i.name));
    }
}
songList([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])