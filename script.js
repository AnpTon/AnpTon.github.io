document.getElementById("But1").onclick = function(){
	var x = document.getElementById("edu1");
	if (x.style.display == "flex") {
		x.style.display = "none";
	} else {
		x.style.display = "flex";
  }
}
document.getElementById("But2").onclick = function(){
	var x = document.getElementById("exp");
	if (x.style.display == "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
  }
}
document.getElementById("But3").onclick = function(){
	var x = document.getElementById("skills");
	if (x.style.display == "flex") {
		x.style.display = "none";
	} else {
		x.style.display = "flex";
  }
}