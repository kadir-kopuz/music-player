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
const i = document.querySelector("#play i");

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
  nextMusic();
});

function prevMusic() {
  player.prev();
  let music = player.getMusic();
  playMusic();
}

function nextMusic() {
  player.next();
  let music = player.getMusic();
  playMusic();
}

function playMusic() {
  let music = player.getMusic();
  displayMusic(music);
  container.classList.add("playing");
  i.className = "fa-solid fa-pause";
  audio.play();
}
function pauseMusic() {
  let music = player.getMusic();
  displayMusic(music);
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
