function checkSign(num) {
  var a = (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";

  return a;
}

checkSign(10);