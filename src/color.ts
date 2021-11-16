import { createVariant } from 'vscode-typed-theme-generator';

export const [variant, vVar] = createVariant({
  default: { bg1: '#07090F', bg2: '#17191F' },
  black: { bg1: '#010109', bg2: '#111119' },
  soft: { bg1: '#13151E', bg2: '#23252E' },
});

export const colors = {
  transparency: '#0000',
};
