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
  new Music("O Sen Olsan Bari", "Aleyna Tilki", "5.jpeg", "5.mp3"),
  new Music("Mevsim Sonbahar", "Metro", "6.jpeg", "6.mp3"),
  new Music("Nabız", "Hidra - feat. Şehinşah", "7.jpeg", "7.mp3"),
  new Music("Bebeğim Öldü", "Sagopa Kajmer", "8.jpeg", "8.mp3"),
  new Music("Derinlerde", "Mark Eliyahu & Cem Adrian", "9.jpeg", "9.mp3"),
  new Music("Dünyanın Sonuna Doğmuşum", "maNga", "10.jpeg", "10.mp3"),
];
