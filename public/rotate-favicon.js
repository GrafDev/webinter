
let counter		= 1;
let NumberOfPics	= 12 + 1;
let nodeFavicon		= document.getElementsByTagName("link");

function animateFavicon() {
	for (let i = 0; i < nodeFavicon.length; i++)
	{
		if(nodeFavicon[i].getAttribute("rel") === "icon")
		{
			nodeFavicon[i].setAttribute("href", "./favicon/" + counter + ".png");
		}
	}
	if (counter < NumberOfPics) {
		setTimeout(animateFavicon, 250);
		counter++;
		if (counter === NumberOfPics) { counter = 1; }
	}
}

animateFavicon();
