from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import uuid

BASE_DIR = Path(__file__).parent

try:
    from backend.generate_music import generate_music
except ImportError:
    from generate_music import generate_music

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve MIDI files
app.mount("/output", StaticFiles(directory="output"), name="output")


@app.get("/")
def home():
    return {"status": "backend running"}


@app.post("/generate")
def generate():
    file_id = str(uuid.uuid4())

    output_file = BASE_DIR / "output" / f"{file_id}.mid"

    output_file.parent.mkdir(parents=True, exist_ok=True)

    generate_music(str(output_file))

    return {
        "message": "music generated",
        "file": f"/output/{file_id}.mid"
    }