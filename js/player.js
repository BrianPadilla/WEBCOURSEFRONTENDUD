var music = document.getElementById("music");
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var playhead = document.getElementById("elapsed");
var timeline = document.getElementById("slider");
var timer = document.getElementById("timer");
var next = document.getElementById("next");
var back = document.getElementById("back");
var src = document.getElementsByName("mysource");
var duration;
var index = 0;
var canciones =
["https://i0000.clarodrive.com/s/fqE4YSMiqaW4anw?path=%2FN"]
pauseButton.style.visibility = "hidden";

var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
music.addEventListener("timeupdate", timeUpdate, false);


function timeUpdate() {
    var playPercent = timelineWidth * (music.currentTime / duration);
    playhead.style.width = playPercent + "px";

    var secondsIn = Math.floor(((music.currentTime / duration) / 3.5) * 100);
    if (secondsIn <= 9) {
        timer.innerHTML = "0:0" + secondsIn;
    } else {
        timer.innerHTML = "0:" + secondsIn;
    }
}

next.onclick = function() {
    
    if(index == canciones.length - 1){
        index = 0;
        music.src = canciones[index];
        music.play();
        
    }

    else{
    index++;
    music.src = canciones[index];
    music.play();
    console.log(index);
    }
    
    
}

back.onclick = function(){
    console.log(index);
    if(index == 0){
        index = canciones.length - 1;
        console.log(index);
        music.src = canciones[index];
        music.play();
    }

    else{
        
        index--;
        console.log(index);
        music.src = canciones[index];
        music.play();
        
    }
}

playButton.onclick = function() {
    music.play();
    playButton.style.visibility = "hidden";
    pause.style.visibility = "visible";
}

pauseButton.onclick = function() {
    music.pause();
    playButton.style.visibility = "visible";
    pause.style.visibility = "hidden";
}

music.addEventListener("canplaythrough", function () {
    duration = music.duration;
    
}, false);