import { createVariantTokenColors, TokenColor } from 'vscode-typed-theme-generator';
import { Var, variant } from './color';

export const tokenColors: TokenColor[] = [
  {
    name: 'Comments',
    scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
    settings: {
      foreground: Var.blueGrey500,
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
      foreground: Var.indigoA100,
    },
  },
  {
    name: 'Operators',
    scope: ['keyword.operator', 'keyword.other.unit'],
    settings: {
      fontStyle: '',
      foreground: Var.lightGreenA400,
    },
  },
  {
    name: 'Keywords',
    scope: ['keyword', 'keyword.control', 'keyword.other.special-method.elixir', 'meta.control.flow'],
    settings: {
      fontStyle: 'italic',
      foreground: Var.deepPurpleA200,
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
      foreground: Var.pinkA200,
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
      foreground: Var.tealA200,
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
      foreground: Var.yellowA200,
    },
  },
  {
    name: 'Integers, Float',
    scope: ['constant.numeric', 'constant.character.numeric', 'variable.other.anonymous.elixir'],
    settings: {
      foreground: Var.pink200,
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
      foreground: Var.green200,
    },
  },
  {
    name: 'Escape Characters',
    scope: ['constant.character.escape'],
    settings: {
      foreground: Var.yellow200,
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
      foreground: Var.indigoA200,
    },
  },
  {
    name: 'Regular Expression Quantifier',
    scope: ['keyword.operator.quantifier.regexp'],
    settings: {
      foreground: Var.pink200,
    },
  },
  {
    name: 'Regular Expression Anchor',
    scope: ['keyword.control.anchor.regexp'],
    settings: {
      foreground: Var.purpleA200,
    },
  },
  {
    name: 'Regular Expression Special Characters',
    scope: [
      'constant.character.character-class.regexp',
      'constant.character.set.regexp',
      'constant.other.character-class',
      'constant.other.character-class.regexp',
      'constant.other.character-class.set.regexp',
    ],
    settings: {
      foreground: Var.redA200,
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
      foreground: Var.deepOrangeA200,
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
      foreground: Var.orangeA200,
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
      foreground: Var.redA200,
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
      foreground: Var.lightBlueA200,
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
      foreground: Var.deepPurpleA200,
    },
  },
  {
    name: 'Attribute IDs',
    scope: ['entity.other.attribute-name', 'meta.attribute', 'string.unquoted.alias.graphql'],
    settings: {
      foreground: Var.pinkA200,
    },
  },
  {
    name: 'Css ID',
    scope: ['entity.other.attribute-name.id'],
    settings: {
      foreground: Var.orangeA200,
    },
  },
  {
    name: 'Markup - Headings',
    scope: ['entity.name.section', 'markup.heading', 'punctuation.definition.heading'],
    settings: {
      fontStyle: '',
      foreground: Var.purpleA200,
    },
  },
  {
    name: 'Markup - Text',
    scope: ['meta.paragraph'],
    settings: {
      foreground: Var.blueGrey100,
    },
  },
  {
    name: 'Markup - Quotes',
    scope: ['markup.quote meta.paragraph'],
    settings: {
      fontStyle: 'italic',
      foreground: Var.blue100,
    },
  },
  {
    name: 'Markup - Italic',
    scope: ['markup.italic', 'punctuation.definition.italic'],
    settings: {
      fontStyle: 'italic',
      foreground: Var.yellow100,
    },
  },
  {
    name: 'Markup - Bold',
    scope: ['markup.bold', 'punctuation.definition.bold'],
    settings: {
      fontStyle: 'bold',
      foreground: Var.deepOrange100,
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
      foreground: Var.deepOrange100,
    },
  },
  {
    name: 'Markup - Underline',
    scope: ['markup.underline'],
    settings: {
      fontStyle: 'underline',
      foreground: Var.deepOrange100,
    },
  },
  {
    name: 'Markup - Code',
    scope: ['markup.fenced_code.block', 'markup.inline.raw', 'markup.raw.block', 'markup.raw.inline'],
    settings: {
      foreground: Var.orange500,
    },
  },
  {
    name: 'Markup - Inserted',
    scope: ['markup.inserted'],
    settings: {
      foreground: Var.green500,
    },
  },
  {
    name: 'Markup - Deleted',
    scope: ['markup.deleted'],
    settings: {
      foreground: Var.pink500,
    },
  },
  {
    name: 'Markup - Changed',
    scope: ['markup.changed'],
    settings: {
      foreground: Var.indigo500,
    },
  },
  {
    name: 'Markup - Link Image',
    scope: ['markup.underline.link.image'],
    settings: {
      foreground: Var.green500,
    },
  },
  {
    name: 'Markup - Link Url',
    scope: ['meta.link'],
    settings: {
      foreground: Var.indigo500,
    },
  },
  {
    name: 'Markup - Separator',
    scope: ['meta.separator'],
    settings: {
      foreground: Var.blueGrey300,
    },
  },
  {
    name: 'Markup - Embedded',
    scope: ['variable.interpolation'],
    settings: {
      foreground: Var.indigo500,
    },
  },
  {
    name: 'Illegal',
    scope: ['invalid', 'invalid.illegal'],
    settings: {
      foreground: Var.pink700,
    },
  },
  {
    name: 'BASH: Command Substitution',
    scope: ['string.interpolated.dollar.shell'],
    settings: {
      foreground: Var.pink500,
    },
  },
  {
    name: 'BASH: Math Operation',
    scope: ['string.other.math.shell'],
    settings: {
      foreground: Var.indigo500,
    },
  },
  {
    name: 'CSV Rainbow 4',
    scope: ['comment.rainbow4'],
    settings: {
      foreground: Var.orange500,
    },
  },
  {
    name: 'CSV Rainbow 9',
    scope: ['markup.bold.rainbow9'],
    settings: {
      foreground: Var.deepPurple500,
    },
  },
  {
    name: 'CSV Rainbow 10',
    scope: ['invalid.rainbow10'],
    settings: {
      foreground: Var.deepOrange500,
    },
  },
  {
    name: 'JSON Key - Level 0',
    scope: ['source.json meta.structure.dictionary.json support.type.property-name.json'],
    settings: {
      foreground: Var.orange100,
    },
  },
  {
    name: 'JSON Key - Level 1',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: Var.yellowA100,
    },
  },
  {
    name: 'JSON Key - Level 2',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: Var.lightGreenA100,
    },
  },
  {
    name: 'JSON Key - Level 3',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: Var.tealA100,
    },
  },
  {
    name: 'JSON Key - Level 4',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: Var.lightBlueA100,
    },
  },
  {
    name: 'JSON Key - Level 5',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: Var.indigoA100,
    },
  },
  {
    name: 'JSON Key - Level 6',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: Var.purpleA100,
    },
  },
  {
    name: 'JSON Key - Level 7',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: Var.pinkA100,
    },
  },
  {
    name: 'JSON Key - Level 8',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: Var.orangeA100,
    },
  },
];

export const variantTokenColor = createVariantTokenColors(tokenColors, variant);
