// Battleship field validator
// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7

function validateBattlefield(field) {
  ship_counter = [];
  ship_tally = {
    '4': 0,
    '3': 0,
    '2': 0,
    '1': 0
  }
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] == 1) {
        if (j < field[i].length - 1) {
          if (field[i][j + 1] == 1 && field[i + 1][j] == 1) {
            return false;
          }
          if (i < field.length - 1) {
            if (field[i + 1][j + 1] == 1) {
              return false;
            }
          }
        }
        if (j > 0 && i < (field.length - 1)) {
          if (field[i + 1][j - 1] == 1) {
            return false;
          }
        }
        if (!ship_counter.includes(`${i}, ${j}`)) {
          ship_counter.push(`${i}, ${j}`);
          ship_length = 1;
          for (let c = j + 1; c < field[i].length; c++) {
            if (field[i][c] == 1) {
              if (c < field[i].length - 1) {
                if (field[i][c + 1] == 1 && field[i + 1][c] == 1) {
                  return false;
                }
                if (i < field.length - 1) {
                  if (field[i + 1][c + 1] == 1) {
                    return false;
                  }
                }
              }
              if (c > 0 && i < (field.length - 1)) {
                if (field[i + 1][c - 1] == 1) {
                  return false;
                }
              }
              ship_length++;
              if (ship_length > 4) {
                return false;
              }
              ship_counter.push(`${i}, ${c}`);
            } else {
              break;
            }
          }
          for (let c = i + 1; c < field.length; c++) {
            if (field[c][j] == 1) {
              if (j < field[c].length - 1) {
                if (field[c][j + 1] == 1 && field[c + 1][j] == 1) {
                  return false;
                }
                if (c < field.length - 1) {
                  if (field[c + 1][j + 1] == 1) {
                    return false;
                  }
                }
              }
              if (j > 0 && c < (field.length - 1)) {
                if (field[i + 1][c - 1] == 1) {
                  return false;
                }
              }
              ship_length++;
              if (ship_length > 4) {
                return false;
              }
              ship_counter.push(`${c}, ${j}`);
            } else {
              break;
            }
          }
          ship_tally[`${ship_length}`]++;
        }
      }
    }
  }
  if (ship_tally['4'] != 1 || ship_tally['3'] != 2 || ship_tally['2'] != 3 || ship_tally['1'] != 4) {
    return false;
  }
  return true;
}