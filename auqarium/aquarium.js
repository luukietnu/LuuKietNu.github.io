// background
let currentBackground = -1;
function changeBackground() {
    let backgrounds = ["bg1","bg2","bg3","bg4", "bg5" ];
    currentBackground++;
    if (currentBackground >= backgrounds.length) {
        currentBackground = -1;
    }
    document.getElementById("content").className =
        backgrounds[currentBackground];
}



//audio
    let music = document.getElementById("bgmusic");
    let isPlaying = false;
    function toggleMusic() {
    let btn = document.getElementById("music");
    if (isPlaying) {
        music.pause();
        btn.innerHTML = "🔇 Bật nhạc";
        isPlaying = false;
    } else {
        music.play();
            btn.innerHTML = " 🔊 Tắt nhạc";
        isPlaying = true;}
}



