let audioImg = document.getElementsByClassName("audio-img")[0];

const playclip = () => {
  let audio = document.getElementById('userAudio');
  audio.play();
  return false;
}

let interval;

const playing = () => {
  let icon = document.getElementsByClassName("pronounce")[0];
  let count = 1;
  interval = setInterval(() => {
    if (count == 1) {
      audioImg.className = "audio-img mt-1 d-none";
      icon.className = "fa fa-2x fa-volume-off pronounce";
    }
    else if (count == 2) {
      audioImg.className = "audio-img mt-1 d-none";
      icon.className = "fa fa-2x fa-volume-down pronounce";
    }
    else {
      audioImg.className = "audio-img mt-1";
      icon.className = "fa fa-2x fa-volume-down pronounce d-none";
      count = 0;
    }
    count++;
  }, 333);
}

const stopped = () => {
  let icon = document.getElementsByClassName("pronounce")[0];
  audioImg.className = "audio-img mt-1";
  icon.className = "fa fa-2x fa-volume-down pronounce d-none";
  clearInterval(interval);
}