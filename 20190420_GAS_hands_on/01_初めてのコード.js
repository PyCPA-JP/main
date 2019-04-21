/*初めてのコードです。*/
function myFunction1() {
  SpreadsheetApp.getActiveSheet().getRange(1, 1).setValue("全然わからない");
}

/*変数の使い方を学びましょう*/
function myFunction2() {
  var sheet = SpreadsheetApp.getActiveSheet(); //アクティブなシートを取得して、変数sheetに代入する。
  var getRange = sheet.getRange('A1');//変数sheetからセルA1を取得して、getRangeに代入する。
  var setValue = getRange.setValue('完全に理解した');//getRange(=A1)に'完全に理解した'とセットする
}

/*変数の使いまわし方を理解する*/
function myFunction3() {
  var sheet = SpreadsheetApp.getActiveSheet(); //アクティブなシートを取得して、変数sheetに代入する。
  var getRange1 = sheet.getRange('A1');
  var getRange2 = sheet.getRange('A2');
  var setValue1 = getRange1.setValue('完全に理解した');
  var setValue2 = getRange2.setValue('全然わからない');
}

/**複数のレンジを取得する方法*/
function myFunction4() {
    var sheet = SpreadsheetApp.getActiveSheet(); //アクティブなシートを取得して、変数sheetに代入する。
    var getRanges = sheet.getRange("A1:A1000");
    getRanges.setValue("完全に理解した");
  }
  
 /**for文による繰り返し処理の方法 */ 
function myFunction5() {
  var sheet = SpreadsheetApp.getActiveSheet();
  for(var i = 1; i<=1000;i++){
    sheet.getRange(i,1).setValue(i);
  };
}

 /**while文による繰り返し処理の方法 */
function myFunction6(){
    var sheet = SpreadsheetApp.getActiveSheet();
    var i = 1;
    while(i <= 1000){
      sheet.getRange(i,1).setValue(i);
      i++;
    }
  }
 
 /**if文による条件分岐の方法 */  
function myFunction7() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var i = 1;
  while(i <= 1000){
    if(i%2==0){
      sheet.getRange(i,1).setValue(i);
    }else{
      sheet.getRange(i,1).setValue("奇数じゃん");
    }
    i++;
  }
}
  