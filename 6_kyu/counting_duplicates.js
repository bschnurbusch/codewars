// Counting Duplicates
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text){
  result_count = 0;
  regexp_tracker = [];
  for (i = 0; i < text.length; i++) {
    regexp = new RegExp(`${text[i]}`, 'ig');
    result = text.match(regexp);
    if (result.length > 1 && !regexp_tracker.includes(result[0])) {
      regexp_tracker.push(result[0]);
      result_count++;
    }
  }
  return result_count;
}