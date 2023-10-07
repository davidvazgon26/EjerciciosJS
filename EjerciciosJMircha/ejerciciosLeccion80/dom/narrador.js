const d = document;
const w = window;

export default function speechReader() {
  //recuerda que las variables que inician con $ son variables del DOM
  const $speechSelect = d.getElementById("speech-select");
  const $speechTextarea = d.getElementById("speech-text");
  const $speechBtn = d.getElementById("speech-btn");
  speechMessage = new SpeechSynthesisUtterance(); //Voces en nuestro SO.
}
