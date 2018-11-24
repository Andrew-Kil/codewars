/* Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!" */

const maskify = input => {
  if (input.length <= 4) return input;
  let lastFour = input.slice(input.length - 4, input.length),
    remainingInput = input.slice(0, input.length - 4),
    splitMask = remainingInput.split(""),
    mask = "";
  for (let i = 0; i < splitMask.length; i++) {
    mask += "#";
  }
  return mask + lastFour;
};
