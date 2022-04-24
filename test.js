function welcomemsg(msg){
	alert(msg);

}
function message(msg){
	Document.getElementById('output').innerHTML=msg+'event';
}

function displaydate(){
	Document.getElementById("demo").innerHTML=Date();
}