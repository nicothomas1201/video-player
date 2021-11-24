const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progressBar = document.querySelector('#progress-bar');

$play.addEventListener('click', () => {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  $forward.hidden = false;
  $backward.hidden = false;
});

$pause.addEventListener('click', () => {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
  $backward.hidden = true;
  $forward.hidden = true;
});

$backward.addEventListener('click', () => { 
    $video.currentTime -= 10;
});

$forward.addEventListener('click', () => {
    $video.currentTime +=  10;
});

$video.addEventListener('loadedmetadata', () => {
  $progressBar.max = $video.duration;
});

$video.addEventListener('timeupdate', () => {
  $progressBar.value = $video.currentTime;
});

$progressBar.addEventListener('input', () => {
  $video.currentTime = $progressBar.value;
  console.log($progressBar.value);
});

document.addEventListener('keydown', (e) => {
  if(e.key == 'ArrowLeft') $video.currentTime -= 10;
  if(e.key == 'ArrowRight') $video.currentTime += 10;
  if(e.code == 'Space') {
    if($video.paused == true) {
      $video.play();
      $play.hidden = true;
      $pause.hidden = false;
      $backward.hidden = false;
      $forward.hidden = false;
    }
    else if($video.paused == false) {
      $video.pause();
      $play.hidden = false;
      $pause.hidden = true;
      $backward.hidden = true;
      $forward.hidden = true;
    }
}
});

