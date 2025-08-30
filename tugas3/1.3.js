let result = "";
function reverseString(str) {
  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  console.log(result);
}

reverseString("Hello World!");
