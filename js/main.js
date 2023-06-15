const wrapper = document.querySelector(".wrapper"),
musicImg = wrapper.querySelector(".img-area img"),
musicName = wrapper.querySelector(".song-details .name"),
//musicArtist = wrapper.querySelector(".song-details .artist"),
playBtn = wrapper.querySelector(".bi-play-circle-fill"),
pauseBtn=wrapper.querySelector(".bi-pause-circle-fill"),

prevBtn = wrapper.querySelector("#prev"),
nextBtn = wrapper.querySelector("#next"),
mainAudio = wrapper.querySelector("#main-audio");
;

let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
isMusicPaused = true;

window.addEventListener("load", ()=>{
  loadMusic(musicIndex);
  
});

function loadMusic(indexNumb){
  musicName.innerText = allMusic[indexNumb - 1].name;
  //musicArtist.innerText = allMusic[indexNumb - 1].artist;
  musicImg.src = `images/${allMusic[indexNumb - 1].src}.jpg`;
  mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
}

function playMusic(){
  wrapper.classList.add("paused");
  //playPauseBtn.querySelector("i").innerText = "pause";
  mainAudio.play();
}


function pauseMusic(){
  wrapper.classList.remove("paused");
 
  mainAudio.pause();
}

function prevMusic(){
  musicIndex--;
  musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
  loadMusic(musicIndex);
  playMusic();
  pauseBtn.style.display="inline";
  playBtn.style.display="none";
}


function nextMusic(){
  musicIndex++; 
  musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
  loadMusic(musicIndex);
  playMusic();
  pauseBtn.style.display="inline";
  playBtn.style.display="none";
}


playBtn.addEventListener("click", ()=>{
  const isMusicPlay = wrapper.classList.contains("paused");
  
  isMusicPlay ? pauseMusic() : playMusic();
  pauseBtn.style.display="inline";
  playBtn.style.display="none";
});
pauseBtn.addEventListener("click", ()=>{
  const isMusicPlay = wrapper.classList.contains("paused");
  
  isMusicPlay ? pauseMusic() : playMusic();
  playBtn.style.display="inline";
  pauseBtn.style.display="none";
});

//prev music 
prevBtn.addEventListener("click", ()=>{
  prevMusic();
});

//next music button 
nextBtn.addEventListener("click", ()=>{
  nextMusic();
});

