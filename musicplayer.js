class MusicPlayer {
  constructor(musicList) {
    this.musicList = musicList;
    this.index = 0;
  }

  getMusic() {
    return this.musicList[this.index];
  }

  next() {
    if (this.index + 1 == this.musicList.length) {
      this.index = 0;
    } else {
      this.index++;
    }
  }

  prev() {
    if (this.index == 0) {
      this.index = this.musicList.length - 1;
    } else {
      this.index--;
    }
  }

  random() {
    const newIndex = Math.floor(Math.random() * this.musicList.length);
    if (this.index === newIndex) {
      this.index = (newIndex + 1) % this.musicList.length;
    } else {
      this.index = newIndex;
    }
    console.log(this.index);
  }
}
