// Write Number in Expanded Form
// https://www.codewars.com/kata/5842df8ccbd22792a4000245

function expandedForm(num) {
  result = [];
  num_string = num.toString();
  num_split = num_string.split('');
  index = 1;
  for (number of num_split) {
    if (number > 0) {
      result.push(`${number * (10 ** (num_split.length - index))}`);
    }
    index++;
  }
  return result.join(' + ');
}