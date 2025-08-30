const vokal = ["a", "i", "u", "e", "o"];

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < vokal.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (vokal[i] === str[j]) {
        count++;
      }
    }
  }
  console.log(count);
}

countVowels("Belajar JavaScript");
