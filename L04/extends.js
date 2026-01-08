class Medai{
    constructor(info){
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

class Song extends Medai{
    constructor(SongData){
        super(SongData);
        this.artist = SongData.artist;
    }
}

const mySong = new Song({
    artist: "Queen",
    name: "Bohemian Rhapsody",
    publishDate: "1975"
})
console.log(mySong.artist);
  // Output: Queen
console.log(mySong.name);
console.log(mySong)
  // Output: Bohemian Rhapsody  