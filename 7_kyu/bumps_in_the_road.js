// Bumps in the Road
// https://www.codewars.com/kata/57ed30dde7728215300005fa

function bump(x){
  let xSplit = x.split('');
  let bumpCount = 0;
  for (let index = 0; index < xSplit.length; index += 1) {
    if (xSplit[index] == 'n') {
      bumpCount += 1;
    }
  }
  let result = bumpCount > 15 ? 'Car Dead' : 'Woohoo!';
  return result;
}