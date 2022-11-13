function isEmpty(obj) {
  for(let [key, values] of Object.entries(obj)){
    if(!key ){
      return true;
    }
    else{
      return false;
    }
  }
  return true;
}
