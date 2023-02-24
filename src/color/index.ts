import { createVariant } from 'vscode-typed-theme-generator';
import { blackColors, darkColors, softColors } from './dark';
import { mdm } from './md-main';
import { twm } from './tw-main';

export const [variant, Var] = createVariant({
  default: {
    ...darkColors,
    ...mdm,
  },
  black: {
    ...blackColors,
    ...mdm,
  },
  soft: {
    ...softColors,
    ...mdm,
  },
  tw: {
    ...darkColors,
    ...twm,
  },
  tws: {
    ...softColors,
    ...twm,
  },
});

export const colors = {
  transparency: '#0000',
};
