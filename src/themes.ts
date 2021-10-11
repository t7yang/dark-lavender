import { createVsCodeTheme, CreateVsCodeThemeConfig, UiColor, VsCodeThemeMeta } from 'vscode-typed-theme-generator';
import { tokenColors } from './token-color';
import { variantUiColor } from './ui-color';

type VariantKey = keyof typeof variantUiColor;

const names: Record<VariantKey, string> = {
  default: 'Dark Lavender',
  black: 'Dark Lavender (Black)',
  soft: 'Dark Lavender (Soft)',
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
        colors: uiColor,
        tokenColors,
      },
    };
  }),
};

createVsCodeTheme(config)
  .then(() => console.log('Themes created!'))
  .catch(error => console.log('Error: ', error));
