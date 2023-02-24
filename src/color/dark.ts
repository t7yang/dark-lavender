import chroma from 'chroma-js';

const def = chroma('#07090F');
const black = chroma('#010109');
const soft = chroma('#13151E');

type Dark = typeof darkColors;

export const darkColors = {
  bgBs: def.hex(),
  bgXxs: def.brighten(0.05).hex(),
  bgXs: def.brighten(0.25).hex(),
  bgSm: def.brighten(0.5).hex(),
  bgLg: def.brighten(0.75).hex(),
  input: def.brighten(1).hex(),
};
export const blackColors = {
  bgBs: black.hex(),
  bgXxs: black.brighten(0.05).hex(),
  bgXs: black.brighten(0.25).hex(),
  bgSm: black.brighten(0.5).hex(),
  bgLg: black.brighten(0.75).hex(),
  input: black.brighten(1).hex(),
};

export const softColors: Dark = {
  bgBs: soft.hex(),
  bgXxs: soft.brighten(0.05).hex(),
  bgXs: soft.brighten(0.25).hex(),
  bgSm: soft.brighten(0.5).hex(),
  bgLg: soft.brighten(0.75).hex(),
  input: soft.brighten(1).hex(),
};
