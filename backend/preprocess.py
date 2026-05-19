import glob
import pickle
import os

from music21 import converter, instrument, note, chord

notes = []

midi_files = glob.glob("dataset/*.mid")

if len(midi_files) == 0:
    print("No MIDI files found!")
    exit()

print(f"Found {len(midi_files)} MIDI files.\n")

for file in midi_files:

    print(f"Processing: {file}")

    try:
        midi = converter.parse(file)

        parts = instrument.partitionByInstrument(midi)

        if parts:  # if instruments exist
            notes_to_parse = parts.parts[0].recurse()
        else:
            notes_to_parse = midi.recurse()

        count = 0

        for element in notes_to_parse:

            if isinstance(element, note.Note):
                notes.append(str(element.pitch))
                count += 1

            elif isinstance(element, chord.Chord):
                notes.append('.'.join(str(n) for n in element.normalOrder))
                count += 1

        print(f"Extracted {count} notes/chords")

    except Exception as e:
        print(f"Error processing {file}: {e}")

print("\n==========================")
print("TOTAL NOTES EXTRACTED:", len(notes))
print("==========================")

os.makedirs("notes", exist_ok=True)

with open("notes/notes.pkl", "wb") as f:
    pickle.dump(notes, f)

print("\nnotes.pkl created successfully!")