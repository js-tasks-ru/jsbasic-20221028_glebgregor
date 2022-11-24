function camelize(str) {
  let mass = str.split('')
  for(let i = 0; i < mass.length; i++ ){
    if(mass[i] === '-'){
      mass.splice(i, 1)
      mass[i] = mass[i].toUpperCase();
    }
  }
  return mass.join('');

}

