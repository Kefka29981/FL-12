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
    return number;
  }

function countNumbers(word) {
    let arr = makeNumber(word).split('');
    let object = {};
    
    for(let i = 0; i < arr.length; i++){
        if(object[arr[i]]) {
            object[arr[i]]++;
        } else {
            object[arr[i]] = 1;
        }
    }
    return object;
}

countNumbers('jdjjka000466588kkkfs662555');