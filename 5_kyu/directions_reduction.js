// Directions Reduction
// https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr){
  pairs = {
    'NORTH': 'SOUTH',
    'SOUTH': 'NORTH',
    'EAST': 'WEST',
    'WEST': 'EAST'
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (pairs[arr[i]] == arr[i + 1]) {
      arr.splice(i, 2);
      i = -1;
    }
  }
  return arr;
}