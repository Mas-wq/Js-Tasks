exports.fact = function (num) {
  //Anounymous function assigned to exports.fact
  if (num <= 2) return num;
  let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact *= i;
  }
  return fact;
};
function circleArea(radius) {
  return 3.14 * radius ** 2;
}

exports.circ = circleArea;
