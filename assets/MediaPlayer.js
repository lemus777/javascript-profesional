function MediaPlayer(config) {
    this.media = config.el; // hacemos que el video (media) lo coja de la clave el del objeto config
};

MediaPlayer.prototype.play = function() {
    this.media.play(); // añadimos a MediaPlayer la funcion play que reproduce nuestro media (video)
};
MediaPlayer.prototype.pause = function() {
    this.media.pause(); // añadimos a MediaPlayer la funcion pause que pausa nuestro media
};
MediaPlayer.prototype.togglePlay = function() { // añadimos togglePlay que reproduce si está pausado y pausa si no está pausado
    this.media.paused ? this.play() : this.pause(); 
};

export default MediaPlayer;