// Build a pile of Cubes
// https://www.codewars.com/kata/5592e3bd57b64d00f3000047

function findNb(m) {
  count = 1;
  function math(number) {
    result = 0;
    for (i = count; i >= 0; i--) {
      result += (count - i) ** 3;
    }
    if (result < m) {
      count++;
      return math(count);
    }
    if (result == m) {
      return count;
    }
    if (result > m) {
      return -1;
    }
  }
  return math(count);
}