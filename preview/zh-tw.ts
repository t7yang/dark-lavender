import { resolve } from 'node:path';
// ^^^             ^^^^ 關鍵字 -> 紫

function getPath() {
  // ^^^^^ 宣告關鍵字 -> 粉紅
  return resolve(__dirname, 'foo.js');
}

JSON.stringify({});
// ^ ^^^^^^^^^ 語言或平台內建的關鍵字、變數、函數 -> 斜體

('string'); // string -> 淺綠
12345; // number -> 淺粉紅
true; // boolean -> 紅
location.href; // 橘 -> 變數.屬性 <- 淺藍
parseInt(''); // 函數 -> 藍綠

const readonly = 'readonly';
//    ^^^^^^^^ 唯讀 -> 粗體
Node.ATTRIBUTE_NODE;
//   ^^^^^^^^^^^^^^ 平台內建唯讀屬性 -> 粗體 + 斜體 + 藍

123 + 1 - (2 * 3) / 4;
//  ^   ^    ^    ^ 運算子 -> 青檸
delete location.href;
// ^^^ 詞彙運算子

/^foo-\d{1,2}([a-z])$/;
//^^^ 一般文字
//    ^^       ^^^ 字母分類
//      ^^^^ 數量
//           ^^   ^^ 分組
