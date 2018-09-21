/* Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
Your task is to make 'Past' function which returns time converted to miliseconds.
#####Example:
past(0, 1, 1) == 61000 */
function past(h, m, s) {
  // 1 Hour = 3,600,000 Milliseconds
  // 1 Minute = 60,000 Milliseconds
  // 1 Second = 1,000 Milliseconds
  let hM = h * 3600000;
  let mM = m * 60000;
  let sM = s * 1000;
  return hM + mM + sM;
}
