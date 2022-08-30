'use strict';

const modal = document.querySelector('.modal'),
  overlay = document.querySelector('.overlay'),
  btnCloseModal = document.querySelector('.close-modal'),
  btnsOpenModal = document.querySelectorAll('.show-modal');

// Open the modal
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Close the modal
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//All button clicks open modal
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

//Close button clicks close modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Escape key clicks close modal
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
