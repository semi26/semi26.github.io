// i linked "src path" my javascript 
// also find out what all this is doing.
let menuToggle = document.querySelector('.menuToggle')
let navigation = document.querySelector('.navigation')
menuToggle.onclick = function(){
	menuToggle.classList.toggle('active');
	navigation.classList.toggle('active');
}
