import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modal = this.open()
    this.modalTitle = '';
    this.modalBody = '';

  }

  setTitle(title){
    this.modalTitle = String(title)

  }
  setBody(body){
    //console.log(body)
    this.modalBody = body.textContent;

  }

  open(){
    let body = document.querySelector('body')
     this.modal = createElement(`
        <div class="modal">
          <!--Прозрачная подложка перекрывающая интерфейс-->
          <div class="modal__overlay"></div>

          <div class="modal__inner">
            <div class="modal__header">
              <!--Кнопка закрытия модального окна-->
              <button type="button" class="modal__close">
                <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
              </button>

              <h3 class="modal__title">${this.modalTitle}</h3>
            </div>

            <div class="modal__body">
                ${this.modalBody}
            </div>
          </div>
        </div>
    `)
    body.classList.add('is-modal-open')
    body.append(this.modal)

    document.addEventListener('click', (ev) =>{
      if(ev.target.closest('.modal__close')){
        this.close();
      }
    })
    let closeEsc = (ev) => {
      console.log(ev.code)
      if(ev.code === 'Escape'){
        this.close()
        document.removeEventListener('keydown', closeEsc)
      }
    }
    document.addEventListener('keydown', closeEsc)

    return this.modal;
  }

  close(){
    let body = document.querySelector('body')
    body.innerHTML = '';
    body.classList.remove('is-modal-open')

  }

}
