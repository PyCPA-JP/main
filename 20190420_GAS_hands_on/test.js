const calculationTax = require("./02_課税所得計算とシートの移動処理_改善版.js");

test("taxableIncome = 40000000 to Tax 13204000", () => {
  expect(calculationTax(40000000)).toBe(13204000);
});
