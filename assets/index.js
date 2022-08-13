import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video }); // creamos nueva instancia de nuestro MediaPlayer llamado player y declaramos que el va a ser video, que está declarado en html, por eso lo pillamos al inicio con document.querySelector("video")

const button = document.querySelector("button");
button.onclick = () => player.togglePlay();