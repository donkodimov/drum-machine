import { useState, useEffect } from 'react';
import { Switch } from '@/components/ui/Switch';
import { Slider } from '@/components/ui/Slider';

interface Sound {
  name: string;
  url: string;
}

interface Bank {
  [key: string]: Sound;
}

const bankOne: Bank = {
  'Q': { name: 'Heater 1', url: '/drums/kick.wav' },
  'W': { name: 'Heater 2', url: '/drums/snare.wav' },
  'E': { name: 'Heater 3', url: '/drums/hihat.wav' },
  'A': { name: 'Heater 4', url: '/drums/kick.wav' },
  'S': { name: 'Clap', url: '/drums/snare.wav' },
  'D': { name: 'Open HH', url: '/drums/hihat.wav' },
  'Z': { name: 'Kick n\' Hat', url: '/drums/kick.wav' },
  'X': { name: 'Kick', url: '/drums/snare.wav' },
  'C': { name: 'Closed HH', url: '/drums/hihat.wav' }
};

const bankTwo: Bank = {
  'Q': { name: 'Chord 1', url: '/drums/kick.wav' },
  'W': { name: 'Chord 2', url: '/drums/snare.wav' },
  'E': { name: 'Chord 3', url: '/drums/hihat.wav' },
  'A': { name: 'Shaker', url: '/drums/kick.wav' },
  'S': { name: 'Open HH', url: '/drums/snare.wav' },
  'D': { name: 'Closed HH', url: '/drums/hihat.wav' },
  'Z': { name: 'Punchy Kick', url: '/drums/kick.wav' },
  'X': { name: 'Side Stick', url: '/drums/snare.wav' },
  'C': { name: 'Snare', url: '/drums/hihat.wav' }
};

export function DrumMachine() {
  const [power, setPower] = useState(true);
  const [bank, setBank] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [display, setDisplay] = useState('');
  
  const currentBank = bank ? bankTwo : bankOne;

  const playSound = (key: string) => {
    if (!power) return;
    
    const sound = currentBank[key];
    console.log('Playing sound:', { key, sound });
    setDisplay(sound.name);
    
    try {
      const audioElement = document.getElementById(key) as HTMLAudioElement;
      console.log('Audio element:', audioElement);
      
      if (audioElement) {
        console.log('Audio element state:', {
          src: audioElement.src,
          volume: audioElement.volume,
          currentTime: audioElement.currentTime,
          readyState: audioElement.readyState,
          paused: audioElement.paused
        });
        
        audioElement.volume = volume;
        audioElement.currentTime = 0;
        const playPromise = audioElement.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Audio playback started successfully');
            })
            .catch((error) => {
              console.error("Error playing sound:", error);
              setDisplay('Error playing sound');
            });
        }
      } else {
        console.error('Audio element not found for key:', key);
      }
    } catch (error) {
      console.error("Error accessing audio element:", error);
      setDisplay('Error playing sound');
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      if (currentBank[key]) {
        playSound(key);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [power, bank, volume]);

  // Preload audio files when component mounts
  useEffect(() => {
    console.log('Preloading audio files...');
    Object.entries(currentBank).forEach(([_, sound]) => {
      const audio = new Audio();
      audio.addEventListener('canplaythrough', () => {
        console.log('Audio preloaded successfully:', sound.url);
      });
      audio.addEventListener('error', (e) => {
        console.error('Error preloading audio:', sound.url, e);
      });
      audio.src = sound.url;
      audio.load();
    });
  }, []);

  return (
    <div id="drum-machine" className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-lg shadow-xl max-w-2xl mx-auto">
      <div className="flex justify-between items-start mb-8">
        <h1 className="text-white text-2xl font-bold">Drum Machine</h1>
        <div className="flex items-center gap-2">
          <span className="text-white text-sm">Power</span>
          <div className="w-12 h-6 flex items-center">
            <Switch 
              checked={power}
              onCheckedChange={setPower}
              disabled={false}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="grid grid-cols-3 gap-4">
          {Object.keys(currentBank).map((key) => (
            <button
              key={key}
              id={`drum-${key}`}
              onClick={() => playSound(key)}
              className="drum-pad bg-gray-600 hover:bg-gray-500 active:bg-gray-400 
                       text-white font-bold py-8 px-8 rounded-lg 
                       shadow-md transition-colors duration-100 
                       disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!power}
            >
              {key}
              <audio
                id={key}
                className="clip"
                src={currentBank[key].url}
                preload="auto"
              />
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <div id="display" className="bg-gray-600 p-4 rounded-lg text-white text-center min-h-[60px]">
            {display || 'Ready'}
          </div>

          <div className="space-y-2">
            <label className="text-white text-sm block">Volume</label>
            <Slider
              value={volume * 100}
              onValueChange={(value: number[]) => {
                setVolume(value[0] / 100);
                setDisplay(`Volume: ${value[0]}`);
              }}
              disabled={!power}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-white text-sm">Bank</span>
            <div className="w-12 h-6 flex items-center">
              <Switch 
                checked={bank}
                onCheckedChange={setBank}
                disabled={!power}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 