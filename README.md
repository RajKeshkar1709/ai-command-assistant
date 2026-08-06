# 🤖 AI Voice Assistant

A simple **AI Voice Assistant** built using **HTML, CSS, and JavaScript**. It uses the **Web Speech API** for speech recognition and speech synthesis to listen to voice commands, respond with voice, and open popular websites or search Google.

---

## 📌 Features

* 🎙️ Voice Recognition using Web Speech API
* 🗣️ Text-to-Speech Response
* 🌐 Opens popular websites using voice commands
* 🔍 Searches Google for unknown commands
* 🎨 Modern responsive UI with animated listening button
* ⚡ Lightweight (No external JavaScript libraries)

---

## 📂 Project Structure

```
AI-Voice-Assistant/
│
├── index.html
├── style.css
├── script.js
├── ai-thinking.jpg
└── README.md
```

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Web Speech API

  * Speech Recognition
  * Speech Synthesis

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/AI-Voice-Assistant.git
```

### 2. Navigate to the Project Folder

```bash
cd AI-Voice-Assistant
```

### 3. Open the Project

Simply open **index.html** in your browser.

Or use **Live Server** in VS Code for a better experience.

---

## 🎤 How It Works

1. Click **Start Listening**.
2. The assistant greets you:

   ```
   Hello, how can I help you?
   ```
3. It starts listening after 2 seconds.
4. Speak a command.
5. The assistant processes the command and performs the appropriate action.

---

## 🗣️ Supported Voice Commands

| Voice Command      | Action                   |
| ------------------ | ------------------------ |
| Open YouTube       | Opens YouTube            |
| Open Google        | Opens Google             |
| Open Facebook      | Opens Facebook           |
| Open Instagram     | Opens Instagram          |
| Open WhatsApp      | Opens WhatsApp           |
| Any other sentence | Performs a Google Search |

### Examples

```
Open YouTube
```

```
Open Google
```

```
Open Instagram
```

```
Open Facebook
```

```
What is JavaScript?
```

```
Best React Tutorial
```

---

## ⚙️ Browser Support

Speech Recognition is supported in:

* ✅ Google Chrome
* ✅ Microsoft Edge
* ⚠️ Opera (Partial)

Not supported in:

* ❌ Firefox
* ❌ Safari (Limited Support)

If Speech Recognition is unavailable, the application displays:

```
Sorry, your browser does not support Speech Recognition.
```

---

## 📸 User Interface

The application includes:

* AI-themed background image
* Responsive centered layout
* Animated microphone button
* Voice status indication
* Smooth button animations

---

## 🔊 APIs Used

### Speech Recognition

```javascript
window.SpeechRecognition ||
window.webkitSpeechRecognition
```

Converts speech into text.

### Speech Synthesis

```javascript
SpeechSynthesisUtterance()
```

Converts text into speech.

---

## 📷 Screenshot

Add your project screenshot here.

```
AI-Voice-Assistant/
    screenshots/
        home.png
```

---

## 🔮 Future Improvements

* Weather information
* Current date and time
* Calculator commands
* Play music
* Open installed applications
* Dark/Light mode
* AI chatbot integration
* ChatGPT API integration
* Gemini API integration
* Continuous conversation mode
* Multiple language support
* Voice customization

---

## 🐞 Known Limitations

* Requires microphone permission.
* Speech Recognition support depends on the browser.
* Works best with a stable internet connection.
* Opens only predefined websites.
* Free-form AI conversations are not supported in the current version.

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push to GitHub.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Raj Keshkar**

Full Stack Developer

If you found this project helpful, don't forget to ⭐ the repository!
