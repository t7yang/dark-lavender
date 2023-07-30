import { resolve } from 'node:path';
// ^^^             ^^^^ keyword -> purple

function getPath() {
  // ^^^ declaration keyword -> pink
  return resolve(__dirname, 'foo.js');
}

JSON.stringify({});
// ^ ^^^^^^^^^ langauage or platform built-in keywords, variables, functions -> italic

('string'); // string -> green
12345; // number -> pink
true; // boolean -> red
location.href; // orange -> variable.property <- light blue
parseInt(''); // function -> teal

function main(params: string) {
  //          ^^^^^^ parameter is deeper than variable
  var params = '123';
  //  ^^^^^^ duplicate declarations can be distinguished from the color

  const readonly = 'readonly';
  //    ^^^^^^^^ [reaodnly][variable] -> [bold][orange]
  Node.ATTRIBUTE_NODE;
  //   ^^^^^^^^^^^^^^ [platform built-in][readonly][property] -> [italic][bold][light blue]
}

123 + 1 - (2 * 3) / 4;
//  ^   ^    ^    ^ operator -> light green
delete location.href;
// ^^^ word operator

/^foo-\{\}\d{1,2}([a-z])$/;
//^^^ normal string
//    ^^       ^^^ escape string
//      ^^^^ quantity
//           ^^   ^^ group
