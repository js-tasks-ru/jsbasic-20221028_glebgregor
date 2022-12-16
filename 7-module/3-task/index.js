import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value

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
    sliderValue.textContent = '2';
    console.log('sliderSpans - ',arrSpan)
    this.elem.addEventListener('slider-change', (ev)=>{
        //alert(ev.detail)

    })

    this.elem.addEventListener('click', (ev) =>{
      if(true){
        console.log('width = ',sliderStepsElem.offsetWidth)
        console.log('id = ',ev.target.dataset.id)
        console.log('раст до спана: ',sliderStepsElem.offsetWidth / (this.steps - 1) * ev.target.dataset.id)

        let rect = sliderStepsElem.getBoundingClientRect()
        console.log('rect = ', rect)
        let shiftX = ev.clientX - rect.left
        console.log('shiftX = ', shiftX)

        let cell = (sliderStepsElem.offsetWidth / (this.steps - 1)).toFixed(0)
        console.log('cell = ', cell)

        for(let i = 0; i < this.steps ; i++){
          arrSpan[i].classList.remove('slider__step-active')
        }
        for(let i = 1; i < this.steps ; i++){
          if(shiftX < cell * i){
            if(shiftX - (cell/2) < cell * (--i)){
              console.log('нажали на', i)
              console.log('arrSpan[i].dataset.id = ',arrSpan[i].dataset.id)
              sliderValue.textContent = arrSpan[i].dataset.id
              arrSpan[i].classList.add('slider__step-active')
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
        this.elem.dispatchEvent( new CustomEvent('slider-change', { detail: this.value, bubbles: true}))
      }
    })

    return this.elem;
  }

}
