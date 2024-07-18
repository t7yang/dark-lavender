import { Mod, type SemanticTokenColors } from 'vscode-typed-theme-generator';

export const semanticTokenColors: SemanticTokenColors = {
  [`*.${Mod.defaultLibrary}`]: { fontStyle: 'italic' },
  [`*.${Mod.readonly}`]: { fontStyle: 'bold' },
  [`*.${Mod.defaultLibrary}.${Mod.readonly}`]: { fontStyle: 'italic bold' },
};
