import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.ggg;

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
    let sliderStepsElem = this.elem.querySelector('.slider__steps');
    console.log(sliderStepsElem);
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
    sliderValue.textContent = '2';
    thumb.style.left = `50%`;
    progress.style.width = `50%`;
    console.log('sliderSpans - ',arrSpan)
    thumb.addEventListener('pointerdown', ev => {
      thumb.style.position = 'absolute'
      this.elem.className += ' slider_dragging'

      let onPointerMove = (PointerMove) =>{
        //this.x = PointerMove.clientX - sliderStepsElem.offsetWidth + 35 ;
        let left = PointerMove.clientX - this.elem.getBoundingClientRect().left;
        console.log('left = ', left)
        //console.log(' sliderStepsElem.offsetWidth = ',  sliderStepsElem.offsetWidth)
        if(left >= 0 && left <= sliderStepsElem.offsetWidth){

          let cell = (sliderStepsElem.offsetWidth / (this.steps - 1)).toFixed(0)
          console.log('cell = ', cell);

          for(let i = 0; i < this.steps ; i++){
            arrSpan[i].classList.remove('slider__step-active')
          }
          thumb.style.left = `${left*100/sliderStepsElem.offsetWidth}%`;
          progress.style.width = `${left*100/sliderStepsElem.offsetWidth}%`
          this.ggg = () =>{
            for(let i = 1; i < this.steps ; i++){
              if(left < cell * i){

                if(left - (cell/2) < cell * (--i)){
                  console.log('нажали на', i)
                  console.log('arrSpan[i].dataset.id = ', arrSpan[i].dataset.id);
                  sliderValue.textContent = arrSpan[i].dataset.id;
                  arrSpan[i].classList.add('slider__step-active');
                  this.value = i;

                  let leftPercents = ((cell * 100)/ sliderStepsElem.offsetWidth).toFixed(0); // Значение в процентах от 0 до 100
                  console.log('leftPercents',leftPercents)
                  thumb.style.left = `${leftPercents * i}%`;
                  progress.style.width = `${leftPercents * i}%`

                } else{
                  console.log('нажали на', ++i)
                  sliderValue.textContent = arrSpan[i].dataset.id;
                  arrSpan[i].classList.add('slider__step-active');
                  this.value = i;

                  let leftPercents = ((cell * 100)/ sliderStepsElem.offsetWidth).toFixed(0); // Значение в процентах от 0 до 100
                  console.log('leftPercents',leftPercents)
                  thumb.style.left = `${leftPercents * i}%`;
                  progress.style.width = `${leftPercents * i}%`

                }
                break;
              }
            }
          }

        }

      }
      document.addEventListener('pointermove', onPointerMove)

      let onPointerUp = (PointerUp) =>{
        this.elem.className = 'slider'
        this.ggg();
        document.removeEventListener('pointermove', onPointerMove);
        document.removeEventListener('pointerup', onPointerUp);
        this.elem.dispatchEvent( new CustomEvent('slider-change', { detail: this.value, bubbles: true}));
      }
      document.addEventListener('pointerup', onPointerUp)
    });
    thumb.ondragstart = () => false;
    return this.elem;
  }

}
