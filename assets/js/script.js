let history = [];
let realNum = generateNum();

function generateNum(){
	return Math.floor(Math.random() * 100 + 1);
}

function result(guess){
	if(realNum == guess){
		won(); 
	}
	else if(realNum < guess){
		higher();
	}
	else{
		lower();
	}
}

function getDialog(dialogType, text){
	let dialog;
	switch(dialogType){
		case "warning":
			dialog = "<div class='alert alert-warning' role='alert'>";
			break;
		case "won":
			dialog = "<div class='alert alert-success' role='alert'>";
			break;
	}
	dialog += text;
	dialog += "</div>";
	return dialog;
}

function won(){
	const text = "You guessed it correctly";
	let dialog = getDialog("won", text);
	document.getElementById("label").innerHTML = dialog;
}

function higher(){
	const text = "Your guess is too high";
	let dialog = getDialog("warning", text); 
	document.getElementById("label").innerHTML = dialog;
}

function lower(){
	const text = "Your guess is too low";
	let dialog = getDialog("warning", text); 
	document.getElementById("label").innerHTML = dialog;
}

function check(){
	var guess = document.getElementById("guessField").value;
	history.push(guess);
	console.log(history);
	result(guess);
	showHistory(history);
}

function showHistory(arr){
	let dialog = "<ul class='list-group'>";
	for (var i = arr.length-1; i >= 0; i--) {
		dialog = dialog + "<li class='list-group-item'>Your guess is " + arr[i] + "</li>";
	}
	dialog += '</ul>';
	document.getElementById('history').innerHTML = dialog;
}

function init(){
	history = [];
	realNum = generateNum();
	document.getElementById('label').innerHTML = "";
	document.getElementById('history').innerHTML = "";
}