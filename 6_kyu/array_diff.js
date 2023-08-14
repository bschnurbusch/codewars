// Array diff
// https://www.codewars.com/kata/523f5d21c841566fde000009

function array_diff(a, b) {
  c = [];
  for (element_a of a) {
    if (!b.includes(element_a)) {
      c.push(element_a);
    }
  }
  return c;
}