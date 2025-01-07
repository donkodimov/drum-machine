const audioContext = new AudioContext();
const sampleRate = audioContext.sampleRate;
const duration = 0.5;
const frameCount = sampleRate * duration;

// Function to create and download an audio file
function createAndDownloadAudio(audioBuffer, filename) {
  const wav = audioBufferToWav(audioBuffer);
  const blob = new Blob([wav], { type: 'audio/wav' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// Create kick drum sound
function createKick() {
  const buffer = audioContext.createBuffer(1, frameCount, sampleRate);
  const channelData = buffer.getChannelData(0);
  
  for (let i = 0; i < frameCount; i++) {
    const t = i / sampleRate;
    const frequency = 150 * Math.exp(-30 * t);
    channelData[i] = Math.sin(2 * Math.PI * frequency * t) * Math.exp(-8 * t);
  }
  
  return buffer;
}

// Create snare sound
function createSnare() {
  const buffer = audioContext.createBuffer(1, frameCount, sampleRate);
  const channelData = buffer.getChannelData(0);
  
  for (let i = 0; i < frameCount; i++) {
    const t = i / sampleRate;
    const noise = Math.random() * 2 - 1;
    channelData[i] = noise * Math.exp(-5 * t);
  }
  
  return buffer;
}

// Create hi-hat sound
function createHiHat() {
  const buffer = audioContext.createBuffer(1, frameCount, sampleRate);
  const channelData = buffer.getChannelData(0);
  
  for (let i = 0; i < frameCount; i++) {
    const t = i / sampleRate;
    const noise = Math.random() * 2 - 1;
    channelData[i] = noise * Math.exp(-50 * t);
  }
  
  return buffer;
}

// Generate and download sounds
createAndDownloadAudio(createKick(), 'kick.wav');
createAndDownloadAudio(createSnare(), 'snare.wav');
createAndDownloadAudio(createHiHat(), 'hihat.wav'); 