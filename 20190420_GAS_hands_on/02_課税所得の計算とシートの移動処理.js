/**
 * 処理：元データの情報を配列として取得して、
 *     calculationTax関数を用いて税額を算定し、スプレッドシートに貼り付ける
 * 目的：配列でのデータ取得及び貼り付け方を理解する。
 */
function getEmployeeTaxableIncomeData() {
  //　[従業員名, 課税所得]の配列を取得する
  var getSheet = SpreadsheetApp.openById("シートのIDを記載");
  var getData = getSheet.getDataRange().getValues();
  /*見出しを一番最初につけて、以下の配列を作成
   *    [従業員名, 課税所得, 税額]
   */
  getData[0].push("税額");
  //取得したデータの長さ分だけ、税額の計算を繰り返す
  for (var i = 1; i <= getData.length - 1; i++) {
    getData[i].push(calculationTax(getData[i][1]));
  }
  //スプレッドシートに配列のデータを貼り付け
  SpreadsheetApp.getActiveSheet()
    .getRange(1, 1, getData.length, getData[0].length)
    .setValues(getData);
}

/************************************************************
所得税の税率表（速算表）の内容を関数化したもの。
税率の改正によるメンテナンスを行う必要があるので、毎年12月には以下のURLで内容を確認してください。
https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm
*************************************************************/
function calculationTax(taxableIncome) {
  var f = (function() {
    var taxacleIncome = Math.floor(taxableIncome / 1000) * 1000;
    if (taxableIncome > 40000000) {
      return taxableIncome * 0.45 - 4796000;
    } else if (taxableIncome > 18000000) {
      return taxableIncome * 0.4 - 2796000;
    } else if (taxableIncome > 9000000) {
      return taxableIncome * 0.33 - 1536000;
    } else if (taxableIncome > 6950000) {
      return taxableIncome * 0.23 - 636000;
    } else if (taxableIncome > 3300000) {
      return taxableIncome * 0.2 - 427500;
    } else if (taxableIncome > 1950000) {
      return taxableIncome * 0.1 - 97500;
    } else {
      return taxableIncome * 0.05;
    }
  })();
  return Math.floor(f / 100) * 100;
}
