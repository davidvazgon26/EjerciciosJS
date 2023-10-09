const d = document;
const w = window;

export default function speechReader() {
  //recuerda que las variables que inician con $ son variables del DOM
  const $speechSelect = d.getElementById("speech-select");
  const $speechTextarea = d.getElementById("speech-text");
  const $speechBtn = d.getElementById("speech-btn");
  const speechMessage = new SpeechSynthesisUtterance(); //Voces en nuestro SO.

  console.log(speechMessage);

  // obtener las voces en el navegador: speechSynthesis.getVoices()
  let voices = [];

  d.addEventListener("DOMContentLoaded", (e) => {
    w.speechSynthesis.addEventListener("voiceschanged", (e) => {
      voices = w.speechSynthesis.getVoices();
      // console.log(voices);

      voices.forEach((voice) => {
        const $option = d.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} *** ${voice.lang}`;

        $speechSelect.appendChild($option);
      });
    });
  });

  d.addEventListener("change", (e) => {
    if (e.target === $speechSelect) {
      speechMessage.voice = voices.find((el) => el.name === e.target.value);
    }

    console.log(speechMessage);
  });
  d.addEventListener("click", (e) => {
    if (e.target === $speechBtn) {
      speechMessage.text = $speechTextarea.value;
      w.speechSynthesis.speak(speechMessage);
    }
  });
}
