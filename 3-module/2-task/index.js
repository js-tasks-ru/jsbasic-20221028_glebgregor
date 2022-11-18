function filterRange(arr, a, b) {
  let resultArr = arr.filter( item => {
    let i = arr.indexOf(item);
    if(i >= a && i <= b ){
      return item;
    }
  });
  return resultArr;
}
