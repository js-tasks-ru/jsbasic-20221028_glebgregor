function toggleText() {
  let btn = document.querySelector('.toggle-text-button')
  let content = document.querySelector('#text')
  btn.addEventListener('click', () =>{
    if(content.hidden = !content.hidden){
      content.setAttribute('hidden', '')
    }else if(content.hidden){
      content.removeAttribute('hidden')
    }
  })

}
