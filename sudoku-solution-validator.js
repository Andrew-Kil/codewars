let sudokuBoard = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const validSolutions = (board) => {
  let row1 = arr[0],
  row2 = arr[1],
  row3 = arr[2],
  row4 = arr[3],
  row5 = arr[4],
  row6 = arr[5],
  row7 = arr[6],
  row8 = arr[7],
  row9 = arr[8];
  let column1 = arr[0][0] + arr[1][0] + arr[2][0] + arr[3][0] + arr[4][0] + arr[5][0] + arr[6][0] + arr[7][0] + arr[8][0],
  column2 = arr[0][1] + arr[1][1] + arr[2][1] + arr[3][1] + arr[4][1] + arr[5][1] + arr[6][1] + arr[7][1] + arr[8][1],
  column3 = arr[0][2] + arr[1][2] + arr[2][2] + arr[3][2] + arr[4][2] + arr[5][2] + arr[6][2] + arr[7][2] + arr[8][2],
  column4 = arr[0][3] + arr[1][3] + arr[2][3] + arr[3][3] + arr[4][3] + arr[5][3] + arr[6][3] + arr[7][3] + arr[8][3],
  column5 = arr[0][4] + arr[1][4] + arr[2][4] + arr[3][4] + arr[4][4] + arr[5][4] + arr[6][4] + arr[7][4] + arr[8][4],
  column6 = arr[0][5] + arr[1][5] + arr[2][5] + arr[3][5] + arr[4][5] + arr[5][5] + arr[6][5] + arr[7][5] + arr[8][5],
  column7 = const validSolutions = (board) => {
    let row1 = arr[0],
    row2 = arr[1],
    row3 = arr[2],
    row4 = arr[3],
    row5 = arr[4],
    row6 = arr[5],
    row7 = arr[6],
    row8 = arr[7],
    row9 = arr[8];
    let column1 = arr[0][0] + arr[1][0] + arr[2][0] + arr[3][0] + arr[4][0] + arr[5][0] + arr[6][0] + arr[7][0] + arr[8][0],
    column2 = arr[0][1] + arr[1][1] + arr[2][1] + arr[3][1] + arr[4][1] + arr[5][1] + arr[6][1] + arr[7][1] + arr[8][1],
    column3 = arr[0][2] + arr[1][2] + arr[2][2] + arr[3][2] + arr[4][2] + arr[5][2] + arr[6][2] + arr[7][2] + arr[8][2],
    column4 = arr[0][3] + arr[1][3] + arr[2][3] + arr[3][3] + arr[4][3] + arr[5][3] + arr[6][3] + arr[7][3] + arr[8][3],
    column5 = arr[0][4] + arr[1][4] + arr[2][4] + arr[3][4] + arr[4][4] + arr[5][4] + arr[6][4] + arr[7][4] + arr[8][4],
    column6 = arr[0][5] + arr[1][5] + arr[2][5] + arr[3][5] + arr[4][5] + arr[5][5] + arr[6][5] + arr[7][5] + arr[8][5],
    column7 = const validSolutions = (board) => {
      let row1 = arr[0],
      row2 = arr[1],
      row3 = arr[2],
      row4 = arr[3],
      row5 = arr[4],
      row6 = arr[5],
      row7 = arr[6],
      row8 = arr[7],
      row9 = arr[8];
      let column1 = arr[0][0] + arr[1][0] + arr[2][0] + arr[3][0] + arr[4][0] + arr[5][0] + arr[6][0] + arr[7][0] + arr[8][0],
      column2 = arr[0][1] + arr[1][1] + arr[2][1] + arr[3][1] + arr[4][1] + arr[5][1] + arr[6][1] + arr[7][1] + arr[8][1],
      column3 = arr[0][2] + arr[1][2] + arr[2][2] + arr[3][2] + arr[4][2] + arr[5][2] + arr[6][2] + arr[7][2] + arr[8][2],
      column4 = arr[0][3] + arr[1][3] + arr[2][3] + arr[3][3] + arr[4][3] + arr[5][3] + arr[6][3] + arr[7][3] + arr[8][3],
      column5 = arr[0][4] + arr[1][4] + arr[2][4] + arr[3][4] + arr[4][4] + arr[5][4] + arr[6][4] + arr[7][4] + arr[8][4],
      column6 = arr[0][5] + arr[1][5] + arr[2][5] + arr[3][5] + arr[4][5] + arr[5][5] + arr[6][5] + arr[7][5] + arr[8][5],
      column7 = const validSolutions = (board) => {
        let row1 = arr[0],
        row2 = arr[1],
        row3 = arr[2],
        row4 = arr[3],
        row5 = arr[4],
        row6 = arr[5],
        row7 = arr[6],
        row8 = arr[7],
        row9 = arr[8];
        let column1 = arr[0][0] + arr[1][0] + arr[2][0] + arr[3][0] + arr[4][0] + arr[5][0] + arr[6][0] + arr[7][0] + arr[8][0],
        column2 = arr[0][1] + arr[1][1] + arr[2][1] + arr[3][1] + arr[4][1] + arr[5][1] + arr[6][1] + arr[7][1] + arr[8][1],
        column3 = arr[0][2] + arr[1][2] + arr[2][2] + arr[3][2] + arr[4][2] + arr[5][2] + arr[6][2] + arr[7][2] + arr[8][2],
        column4 = arr[0][3] + arr[1][3] + arr[2][3] + arr[3][3] + arr[4][3] + arr[5][3] + arr[6][3] + arr[7][3] + arr[8][3],
        column5 = arr[0][4] + arr[1][4] + arr[2][4] + arr[3][4] + arr[4][4] + arr[5][4] + arr[6][4] + arr[7][4] + arr[8][4],
        column6 = arr[0][5] + arr[1][5] + arr[2][5] + arr[3][5] + arr[4][5] + arr[5][5] + arr[6][5] + arr[7][5] + arr[8][5],
        column7 = const validSolutions = (board) => {
          let row1 = arr[0],
          row2 = arr[1],
          row3 = arr[2],
          row4 = arr[3],
          row5 = arr[4],
          row6 = arr[5],
          row7 = arr[6],
          row8 = arr[7],
          row9 = arr[8];
          let column1 = arr[0][0] + arr[1][0] + arr[2][0] + arr[3][0] + arr[4][0] + arr[5][0] + arr[6][0] + arr[7][0] + arr[8][0],
          column2 = arr[0][1] + arr[1][1] + arr[2][1] + arr[3][1] + arr[4][1] + arr[5][1] + arr[6][1] + arr[7][1] + arr[8][1],
          column3 = arr[0][2] + arr[1][2] + arr[2][2] + arr[3][2] + arr[4][2] + arr[5][2] + arr[6][2] + arr[7][2] + arr[8][2],
          column4 = arr[0][3] + arr[1][3] + arr[2][3] + arr[3][3] + arr[4][3] + arr[5][3] + arr[6][3] + arr[7][3] + arr[8][3],
          column5 = arr[0][4] + arr[1][4] + arr[2][4] + arr[3][4] + arr[4][4] + arr[5][4] + arr[6][4] + arr[7][4] + arr[8][4],
          column6 = arr[0][5] + arr[1][5] + arr[2][5] + arr[3][5] + arr[4][5] + arr[5][5] + arr[6][5] + arr[7][5] + arr[8][5],
          column7 = arr[0][6] + arr[1][6] + arr[2][6] + arr[3][6] + arr[4][6] + arr[5][6] + arr[6][6] + arr[7][6] + arr[8][6],
          column8 = arr[0][7] + arr[1][7] + arr[2][7] + arr[3][7] + arr[4][7] + arr[5][7] + arr[6][7] + arr[7][7] + arr[8][7],
          column9 = arr[0][8] + arr[1][8] + arr[2][8] + arr[3][8] + arr[4][8] + arr[5][8] + arr[6][8] + arr[7][8] + arr[8][8];
        }
      }
    }
  }
}
