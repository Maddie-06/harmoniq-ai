import numpy as np
import pickle
from pathlib import Path
from music21 import note, stream, chord, instrument
from keras.models import load_model


def generate_music(output_path="output/generated_music.mid"):
    base_dir = Path(__file__).parent

    # Load notes
    notes_path = base_dir / "notes" / "notes.pkl"
    with open(notes_path, "rb") as f:
        notes = pickle.load(f)

    pitchnames = sorted(set(notes))

    note_to_int = {n: num for num, n in enumerate(pitchnames)}
    int_to_note = {num: n for num, n in enumerate(pitchnames)}

    sequence_length = 100

    network_input = []

    for i in range(len(notes) - sequence_length):
        sequence_in = notes[i:i + sequence_length]
        network_input.append([note_to_int[n] for n in sequence_in])

    start = np.random.randint(0, len(network_input) - 1)
    pattern = network_input[start]

    model_path = base_dir / "models" / "music_model.keras"
    model = load_model(model_path)

    prediction_output = []

    print("Generating music...")

    for _ in range(300):

        prediction_input = np.reshape(pattern, (1, len(pattern), 1))
        prediction_input = prediction_input / float(len(pitchnames))

        prediction = model.predict(prediction_input, verbose=0)

        index = np.argmax(prediction)

        result = int_to_note[index]
        prediction_output.append(result)

        pattern.append(index)
        pattern = pattern[1:]

    offset = 0
    output_notes = []

    for item in prediction_output:

        if '.' in item or item.isdigit():
            notes_in_chord = item.split('.')
            notes_list = []

            for current_note in notes_in_chord:
                new_note = note.Note(int(current_note))
                new_note.storedInstrument = instrument.Piano()
                notes_list.append(new_note)

            new_chord = chord.Chord(notes_list)
            new_chord.offset = offset
            output_notes.append(new_chord)

        else:
            new_note = note.Note(item)
            new_note.offset = offset
            new_note.storedInstrument = instrument.Piano()
            output_notes.append(new_note)

        offset += 0.5

    midi_stream = stream.Stream(output_notes)
    midi_stream.write('midi', fp=output_path)

    print("Music generated successfully!")
    return output_path