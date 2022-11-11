
function sum() {
  if( this.a == 0){
    return 0 + this.b;
  }
  if( this.b == 0){
    return this.a + 0;
  }
  else{
    return this.a + this.b;
  }
}
function mul() {
  return this.a * this.b;
}
function read(c, d) {
   this.a = c;
   this.b = d;
}
let calculator = {
  a: 0,
  b: 0,
  sum,
  mul,
  read,

};



// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
