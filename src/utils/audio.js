// Web Audio API tactile paper rustle synthesizer (zero external dependencies)
let audioCtx = null;

export const playPaperSound = (type = 'fold') => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    
    if (!audioCtx) {
      audioCtx = new AudioContext();
    }
    
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const duration = type === 'fold' ? 0.18 : 0.12;
    const bufferSize = audioCtx.sampleRate * duration;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);

    // Generate soft brown-pink filtered noise resembling smooth cardstock sliding
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      // lowpass integration for paper friction sound
      lastOut = (lastOut + 0.04 * white) / 1.04;
      const decay = Math.pow(1 - i / bufferSize, 2);
      data[i] = lastOut * decay * 0.15;
    }

    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = type === 'fold' ? 800 : 1200;

    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    noise.start();
  } catch {
    // Graceful fallback if user hasn't interacted or audio unsupported
  }
};
