// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5

function flyBy(lamps, drone){
  let splitLamps = lamps.split('');
  for (let index = 0; index < drone.length; index += 1) {
    if (index >= splitLamps.length) {
      break;
    }
    splitLamps[index] = 'o';
  }
  return splitLamps.join('');
}