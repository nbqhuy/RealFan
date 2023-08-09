import './App.css'

function App() {
const propeller = document.getElementById("propeller");
const rotateButton = document.getElementById("rotateButton");
const audio1 = document.getElementById("audio-1");
const audio2 = document.getElementById("audio-2");
const audio3 = document.getElementById("audio-3");
let rotation = 0;
let isRotating = false;
let rotationInterval;

function rotatePropeller() {
    audio3.pause()
    audio3.currentTime=0
    if (!isRotating) {
        audio1.play();
        setTimeout(() => {
    audio2.play();
    }, audio1.duration * 1000);
    isRotating = true;
    rotateButton.textContent = "Stop";
    rotationInterval = setInterval(() => {
      rotation += 1000; 
      propeller.style.transform = `rotate(${rotation}deg)`;
    }, 20); 
  } else {
    audio1.pause()
    audio2.pause()
    audio3.play()
    audio1.currentTime = 0;
    audio2.currentTime = 0;
    clearInterval(rotationInterval); 
    isRotating = false;
    rotateButton.textContent = "Run"; 
  }
}

  return (
    <>
    <div className="propeller-container">
        <img id="propeller" src="./propeller.png" alt="Propeller"></img>
    </div>
    <button id="rotateButton" onClick={rotatePropeller}>Run</button>
    <audio id="audio-1" src="./fan_1.mp3"></audio>
    <audio id="audio-2" src="./fan_2.mp3"></audio>
    <audio id="audio-3" src="./fan_3.mp3"></audio>
    </>
  )
}

export default App