import createElement from '../../assets/lib/create-element.js';


export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render()
  }

  productAdd(){

    let carouselInner = this.elem.querySelector('.carousel__inner')
    let slideItem = this.elem.querySelector('.carousel__slide')

    this.elem.addEventListener('product-add', ()=>{

    })
    slideItem.addEventListener('click', () =>{

    })

    carouselInner.addEventListener('click', (ev) =>{
      if(ev.target.closest('button')){
        let slideId = ev.target.closest('.carousel__slide').dataset.id;
        return this.elem.dispatchEvent(new CustomEvent('product-add', { detail: slideId, bubbles: true}))
      }
    })
  }

  render(){
    let slide = '';

    this.elem = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
            <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>

        <div class="carousel__inner"
            ${this.slides.map(item =>{
      slide += `
       <div class="carousel__slide" data-id="${item.id}">
          <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${item.price.toFixed(2)}</span>
            <div class="carousel__title">${item.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
       </div>`
    }).join(' ') }
        </div>
      </div>
    `)

    let arrowLeft = this.elem.querySelector('.carousel__arrow_left')
    let arrowRight = this.elem.querySelector('.carousel__arrow_right')
    let carouselInner = this.elem.querySelector('.carousel__inner')



    carouselInner.innerHTML = slide;
    function arrowClick(){
      let styleTransformX = 0;
      let i = 1;
      let transformRight = () =>{
        if(i < carouselInner.children.length){
          carouselInner.style.transform = `translateX(${styleTransformX -= carouselInner.offsetWidth}px`
          i++;
        }

        if(i === carouselInner.children.length){
          arrowRight.style.display = 'none'
          arrowLeft.style.display = ''
        }
      };
      let transformLeft = () =>{
        if(i <= carouselInner.children.length && i > 1){
          carouselInner.style.transform = `translateX(${styleTransformX += carouselInner.offsetWidth}px`
          i--;
        }
        if(i === 1){
          arrowLeft.style.display = 'none'
          arrowRight.style.display = ''
        }

      };
      if(i === 1){
        arrowLeft.style.display = 'none'
        arrowRight.style.display = ''
      }
      arrowRight.addEventListener('click', transformRight)
      arrowLeft.addEventListener('click', transformLeft)
    }

    arrowClick()
    this.productAdd();

    return this.elem ;
  }
}
