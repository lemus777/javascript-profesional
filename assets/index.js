import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector("video");
const player = new MediaPlayer({ 
    el: video, 
    plugins: [new AutoPlay(), new AutoPause()], 
}); // creamos nueva instancia de nuestro MediaPlayer llamado player y declaramos que el va a ser video, que está declarado en html, por eso lo pillamos al inicio con document.querySelector("video")

const play = document.querySelector(".play-pause");
play.onclick = () => player.togglePlay();

const mute = document.querySelector(".mute-unmute");
mute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}