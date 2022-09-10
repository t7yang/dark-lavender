import md from 'material-colors-ts';
import { TokenColor } from 'vscode-typed-theme-generator';

export const tokenColors: TokenColor[] = [
  {
    name: 'Comments',
    scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
    settings: {
      foreground: md.blueGrey[500],
    },
  },
  {
    name: 'Builtin and Keyword',
    scope: [
      'constant.language',
      'variable.language',
      'variable.parameter.function.language.special',
      'keyword',
      'keyword.operator.alignas',
      'keyword.operator.alignof',
      'keyword.operator.cast',
      'keyword.operator.expression',
      'keyword.operator.instanceof',
      'keyword.operator.logical.python',
      'keyword.operator.new',
      'keyword.operator.sizeof',
      'keyword.operator.typeid',
      'keyword.operator.wordlike',
      'meta.control',
      'storage',
      'support',
    ],
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    name: 'Punctuation',
    scope: [
      'constant.name.attribute.tag.pug',
      'meta.brace',
      'meta.decorator',
      'punctuation.accessor',
      'punctuation.brace',
      'punctuation.brackets',
      'punctuation.colon',
      'punctuation.comma',
      'punctuation.decorator',
      'punctuation.definition',
      'punctuation.delimiter.comma',
      'punctuation.delimiter.object.comma',
      'punctuation.parenthesis.begin',
      'punctuation.parenthesis.end',
      'punctuation.operation',
      'punctuation.other.comma',
      'punctuation.section',
      'punctuation.semi',
      'punctuation.separator',
      'punctuation.terminator',
      'string.interpolated.pug',
      'support.function.interpolation.sass',
    ],
    settings: {
      fontStyle: '',
      foreground: md.indigo[100],
    },
  },
  {
    name: 'Operators',
    scope: ['keyword.operator', 'keyword.other.unit'],
    settings: {
      fontStyle: '',
      foreground: md.lightGreen.A400,
    },
  },
  {
    name: 'Keywords',
    scope: ['keyword', 'keyword.control', 'keyword.other.special-method.elixir', 'meta.control.flow'],
    settings: {
      fontStyle: 'italic',
      foreground: md.deepPurple.A200,
    },
  },
  {
    name: 'Storage, Declaration Keywords',
    scope: [
      'source.cs keyword.other.class',
      'source.cs keyword.other.get',
      'source.cs keyword.other.set',
      'source.cs keyword.other.var',
      'punctuation.definition.function.pointer',
      'storage',
      'storage.type.struct',
    ],
    settings: {
      foreground: md.pink.A200,
    },
  },
  {
    name: 'Functions',
    scope: [
      'entity.name.function',
      'keyword.other.special-method',
      'meta.function-call',
      'meta.method-call',
      'meta.require',
      'punctuation.definition.function',
      'support.function',
      'support.function.any-method',
      'variable.function',
    ],
    settings: {
      foreground: md.teal.A200,
    },
  },
  {
    name: 'Classes and Types',
    scope: [
      'entity.name.class',
      'entity.name.type',
      'entity.other.inherited-class',
      'keyword.type',
      'keyword.other.type',
      'meta.class.inheritance',
      'meta.class.instance',
      'meta.function.definition',
      'meta.type',
      'source.cs storage.type',
      'storage.type.built-in',
      'storage.type.haskell',
      'support.class',
      'support.type',
      'variable.other.constant.elixir',
    ],
    settings: {
      foreground: md.yellow.A200,
    },
  },
  {
    name: 'Integers, Float',
    scope: ['constant.numeric', 'constant.character.numeric', 'variable.other.anonymous.elixir'],
    settings: {
      foreground: md.pink[100],
    },
  },
  {
    name: 'Strings, Inherited Class',
    scope: [
      'constant.character',
      'storage.type.string',
      'string',
      'support.constant.property-value',
      'support.function.variable.quoted.single.elixir',
    ],
    settings: {
      foreground: md.green[100],
    },
  },
  {
    name: 'Escape Characters',
    scope: ['constant.character.escape'],
    settings: {
      foreground: md.cyan.A200,
    },
  },
  {
    name: 'Regular Expression Groups',
    scope: [
      'punctuation.definition.group.regexp',
      'punctuation.definition.group.assertion.regexp',
      'punctuation.definition.character-class.regexp',
      'punctuation.character.set.begin.regexp',
      'punctuation.character.set.end.regexp',
      'keyword.operator.negation.regexp',
      'support.other.parenthesis.regexp',
    ],
    settings: {
      foreground: md.lightBlue.A200,
    },
  },
  {
    name: 'Regular Expression Quantifier',
    scope: 'keyword.operator.quantifier.regexp',
    settings: {
      foreground: md.pink[200],
    },
  },
  {
    name: 'Escape Characters',
    scope: [
      'constant.character.character-class.regexp',
      'constant.character.escape',
      'constant.character.set.regexp',
      'constant.other.character-class',
      'constant.other.character-class.regexp',
      'constant.other.character-class.set.regexp',
    ],
    settings: {
      foreground: md.deepOrange[200],
    },
  },
  {
    name: 'Parameters',
    scope: [
      'meta.function-call',
      'parameter.variable.function.elixir',
      'variable.other.block.ruby',
      'variable.parameter',
    ],
    settings: {
      foreground: md.deepOrange.A200,
    },
  },
  {
    name: 'Variables',
    scope: [
      'entity.name.namespace',
      'entity.name.scope-resolution',
      'entity.name.variable',
      'punctuation.definition.variable',
      'string meta.embedded.line.ruby',
      'string source.groovy',
      'source.cpp meta.bracket.square.access',
      'source.cpp meta.parens',
      'source.python constant.other.caps',
      'support.other',
      'support.type.object',
      'variable',
    ],
    settings: {
      foreground: md.orange.A200,
    },
  },
  {
    name: 'Constants',
    scope: [
      'constant',
      'entity.name.function.preprocessor',
      'meta.preprocessor',
      'punctuation.definition.constant',
      'support.constant',
      'support.constant.property-value.css',
      'support.variable.magic.python',
      'variable.other.constant',
    ],
    settings: {
      fontStyle: 'bold',
    },
  },
  {
    name: 'Builtin Variable',
    scope: [
      'constant.character',
      'constant.language',
      'constant.other',
      'source.php variable.language.this punctuation.definition.variable',
      'support.constant',
      'support.constant.property-value.css',
      'support.variable.magic.python',
      'variable.language',
      'variable.parameter.function.language.special',
    ],
    settings: {
      foreground: md.red.A200,
    },
  },
  {
    name: 'Object Properties',
    scope: [
      'constant.other.key',
      'constant.other.object.key.js',
      'entity.name.label',
      'entity.name.tag.yaml',
      'entity.name.variable.field',
      'entity.name.variable.property',
      'meta.object-literal.key',
      'meta.object-literal.key string',
      'meta.object.member',
      'meta.meta.objectliteral',
      'meta.property-name',
      'punctuation.definition.variable.ruby',
      'string.unquoted.label.js',
      'source.python meta.attribute',
      'support.constant.property',
      'support.type.map.key',
      'support.type.property-name',
      'support.type.vendored.property-name',
      'support.variable.property',
      'variable.graphql',
      'variable.object.property',
      'variable.other.constant.property',
      'variable.other.member',
      'variable.other.object.property',
      'variable.other.property',
      'variable.other.readwrite.class',
      'variable.other.readwrite.instance',
    ],
    settings: {
      foreground: md.lightBlue.A200,
    },
  },
  {
    name: 'Data Source Properties',
    scope: ['support.type.property-name'],
    settings: {
      fontStyle: '',
    },
  },
  {
    name: 'XML/HTML Tags',
    scope: ['entity.name.tag'],
    settings: {
      foreground: md.deepPurple.A200,
    },
  },
  {
    name: 'Attribute IDs',
    scope: ['entity.other.attribute-name', 'meta.attribute', 'string.unquoted.alias.graphql'],
    settings: {
      foreground: md.pink.A200,
    },
  },
  {
    name: 'Css ID',
    scope: ['entity.other.attribute-name.id'],
    settings: {
      foreground: md.orange.A200,
    },
  },
  {
    name: 'Markup - Headings',
    scope: ['entity.name.section', 'markup.heading', 'punctuation.definition.heading'],
    settings: {
      fontStyle: '',
      foreground: md.purple.A200,
    },
  },
  {
    name: 'Markup - Text',
    scope: ['meta.paragraph'],
    settings: {
      foreground: md.blueGrey[100],
    },
  },
  {
    name: 'Markup - Quotes',
    scope: ['markup.quote meta.paragraph'],
    settings: {
      fontStyle: 'italic',
      foreground: md.blue[100],
    },
  },
  {
    name: 'Markup - Italic',
    scope: ['markup.italic', 'punctuation.definition.italic'],
    settings: {
      fontStyle: 'italic',
      foreground: md.amber[100],
    },
  },
  {
    name: 'Markup - Bold',
    scope: ['markup.bold', 'punctuation.definition.bold'],
    settings: {
      fontStyle: 'bold',
      foreground: md.deepOrange[100],
    },
  },
  {
    name: 'Markup - Bold-Italic',
    scope: [
      'markup.bold markup.italic',
      'markup.italic markup.bold',
      'markup.quote markup.bold',
      'markup.bold markup.italic string',
      'markup.italic markup.bold string',
      'markup.quote markup.bold string',
    ],
    settings: {
      fontStyle: 'bold',
      foreground: md.deepOrange[100],
    },
  },
  {
    name: 'Markup - Underline',
    scope: ['markup.underline'],
    settings: {
      fontStyle: 'underline',
      foreground: md.deepOrange[100],
    },
  },
  {
    name: 'Markup - Code',
    scope: ['markup.fenced_code.block', 'markup.inline.raw', 'markup.raw.block', 'markup.raw.inline'],
    settings: {
      foreground: md.orange[500],
    },
  },
  {
    name: 'Markup - Inserted',
    scope: ['markup.inserted'],
    settings: {
      foreground: md.green[500],
    },
  },
  {
    name: 'Markup - Deleted',
    scope: ['markup.deleted'],
    settings: {
      foreground: md.pink[500],
    },
  },
  {
    name: 'Markup - Changed',
    scope: ['markup.changed'],
    settings: {
      foreground: md.indigo[500],
    },
  },
  {
    name: 'Markup - Link Image',
    scope: ['markup.underline.link.image'],
    settings: {
      foreground: md.green[500],
    },
  },
  {
    name: 'Markup - Link Url',
    scope: ['meta.link'],
    settings: {
      foreground: md.indigo[500],
    },
  },
  {
    name: 'Markup - Separator',
    scope: ['meta.separator'],
    settings: {
      foreground: md.blueGrey[300],
    },
  },
  {
    name: 'Markup - Embedded',
    scope: ['variable.interpolation'],
    settings: {
      foreground: md.indigo[500],
    },
  },
  {
    name: 'Illegal',
    scope: ['invalid', 'invalid.illegal'],
    settings: {
      foreground: md.pink[800],
    },
  },
  {
    name: 'BASH: Command Substitution',
    scope: ['string.interpolated.dollar.shell'],
    settings: {
      foreground: md.pink[500],
    },
  },
  {
    name: 'BASH: Math Operation',
    scope: ['string.other.math.shell'],
    settings: {
      foreground: md.indigo[500],
    },
  },
  {
    name: 'CSV Rainbow 4',
    scope: ['comment.rainbow4'],
    settings: {
      foreground: md.orange[500],
    },
  },
  {
    name: 'CSV Rainbow 9',
    scope: ['markup.bold.rainbow9'],
    settings: {
      foreground: md.deepPurple[500],
    },
  },
  {
    name: 'CSV Rainbow 10',
    scope: ['invalid.rainbow10'],
    settings: {
      foreground: md.deepOrange[500],
    },
  },
  {
    name: 'JSON Key - Level 0',
    scope: ['source.json meta.structure.dictionary.json support.type.property-name.json'],
    settings: {
      foreground: md.orange.A100,
    },
  },
  {
    name: 'JSON Key - Level 1',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: md.yellow.A100,
    },
  },
  {
    name: 'JSON Key - Level 2',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: md.lightGreen.A100,
    },
  },
  {
    name: 'JSON Key - Level 3',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: md.teal.A100,
    },
  },
  {
    name: 'JSON Key - Level 4',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: md.lightBlue.A100,
    },
  },
  {
    name: 'JSON Key - Level 5',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: md.indigo.A100,
    },
  },
  {
    name: 'JSON Key - Level 6',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: md.purple.A100,
    },
  },
  {
    name: 'JSON Key - Level 7',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: md.pink.A100,
    },
  },
  {
    name: 'JSON Key - Level 8',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: md.orange.A100,
    },
  },
];
