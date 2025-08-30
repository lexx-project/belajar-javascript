let word = {};

function countCharacters(str) {
  for (let i = 0; i < str.length; i++) {
    if (word[str[i]]) {
      word[str[i]]++;
    } else {
      word[str[i]] = 1;
    }
  }
  console.log(word);
}

countCharacters("hello");
