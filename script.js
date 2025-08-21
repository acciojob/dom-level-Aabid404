//your JS code here. If required.
window.onload = function() {
	
	let element = document.getElementByID("level");
	let level = 0;
	
	while (element) {
		level ++;
		element = element.parentElement;
	}

	alert("The level of the elememt is:" +level);
}