function initCarousel() {
  let slider = document.querySelector('.carousel__inner')
  let arrowRight = document.querySelector('.carousel__arrow_right')
  let arrowLeft = document.querySelector('.carousel__arrow_left')

  let styleTransformX = 0;
  let i = 1;
  let transformRight = () =>{
    if(i < slider.children.length){
      slider.style.transform = `translateX(${styleTransformX -= slider.offsetWidth}px`
      i++;
    }

    if(i === slider.children.length){
      arrowRight.style.display = 'none'
      arrowLeft.style.display = ''
    }
  };
  let transformLeft = () =>{
    if(i <= slider.children.length && i > 1){
      slider.style.transform = `translateX(${styleTransformX += slider.offsetWidth}px`
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
