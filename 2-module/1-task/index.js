function sumSalary(sal) {
  let result = 0;
  for(let [key, values] of Object.entries(sal)){
    if(typeof(values) == 'number' && isNaN(values) !== true && values !== Infinity && values !== -Infinity){
      result += values
    }
  }
  return result;

}
