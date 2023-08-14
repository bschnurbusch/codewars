// Multiples of 3 or 5
// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number){
  result = [0];
  reducer = (accumulator, currentValue) => accumulator + currentValue;
  for (i = 1; i < number; i++) {
    if ((i % 3 == 0) || (i % 5 == 0)) {
      result.push(i);
    }
  }
  return result.reduce(reducer);
}