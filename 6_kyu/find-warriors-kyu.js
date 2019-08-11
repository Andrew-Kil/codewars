// https://www.codewars.com/kata/find-warriors-kyu/train/javascript

const getKyu = (allHonors, honor) => {
  const sortedHonors = allHonors.sort((a, b) => a - b);
  const oneKyu = [sortedHonors[0]];
  const twoKyu = [sortedHonors[1], sortedHonors[2]];
  const threeKyu = [sortedHonors[3], sortedHonors[4]];
  const fourKyu = [sortedHonors[5], sortedHonors[6], sortedHonors[7]];
  const fiveKyu = [sortedHonors[8], sortedHonors[9], sortedHonors[10]];
  const sixKyu = [sortedHonors[11], sortedHonors[12], sortedHonors[13]];
  const sevenKyu = [
    sortedHonors[14],
    sortedHonors[15],
    sortedHonors[16],
    sortedHonors[17]
  ];
  const eightKyu = [
    sortedHonors[18],
    sortedHonors[19],
    sortedHonors[20],
    sortedHonors[21]
  ];
  if (oneKyu.includes(honor)) return 1;
  if (twoKyu.includes(honor)) return 2;
  if (threeKyu.includes(honor)) return 3;
  if (fourKyu.includes(honor)) return 4;
  if (fiveKyu.includes(honor)) return 5;
  if (sixKyu.includes(honor)) return 6;
  if (sevenKyu.includes(honor)) return 7;
  if (eightKyu.includes(honor)) return 8;
  else return 0;
};
