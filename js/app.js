var hironame;

function yourname() {
    hironame = prompt("What is your name?");
	var div = document.createElement('button');
	div.innerHTML = "Let the Story Begin";
	div.id = "input";
	div.addEventListener("click", introduction);
	document.getElementById("intro").appendChild(div);

}

function introduction() {
	document.getElementById("intro").innerHTML="";
	var div = document.createElement('div');
	div.innerHTML = "This is the story of a character named " + hironame;
	div.id = "story";
	document.body.appendChild(div);

	var div = document.createElement('button');
	div.innerHTML = "option A";
	div.id = "input";
	div.addEventListener("click", optiona);
	document.getElementById("options").appendChild(div);
	
	var div = document.createElement('button');
	div.innerHTML = "option B";
	div.id = "input";
	div.addEventListener("click", optionb);
	document.getElementById("options").appendChild(div);
}

function optiona() {
	document.getElementById("options").innerHTML="";
	var div = document.createElement('div');
	div.innerHTML = hironame + " Was a smart person";
	div.id = "story";
	document.body.appendChild(div);

	var div = document.createElement('button');
	div.innerHTML = "option A1";
	div.id = "input";
	div.addEventListener("click", optiona1);
	document.getElementById("options").appendChild(div);

	var div = document.createElement('button');
	div.innerHTML = "option A2";
	div.id = "input";
	div.addEventListener("click", optiona2);
	document.getElementById("options").appendChild(div);
}

function optionb() {
	document.getElementById("options").innerHTML="";
	var div = document.createElement('div');
	div.innerHTML = hironame + " was a strong person";
	div.id = "story";
	document.body.appendChild(div);

	var div = document.createElement('button');
	div.innerHTML = "option B1";
	div.id = "input";
	div.addEventListener("click", optionb1);
	document.getElementById("options").appendChild(div);

	var div = document.createElement('button');
	div.innerHTML = "option B2";
	div.id = "input";
	div.addEventListener("click", optionb2);
	document.getElementById("options").appendChild(div);
}

function optiona1() {
	document.getElementById("options").innerHTML="";
	var div = document.createElement('div');
	div.innerHTML = "this is ending A1"
	div.id = "story";
	document.body.appendChild(div);
}

function optiona2() {
	document.getElementById("options").innerHTML="";
	var div = document.createElement('div');
	div.innerHTML = "this is ending A2"
	div.id = "story";
	document.body.appendChild(div);
}

function optionb1() {
	document.getElementById("options").innerHTML="";
	var div = document.createElement('div');
	div.innerHTML = "this is ending B1"
	div.id = "story";
	document.body.appendChild(div);
}

function optionb2() {
	document.getElementById("options").innerHTML="";
	var div = document.createElement('div');
	div.innerHTML = "this is ending B2"
	div.id = "story";
	document.body.appendChild(div);
}