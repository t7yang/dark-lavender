import {
  createVsCodeTheme,
  type CreateVsCodeThemeConfig,
  type UiColor,
  type VsCodeThemeMeta,
} from 'vscode-typed-theme-generator';
import { semanticTokenColors } from './semantic-color';
import { variantTokenColor } from './token-color';
import { variantUiColor } from './ui-color';

type VariantKey = keyof typeof variantUiColor;

const names: Record<VariantKey, string> = {
  default: 'Dark Lavender',
  black: 'Dark Lavender (Black)',
  soft: 'Dark Lavender (Soft)',
  tw: 'Dark Lavender (Tailwind)',
  tws: 'Dark Lavender (Tailwind Soft)',
};

const config: CreateVsCodeThemeConfig = {
  rootPath: process.cwd(),
  outputFolder: 'themes',
  isOverridePackageJson: true,
  themes: Object.entries(variantUiColor).map<VsCodeThemeMeta>(entry => {
    const [variant, uiColor] = entry as [VariantKey, UiColor];
    return {
      uiTheme: 'vs-dark',
      filename: `${variant}.json`,
      theme: {
        name: names[variant],
        semanticHighlighting: true,
        semanticTokenColors,
        colors: uiColor,
        tokenColors: variantTokenColor[variant],
      },
    };
  }),
};

createVsCodeTheme(config)
  .then(() => console.log('Themes created!'))
  .catch(error => console.log('Error: ', error));
