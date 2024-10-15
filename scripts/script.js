'use strict';
const squareBody = document.querySelector('.square-body');
const blocks = document.querySelectorAll('.block');
const btnReset = document.querySelector('.btn-reset');
const container = document.querySelector('.container');

let defaultPosition = [];

blocks.forEach((item) => {
  defaultPosition.push(item.innerHTML);
});

container.addEventListener('click', (e) => {
  if (e.target.closest('.btn-reset')) {
    blocks.forEach((item, index) => {
      item.innerHTML = defaultPosition[index];
    });
  }

  if (e.target.closest('.block')) {
    const block = e.target.closest('.block');

    blocks.forEach((item, index) => {
      if (item === block) {
        let clickElement = item.innerHTML;
        let otherElement;

        if (e.target.closest('.right')) {
          if (index < blocks.length - 1) {
            otherElement = blocks[index + 1].innerHTML;

            item.innerHTML = otherElement;
            blocks[index + 1].innerHTML = clickElement;
          }
        }

        if (e.target.closest('.left')) {
          if (index > 0) {
            otherElement = blocks[index - 1].innerHTML;

            item.innerHTML = otherElement;
            blocks[index - 1].innerHTML = clickElement;
          }
        }
        if (e.target.closest('.top')) {
          if (index > 5) {
            otherElement = blocks[index - 5].innerHTML;

            item.innerHTML = otherElement;
            blocks[index - 5].innerHTML = clickElement;
          }
        }
        if (e.target.closest('.bottom')) {
          if (index < blocks.length - 5) {
            otherElement = blocks[index + 5].innerHTML;

            item.innerHTML = otherElement;
            blocks[index + 5].innerHTML = clickElement;
          }
        }
      }
    });
  }
});
