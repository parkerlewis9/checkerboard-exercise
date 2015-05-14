// Your JS goes here


var body = document.querySelector("body");


var color1 = 100;
var color2 = 150;
var color3 = 60;
var color4 = 25;
var color5 = 55;
var color6 = 0;
for (var i = 0; i < 99; i++) {
	if(i % 2 === 0) {

		var color = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
		var box = document.createElement("div");
		box.style.backgroundColor = color;
		box.style.width = "11.1%";
		box.style.float = "left";
		box.style.paddingBottom = "11.1%";
		color1 += 3;
		color2 += 3;
		color3 += 3;
		
		body.appendChild(box);


	} else {
		var colorOther = "rgb(" + color4 + "," + color5 + "," + color6 + ")";
		var boxRed = document.createElement("div");
		boxRed.style.backgroundColor = colorOther;
		boxRed.style.width = "11.1%";
		boxRed.style.float = "left";
		boxRed.style.paddingBottom = "11.1%";
		color4 += 3;
		color5 += 3;
		color6 += 3;
		
		body.appendChild(boxRed);
	}


}
