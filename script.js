const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector('img');

const singName  = document.getElementById("songName");
const artistName  = document.getElementById("artistName");
const prev  = document.getElementById("prev");
const next  = document.getElementById("next");


let isAudioPlaying = false;// in starting it is not playing

const playTheMusic = ()=>{
    isAudioPlaying = true;
    music.play(); // play is a js event

    play.classList.replace("fa-play","fa-pause");
    img.classList.add("rotateAnime");
};

// for pause fn
const pauseTheMusic = ()=>{
    isAudioPlaying = false;
    music.pause(); // play is a js event

    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("rotateAnime");
};

// event activated when muci played
play.addEventListener("click",()=>{
    isAudioPlaying ? pauseTheMusic() : playTheMusic();
});
