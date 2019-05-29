const modal = {
  content: document.querySelectorAll('.modalContent'),
  buttons: document.querySelectorAll('.modaalButton'),

  makeBackground() {
    let background = document.createElement('div');
    background.classList.add('modaalBackground');
    background.addEventListener('click', ()=>this.close());
    return background;
  },
  makeModaal() {
    let modal = document.createElement('div');
    modal.classList.add('modaal');
    modal.addEventListener('click', (evt)=>evt.stopPropagation());
    return modal;
  },
  makecloseKnop() {
    let closeKnop = document.createElement('div')
    closeKnop.classList.add('sluitButton');
    closeKnop.innerHTML = '&#x00D7';
    closeKnop.addEventListener('click', ()=>this.close());
    return closeKnop;
  },
  open(elem) {
    this.background = this.makeBackground();
    this.closeKnop = this.makecloseKnop();
    this.modal = this.makeModaal();

    this.modal.appendChild(this.closeKnop);
    this.modal.appendChild(elem);
    this.background.appendChild(this.modal);
    document.body.appendChild(this.background);
  },
  close() {
    this.modal.innerHTML = '';
    document.body.removeChild(this.background);
  }
};

for (let i = 0; i < modal.content.length; i++) {
  modal.content[i].parentNode.removeChild(modal.content[i]);
};

for (let i = 0; i < modal.buttons.length; i++) {
  modal.buttons[i].addEventListener('click', ()=>{
    let content = modal.content[i];
    modal.open(content);
  });
};
