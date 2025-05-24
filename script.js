const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) {
  alert("Sorry, your browser does not support Speech Recognition.");
} else {
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.continuous = false;

  const btn = document.querySelector("#listen-btn");

  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }

  function handleCommand(command) {
    const c = command.toLowerCase().trim();
    console.log("Heard:", c);

    if (c.includes("youtube")) {
      speak("Opening YouTube");
      window.open("https://www.youtube.com", "_blank");
    } else if (c.includes("google")) {
      speak("Opening Google");
      window.open("https://www.google.com", "_blank");
    } else if (c.includes("facebook")) {
      speak("Opening Facebook");
      window.open("https://www.facebook.com", "_blank");
    } else if (c.includes("instagram")) {
      speak("Opening Instagram");
      window.open("https://www.instagram.com", "_blank");
    } else if (c.includes("whatsapp")) {
      speak("Opening WhatsApp");
      window.open("https://www.whatsapp.com", "_blank");
    } else {
      speak("Searching Google for " + c);
      window.open(`https://www.google.com/search?q=${encodeURIComponent(c)}`, "_blank");
    }
  }

  btn.addEventListener("click", () => {
    speak("Hello, how can I help you?");
    btn.innerHTML = "Listening...👂";
    btn.classList.add("listening");

    // Start after greeting completes
    setTimeout(() => {
      recognition.start();
    }, 2000);
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    handleCommand(transcript);
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    alert("Speech recognition error: " + event.error);
  };

  recognition.onend = () => {
    btn.innerHTML = "Start Listening";
    btn.classList.remove("listening");
  };
}
