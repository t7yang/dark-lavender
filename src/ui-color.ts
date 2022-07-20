import md from 'material-colors-ts';
import { createVariantUiColor, opacity, UiColor } from 'vscode-typed-theme-generator';
import { colors, variant, vVar } from './color';

const uiColor: UiColor = {
  // base
  focusBorder: md.deepPurple.A700,
  foreground: md.blueGrey[100],
  errorForeground: md.pink[700],
  'icon.foreground': md.deepPurple.A200,
  // text
  'textLink.activeForeground': md.orange[500],
  'textLink.foreground': md.blue[500],
  // button
  'button.background': md.deepPurple.A700,
  'button.secondaryBackground': md.deepOrange.A700,
  'checkbox.background': vVar.input,
  // dropdown
  'dropdown.background': vVar.input,
  'dropdown.listBackground': vVar.input,
  // input
  'input.background': vVar.input,
  'inputOption.activeBackground': md.deepPurple.A700,
  'inputValidation.errorBackground': md.pink[900],
  'inputValidation.errorBorder': md.pink[900],
  'inputValidation.infoBackground': md.blue[900],
  'inputValidation.infoBorder': md.blue[900],
  'inputValidation.warningBackground': md.orange[900],
  'inputValidation.warningBorder': md.orange[900],
  // badge
  'badge.background': md.deepPurple.A700,
  // progress
  'progressBar.background': md.deepPurple.A700,
  // listTree
  'list.dropBackground': vVar.bgSm,
  'list.activeSelectionBackground': md.purple[900],
  'list.hoverBackground': vVar.bgLg,
  'list.inactiveSelectionBackground': vVar.bgLg,
  // activityBar
  'activityBar.background': vVar.bgBs,
  'activityBar.inactiveForeground': md.deepPurple[50] + '66',
  'activityBar.foreground': md.deepPurple.A400,
  'activityBar.activeBorder': md.deepPurple.A400,
  'activityBarBadge.background': md.deepPurple.A700,
  // sideBar
  'sideBar.background': vVar.bgXxs,
  // editorGroupTabs
  'editorGroupHeader.tabsBackground': vVar.bgBs,
  'tab.inactiveBackground': vVar.bgBs,
  'tab.activeBackground': vVar.bgXs,
  'tab.activeBorder': md.deepPurple.A400,
  'tab.activeForeground': md.grey[50],
  'tab.inactiveForeground': md.grey[500],
  'tab.activeModifiedBorder': md.amber[700],
  // editor
  'editor.foreground': md.blueGrey[100],
  'editor.background': vVar.bgBs,
  'editorLineNumber.foreground': md.blueGrey[800],
  'editorLineNumber.activeForeground': md.purple.A400,
  'editor.selectionBackground': opacity(md.lightBlue[700], 0.5),
  'editor.inactiveSelectionBackground': opacity(md.lightBlue[700], 0.1),
  'editor.selectionHighlightBackground': opacity(md.lightBlue[700], 0.3),
  'editor.selectionHighlightBorder': colors.transparency,
  'editor.wordHighlightBackground': opacity(md.indigo[700], 0.5),
  'editor.wordHighlightBorder': colors.transparency,
  'editor.wordHighlightStrongBackground': opacity(md.pink[700], 0.5),
  'editor.wordHighlightStrongBorder': colors.transparency,
  'editor.findMatchBackground': opacity(md.orange[700], 0.5),
  'editor.findMatchHighlightBackground': opacity(md.orange[700], 0.2),
  'editor.findRangeHighlightBackground': opacity(md.orange[700], 0.2),
  'editor.findMatchBorder': colors.transparency,
  'editor.findMatchHighlightBorder': colors.transparency,
  'editor.findRangeHighlightBorder': colors.transparency,
  'editor.lineHighlightBackground': opacity(md.blueGrey[700], 0.3),
  'editor.lineHighlightBorder': colors.transparency,
  'editorIndentGuide.background': md.blueGrey[800],
  'editorIndentGuide.activeBackground': md.blueGrey[400],
  'editorRuler.foreground': md.blueGrey[900] + '7F',
  'editorLightBulb.foreground': md.yellow[500],
  'editorLightBulbAutoFix.foreground': md.blue[500],
  'editorBracketMatch.background': opacity(md.amber[700], 0.4),
  'editorBracketMatch.border': colors.transparency,
  'editorOverviewRuler.modifiedForeground': md.lightBlue[700],
  'editorOverviewRuler.addedForeground': md.lightGreen[700],
  'editorOverviewRuler.deletedForeground': md.red[700],
  'editorOverviewRuler.errorForeground': md.pink[700],
  'editorOverviewRuler.warningForeground': md.orange[700],
  'editorOverviewRuler.infoForeground': md.blue[700],
  'editorGutter.modifiedBackground': md.lightBlue[700],
  'editorGutter.addedBackground': md.lightGreen[700],
  'editorGutter.deletedBackground': md.red[700],
  // diffEditor
  'diffEditor.insertedTextBackground': md.lightGreen[500] + 33,
  'diffEditor.removedTextBackground': md.red[500] + 33,
  // editorWidget
  'editorWidget.background': vVar.bgBs,
  'editorWidget.border': md.deepPurple.A700,
  'editorMarkerNavigationError.background': md.pink[700],
  'editorMarkerNavigationWarning.background': md.orange[700],
  'editorMarkerNavigationInfo.background': md.blue[700],
  // peekView
  'peekView.border': md.deepPurple.A700,
  'peekViewEditor.background': md.deepPurple.A700 + '05',
  'peekViewResult.background': md.deepPurple.A700 + '05',
  'peekViewEditor.matchHighlightBackground': opacity(md.orange[500], 0.2),
  'peekViewTitle.background': vVar.bgBs,
  // mergeConflict
  'merge.currentHeaderBackground': md.teal[500] + '99',
  'merge.currentContentBackground': md.teal[500] + '33',
  'merge.incomingHeaderBackground': md.lightBlue[500] + '99',
  'merge.incomingContentBackground': md.lightBlue[500] + '33',
  // panel
  'panelTitle.activeBorder': md.deepPurple.A700,
  // statusBar
  'statusBar.background': vVar.bgBs,
  'statusBar.debuggingBackground': md.deepOrange[900],
  'statusBar.noFolderBackground': vVar.bgBs,
  'statusBarItem.prominentBackground': md.deepPurple.A700,
  'statusBarItem.remoteBackground': md.deepPurple.A700,
  // titleBar
  'titleBar.activeBackground': vVar.bgBs,
  'titleBar.inactiveBackground': vVar.bgXs,
  // menuBar
  'menu.background': vVar.bgSm,
  // notification
  'notificationCenterHeader.background': vVar.bgSm,
  'notifications.background': vVar.bgSm,
  'notifications.border': md.deepPurple.A700,
  // extension
  'extensionButton.prominentBackground': md.deepPurple.A700,
  'extensionButton.prominentHoverBackground': md.deepPurple.A200,
  // integratedTerminal
  'terminal.ansiBlack': md.blueGrey[900],
  'terminal.ansiBlue': md.blue[900],
  'terminal.ansiBrightBlack': md.blueGrey[700],
  'terminal.ansiBrightBlue': md.blue[500],
  'terminal.ansiBrightCyan': md.cyan[500],
  'terminal.ansiBrightGreen': md.green[500],
  'terminal.ansiBrightMagenta': md.pink[500],
  'terminal.ansiBrightRed': md.red[500],
  'terminal.ansiBrightWhite': md.blueGrey[300],
  'terminal.ansiBrightYellow': md.yellow[500],
  'terminal.ansiCyan': md.cyan[700],
  'terminal.ansiGreen': md.green[700],
  'terminal.ansiMagenta': md.pink[700],
  'terminal.ansiRed': md.red[700],
  'terminal.ansiWhite': md.blueGrey[500],
  'terminal.ansiYellow': md.yellow[700],
  // git
  'gitDecoration.addedResourceForeground': md.lightGreen[500],
  'gitDecoration.modifiedResourceForeground': md.lightBlue[500],
  'gitDecoration.stageModifiedResourceForeground': md.amber[500],
  'gitDecoration.deletedResourceForeground': md.pink[500],
  'gitDecoration.stageDeletedResourceForeground': md.pink[500],
  'gitDecoration.untrackedResourceForeground': md.lightGreen[500],
  'gitDecoration.conflictingResourceForeground': md.pink[500],
  'gitDecoration.submoduleResourceForeground': md.lightBlue[200],
  // settingsEditor
  'settings.modifiedItemIndicator': md.amber[900],
  'settings.focusedRowBorder': md.deepPurple.A700,
};

export const variantUiColor = createVariantUiColor(uiColor, variant);
