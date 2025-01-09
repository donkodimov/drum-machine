export function generateDrumSounds() {
  const audioContext = new AudioContext();
  const sampleRate = audioContext.sampleRate;
  const duration = 0.5;
  const frameCount = sampleRate * duration;

  // Create kick drum sound
  const kickBuffer = audioContext.createBuffer(1, frameCount, sampleRate);
  const kickData = kickBuffer.getChannelData(0);
  for (let i = 0; i < frameCount; i++) {
    const t = i / sampleRate;
    const frequency = 150 * Math.exp(-30 * t);
    kickData[i] = Math.sin(2 * Math.PI * frequency * t) * Math.exp(-8 * t);
  }

  // Create snare sound
  const snareBuffer = audioContext.createBuffer(1, frameCount, sampleRate);
  const snareData = snareBuffer.getChannelData(0);
  for (let i = 0; i < frameCount; i++) {
    const t = i / sampleRate;
    const noise = Math.random() * 2 - 1;
    snareData[i] = noise * Math.exp(-5 * t);
  }

  // Create hi-hat sound
  const hihatBuffer = audioContext.createBuffer(1, frameCount, sampleRate);
  const hihatData = hihatBuffer.getChannelData(0);
  for (let i = 0; i < frameCount; i++) {
    const t = i / sampleRate;
    const noise = Math.random() * 2 - 1;
    hihatData[i] = noise * Math.exp(-50 * t);
  }

  return {
    kick: kickBuffer,
    snare: snareBuffer,
    hihat: hihatBuffer
  };
} 