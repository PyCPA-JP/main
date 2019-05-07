/**
 * 元データ配列に税額をpushして、スプレッドシートに書き込む
 */
function setTaxData() {
  var dataArray = () => {
    var getSheet = SpreadsheetApp.openById("シートのIDを記載");
    var getData = getSheet.getDataRange().getValues();

    getData[0].push("税額");
    //取得したデータの長さ分だけ、税額の計算を繰り返す
    for (var i = 1; i <= getData.length - 1; i++) {
      getData[i].push(calculationTax(getData[i][1]));
    }
    return getData;
  }
  SpreadsheetApp.getActiveSheet.getRange(1, 1, dataArray.length, dataArray[0].length).setValues(dataArray);
}


/**
 * 
 */
function createArray() {
  //　[従業員名, 課税所得]の配列を取得する

}

/**
 * 課税所得に対する税額を返す
 * https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm
 * @param {Number} taxableIncome
 * @returns {Number} tax
 */
function calculationTax(taxableIncome) {
  var calculationgTable = [
    // [課税所得, 税率, 控除額]
    [40000000, 45, 4796000],
    [18000000, 40, 2796000],
    [9000000, 33, 1536000],
    [6950000, 23, 636000],
    [3300000, 20, 427500],
    [1950000, 10, 97500],
    [-1, 5, 0]
  ];

  let matchedTuple = calculationgTable.filter(tuple => {
    let threshold = tuple[0];
    if (taxableIncome > threshold) {
      return true;
    }
  })[0];
  console.log(matchedTuple);

  var taxRate = matchedTuple[1] / 100;
  var deduction = matchedTuple[2];
  return taxableIncome * taxRate - deduction;
}
module.exports = calculationTax;
