import { Mod, SemanticTokenColors } from 'vscode-typed-theme-generator';

export const semanticTokenColors: SemanticTokenColors = {
  [`*.${Mod.defaultLibrary}`]: { fontStyle: 'italic' },
};
