function ucFirst(str) {
  if(str.length > 1){
    const m = str[0].toUpperCase();
    let str2 = '';
    for(let i = 1; i < str.length; i++){
      str2 +=  str[i];
    }
    return str = m + str2;
  }
  if(str.length === 1){

    const m = str[0].toUpperCase();
    return m;
  }
  if(str === ""){
    return "";
  }

}
