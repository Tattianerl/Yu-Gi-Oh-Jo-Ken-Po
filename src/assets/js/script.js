let soundEnabled = true; 
const toggleButton = document.getElementById('toggle-sound');
const bgMusic = document.getElementById('bg-music');
const options = ["pedra", "papel", "tesoura"];

// Inicia a música de fundo em loop
bgMusic.loop = true;
bgMusic.play();

toggleButton.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  toggleButton.textContent = soundEnabled ? "🔊 Som: Ligado" : "🔇 Som: Desligado";

  if (soundEnabled) {
    bgMusic.play();
  } else {
    bgMusic.pause();
  }
});

function play(playerChoice) {
  if (soundEnabled) {
    document.getElementById('click-sound').play();
  }

  const cpuChoice = options[Math.floor(Math.random() * options.length)];
  let resultText = "";
  let soundId = '';

  if (playerChoice === cpuChoice) {
    resultText = `Empate! Ambos escolheram ${cpuChoice}`;
    soundId = 'draw-sound';
  } else if (
    (playerChoice === "pedra" && cpuChoice === "tesoura") ||
    (playerChoice === "papel" && cpuChoice === "pedra") ||
    (playerChoice === "tesoura" && cpuChoice === "papel")
  ) {
    resultText = `Você venceu! ${playerChoice} derrota ${cpuChoice}`;
    soundId = 'win-sound';
  } else {
    resultText = `Você perdeu! ${cpuChoice} derrota ${playerChoice}`;
    soundId = 'lose-sound';
  }

  document.getElementById("result").innerText = resultText;

  if (soundEnabled) {
    document.getElementById(soundId).play();
  }
}
