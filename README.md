# Dark Lavender

Dark Lavender is a beautiful dark theme with material design colors for Visual Studio Code not just for eye candy but very useful for developers, especially novice programmers.

## Key Features

- Beautiful dark theme with Material Design Color Palette.
- Meaningful color and font style for language tokens (see below).
- Support many popular languages.
- Keep the theme up-to-date, and also support many sections like command center, git, and terminal, this makes the whole UI design consistent.

## Screenshot

![dark-lavender-screenshot](https://raw.githubusercontent.com/t7yang/dark-lavender/master/images/screenshot.png)

## Customize

If you love this theme, but just want to do a little tweak?

- [Customizing a Color Theme](https://code.visualstudio.com/docs/getstarted/themes#_customizing-a-color-theme)
- [VSLook](https://marketplace.visualstudio.com/items?itemName=sudoaugustin.vslook)

Said if you want a lighter editor background color, you can add this to your VSCode setting file:

```json
{
  "workbench.colorCustomizations": {
    "[Dark Lavender]": {
      "editor.background": "#263238"
    }
  }
}
```

## Theme can help

Dark Lavender give each group of token a significant color or font style to help you recognize them.

- Built-in keywords, variables, function, class, ... are styled in italic.
- Readonly variable, property, parameter, ... are styled in bold (since v5.0.0).
- Keywords for not declaration (`for`, `while`, `import`, ...) are colored in purple.
- Keywords for declaration (`var`, `class`, `extends`) are colored in red.
- Functions are colored in teal.
- Built-in and custom types are colored in yellow.
- Variables are colored in orange, parameters have deeper orange.
- ...

If you want to know more about Dark Lavender, please read this [article](https://dev.to/t7yang/dark-lavender-a-beautiful-and-useful-vscode-theme-41gh).

To emphasize the effect of italic, I use Victor Mono font. If you don't like curly italic font, consider Fira Code and Jetbrain Mono. Check the Fonts section below.

![dark-lavender-typescript](https://raw.githubusercontent.com/t7yang/dark-lavender/master/images/typescript.png)

Other worth noting features:

- Beautiful colors based on Material Design.
- Rainbow colors for JSON depend on the level.
- Support popular languages based on Github stats.
- Support 3 kinds of background colors from black to cool grey.

## Special Thanks

- [material-colors-ts](https://github.com/harveyconnor/material-colors-ts)
- [VSCode Typed Theme Generator](https://github.com/t7yang/vscode-typed-theme-generator) - create a VSCode theme with TypeScript.

## References

### Colors and VSCode Theme

- [Material Design Color](https://www.materialui.co/colors)
- [TailwindCSS Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [VSCode Theme Color](https://code.visualstudio.com/api/references/theme-color)
- [Semantic Highlight Guide](https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide)
- [Semantic Highlighting Overview](https://github.com/microsoft/vscode/wiki/Semantic-Highlighting-Overview)
- [TypeScript VSCode Sh Plugin](https://github.com/aeschli/typescript-vscode-sh-plugin/blob/master/README.md)
- [Textmate manual](https://macromates.com/manual/en)

### Fonts

- [Recursive Mono](https://www.recursive.design/) - most recommended.
- [FiraCode](https://github.com/tonsky/FiraCode)
- [JetBrains Mono](https://www.jetbrains.com/lp/mono)
