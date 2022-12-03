/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.render();
  }


  removeTr(ev){
    if(ev.target.closest('button')){
      ev.target.closest('tr').remove();
    }
  }
  createTr(trHead,thead, tbody){
    for(let key of this.rows){
      let tr = document.createElement('TR');

      let th = document.createElement('TH');
      trHead.append(th)

      let tdBtn = document.createElement('TD');
      let btn = document.createElement('BUTTON')
      btn.textContent = 'X';
      tdBtn.append(btn)

      for(let value of Object.values(key)){
        let td = document.createElement('TD');

        td.style.border = '1px solid black';
        td.textContent = td.innerHTML += value;
        tr.append(td);
        tr.append(tdBtn)
      }
      tbody.append(tr);
      tr.addEventListener('click', this.removeTr)
    }
  }

  render(){
    this.elem = document.createElement('TABLE');
    let thead = document.createElement('THEAD');
    let tbody = document.createElement('TBODY');
    let trHead = document.createElement('TR');
    trHead.innerHTML = `<th>Имя</th><th>Возраст</th> <th>Зарплата</th> <th>Город</th>`;

    thead.append(trHead);
    this.createTr(trHead, thead, tbody);
    this.elem.append(thead);
    this.elem.append(tbody);
    this.elem.style.borderCollapse = 'collapse';
    return this.elem;
  }
}
