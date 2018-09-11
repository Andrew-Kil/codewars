/* Write function bmi that calculates body mass index (bmi = weight / height ^ 2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese" */

function bmi(weight, height) {
  let calculator = weight / (height * height);

  if (calculator <= 18.5) {
    return "Underweight";
  } else if (calculator > 18.5 && calculator <= 25.0) {
    return "Normal";
  } else if (calculator > 25.0 && calculator <= 30.0) {
    return "Overweight";
  } else if (calculator > 30) {
    return "Obese";
  }
}
