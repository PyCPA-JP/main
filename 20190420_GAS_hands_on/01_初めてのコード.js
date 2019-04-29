/**
 * 01_初めてのコードです。
 * 処理：セルA1に、'全然わからない'という文字を挿入する。
 * 目的：まずはコードが動いくことを確認する。
 */
function myFunction1() {
  SpreadsheetApp.getActiveSheet()
    .getRange(1, 1)
    .setValue("全然わからない");
}

/**
 * 02_変数の処理を学ぶ
 * 処理：セルA1に、'全然わからない'という文字を挿入する。
 * 目的：変数sheet及び変数getRangeに処理を格納することを学ぶ。
 */
function myFunction2() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var getRange = sheet.getRange("A1");
  var setValue = getRange.setValue("完全に理解した");
}

/**
 * 03_変数の処理を学ぶ
 * 処理：それぞれのセルに文字を入れる
 *      A1:完全に理解した
 *      A2:全然わからない
 * 目的：変数sheet及び変数getRangeに処理を格納することを学ぶ。
 */
function myFunction3() {
  var sheet = SpreadsheetApp.getActiveSheet(); //アクティブなシートを取得して、変数sheetに代入する。
  var getRange1 = sheet.getRange("A1");
  var getRange2 = sheet.getRange("A2");
  var setValue1 = getRange1.setValue("完全に理解した");
  var setValue2 = getRange2.setValue("全然わからない");
}

/**
 * 04_複数のセルをまとめて取得する
 * 処理：A1からA1000までの範囲に、'完全に理解した'を記載する
 * 目的：複数範囲のセルを取得する方法を学ぶ
 */
function myFunction4() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var getRanges = sheet.getRange("A1:A1000");
  getRanges.setValue("完全に理解した");
}

/**
 * 05_for文の使用方法
 * 処理：A1からA1000までの範囲に、1〜1000の数値を挿入する
 * 目的：for文の使い方を理解する。
 */
function myFunction5() {
  var sheet = SpreadsheetApp.getActiveSheet();
  for (var i = 1; i <= 1000; i++) {
    sheet.getRange(i, 1).setValue(i);
  }
}

/**
 * 06_while文の使用方法
 * 処理：A1からA1000までの範囲に、1〜1000の数値を挿入する
 * 目的：while文の使い方を理解する。
 * memo：for文とwhile文の使い分けは以下の通り
 *     for文:繰り返す回数が決まっている場合
 *     while文:繰り返す回数がわからない場合
 */
function myFunction6() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var i = 1;
  while (i <= 1000) {
    sheet.getRange(i, 1).setValue(i);
    i++;
  }
}

/**
 * 07_if文の書き方
 * 処理：A1からA1000までの範囲で、以下の通り条件分岐する
 *     偶数:数字を入力する
 *     奇数:'奇数じゃん'と入力する
 * 目的：if文の使い方を理解する。
 */
function myFunction7() {
  var sheet = SpreadsheetApp.getActiveSheet();
  for (var i = 1; i <= 1000; i++) {
    if (i % 2 == 0) {
      sheet.getRange(i, 1).setValue(i);
    } else {
      sheet.getRange(i, 1).setValue("奇数じゃん");
    }
  }
}
