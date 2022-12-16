import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render();
    // this.modalTitle = '';
    // this.modalBody = '';

    this.modal.addEventListener('click', (ev) => {
      if(ev.target.closest('.modal__close')){
        this.close();
      }
    });

  }

  setTitle(title){
    this.modal.querySelector('.modal__title').textContent = title;
    // this.modalTitle = String(title)

  }
  setBody(body1){
    this.modal.querySelector('.modal__body').innerHTML = '';
    this.modal.querySelector('.modal__body').append(body1);
  }

  render() {
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

              <h3 class="modal__title"></h3>
            </div>

            <div class="modal__body"></div>
          </div>
        </div>
    `);
  }

  open(){
    let body = document.querySelector('body')

    body.classList.add('is-modal-open')
    body.append(this.modal);

    document.addEventListener('keydown', this.closeEsc);

    return this.modal;
  }

  closeEsc = (event) => {
    if (event.code === 'Escape') {
      event.preventDefault();
      this.close();
    }
  }

  close(){
    document.querySelector('body').classList.remove('is-modal-open')
    document.removeEventListener('keydown', this.closeEsc);
    this.modal.remove();
  }

}
