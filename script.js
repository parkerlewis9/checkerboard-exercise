// Your JS goes here


// Make body to append to
var body = document.querySelector("body");


// Connect boxes to body
for (var i = 0; i < 99; i++) {
	if(i % 2 === 0) {
		var box = document.createElement("div");
		box.style.backgroundColor = "black";
		box.style.width = "11.1%";
		box.style.float = "left";
		box.style.paddingBottom = "11.1%";
		
		body.appendChild(box);


	} else {
		var boxRed = document.createElement("div");
		boxRed.style.backgroundColor = "red";
		boxRed.style.width = "11.1%";
		boxRed.style.float = "left";
		boxRed.style.paddingBottom = "11.1%";
		
		body.appendChild(boxRed);
	}


}
