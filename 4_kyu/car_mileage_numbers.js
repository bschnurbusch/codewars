// Catching Car Mileage Numbers
// https://www.codewars.com/kata/52c4dd683bfd3b434c000292

function isInteresting(number, awesomePhrases) {
  if (number < 98) {
    return 0;
  }
  
  zeros = function(number_input) {
    num_string = number_input.toString();
    num_parse = num_string.split('');
    for (let i = 1; i < num_parse.length; i++) {
      if (num_parse[i] != 0) {
        return false;
      }
    }
    return true;
  }
  same = function(number_input) {
    num_string = number_input.toString();
    num_parse = num_string.split('');
    for (let i = 1; i < num_parse.length; i++) {
      if (num_parse[i] != num_parse[0]) {
        return false;
      }
    }
    return true;
  }
  increment = function(number_input) {
    num_string = number_input.toString();
    num_parse = num_string.split('');
    for (let i = 1; i < num_parse.length; i++) {
      if (parseInt(num_parse[i], 10) != (parseInt(num_parse[i-1], 10) + 1)) {
        if (!(num_parse[i-1] == 9 && num_parse[i] == 0)) {
          return false;
        }
      }
    }
    return true;
  }
  decrement = function(number_input) {
    num_string = number_input.toString();
    num_parse = num_string.split('');
    for (let i = 1; i < num_parse.length; i++) {
      if (parseInt(num_parse[i], 10) != (parseInt(num_parse[i-1], 10) - 1)) {
        return false;
      }
    }
    return true;
  }
  palindrome = function(number_input) {
    num_string = number_input.toString();
    num_parse = num_string.split('');
    for (let i = 0; i < (num_parse.length / 2); i++) {
      if (num_parse[i] != num_parse[num_parse.length-1 - i]) {
        return false;
      }
    }
    return true;
  }
  awesome = function(number_input) {
    num_string = number_input.toString();
    num_parse = num_string.split('');
    for (let i = 0; i < awesomePhrases.length; i++) {
      if (num_string.includes(awesomePhrases[i])) {
        return true;
      }
    }
    return false;
  }
  
  if (zeros(number) || same(number) || increment(number) || decrement(number) || palindrome(number) || awesome(number)) {
    if (number >= 100) {
      return 2;
    } else {
      return 1;
    }
  }
  
  if (zeros(number+1) || same(number+1) || increment(number+1) || decrement(number+1) || palindrome(number+1) || awesome(number+1)) {
    return 1;
  }
  
  if (zeros(number+2) || same(number+2) || increment(number+2) || decrement(number+2) || palindrome(number+2) || awesome(number+2)) {
    return 1;
  }
  
  return 0;
}