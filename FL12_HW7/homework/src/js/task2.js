const maxNumOfAttempts = 3;
const four = 4;
const two = 2;
const eight = 8;
const hundred = 100;

let randNum;
let guess;
let attempt = 3;
let prize = 0;
let randRange = 8;
let possiblePrizeStart = 100;
let possiblePrize = 100;

if (confirm('Do you want to play a game?')) {
  randNum = Math.floor(Math.random() * Math.floor(randRange + 1));
  while (attempt > 0) {
    guess = +prompt(`
Choose a roulette pocket number from 0 to ${randRange}
Attempts left: ${attempt}
Total prize: ${prize}$
Possible prize on current attempt: ${possiblePrize}$
`);

    if (guess === randNum) {
      prize += possiblePrize;
      attempt = 0;
      if (
        confirm(
          `Congratulation, you won!   Your prize is: ${prize} $. Do you want to continue?`
        )
      ) {
        attempt = maxNumOfAttempts;
        randRange = randRange + four;
        possiblePrizeStart = possiblePrizeStart * two;
        possiblePrize = possiblePrizeStart;
        randNum = Math.floor(Math.random() * Math.floor(randRange + 1));
      } else {
        alert(`Thank you for your participation. Your prize is: ${prize} $`);
        if (confirm('Do you want to play again?')) {
            attempt = maxNumOfAttempts;
            prize = 0;
            randRange = eight;
            possiblePrize = hundred;
            possiblePrizeStart = hundred;
            randNum = Math.floor(Math.random() * Math.floor(randRange + 1));
        }
      }
    } else {
      attempt = attempt - 1;
      possiblePrize = possiblePrize / two;
      if(attempt === 0){
        alert(`Thank you for your participation. Your prize is: ${prize} $`);
        if (confirm('Do you want to play again?')) {
          attempt = maxNumOfAttempts;
          prize = 0;
          randRange = eight;
          possiblePrize = hundred;
          possiblePrizeStart = hundred;
          randNum = Math.floor(Math.random() * Math.floor(randRange + 1));
        }
      }
    }
  }
} else {
  alert('You did not become a billionaire, but can.');
}
