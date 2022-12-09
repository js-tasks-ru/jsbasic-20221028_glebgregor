import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();
  }


  render(){

    // let ribbonInner = this.elem.querySelector('.ribbon__inner');
    console.log('')
    function ribbonItem(categories){
      let str = '';
      categories.map( item =>{
        str += `<a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>`
      })
      return str
    }

    this.elem = createElement(`
     <div class="ribbon">
        <!--Кнопка прокрутки влево-->
        <button class="ribbon__arrow ribbon__arrow_left ">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>

        <!--Ссылки на категории-->
        <nav class="ribbon__inner">
          ${ribbonItem(this.categories)}
        </nav>

        <!--Кнопка прокрутки вправо-->
        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>
    `)

    let arrowLeft = this.elem.querySelector('.ribbon__arrow_left');
    let arrowRight = this.elem.querySelector('.ribbon__arrow_right');
    let ribbonInner = this.elem.querySelector('.ribbon__inner')


    function arrowClick(){
      let styleTransformX = 0;
      let i = 1;
      let transformRight = () =>{
        ribbonInner.scrollBy(350, 0);
      };
      let transformLeft = () =>{
        ribbonInner.scrollBy(-350, 0);
      };
      arrowRight.addEventListener('click', transformRight)
      arrowLeft.addEventListener('click', transformLeft)
    }

    arrowClick()

    ribbonInner.addEventListener('scroll', ()=>{
      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      if(ribbonInner.scrollLeft === 0){
        arrowRight.classList.add('ribbon__arrow_visible')
        arrowLeft.classList.remove('ribbon__arrow_visible')
      }
      if(scrollRight === 0){
        arrowLeft.classList.add('ribbon__arrow_visible')
        arrowRight.classList.remove('ribbon__arrow_visible')
      }
    })



    // categoryItem.addEventListener('click', (ev) =>{
    //
    // })

    this.elem.addEventListener('ribbon-select', (ev)=>{

    })

    ribbonInner.addEventListener('click', (ev)=>{
      let categoryActiveItems = this.elem.querySelectorAll('.ribbon__item_active')
      console.log(categoryActiveItems)
      ev.preventDefault()
      ev.target.className += ' ribbon__item_active';
      //categoryActiveItems.className = 'ribbon__item';
      console.log(ev.target)
      if(categoryActiveItems.length > 0){
        console.log(categoryActiveItems.item(categoryActiveItems.length-1).className)
        //let categoryActiveItemsArr = Array.from(categoryActiveItems)
        //console.log('arr', categoryActiveItemsArr)
        categoryActiveItems.item(categoryActiveItems.length-1).className = 'ribbon__item';
      }
      if(ev.target.closest('.ribbon__item')){
        let categoryId = ev.target.closest('.ribbon__item').dataset.id;
        return this.elem.dispatchEvent( new CustomEvent('ribbon-select', { detail: categoryId, bubbles: true}))
      }
    })



    return this.elem
  }

}
