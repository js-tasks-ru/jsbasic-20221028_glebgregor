function toggleText() {
  let btn = document.querySelector('.toggle-text-button')
  let content = document.querySelector('#text')
  btn.addEventListener('click', () =>{
    console.log(content.hasAttribute('hidden'))
    if(content.hasAttribute('hidden') === false){
      content.setAttribute('hidden', '')
    }else if(content.hasAttribute('hidden') === true){
      content.removeAttribute('hidden')
    }
  })

}
