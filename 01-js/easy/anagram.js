/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  let count = {};
  for (let i = 0; i < str1.length; i++) {
    if (count[str1[i]] === undefined) count[str1[i]] = 1;
    else count[str1[i]] += 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (count[str2[i]] === undefined) return false;
    else count[str2[i]] -= 1;
  }

  let val = Object.values(count);
  for (let i = 0; i < val.length; i++) {
    if (val[i] !== 0) return false;
  }

  return true;
}

module.exports = isAnagram;
