
var duck = document.getElementById("duck")
var left = document.getElementById("left")
var right = document.getElementById("right")
var top2 = document.getElementById("top2")
var down = document.getElementById("down")
var ne = document.getElementById("ne")
var se = document.getElementById("se")
var sw = document.getElementById("sw")
var nw = document.getElementById("nw")
var posLeft = 500;
var postop = 300;

left.addEventListener("click", function(){
	console.dir(duck);
	posLeft -= 75;
	console.log("left");
	duck.style.left = posLeft + "px";
})

right.addEventListener("click", function(){
	posLeft += 75;
	console.log("right");
	duck.style.left = posLeft + "px";
})

top2.addEventListener("click", function(){
	postop -= 75;
	console.log("top2");
	duck.style.top = postop + "px"
})
down.addEventListener("click", function(){
	postop += 75;
	console.log("down");
	duck.style.top = postop + "px"	
})
 
ne.addEventListener("click", function(){
	console.dir(duck);
	posLeft -= 75;
	postop -= 75;
	console.log(posLeft);
	console.log(postop);
	duck.style.left = posLeft + "px";
	duck.style.top = postop + "px"
})

se.addEventListener("click", function(){
	console.dir(duck);
	posLeft -= 75;
	postop += 75;
	console.log(posLeft);
	console.log(postop);
	duck.style.left = posLeft + "px";
	duck.style.top = postop + "px"
})

sw.addEventListener("click", function(){
	console.dir(duck);
	posLeft += 75;
	postop += 75;
	console.log(posLeft);
	console.log(postop);
	duck.style.left = posLeft + "px";
	duck.style.top = postop + "px"
})

nw.addEventListener("click", function(){
	console.dir(duck);
	posLeft += 75;
	postop -= 75;
	console.log(posLeft);
	console.log(postop);
	duck.style.left = posLeft + "px";
	duck.style.top = postop + "px"
})




var duckmove = ["left", "right","top2","down","ne", "se", "sw", "nw"];
var kant = Math.floor(Math.random() * 7); 

duckmove[direction];
console.log(duckmove[direction]);


var direction = Math.floor(Math.random() * 7); 

function left(){
	posLeft -= 75;
	console.log("left");
	duck.style.left = posLeft + "px";
}

function right(){
	posLeft += 75;
	console.log("right");
	duck.style.left = posLeft + "px";
}

function top2(){
	postop -= 75;
	console.log("top2");
	duck.style.top = postop + "px"
}

function down(){
	postop += 75;
	console.log("down");
	duck.style.top = postop + "px"	
}

function ne(){
	console.dir(duck);
	posLeft -= 75;
	postop -= 75;
	console.log(posLeft);
	console.log(postop);
	duck.style.left = posLeft + "px";
	duck.style.top = postop + "px"
}

function se(){
	console.dir(duck);
	posLeft -= 75;
	postop += 75;
	console.log(posLeft);
	console.log(postop);
	duck.style.left = posLeft + "px";
	duck.style.top = postop + "px"
}

function sw(){
	console.dir(duck);
	posLeft += 75;
	postop += 75;
	console.log(posLeft);
	console.log(postop);
	duck.style.left = posLeft + "px";
	duck.style.top = postop + "px"
}

 function nw(){
	console.dir(duck);
	posLeft += 75;
	postop -= 75;
	console.log(posLeft);
	console.log(postop);
	duck.style.left = posLeft + "px";
	duck.style.top = postop + "px"
}


		<button id="left">left</button>
		<button id="right">right</button>
		<button id="top2">up</button>
		<button id="down">down</button>
		<button id="ne">ne</button>
		<button id="se">se</button>
		<button id="sw">sw</button>
		<button id="nw">nw</button>