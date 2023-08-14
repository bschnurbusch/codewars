// Recover a secret string from random triplets
// https://www.codewars.com/kata/53f40dff5f9d31b813000774

var recoverSecret = function(triplets) {
  total_string = [];
  for (let i = 0; i < triplets.length; i++) {
    for (let j = 0; j < triplets[i].length; j++) {
      if (!total_string.includes(triplets[i][j])) {
        total_string.push(triplets[i][j]);
      }
    }
  }
  for (let i = 0; i < triplets.length; i++) {
    rule1 = triplets[i][0];
    rule2 = triplets[i][1];
    rule3 = triplets[i][2];
    
    if (total_string.indexOf(rule1) > total_string.indexOf(rule2)) {
      swap1 = total_string.indexOf(rule1);
      swap2 = total_string.indexOf(rule2);
      [total_string[swap1], total_string[swap2]] = [total_string[swap2], total_string[swap1]];
      i = -1;
      continue;
    }
    if (total_string.indexOf(rule2) > total_string.indexOf(rule3)) {
      swap1 = total_string.indexOf(rule2);
      swap2 = total_string.indexOf(rule3);
      [total_string[swap1], total_string[swap2]] = [total_string[swap2], total_string[swap1]];
      i = -1;
    }
  }
  return total_string.join('');
}