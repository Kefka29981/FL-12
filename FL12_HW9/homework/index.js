const one = 1,
  two = 2,
  three = 3,
  five = 5,
  seven = 7,
  eight = 8,
  thirty = 30,
  ten = 10,
  year = 2019;

function convert(...arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      arr[i] = '' + arr[i];
    } else {
      arr[i] = parseInt(arr[i]);
    }
  }
  return arr;
}

console.log(convert('1', two, three, '4'));

function executeforEach(arr, callback) {
  arr.forEach(element => callback(element));
}

executeforEach([one, two, three], function(el) {
  console.log(el * two);
});

function mapArray(arr, callback) {
  let Array = [];
  executeforEach(arr, element => Array.push(callback(parseInt(element))));
  return Array;
}

mapArray([two, '5', eight], function(el) {
  return el + three;
});

function filterArray(arr, callback) {
  let Array = [];
  executeforEach(arr, element => {
    if (callback(element) === true) {
      Array.push(element);
    }
  });
  return Array;
}

filterArray([two, five, eight], function(el) {
  return el % two === 0;
});

function flipOver(word) {
  let flip = [];
  word.split('');

  for (let i = word.length - 1; i >= 0; i--) {
    flip.push(word[i]);
  }

  return flip.join('');
}

flipOver('hey world');

function makeListFromRange(arr) {
  let list = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    list.push(i);
  }
  return list;
}

makeListFromRange([two, seven]);

function getArrayOfKeys(arr, key) {
  let Array = [];
  executeforEach(arr, element => Array.push(element[key]));
  return Array;
}

const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];

getArrayOfKeys(actors, 'name');

function substitute(arr) {
  return mapArray(arr, element => element < thirty ? '*' : element);
}

function getPastDay(date, day) {
  const mileseconds = 86400000;
  return new Date(date.getTime() - day * mileseconds).getDate();
}

const date = new Date(year, 0, two);

getPastDay(date, 1);

function formatDate(date) {
  let hours = date.getHours();
  if (hours < ten) {
    hours = '0' + hours;
  }
  return `${date.getFullYear()}/${1 + date.getMonth()}/${date.getDate()} ${hours}:${date.getMinutes()}`;
}
