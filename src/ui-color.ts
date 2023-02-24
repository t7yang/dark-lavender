import { createVariantUiColor, opacity, UiColor } from 'vscode-typed-theme-generator';
import { colors, Var, variant } from './color';

const uiColor: UiColor = {
  // base
  focusBorder: Var.deepPurpleA700,
  foreground: Var.blueGrey100,
  errorForeground: Var.pink700,
  'icon.foreground': Var.deepPurpleA200,
  // text
  'textLink.activeForeground': Var.orange500,
  'textLink.foreground': Var.blue500,
  // button
  'button.background': Var.deepPurpleA700,
  'button.secondaryBackground': Var.deepOrangeA700,
  'checkbox.background': Var.input,
  // dropdown
  'dropdown.background': Var.input,
  'dropdown.listBackground': Var.input,
  // input
  'input.background': Var.input,
  'inputOption.activeBackground': Var.deepPurpleA700,
  'inputValidation.errorBackground': Var.pink900,
  'inputValidation.errorBorder': Var.pink900,
  'inputValidation.infoBackground': Var.blue900,
  'inputValidation.infoBorder': Var.blue900,
  'inputValidation.warningBackground': Var.orange900,
  'inputValidation.warningBorder': Var.orange900,
  // badge
  'badge.background': Var.deepPurpleA700,
  // progress
  'progressBar.background': Var.deepPurpleA700,
  // listTree
  'list.dropBackground': Var.bgSm,
  'list.activeSelectionBackground': Var.purple900,
  'list.hoverBackground': Var.bgLg,
  'list.inactiveSelectionBackground': Var.bgLg,
  // activityBar
  'activityBar.background': Var.bgBs,
  'activityBar.inactiveForeground': opacity(Var.deepPurple50, 0.4),
  'activityBar.foreground': Var.deepPurpleA400,
  'activityBar.activeBorder': Var.deepPurpleA400,
  'activityBarBadge.background': Var.deepPurpleA700,
  // sideBar
  'sideBar.background': Var.bgXxs,
  // editorGroupTabs
  'editorGroupHeader.tabsBackground': Var.bgBs,
  'tab.inactiveBackground': Var.bgBs,
  'tab.activeBackground': Var.bgXs,
  'tab.activeBorder': Var.deepPurpleA400,
  'tab.activeForeground': Var.grey50,
  'tab.inactiveForeground': Var.grey500,
  'tab.activeModifiedBorder': Var.yellow700,
  // editor
  'editor.foreground': Var.blueGrey100,
  'editor.background': Var.bgBs,
  'editorLineNumber.foreground': Var.blueGrey800,
  'editorLineNumber.activeForeground': Var.purpleA400,
  'editor.selectionBackground': opacity(Var.lightBlue700, 0.5),
  'editor.inactiveSelectionBackground': opacity(Var.lightBlue700, 0.1),
  'editor.selectionHighlightBackground': opacity(Var.lightBlue700, 0.3),
  'editor.selectionHighlightBorder': colors.transparency,
  'editor.wordHighlightBackground': opacity(Var.indigo700, 0.5),
  'editor.wordHighlightBorder': colors.transparency,
  'editor.wordHighlightStrongBackground': opacity(Var.pink700, 0.5),
  'editor.wordHighlightStrongBorder': colors.transparency,
  'editor.findMatchBackground': opacity(Var.orange700, 0.5),
  'editor.findMatchHighlightBackground': opacity(Var.orange700, 0.2),
  'editor.findRangeHighlightBackground': opacity(Var.orange700, 0.2),
  'editor.findMatchBorder': colors.transparency,
  'editor.findMatchHighlightBorder': colors.transparency,
  'editor.findRangeHighlightBorder': colors.transparency,
  'editor.lineHighlightBackground': opacity(Var.blueGrey700, 0.3),
  'editor.lineHighlightBorder': colors.transparency,
  'editorUnicodeHighlight.background': opacity(Var.yellow700, 0.1),
  'editorUnicodeHighlight.border': opacity(Var.yellow700, 0.4),
  'editorIndentGuide.background': Var.blueGrey800,
  'editorIndentGuide.activeBackground': Var.blueGrey400,
  'editorRuler.foreground': opacity(Var.blueGrey700, 0.25),
  'editorLightBulb.foreground': Var.yellow500,
  'editorLightBulbAutoFix.foreground': Var.blue500,
  'editorBracketMatch.background': opacity(Var.yellow700, 0.4),
  'editorBracketMatch.border': colors.transparency,
  'editorOverviewRuler.modifiedForeground': Var.lightBlue700,
  'editorOverviewRuler.addedForeground': Var.lightGreen700,
  'editorOverviewRuler.deletedForeground': Var.red700,
  'editorOverviewRuler.errorForeground': Var.pink700,
  'editorOverviewRuler.warningForeground': Var.orange700,
  'editorOverviewRuler.infoForeground': Var.blue700,
  // diffEditor
  'diffEditor.insertedTextBackground': opacity(Var.lightGreen700, 0.2),
  'diffEditor.removedTextBackground': opacity(Var.red700, 0.2),
  // editorWidget
  'editorWidget.background': Var.bgBs,
  'editorWidget.border': Var.deepPurpleA700,
  'editorMarkerNavigationError.background': Var.pink700,
  'editorMarkerNavigationWarning.background': Var.orange700,
  'editorMarkerNavigationInfo.background': Var.blue700,
  // peekView
  'peekView.border': Var.deepPurpleA700,
  'peekViewEditor.background': opacity(Var.deepPurpleA700, 0.05),
  'peekViewResult.background': opacity(Var.deepPurpleA700, 0.05),
  'peekViewEditor.matchHighlightBackground': opacity(Var.orange500, 0.2),
  'peekViewTitle.background': Var.bgBs,
  // mergeConflict
  'merge.currentHeaderBackground': opacity(Var.teal500, 0.6),
  'merge.currentContentBackground': opacity(Var.teal500, 0.2),
  'merge.incomingHeaderBackground': opacity(Var.lightBlue500, 0.6),
  'merge.incomingContentBackground': opacity(Var.lightBlue500, 0.2),
  // panel
  'panelTitle.activeBorder': Var.deepPurpleA700,
  // statusBar
  'statusBar.background': Var.bgBs,
  'statusBar.debuggingBackground': Var.deepOrange900,
  'statusBar.noFolderBackground': Var.bgBs,
  'statusBarItem.prominentBackground': Var.deepPurpleA700,
  'statusBarItem.remoteBackground': Var.deepPurpleA700,
  // titleBar
  'titleBar.activeBackground': Var.bgBs,
  'titleBar.inactiveBackground': Var.bgXs,
  // menuBar
  'menu.background': Var.bgSm,
  // Command Center colors
  'commandCenter.border': Var.deepPurpleA700,
  // notification
  'notificationCenterHeader.background': Var.bgSm,
  'notifications.background': Var.bgSm,
  'notifications.border': Var.deepPurpleA700,
  // extension
  'extensionButton.prominentBackground': Var.deepPurpleA700,
  'extensionButton.prominentHoverBackground': Var.deepPurpleA200,
  // integratedTerminal
  'terminal.ansiBlack': Var.blueGrey900,
  'terminal.ansiBlue': Var.blue900,
  'terminal.ansiBrightBlack': Var.blueGrey700,
  'terminal.ansiBrightBlue': Var.blue500,
  'terminal.ansiBrightCyan': Var.cyan500,
  'terminal.ansiBrightGreen': Var.green500,
  'terminal.ansiBrightMagenta': Var.pink500,
  'terminal.ansiBrightRed': Var.red500,
  'terminal.ansiBrightWhite': Var.blueGrey300,
  'terminal.ansiBrightYellow': Var.yellow500,
  'terminal.ansiCyan': Var.cyan700,
  'terminal.ansiGreen': Var.green700,
  'terminal.ansiMagenta': Var.pink700,
  'terminal.ansiRed': Var.red700,
  'terminal.ansiWhite': Var.blueGrey500,
  'terminal.ansiYellow': Var.yellow700,
  // git
  'gitDecoration.addedResourceForeground': Var.lightGreen500,
  'gitDecoration.modifiedResourceForeground': Var.lightBlue500,
  'gitDecoration.stageModifiedResourceForeground': Var.yellow500,
  'gitDecoration.deletedResourceForeground': Var.pink500,
  'gitDecoration.stageDeletedResourceForeground': Var.pink500,
  'gitDecoration.untrackedResourceForeground': Var.lightGreen500,
  'gitDecoration.conflictingResourceForeground': Var.pink500,
  'gitDecoration.submoduleResourceForeground': Var.lightBlue200,
  // settingsEditor
  'settings.modifiedItemIndicator': Var.yellow900,
  'settings.focusedRowBorder': Var.deepPurpleA700,
  // Snippets colors
  'editor.snippetTabstopHighlightBackground': opacity(Var.deepPurpleA400, 0.5),
  'editor.snippetFinalTabstopHighlightBorder': Var.deepOrangeA400,
  // Breadcrumbs colors
  'breadcrumbPicker.background': Var.bgSm,
};

export const variantUiColor = createVariantUiColor(uiColor, variant);
