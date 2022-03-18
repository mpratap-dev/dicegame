function setRandomImages() {
  const player1img = document.getElementById('img1');
  const player2img = document.getElementById('img2');
  const title = document.getElementById('title');

  const player1number = Math.floor(Math.random() * 7) || 1;
  const player2number = Math.floor(Math.random() * 7) || 1;

  player1img.setAttribute('src', `images/dice${player1number}.png`);
  player2img.setAttribute('src', `images/dice${player2number}.png`);

  if(player1number === player2number) {
    title.innerText = 'Draw';
  } else if (player1number > player2number) {
    title.innerText = 'Player 1 wins 🚩';
  } else {
    title.innerText = 'Player 2 wins 🚩';
  }
}

window.addEventListener('DOMContentLoaded', function() {
  setRandomImages();
});

