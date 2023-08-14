// Human readable duration format
// https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration (seconds) {
  if (seconds == 0) {
    return 'now';
  }
  time_amounts = [[0, 'year'], [0, 'day'], [0, 'hour'], [0, 'minute'], [0, 'second']];
  results = [];
  results_formatted = '';
  
  while (seconds >= 31536000) {
    time_amounts[0][0]++;
    seconds -= 31536000;
  }
  while (seconds >= 86400) {
    time_amounts[1][0]++;
    seconds -= 86400;
  }
  while (seconds >= 3600) {
    time_amounts[2][0]++;
    seconds -= 3600;
  }
  while (seconds >= 60) {
    time_amounts[3][0]++;
    seconds -= 60;
  }
  time_amounts[4][0] += seconds;
  
  for (let i = 0; i < time_amounts.length; i++) {
    if (time_amounts[i][0] > 0) {
      if (time_amounts[i][0] > 1) {
        time_amounts[i][1] += 's';
      }
      results.push(`${time_amounts[i][0]} ${time_amounts[i][1]}`);
    }
  }
  
  for (let i = 0; i < results.length - 1; i++) {
    if (i != (results.length - 2)) {
      results_formatted += `${results[i]}, `;
    }
    if (i == (results.length - 2)) {
      results_formatted += `${results[i]} and ${results[i + 1]}`;
    }
  }
  
  if (results.length == 1) {
    results_formatted += results[0];
  }
  
  return results_formatted;
}