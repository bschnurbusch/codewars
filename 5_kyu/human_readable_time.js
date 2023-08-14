// Human Readable Time
// https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable(seconds) {
  result = [];
  var HH = 0, MM = 0, SS = 0;
  if (seconds / 3600 > 0) {
    HH = Math.floor(seconds / 3600);
    seconds -= HH * 3600;
  }
  if (seconds / 60 > 0) {
    MM = Math.floor(seconds / 60);
    seconds -= MM * 60;
  }
  SS = seconds;
  HH = HH.toString().padStart(2, '0');
  MM = MM.toString().padStart(2, '0');
  SS = SS.toString().padStart(2, '0');
  result.push(HH, MM, SS);
  return result.join(':');
}