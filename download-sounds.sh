#!/bin/bash

cd public/drums

# Download kick
curl -O "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/26[KB]909-kick.wav"
mv "26[KB]909-kick.wav" kick.mp3

# Download snare
curl -O "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/24[KB]909-snare.wav"
mv "24[KB]909-snare.wav" snare.mp3

# Download closed hi-hat
curl -O "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/15[KB]909-closedhat.wav"
mv "15[KB]909-closedhat.wav" closed-hh.mp3

# Download open hi-hat
curl -O "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/31[KB]909-openhat.wav"
mv "31[KB]909-openhat.wav" open-hh.mp3

# Download clap
curl -O "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/14[KB]909-clap.wav"
mv "14[KB]909-clap.wav" clap.mp3 