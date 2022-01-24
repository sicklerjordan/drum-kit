import { useState } from 'react';
import './App.css';
import Drum from './components/Drum';
import clap from './sounds/src_sounds_clap (1).wav'
import boom from './sounds/src_sounds_boom.wav'
import hihat from './sounds/src_sounds_hihat.wav'  
import kick from './sounds/src_sounds_kick.wav'
import openhat from './sounds/src_sounds_openhat.wav'
import ride from "./sounds/src_sounds_ride.wav"
import snare from './sounds/src_sounds_snare.wav'
import tink from './sounds/src_sounds_tink.wav'
import tom from './sounds/src_sounds_tom.wav'
import alarm from './sounds/mixkit-classic-alarm-995.wav'
import horn from "./sounds/musical_air_horn_dancehall_style_005.mp3"

function App() {
  const [sounds, setsounds] = useState([
    {
      name: 'boom',
      sound: boom,
      key: 'A'
    },
    {
      name: 'clap',
      sound: clap,
      key: 'S'
    },
    {
      name: 'hihat',
      sound: hihat,
      key: 'D'
    },
    {
      name: 'kick',
      sound: kick,
      key: 'F'
    },
    {
      name: 'openhat',
      sound: openhat,
      key: 'G'
    },
    {
        name: 'ride',
        sound: ride,
        key: 'H'
    },
    {
      name: 'snare',
      sound: snare,
      key: 'J'
  },
  {
      name: 'tink',
      sound: tink,
      key: 'K'
  }, 
  {
    name: 'tom',
    sound: tom,
    key: 'L'
},
{
  name: 'alarm',
  sound: alarm,
  key: 'Z'
},
{
  name: 'horn',
  sound: horn,
  key: 'X'
}
  ])
  return (
    <div>
      <video src="./neonvid.mp4" autoPlay loop muted />
    <div className="app">
      <h1></h1>
      <div className="drums">
      {sounds.map((sound, i) => (
        <Drum key={i} letter={sound.key} sound={sound.sound} />
      ))}
      </div>
    </div>
    </div>
  );
}

export default App;
