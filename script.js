const video = document.getElementById('video');

video.addEventListener('loadedmetadata', () => {
  video.currentTime = Math.random() * video.duration;
  video.play();
});

video.addEventListener('ended', () => {
  let contador = localStorage.getItem('loopCount');
  contador = contador ? parseInt(contador) + 1 : 1;
  localStorage.setItem('loopCount', contador);

  video.currentTime = Math.random() * video.duration;
  video.play();
});
