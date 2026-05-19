import numpy as np
import pickle
import os

from keras.models import Sequential
from keras.layers import LSTM, Dense, Dropout
from keras.utils import to_categorical
from keras.callbacks import ModelCheckpoint

# Load notes
with open("notes/notes.pkl", "rb") as f:
    notes = pickle.load(f)

# Unique notes
pitchnames = sorted(set(notes))

# Mapping
note_to_int = dict((note, number) for number, note in enumerate(pitchnames))

sequence_length = 100

network_input = []
network_output = []

for i in range(0, len(notes) - sequence_length):

    sequence_in = notes[i:i + sequence_length]
    sequence_out = notes[i + sequence_length]

    network_input.append([note_to_int[n] for n in sequence_in])
    network_output.append(note_to_int[sequence_out])

n_patterns = len(network_input)

print("Total Patterns:", n_patterns)

# Reshape
network_input = np.reshape(
    network_input,
    (n_patterns, sequence_length, 1)
)

# Normalize
network_input = network_input / float(len(pitchnames))

# One-hot encode output
network_output = to_categorical(network_output)

# Model
model = Sequential()

model.add(LSTM(
    256,
    input_shape=(network_input.shape[1], network_input.shape[2]),
    return_sequences=True
))

model.add(Dropout(0.3))

model.add(LSTM(256))

model.add(Dense(128, activation='relu'))

model.add(Dropout(0.3))

model.add(Dense(len(pitchnames), activation='softmax'))

model.compile(
    loss='categorical_crossentropy',
    optimizer='adam'
)

os.makedirs("models", exist_ok=True)

checkpoint = ModelCheckpoint(
    "models/music_model.keras",
    monitor='loss',
    save_best_only=True,
    mode='min',
    verbose=1
)

print("\nTraining started...\n")

model.fit(
    network_input,
    network_output,
    epochs=30,
    batch_size=64,
    callbacks=[checkpoint]
)

print("\nTraining completed.")