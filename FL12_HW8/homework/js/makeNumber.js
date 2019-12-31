function makeNumber(word) {
  var number = '';
  for (i = 0; i < word.length; i++) {
    if (
      word[i] === '0' ||
      word[i] === '1' ||
      word[i] === '2' ||
      word[i] === '3' ||
      word[i] === '4' ||
      word[i] === '5' ||
      word[i] === '6' ||
      word[i] === '7' ||
      word[i] === '8' ||
      word[i] === '9'
    ) {
      number = number + word[i];
    }
  }
  return +number;
}

makeNumber('erer384jjjfd123');