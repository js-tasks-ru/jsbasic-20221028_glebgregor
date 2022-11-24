function filterRange(arr, a, b) {
  let resultArr = [];
  arr.filter( (item, i) => {
    if(i == a || ++i == b){
      resultArr.push(item);
    }
  });

  return resultArr;

}
