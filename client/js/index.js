var audio = document.getElementById("myAudio");
var muteButton = document.getElementById("muteButton");

muteButton.addEventListener("click", function() {
    toggleMute();
});

function toggleMute() {
    if (audio.muted) {
        audio.muted = false;
        muteButton.innerHTML = "Mute";
    } else {
        audio.muted = true;
        muteButton.innerHTML = "Unmute";
    }
}
