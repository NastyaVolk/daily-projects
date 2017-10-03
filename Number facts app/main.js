let fact = document.getElementById('fact');
let factText = document.getElementById('factText');
let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getFactAjax);
function getFactAjax() {
	let number = numberInput.value;
	console.log(number);
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://numbersapi.com/'+number);
	xhr.onload = function() {
		if(this.status == 200 && number != '') {
			console.log(this.responseText);
			fact.style.display = 'block';
			factText.innerHTML = this.responseText;
		}
	}
	xhr.send();
}