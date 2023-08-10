import React, { useState } from "react"

export default function RunPropeller() {

  const audio1 = document.getElementById("audio-1");
  const audio2 = document.getElementById("audio-2");
  const audioReplay = document.getElementById("audio-replay");
  let isRotating = false
  let rotationInterval
  let replayInterval
  let rotation = 0

  function rotatePropeller() {
    const propeller = document.getElementById("propeller")
    const rotateButton = document.getElementById("rotateButton");
    audio1.pause()
    audio2.pause()
    audioReplay.pause()
    audioReplay.currentTime = 0
    audio1.currentTime = 0
    audioR2.currentTime = 0
    if (!isRotating) {
      audio1.play()
      isRotating = true
      rotateButton.textContent = "Stop";
      rotationInterval = setInterval(() => {
          rotation += 1000 
          propeller.style.transform = `rotate(${rotation}deg)`
      }, 20)
      replayInterval = setInterval(()=> {
        audioReplay.play()
      },audio1.duration * 1000)
    } else {
      audio1.pause()
      audio2.play()
      audioReplay.pause()
      audioReplay.currentTime = 0
      audio1.currentTime = 0
      clearInterval(replayInterval)
      clearInterval(rotationInterval)
      isRotating = false
      rotateButton.textContent = "Run";
    }
    
  }

  return <button id="rotateButton" onClick={rotatePropeller}>Run</button>
}
