let number1 = 0;
let number2 = 0;
let operation = ["+", "-", "*", "/"];

function calculator(number1, number2, operation) {
  if (operation == "+") {
    return number1 + number2;
  } else if (operation == "-") {
    return number1 - number2;
  } else if (operation == "*") {
    return number1 * number2;
  } else if (operation == "/") {
    return number1 / number2;
  } else {
    return "Invalid operation";
  }
}

console.log(calculator(3, 2, "+"));
