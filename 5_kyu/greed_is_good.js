// Greed is Good
// https://www.codewars.com/kata/5270d0d18625160ada0000e4

function score( dice ) {
  triple_scores = [1000, 200, 300, 400, 500, 600];
  triple_check = [0, 0, 0, 0, 0, 0];
  score_result = 0;
  for (let i = 0; i < dice.length; i++) {
    triple_check[dice[i] - 1] += 1;
  }
  for (let i = 0; i < triple_check.length; i++) {
    if (triple_check[i] >= 3) {
      score_result += triple_scores[i];
      triple_check[i] -= 3;
    }
  }
  if (triple_check[0] > 0) {
    score_result += (triple_check[0] * 100);
  }
  if (triple_check[4] > 0) {
    score_result += (triple_check[4] * 50);
  }
  return score_result;
}