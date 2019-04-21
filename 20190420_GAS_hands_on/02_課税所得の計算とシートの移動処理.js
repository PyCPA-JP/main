nfunction getEmployeeTaxableIncomeData() {
    var getSheet = SpreadsheetApp.openById("1xc6HTP4vx8T3stvK4Cwq_aUIFceZLqEv-blfdUWI7-w");
    var getData = getSheet.getDataRange().getValues();
    getData[0].push("税額");
    for(var i = 1; i<=getData.length-1; i++){
      getData[i].push(calculationTax(getData[i][1]));
    }
    SpreadsheetApp.getActiveSheet().getRange(1, 1,getData.length,getData[0].length).setValues(getData);
  };
  
  
  /************************************************************
  所得税の税率表（速算表）の内容を関数化したもの。
  税率の改正によるメンテナンスを行う必要があるので、毎年12月には以下のURLで内容を確認してください。
  https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm
  *************************************************************/
  function calculationTax(taxableIncome){
    var f = function(){
      var taxacleIncome = Math.floor(taxableIncome/1000)*1000;
      if(taxableIncome > 40000000){
        return taxableIncome *0.45 - 4796000;
      }else if(taxableIncome > 18000000){
        return taxableIncome * 0.4 - 2796000;
      }else if(taxableIncome > 9000000){
        return taxableIncome *0.33 - 1536000;
      }else if(taxableIncome > 6950000){
        return taxableIncome *0.23 -  636000;
      }else if(taxableIncome > 3300000){
        return taxableIncome * 0.2 -  427500;
      }else if(taxableIncome > 1950000){
        return taxableIncome * 0.1 -   97500;
      }else{
        return taxableIncome * 0.05;
      }
    }()
    return Math.floor(f/100)*100
  };