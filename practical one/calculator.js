function sum(){
	let num1 = Number(document.querySelector("#first").value);
	let num2 = Number(document.querySelector("#second").value);
	let result =document.querySelector("#result").value=num1+num2;
	return result; 
}
function minus(){
	let num1 = Number(document.querySelector("#first").value);
	let num2 = Number(document.querySelector("#second").value);
	let result =document.querySelector("#result").value=num1-num2;
	return result; 
}
function product(){
	let num1 = Number(document.querySelector("#first").value);
	let num2 = Number(document.querySelector("#second").value);
	let result =document.querySelector("#result").value=num1*num2;
	return result; 
}
function division(){
	let num1 = Number(document.querySelector("#first").value);
	let num2 = Number(document.querySelector("#second").value);
	if(num2==0){
		alert(num1 +" can not be devided by zero")
	}
	else{
	let result =document.querySelector("#result").value=num1/num2;
	return result; 
}
}
function modul(){
	let num1 = Number(document.querySelector("#first").value);
	let num2 = Number(document.querySelector("#second").value);
	let result =document.querySelector("#result").value=num1%num2;
	return result; 
}