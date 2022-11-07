function factorial(n) {
  if(n == 0 || n == 1){
    return 1;
  }
  for(let i = n; --i;){
    n *= i;

  }
  return n;


}
