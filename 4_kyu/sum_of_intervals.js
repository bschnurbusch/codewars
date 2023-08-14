// Sum of Intervals
// https://www.codewars.com/kata/52b7ed099cdc285c300001cd

function sumIntervals(intervals){
  result = 0;
  
  check_overlap = function(arr1, arr2) {
    arr1_range = [];
    arr2_range = [];
    for (let i = arr1[0]; i <= arr1[1]; i++) {
      arr1_range.push(i);
    }
    for (let i = arr2[0]; i <= arr2[1]; i++) {
      arr2_range.push(i);
    }

    for (let i = 0; i < arr1_range.length; i++) {
      if (arr2_range.includes(arr1_range[i])) {
        return true;
      }
    }
    return false;
  }
  
  for (let i = 0; i < intervals.length; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
      if (check_overlap(intervals[i], intervals[j])) {
        new_interval = [Math.min(intervals[i][0], intervals[j][0]), Math.max(intervals[i][1], intervals[j][1])];
        intervals.splice(i, 1);
        intervals.splice(j - 1, 1);
        intervals.unshift(new_interval);
        i = -1;
        break;
      }
    }
  }
  
  for (let i = 0; i < intervals.length; i++) {
    result += intervals[i][1] - intervals[i][0];
  }
  return result;
}