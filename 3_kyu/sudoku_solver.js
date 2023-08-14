// Sudoku Solver
// https://www.codewars.com/kata/5296bc77afba8baa690002d7

function sudoku(puzzle) {
  check_row = function(row) {
    for (let c = 0; c < 9; c++) {
      if (possible_answers.includes(puzzle[row][c])) {
        possible_answers.splice(possible_answers.indexOf(puzzle[row][c]), 1);
      }
    }
  }
  check_column = function(column) {
    for (let c = 0; c < puzzle.length; c++) {
      if (possible_answers.includes(puzzle[c][column])) {
        possible_answers.splice(possible_answers.indexOf(puzzle[c][column]), 1);
      }
    }
  }
  check_section = function(section_row, section_column) {
    for (let c = 0; c < puzzle.length; c++) {
      for (let b = 0; b < puzzle[c].length; b++) {
        if (Math.ceil((b + 1) / 3) == section_column && Math.ceil((c + 1) / 3) == section_row) {
          if (possible_answers.includes(puzzle[c][b])) {
            possible_answers.splice(possible_answers.indexOf(puzzle[c][b]), 1);
          }
        }
      }
    }
  }
  
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle[i].length; j++) {
      possible_answers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      if (puzzle[i][j] == 0) {
        check_row(i);
        check_column(j);
        check_section(Math.ceil((i + 1) / 3), Math.ceil((j + 1) / 3));
        if (possible_answers.length == 1) {
          puzzle[i][j] = possible_answers[0];
          i = -1;
          break;
        }
      }
    }
  }
  return puzzle;
}