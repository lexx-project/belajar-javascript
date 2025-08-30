function isAnagram(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        str2 = str2.slice(0, j) + str2.slice(j + 1);
        break;
      }
    }
  }
  return str2.length === 0;
}

console.log(isAnagram("anagram", "aaangrm"));
