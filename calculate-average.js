let sum = 0;

  for(let i=1; i<=array.length; i++){
    sum += array[i-1];
  }
  return sum / array.length;
