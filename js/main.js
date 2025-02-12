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

const img = document.querySelector("#image-container img");

function blinkImage() {
	setInterval (() => {
		img.style.opacity = img.style.opacity === "1" ? "0.3" : "1";

	}, 500)
}

blinkImage();

document.querySelectorAll("button").forEach(btn => {
	btn.addEventListener("click", () => {
		btn.style.transform = "scale(1.2)";
		btn.style.backgroundColor = "gold";

		setTimeout(() => {
			btn.style.transform = "scale(1)";
			btn.style.backgroundColor = "purple";
		}, 300);
	})
})