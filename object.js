const calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
  divide(num1, num2) {
    return num1 / num2;
  },
};

let result = calculator.divide(2, 3);

console.log(result);
