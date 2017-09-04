// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementById('closeBtn');

// Listen for click
modalBtn.addEventListener('click', openModal);
//Eventlistner for the close button
closeBtn.addEventListener('click', closeModal);
//Listen for outside click
window.addEventListener('click', clickOutside);

//Function to open modal
function openModal() {
modal.style.display = 'block';
}
//Function to close modal
function closeModal() {
	modal.style.display = 'none';
}
//Function to close modal(outsideclick)
function clickOutside(e) {
	if(e.target == modal) {
	modal.style.display = 'none';
	}
}