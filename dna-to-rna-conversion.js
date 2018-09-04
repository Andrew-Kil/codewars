// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
//Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
//Create a funciton which translates a given DNA string into RNA.
function DNAtoRNA(dna) {
  let splitDna = dna.split("");
  let finalArr = [];
  for (let i = 0; i < splitDna.length; i++) {
    if (splitDna[i] === "T") {
      finalArr.push("U");
    } else {
      finalArr.push(splitDna[i]);
    }
  }
  return finalArr.join("");
}
