(function(){
	"use strict";	
	console.log("fired");
})();

//Can also be written like this:
//(() => {  })();   

// Info about IIFE https://flaviocopes.com/javascript-iife/

const icons = document.querySelectorAll('.social-icons i');

icons.forEach(icon => {
	icon.addEventListener('click', () => {
		icon.classList.add('clicked');
		
		setTimeout(() => {
			icon.classList.remove('clicked');
		}, 500);
	});
});