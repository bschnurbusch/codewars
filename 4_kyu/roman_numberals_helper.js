// Roman Numerals Helper
// https://www.codewars.com/kata/51b66044bce5799a7f000003

const RomanNumerals = {
  letters: ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
  numbers: [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000],

  toRoman: function(number) {
    let result = '';
    let numRemaining = number;
    
    while (numRemaining > 0) {
      for (let index = 0; index < this.numbers.length; index += 1) {
        if (numRemaining < this.numbers[index]) {
          result += this.letters[index - 1];
          numRemaining -= this.numbers[index - 1];
          break;
        }
        if (index === this.numbers.length - 1 && numRemaining >= 1000) {
          result += 'M';
          numRemaining -= 1000;
        }
      }
    }
    return result;
  },
  
  fromRoman: function(letters) {
    let result = 0;
    let lettersRemaining = letters;
    
    while (lettersRemaining.length > 0) {
      let testString = '';
      let doubleLetters = '';
      let singleLetter = '';
      let doneForNow = false;
      
      if (lettersRemaining.length >= 2) {
        doubleLetters = lettersRemaining.slice(0, 2);
      }
      singleLetter = lettersRemaining.slice(0, 1);
      
      for (let index = 0; index < this.letters.length; index += 1) {
        if (doubleLetters === this.letters[index]) {
          result += this.numbers[index];
          lettersRemaining = lettersRemaining.slice(2);
          doneForNow = true;
        }
      }
      if (doneForNow === false) {
        for (let index = 0; index < this.letters.length; index += 1) {
          if (singleLetter === this.letters[index]) {
            result += this.numbers[index];
            lettersRemaining = lettersRemaining.slice(1);
          }
        }
      }
    }
    return result;
  }
}