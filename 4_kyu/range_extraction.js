// Range Extraction
// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

function solution(list){
  result = [];
  for (let i = 0; i < list.length; i++) {
    count = 1;
    previous = list[i];
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] == (previous + 1)) {
        previous++;
        count++;
        if (j == list.length - 1) {
          if (count > 2) {
            result.push(`${list[i]}-${list[j]}`);
            i = list.length;
            console.log(`i = ${i}`);
            break;
          } else {
            result.push(`${list[i]}`);
            break;
          }
        }
      } else {
        if (count > 2) {
          result.push(`${list[i]}-${list[j - 1]}`);
          i = j - 1;
          break;
        } else {
          result.push(`${list[i]}`);
          break;
        }
      }
    }
    if (i == list.length - 1) {
      result.push(`${list[i]}`);
    }
  }
  result = result.join(',');
  return result;
}