# Change Log

All notable changes to the "dark-lavender" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [6.2.0] - 2025-03-17

### Added

- `widget.border`
- symbol icons colors

### Fixed

- enum member color
- CSS keyframes identifier and animation value

## [6.1.3] - 2023-12-19

### Changed

- improved selection, word, and find highlight
- darker folded background color

## [6.1.0] - 2023-08-30

### Added

- supported more token for diff and merge editor
- supported more bracket pair highlight tokens
- supported more extension tokens
- supported more panel and keybinding tokens

### Changed

- update string and escaped string colors
- update colors related to git
- aligned modified indicator color
- improved find and selection colors

## [6.0.0] - 2023-02-25

### Added

- add TailwindCSS versions
- support new UI tokens (list, minimap, editor, gutter, diff editor, status bar)

## [5.1.0] - 2022-07-24

### Added

- completely redesign for regular expression color (better distinguish for normal/escape string, quantity, group, ...)

### Changed

- parameters color from orange to deep orange (now developer can visually distinguish parameters and variables)
- improve number token
- improve string and escape string color
- change unit keywords back to light green
- deeper punctuation color

### Fixed

- colorize Python variables correctly

## [5.0.2] - 2022-07-24

### Fixed

- add another missing property `support.constant.property`

## [5.0.1] - 2022-07-24

### Fixed

- constant propery should be blue color

## [5.0.0] - 2022-07-23

Since v5.0.0, the readonly variable and property not longer have deeper color.
Instead, they styled in bold.
So, now you can tell every readonly symbol from their font-style.

### Added

- improve settings editor set `settings.focusedRowBorder` color
- support "command center colors"
- support "snippets colors"
- support "breadcrumbs colors"
- support `editorUnicodeHighlight`
- `readonly` variables, properties, ... are now styled in bold

### Changed

- greatly improve the background black colors
- deeper icon color
- deeper active tab border and highlight active tab background
- replace red with pink for git colors
- adjust regex colors
- add more "Builtin Variable"
- move `keyword.other.unit` to "Builtin Variable"

## [4.2.2] - 2022-06-19

### Changed

- highlight a bit sidebar and editor boundary 

## [4.2.1]

### Changed

- improve selection, wordHighLight, and findMatch colors
- lighter `editorBracketMatch.background` background color
- change `button.secondaryBackground` to `deepOrange.A700`

## [4.2.0]

### Added

- support `selection`, `wordHighlight`, and `findMatch` in editor and peek

### Changed

- decrease `editorLineNumber.foreground`
- increase `lineHighlightBackground`

## [4.1.3] - 2021-12-04

### Fixed

- make sure all token from `defaultLibrary` italic

## [4.1.2] - 2021-11-21

### Fixed

- italic word like operators that removed from keyword group.

## [4.1.1] - 2021-11-21

### Changed

- remove word like operators from keyword.
- remove token not operator from operators group.
- increase operators group color to lightGreen.A400.

## [4.1.0] - 2021-11-17

### Added

- add support for type label.

### Changed

- increase `editorRuler.foreground` alpha to 0.5.

### Removed

- remove `meta.block`.

## [4.0.0] - 2021-10-12

Many changes in this version release and thank [vscode-typed-theme-generator](https://github.com/t7yang/vscode-typed-theme-generator), now I can design VSCode theme with TypeScript 😀

### Added

- Add basic support for many popular languages — Rust, C, C#, Haskell, Python, Ruby, PHP.
- All built in tokens is now italic.
- Add more support for punctuation.
- Add support for CSS property value.

### Changed

- Remove built in variable from Keyword group, make it deeper than Constant group.
- Increase text color brightness.
- Operators group is now color lightGreen.a200.
- String group is now color lightGreen.100.
- Move Unit group token to Operators group.

### Fixed

- Add some missing object property tokens.

## [3.2.2] - 2021-08-23

### Changed

- decrease brightness for plain text color

## [3.2.1] - 2021-07-05

### Fixed

- [token]
  - end tag punctuation start has weird color.

## [3.2.0] - 2021-03-15

### Added

- [token]
  - Add support for "Git colors".
- [ui]
  - Add support for `editor.lineHight{Background,Border}`.
  - Add support for `editorRuler.foreground`.
  - Add support for `editorLightBulb*`.
  - Add support for `editor.wordHighlight`.
  - Add support for `editorBracketMatch`.

### Changed

- Re-enabled `semanticHighlighting`.
- [token]
  - Change color for `error`, `warning`, `modified`, `added`, `delete`.
- [ui]
  - Brighter active indicator.
  - Improve "Merge Conflicts colors".

### Fixed

- [ui]
  - Correct colors in "Integrated Terminal colors".

## [3.1.0] - 2021-03-12

### Added

- [token]
  - Keywords: add `keyword.control`.
- [ui]
  - Add support for `editorOverviewRuler` and `editorGutter`.
  - Add support for `editorMarkerNavigation`.
  - Add support for `merge.{current*,incoming*}`.
  - Add support for integrated terminal colors.
  - Add suport for `diffEditor`.
  - Add support for `textLink.{activeForeground,foreground}`.
  - Add `button.secondaryBackground`.

### Changed

- [token]
  - Align some tokens color to `*-a200`.
  - Operators: `deep-purple-a200` => `amber-a200`.
  - Boolean: `lime-100` => `amber-100`.
  - Obeject Properties: `blue-a200` => `light-blue-a200`.
  - Align color to `*-500` for Markup.
- [ui]
  - Align color of error, info, warning, modified to `*-900`.
  - Improve `editorLineNumber`.
  - Improve `editorIndentGuide`.
  - Improve peak view colors and `statusBar.debuggingBackground`.
  - Improve activity bar colors.

## [3.0.0] - 2021-03-11

### Added

- Support JSON hierarchy.
- Support groups and quantifier for RegExp, more RegExp class.
- Support more non-punctuation keywords.

### Changed

- Keywords and Types in comment docs with color.
- Tags bracket as Punctuation.
- String color back to cyan-100.
- Object Properties: bluel-200 => blue-200.
- Move `ternary` from punctuation to operator.
- Move `punctuation.defination.string` from String to Punctuation (PHP variable).
- Add RegExp's keyword to operator.
- Improve overall markup style including change colors and fixed wrong scope name.
- Punctuation: indigo-a100 => indigo-100
- Units: drop italic
- Classed and Types: yellow-a100 => yellow-300
- Constants: oranged-200 => oranged-300
- Others

## [2.2.1] - 2020-12-06

### Changed

- Unified all string and text to bluegrey-100.
- Unified all comment to bluegrey-500.
- number from red-100 to pink-100.
- boolean from indigo-100 to lime-100.

## [2.2.0] - 2020-12-03

### Fixed

- Add missing punctuation for decorator.
- Add missing scope of boolean.
- Add `source` to variable scope.

### Changed

- Remove semantic highlighting true (vscode currently not support yet).
- Color of boolean and punctuation from blue to indigo.
- Color of object property from orange to blue light.

## [2.1.0] - 2020-11-23

### Fixed

- Change the input elements background color to grey-900 to prevent same color with overall background color.

### Changed

- `inputOption.activeBackground` from transparency to purpled-700.

### Removed

- `inputOption.activeBorder`.

## [2.0.2] - 2020-11-03

### Changed

- Decrease overall foreground from grey-50 to grey-300.

## [2.0.1] - 2020-11-02

### Removed

- Default sidebar foreground.

#### Added

- Add Editor foreground with grey-300

## [2.0.0] - 2020-09-05

### Added

- Add black and soft version.

### Changed

- Update icon and screenshot image.
- Token of function, method... from green-a200 to teal-a200.

## [1.1.3] - 2020-07-07

### Changed

- Update bg and bglighter.
- Update tab colors.

## [1.1.1] - 2020-06-27

### Changed

- Lighter inactive tab background and editor group tab background color.

## [1.1.0] - 2020-06-22

### Changed

- Changed bg and bglite color.
- Adjusted activity bar active color.
- Replace active tab border from bottom to top.

### Fixed

- Remove input placeholder color token due same to background color.
- Markdown link format in README

### Added

- Added fonts link in README.

## [1.0.1] - 2020-06-09

### Changed

- Exchange tab active and inactive background color.
- Remove italic from Operators

### Fixed

- Relative links in readme add ul style.

## [1.0.0] - 2020-05-09

- Initial release
