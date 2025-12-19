class Music {
  constructor(title, singer, img, song) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.song = song;
  }

  getName() {
    return this.title + " " + this.singer;
  }
}

const musicList = [
  new Music("Snap", "Manifest", "1.jpeg", "1.mp3"),
  new Music("Kalbimden Tenime", "Can Ozan", "2.jpeg", "2.mp3"),
  new Music("Anla Nolur", "Bi'şey Yok", "3.jpeg", "3.mp3"),
  new Music("Vurdum Tellerine", "M Lisa", "4.jpeg", "4.mp3"),
];
