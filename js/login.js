// Get modal element
const modal = document.querySelector('#simpleModal');
// Get open modal button
const modalBtn = document.querySelector('.login');
// Get close button
const closeBtn = document.querySelector('#closeBtn');

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
//window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
  document.querySelector('body').style.backgroundColor='#00000080';
}

// Function to close modal
function closeModal(){
  modal.style.display = 'none';
  document.querySelector('body').style.backgroundColor= 'none';
}
