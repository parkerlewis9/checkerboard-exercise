// Your JS goes here



function gradient() {
	var body = document.querySelector("body");
	body.innerHTML = "";


	for (var i = 0; i < 99; i++) {
			var box = document.createElement("div");
			var rand1 = Math.floor(Math.random() * 255);
			var rand2 = Math.floor(Math.random() * 255);
			var rand3 = Math.floor(Math.random() * 255);
			var color = "rgb(" + rand1 + "," + rand2 + "," + rand3 +")"
			box.style.backgroundColor = color;
			box.style.width = "11.1%";
			box.style.float = "left";
			box.style.paddingBottom = "11.1%";
			
			body.appendChild(box);



	}
}
gradient();
window.setInterval(gradient, 2000);