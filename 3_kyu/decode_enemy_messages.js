// Help the general decode secret enemy messages
// https://www.codewars.com/kata/52cf02cd825aef67070008fa

device.decode = function (w) {
  console.log('this is for the test');
  console.log(w);
  translation = 'bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHa'.split('');
  brute = "a bcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,.1234567890?".split('');
  ignore_list = '!@#$%^&*()_+-/[]{}`~=|<>;:\\\'"';
  result = '';
  for (let i = 0; i < w.length; i++) {
    if (!ignore_list.includes(w[i])) {
      for (let j = 0; j < brute.length; j++) {
        snipe = device.encode(`${brute[j]}${brute[j]}${brute[j]}${brute[j]}`);
        for (let c = 0; c < translation.length; c++) {
          if (translation[c] === snipe[0] && translation[(c + 1) % 66] === snipe[1] && translation[(c + 2) % 66] === snipe[2] && translation[(c + 3) % 66] === snipe[3]) {
            if (translation[(c + i) % 66] === w[i]) {
              result += brute[j];
              break;
            }
          }
        }
      }
    } else {
      result += w[i];
    }
  }
  console.log(result);
  return result; 
}