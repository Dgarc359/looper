import {atom, map} from "nanostores";

export const metronome = map({
  bpm: 80,
  isPlaying: false,
})
export const bpm = atom(80);
export const metronomeIsMuted = atom(true);