var modal = document.getElementById('myModal');
var btn = document.getElementById('add');
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
	modal.style.display = "block";
}
span.onclick = function () {
	modal.style.display = "none";
}
window.onclick = function (event) {
	if (event.target == modal)
		modal.style.display = "none";
}
function filter() {
	var text = document.getElementsByTagName("input")[0];
	var val = text.value;
	var gallery = document.getElementById("gal");
	var imgs = gallery.getElementsByTagName("img");
	if (val == "") {
	window.location.reload();
	}
		function check() {
		for (var i = 0; i < imgs.length; i++) {
		var status = imgs[i].getAttribute("id");
		console.log(status);
		if(status != val && status != "add") {
		var elem = document.getElementById(status);
		elem.remove();
		}
	}
} 
	check();
	check();
	check();
}
document.getElementById("search").focus();
function reload() {
	window.location.reload();
}
function tagFilter(obj) {
console.log(obj.value);
var gallery = document.getElementById("gal");
var imgs = gallery.getElementsByTagName("img");
function check() {
		for (var i = 0; i < imgs.length; i++) {
		var status = imgs[i].getAttribute("id");
		if(status != obj.value && status != "add") {
		var elem = document.getElementById(status);
		elem.remove();
		}
	}
} 
	check();
	check();
	check();
}