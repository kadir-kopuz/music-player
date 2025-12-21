const container = document.querySelector(".containers");
const prev = document.querySelector("#prev");
const play = document.querySelector("#play");
const next = document.querySelector("#next");
const title = document.querySelector("#title");
const singer = document.querySelector("#singer");
const audio = document.querySelector("#audio");
const image = document.querySelector("#image");
const currentTime = document.querySelector("#current-time");
const duration = document.querySelector("#duration");
const progressBar = document.querySelector(".bar-progress");
const volume = document.querySelector("#volume");
const volumeBar = document.querySelector("#volume-bar");
const i = document.querySelector("#play i");
const random = document.querySelector("#random");
const repeat = document.querySelector("#repeat");
const info = document.querySelector("#info");

const player = new MusicPlayer(musicList);
let music = player.getMusic();
window.addEventListener("load", () => {
  let music = player.getMusic();
  displayMusic(music);
});

function displayMusic(music) {
  title.innerText = music.title;
  singer.innerText = music.singer;
  image.src = "img/" + music.img;
  audio.src = "mp3/" + music.song;
}
play.addEventListener("click", () => {
  if (container.classList.contains("playing")) {
    pauseMusic();
  } else {
    playMusic();
  }
});

prev.addEventListener("click", () => {
  prevMusic();
});

next.addEventListener("click", () => {
  if (randomMode == 0) {
    nextMusic();
  } else {
    randomSong();
  }
});

function prevMusic() {
  player.prev();
  let music = player.getMusic();
  displayMusic(music);
  playMusic();
}

function nextMusic() {
  player.next();
  let music = player.getMusic();
  displayMusic(music);
  playMusic();
}

function playMusic() {
  container.classList.add("playing");
  i.className = "fa-solid fa-pause";
  audio.play();
}
function pauseMusic() {
  container.classList.remove("playing");
  i.className = "fa-solid fa-play";
  audio.pause();
}

const calculateTime = (total) => {
  const minute = Math.floor(total / 60);
  const second = Math.floor(total % 60);
  const newSecond = second < 10 ? `0${second}` : `${second}`;
  const result = `${minute}:${newSecond}`;
  return result;
};

audio.addEventListener("loadedmetadata", () => {
  duration.textContent = calculateTime(audio.duration);
  progressBar.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  currentTime.textContent = calculateTime(audio.currentTime);
  progressBar.value = Math.floor(audio.currentTime);
});

progressBar.addEventListener("input", () => {
  currentTime.textContent = calculateTime(progressBar.value);
  audio.currentTime = progressBar.value;
});

let valueState = "unmute";

volumeBar.addEventListener("input", (e) => {
  const volumeValue = e.target.value;
  audio.volume = volumeValue / 100;
  if (audio.volume == 0) {
    valueState = "mute";
    volume.classList = "fa-solid fa-volume-xmark";
    audio.muted = true;
  } else {
    valueState = "unmute";
    volume.classList = "fa-solid fa-volume-high mute";
    audio.muted = false;
  }
});

volume.addEventListener("click", () => {
  if (valueState == "mute") {
    valueState = "unmute";
    volume.classList = "fa-solid fa-volume-high mute";
    audio.muted = false;
    volumeBar.value = "100";
  } else {
    valueState = "mute";
    volume.classList = "fa-solid fa-volume-xmark";
    audio.muted = true;
    volumeBar.value = 0;
  }
});

function randomSong() {
  player.random();
  let currentMusic = player.getMusic();
  displayMusic(currentMusic);
  playMusic();
}

let repeatMode = 0;

repeat.addEventListener("click", () => {
  if (repeatMode == 0) {
    repeatMode = 1;
    repeat.classList.add("repeatcss");
  } else {
    repeatMode = 0;
    repeat.classList.remove("repeatcss");
  }
});

let randomMode = 0;

random.addEventListener("click", () => {
  if (randomMode == 0) {
    randomMode = 1;
    random.classList.add("randomcss");
  } else {
    randomMode = 0;
    random.classList.remove("randomcss");
  }
});

audio.addEventListener("ended", () => {
  if (repeatMode == 0 && randomMode == 0) {
    nextMusic();
  } else if (repeatMode == 1 && randomMode == 0) {
    audio.value = 0;
    audio.play();
  } else if (repeatMode == 0 && randomMode == 1) {
    randomSong();
  } else {
    audio.value = 0;
    audio.play();
  }
});
