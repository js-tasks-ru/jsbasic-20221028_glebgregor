function makeDiagonalRed(table) {
let arr = [];
  for(let i = 0; i < table.rows.length; i++){
    let diagonalTdItem = table.rows[i].cells[i];
    diagonalTdItem.style.backgroundColor = 'red';
    arr.push(diagonalTdItem)
  }
  arr.forEach(item => {
    return item
  })

}
