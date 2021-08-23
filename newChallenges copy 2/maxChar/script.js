function maxChar(str) {
  const newString = str.split('');
  let chars = {};
  let total = 0;
  let maxLetter = '';

  for (let char of newString) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }

  for (let char in chars) {
    if (chars[char] > 1) {
      total = chars[char];
      maxLetter = char;
    }
  }

  return `The max letter is "${maxLetter}" with the total of "${total}".`;
}

console.log(maxChar('ravioli'));
