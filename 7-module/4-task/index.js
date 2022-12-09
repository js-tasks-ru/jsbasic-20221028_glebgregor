import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.x = 0;

    this.elem = this.render();
  }

  render(){
    this.elem = createElement(`
        <div class="slider">
            <!--Ползунок слайдера с активным значением-->
            <div class="slider__thumb" style="left: 50%;">
                <span class="slider__value"></span>
            </div>

            <!--Заполненная часть слайдера-->
            <div class="slider__progress" style="width: 50%;"></div>

            <!--Шаги слайдера-->
            <div class="slider__steps">

            </div>
        </div>
    `);
    let sliderStepsElem = this.elem.querySelector('.slider__steps')
    console.log(sliderStepsElem)
    let stepsNumber = this.steps
    function sliderSteps(){
      for(let i = 0; i < stepsNumber; i++){
        sliderStepsElem.innerHTML += `<span data-id ="${i}"></span>`
      }
    }
    sliderSteps()

    let sliderValue = this.elem.querySelector('.slider__value')
    let sliderSpans = sliderStepsElem.querySelectorAll('span')
    let arrSpan = Array.from(sliderSpans)


    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');


    arrSpan[0].classList.add('slider__step-active')
    sliderValue.textContent = '0';
    thumb.style.left = `${this.x}%`;
    progress.style.width = `${this.x}%`
    console.log('sliderSpans - ',arrSpan)
    this.elem.addEventListener('slider-change', (ev)=>{

    })

    thumb.addEventListener('pointerdown', ev => {
      thumb.style.position = 'absolute'
      this.elem.className += ' slider_dragging'

      let onPointerMove = (PointerMove) =>{
        this.x = PointerMove.clientX - sliderStepsElem.offsetWidth + 35 ;
        //console.log('x', this.x)
        if(this.x > 0 && this.x < sliderStepsElem.offsetWidth){

          let left = PointerMove.clientX - this.elem.getBoundingClientRect().left;
          console.log('left = ', left)

          let cell = (sliderStepsElem.offsetWidth / (this.steps - 1)).toFixed(0)
          console.log('cell = ', cell);

          for(let i = 0; i < this.steps ; i++){
            arrSpan[i].classList.remove('slider__step-active')
          }
          for(let b = 1; b < this.steps ; b++){
            if(left < cell * b){

              thumb.style.left = `${this.x}px`;
              progress.style.width = `${this.x }px`
              if(left - (cell/2) < cell * (--b)){
                console.log('нажали на', b)
                console.log('arrSpan[i].dataset.id = ', arrSpan[b].dataset.id);
                sliderValue.textContent = arrSpan[b].dataset.id;
                arrSpan[b].classList.add('slider__step-active');
                this.value = b;

                let leftPercents = ((cell * 100)/ sliderStepsElem.offsetWidth).toFixed(0); // Значение в процентах от 0 до 100
                console.log('leftPercents',leftPercents)
                thumb.style.left = `${leftPercents * b}%`;
                progress.style.width = `${leftPercents * b}%`

              } else{
                console.log('нажали на', ++b)
                sliderValue.textContent = arrSpan[b].dataset.id;
                arrSpan[b].classList.add('slider__step-active');
                this.value = b;

                let leftPercents = ((cell * 100)/ sliderStepsElem.offsetWidth).toFixed(0); // Значение в процентах от 0 до 100
                console.log('leftPercents',leftPercents)
                thumb.style.left = `${leftPercents * b}%`;
                progress.style.width = `${leftPercents * b}%`

              }
              break;
            }
          }
        }

      }
      document.addEventListener('pointermove', onPointerMove)

      let onPointerUp = (PointerUp) =>{
        this.elem.className = 'slider'

        document.removeEventListener('pointermove', onPointerMove)
        thumb.removeEventListener('pointerup', onPointerUp)
      }
      thumb.addEventListener('pointerup', onPointerUp)
    });

    thumb.ondragstart = () => false;
    return this.elem;
  }

}
