function songList(arr) {
    let numberOfSongs = arr.shift();
    let typeSongs = arr.pop();
  
    class Song {
      constructor(name) {
        this.name = name;
      }
      song() {
        console.log(this.name);
      }
    }
  
    for (let el of arr) {
      let [typeList, songName] = el.split('_');
      
      if (typeList === typeSongs || typeSongs === 'all') {
        let currSong = new Song(songName);
        currSong.song();
      }
    }
  }
songList([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])