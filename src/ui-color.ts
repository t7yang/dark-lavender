import md from 'material-colors-ts';
import { createVariant, createVariantUiColor, UiColor } from 'vscode-typed-theme-generator';

const [variant, vVar] = createVariant({
  default: { bg1: '#07090F', bg2: '#17191F' },
  black: { bg1: '#010109', bg2: '#111119' },
  soft: { bg1: '#13151E', bg2: '#23252E' },
});

const colors = {
  transparency: '#0000',
};

const uiColor: UiColor = {
  // base
  focusBorder: md.deepPurple.A700,
  foreground: md.blueGrey[100],
  errorForeground: md.pink[700],
  'icon.foreground': md.deepPurple.A100,
  // text
  'textLink.activeForeground': md.orange[500],
  'textLink.foreground': md.blue[500],
  // button
  'button.background': md.deepPurple.A700,
  'button.secondaryBackground': md.cyan.A700,
  'checkbox.background': md.grey[900],
  // dropdown
  'dropdown.background': md.grey[900],
  'dropdown.listBackground': md.grey[900],
  // input
  'input.background': md.grey[900],
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
  'list.dropBackground': vVar.bg2,
  'list.activeSelectionBackground': md.purple[900],
  'list.hoverBackground': vVar.bg2,
  'list.inactiveSelectionBackground': vVar.bg2,
  // activityBar
  'activityBar.background': vVar.bg1,
  'activityBar.inactiveForeground': md.deepPurple[50] + '66',
  'activityBar.foreground': md.deepPurple.A400,
  'activityBar.activeBorder': md.deepPurple.A400,
  'activityBarBadge.background': md.deepPurple.A700,
  // sideBar
  'sideBar.background': vVar.bg1,
  // editorGroupTabs
  'editorGroupHeader.tabsBackground': vVar.bg1,
  'tab.inactiveBackground': vVar.bg1,
  'tab.activeBackground': vVar.bg1,
  'tab.activeBorder': md.purple.A400,
  'tab.activeForeground': md.grey[50],
  'tab.inactiveForeground': md.grey[500],
  'tab.activeModifiedBorder': md.amber[700],
  // editor
  'editor.foreground': md.blueGrey[100],
  'editor.background': vVar.bg1,
  'editorLineNumber.foreground': md.blueGrey[700],
  'editorLineNumber.activeForeground': md.purple.A400,
  'editor.wordHighlightBackground': md.blue[700] + 66,
  'editor.wordHighlightStrongBackground': md.pink[700] + 66,
  'editor.lineHighlightBackground': md.blueGrey[700] + 33,
  'editor.lineHighlightBorder': colors.transparency,
  'editorIndentGuide.background': md.blueGrey[800],
  'editorIndentGuide.activeBackground': md.blueGrey[400],
  'editorRuler.foreground': md.blueGrey[900] + 33,
  'editorLightBulb.foreground': md.yellow[500],
  'editorLightBulbAutoFix.foreground': md.blue[500],
  'editorBracketMatch.background': md.amber[700] + '7F',
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
  'editorWidget.background': vVar.bg1,
  'editorWidget.border': md.deepPurple.A700,
  'editorMarkerNavigationError.background': md.pink[700],
  'editorMarkerNavigationWarning.background': md.orange[700],
  'editorMarkerNavigationInfo.background': md.blue[700],
  // peekView
  'peekView.border': md.deepPurple.A700,
  'peekViewEditor.background': md.deepPurple.A700 + '05',
  'peekViewResult.background': md.deepPurple.A700 + '05',
  'peekViewEditor.matchHighlightBackground': md.deepPurple.A700 + '30',
  'peekViewTitle.background': vVar.bg1,
  // mergeConflict
  'merge.currentHeaderBackground': md.teal[500] + '99',
  'merge.currentContentBackground': md.teal[500] + '33',
  'merge.incomingHeaderBackground': md.lightBlue[500] + '99',
  'merge.incomingContentBackground': md.lightBlue[500] + '33',
  // panel
  'panelTitle.activeBorder': md.deepPurple.A700,
  // statusBar
  'statusBar.background': vVar.bg1,
  'statusBar.debuggingBackground': md.deepOrange[900],
  'statusBar.noFolderBackground': vVar.bg1,
  'statusBarItem.prominentBackground': md.deepPurple.A700,
  'statusBarItem.remoteBackground': md.deepPurple.A700,
  // titleBar
  'titleBar.activeBackground': vVar.bg1,
  'titleBar.inactiveBackground': vVar.bg2,
  // menuBar
  'menu.background': vVar.bg2,
  // notification
  'notificationToast.border': md.deepPurple.A700,
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
  'gitDecoration.deletedResourceForeground': md.red[500],
  'gitDecoration.stageDeletedResourceForeground': md.red[500],
  'gitDecoration.untrackedResourceForeground': md.lightGreen[500],
  'gitDecoration.conflictingResourceForeground': md.red[500],
  'gitDecoration.submoduleResourceForeground': md.lightBlue[200],
  // settingsEditor
  'settings.modifiedItemIndicator': md.amber[900],
};

export const variantUiColor = createVariantUiColor(uiColor, variant);