
var duck = document.getElementById("duck")
var left = document.getElementById("left")
var right = document.getElementById("right")
var top2 = document.getElementById("top2")
var down = document.getElementById("down")
var ne = document.getElementById("ne")
var se = document.getElementById("se")
var sw = document.getElementById("sw")
var nw = document.getElementById("nw")
var container = document.getElementById("container")
var posLeft = 500;
var postop = 300;


setInterval(movement, 1000)
function movement(){
var direction = Math.floor(Math.random() * 7); 
var duckmove = ["left", "right","top2","down","ne", "se", "sw", "nw"];

duckmove[direction];
bewegen(duckmove[direction]);
}


function bewegen(duckmove){
	console.log(duckmove)
 if (duckmove == "left"){
 	 if (posLeft < 0){
 	 	posLeft = 600; 
 	 } else {posLeft -= 75;}
	
	duck.style.left = posLeft + "px";
}
	else if (duckmove == "right"){
	if (posLeft > 1200) {
		posLeft = 600;
	} else {posLeft += 75;}
	duck.style.left = posLeft + "px";
}

	else if(duckmove == "top2"){
		if (postop < 0){
			postop = 300;
		} else {postop -= 45;}
	duck.style.top = postop + "px"
}

	else if(duckmove == "down" ){
		if (postop > 700){
			postop = 300;
		} else { postop += 45;
		}
	duck.style.top = postop + "px"	
}

	else if (duckmove =="ne"){
		if (postop > 700){
			postop = 300;
		} else {
		posLeft -= 75;
		postop -= 45;	
		}
	duck.style.left = posLeft + "px";
	duck.style.top = postop + "px"
}

	else if (duckmove == "se"){
		if (postop < 0){
			postop = 300;
		} else {
	posLeft -= 75;
	postop += 45;
}
	duck.style.left = posLeft + "px";
	duck.style.top = postop + "px"
}

	else if (duckmove == "sw"){
		if (postop < 0){
			postop = 300;
		} else {
	posLeft += 75;
	postop += 45;
}
	duck.style.left = posLeft + "px";
	duck.style.top = postop + "px"
}

	else if (duckmove =="nw"){
			if (postop > 700){
			postop = 300;
		} else {
	posLeft += 75;
	postop -= 45;
}
	duck.style.left = posLeft + "px";
	duck.style.top = postop + "px"
}

}

var hit = document.getElementById("hit");
var mis = document.getElementById("mis");
var hitstart = 0;
var misstart = 0;

duck.addEventListener("click", function(e){
	hitstart++;
	hit.innerHTML = hitstart;
	e.stopPropagation();

})
hitbox.addEventListener("click", function(){
	misstart++;
	mis.innerHTML = misstart;

})
















