function getMinMax(str) {
  let arr = str.split(' ');

  let newArr = [];
  let arr2 = arr.map((item)=> {
    item = Number(item)
    if(isNaN(item) == false){
      newArr.push(item)
    }
  });

  let result = {
    min: Math.min(...newArr),
    max: Math.max(...newArr)
  }
  return result;

}
