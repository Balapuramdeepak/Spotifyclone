console.log("Welcome");
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let playing=document.getElementById('playing');
let progress=document.getElementById('progress');
let gif=document.getElementById('gif');
let songs = [
    {songName: "Katamarayudu" , filePath:"songs/1.mp3",  coverPath:"covers/1.jpg"},
    {songName: "Naatu-Naatu" , filePath:"songs/2.mp3",  coverPath:"covers/2.jpg"},
    {songName: "Naa roja nuvve" , filePath:"songs/3.mp3",  coverPath:"covers/3.jpg"},
    {songName: "Adipoli reverse" , filePath:"songs/4.mp3",  coverPath:"covers/4.jpg"},
    {songName: "sirivennela" , filePath:"songs/5.mp3",  coverPath:"covers/5.jpg"},
    {songName: "Karigeloga" , filePath:"songs/6.mp3",  coverPath:"covers/6.jpg"},
    {songName: "Dippa-Dippam" , filePath:"songs/7.mp3",  coverPath:"covers/7.jpg"},
    {songName: "AAradugula-bulletu" , filePath:"songs/8.mp3",  coverPath:"covers/8.jpg"}
]

playing.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        playing.classList.remove('fa-play-circle');
        playing.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        playing.classList.remove('fa-pause-circle');
        playing.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})
audioElement.addEventListener('timeupdate',()=>{
    // console.log("timeupdate");
    prog=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progress.value=prog;    
});
progress.addEventListener('change',()=>{
    audioElement.currentTime = progress.value*audioElement.duration/100; 
})