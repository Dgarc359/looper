import {atom, map} from "nanostores";

export const metronome = map({
  bpm: 80,
  isMuted: true,
})
export const bpm = atom(80);
export const metronomeIsMuted = atom(true);