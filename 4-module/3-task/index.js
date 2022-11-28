function highlight(table) {
  for(let r = 0; r < table.tBodies[0].rows.length; r++){
    let row = table.tBodies[0].rows[r]
    for( let c = 0; c < row.cells.length; c++){
      let elem = row.cells[c]
      if(elem.dataset.available == 'true'){
        row.classList.add('available')
      }
      if(elem.dataset.available == 'false'){
        row.classList.add('unavailable')
      }
      if(elem.hasAttribute('data-available') == false){
        row.setAttribute('hidden', '')
      }
      if(row.cells[2].textContent == 'm'){
        row.classList.add('male')
      }
      if(row.cells[2].textContent == 'f'){
        row.classList.add('female')
      }
      if(table.tBodies[0].rows[r].cells[1].textContent < 18){
        row.setAttribute('style','text-decoration: line-through')
      }
    }
  }
}
