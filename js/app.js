//javascript pour le projet Calculator2000
var operator= null;
var total="0"

function egal() {
	var x = document.getElementById("calcul").value
	switch(operator){
		case "+":
		document.getElementById("calcul").value = parseInt(total)+ parseInt(x)
		total=document.getElementById("calcul").value
		break;

		case "-":
		document.getElementById("calcul").value = parseInt(total)- parseInt(x)
		total=document.getElementById("calcul").value
		break;

		case "/":
		document.getElementById("calcul").value = parseInt(total)/ parseInt(x)
		total=document.getElementById("calcul").value
		break;

		case "x":
		document.getElementById("calcul").value = parseInt(total) * parseInt(x)
		total=document.getElementById("calcul").value
		break;

	
		console.log(total);
	}
	if (total==Infinity){
		document.getElementById("calcul").value = "Impossible de diviser par 0"
	}
	//var valeur= document.getElementById("calcul").value;
	//var total = eval (valeur);
	//document.getElementById("calcul").value=valeur + "=" + total;//
}

function C() {
	var valeur= document.getElementById("calcul").value;
	var longueur= valeur.length;
	var fin = longueur - 1;
	valeur=valeur.substring(0, fin);
	document.getElementById("calcul").value= valeur;
}

function addition() {
	var x = document.getElementById("addition").value;
	var valeur = document.getElementById("calcul").value;
	document.getElementById("calcul").value = "";

	operator=x;
	total=valeur;
	console.log(total);
}

function soustraction() {
	var x = document.getElementById("soustraction").value;
	var valeur = document.getElementById("calcul").value;
	document.getElementById("calcul").value = "";

	operator=x;
	total=valeur;
	console.log(total);
}

function multiplication() {
	var x = document.getElementById("multiplication").value;
	var valeur = document.getElementById("calcul").value;
	document.getElementById("calcul").value = "";

	operator=x;
	total=valeur;
	//console.log(operator);
	console.log(total);
}

function division() {
	var x = document.getElementById("division").value;
	var valeur = document.getElementById("calcul").value;
	document.getElementById("calcul").value = "";

	operator=x;
	total=valeur;
	console.log(total);
	// body...
}

function neuf() {
	var x = document.getElementById("neuf").value;
	var valeur = document.getElementById("calcul").value;
	document.getElementById("calcul").value = valeur + x;
}

function huit() {
	var x = document.getElementById("huit").value;
	var valeur = document.getElementById("calcul").value;
	document.getElementById("calcul").value = valeur + x;
}

function sept() {
	var x = document.getElementById("sept").value;
	var valeur = document.getElementById("calcul").value;
	document.getElementById("calcul").value = valeur+x;
	// body...
}

function six() {
	var x = document.getElementById("six").value;
	var valeur = document.getElementById("calcul").value;
	document.getElementById("calcul").value = valeur + x;
}

function cinq() {
	var x = document.getElementById("cinq").value;
	var valeur = document.getElementById("calcul").value;
	document.getElementById("calcul").value = valeur + x;
}

function quatre() {
	var x = document.getElementById("quatre").value;
	var valeur = document.getElementById("calcul").value;
	document.getElementById("calcul").value = valeur+x;
	// body...
}

function trois() {
	var x = document.getElementById("trois").value;
	var valeur = document.getElementById("calcul").value;
	document.getElementById("calcul").value = valeur + x;
}

function deux() {
	var x = document.getElementById("deux").value;
	var valeur = document.getElementById("calcul").value;
	document.getElementById("calcul").value = valeur + x;
}

function un() {
	var x = document.getElementById("un").value;
	var valeur = document.getElementById("calcul").value;
	document.getElementById("calcul").value = valeur+x;
	// body...
}

function zero() {
	var x = document.getElementById("zero").value;
	var valeur = document.getElementById("calcul").value;
	document.getElementById("calcul").value = valeur+x;
	// body...
}