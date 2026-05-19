# 🎵 Harmoniq AI

An AI-powered music generation project built using **LSTM Neural Networks**, **FastAPI**, and **React + Vite**.  
This project generates original piano melodies from trained MIDI note sequences and exports them as MIDI files.

---

## ✨ Features

- 🎹 AI melody generation
- 🧠 Deep Learning using LSTM
- 🎼 MIDI file export
- ⚡ FastAPI backend
- 🎨 Modern React frontend
- 🌌 Aesthetic UI with animations
- 📁 Trained on classical MIDI datasets

---

## 🛠 Tech Stack

### Frontend
- React
- TypeScript
- Vite
- TailwindCSS
- Framer Motion
- Lucide Icons

### Backend
- FastAPI
- TensorFlow / Keras
- music21
- NumPy

---

## 📂 Project Structure

```txt
AI-Music-Generator
│
├── backend
│   ├── dataset
│   ├── models
│   ├── notes
│   ├── output
│   ├── app.py
│   ├── generate_music.py
│   ├── preprocess.py
│   └── train_model.py
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.ts
│
├── requirements.txt
└── README.md
```

---

# 🚀 Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Maddie-06/harmoniq-ai.git
```

```bash
cd harmoniq-ai
```

---

# ⚙ Backend Setup

## Create Virtual Environment

```bash
python -m venv venv
```

## Activate Environment

### Windows

```bash
venv\Scripts\activate
```

### Mac/Linux

```bash
source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Run Backend Server

IMPORTANT: Run from project root folder.

```bash
uvicorn backend.app:app --reload --port 8000
```

Backend will run on:

```txt
http://127.0.0.1:8000
```

---

# 🎨 Frontend Setup

Open another terminal.

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend will run on:

```txt
http://localhost:3000
```

---

# 🎼 How It Works

1. MIDI files are collected in dataset folder
2. music21 extracts note/chord sequences
3. LSTM model trains on patterns
4. AI predicts new note sequences
5. MIDI file is generated
6. User downloads generated composition

---

# 📌 API Endpoint

## Generate Music

```http
POST /generate
```

### Example Response

```json
{
  "message": "music generated",
  "file": "http://localhost:8000/output/generated.mid"
}
```

---

# 📁 Output

Generated MIDI files are saved in:

```txt
backend/output/
```

---

# ⚠ Important Note

Browsers do not reliably play raw `.mid` files directly in HTML audio tags.

Generated compositions should be:
- downloaded using Export MIDI
- opened in a MIDI player or DAW

Examples:
- FL Studio
- Ableton Live
- VLC Media Player
- MuseScore

---

# 📸 Screenshots

Add your project screenshots here later.

---

# 🔮 Future Improvements

- MIDI to WAV conversion
- Real browser playback
- Multiple music styles
- Genre selection
- Piano roll visualization
- AI tempo control
- Music streaming support

---

# 👩‍💻 Author

Made with neural chaos and caffeine by:

**Maddie**

---

# ⭐ Support

If you like this project:

- Star the repository
- Fork it
- Share it

Tiny AI orchestra deserves applause 🎹✨
