// var name  = document.getElementById("name")
// var email = document.getElementsByName("email")[0]
// var number = document.getElementsByName("number")[0]
// var username = document.getElementsByName("username")[0]
// var pass = document.getElementsByName("pass")[0]
// var repPass = document.getElementsByName("repeat-pass")[0]
// var list  = {name,email,number,username,pass,repPass}
// console.log(name);
// name.addEventListener("click", function(e) {
// 	console.log("lol");
// })

 

// for (var i = 0; i < list.length; i++) {
	
// 	console.log("1");
// 	list[i].addEventListener
// 	list[i].addEventListener("click", function(event){
// 		console.log(event.currentTarget+"zxc");
// 		event.currentTarget.style="background-color:red;"
// })};
var mEmail;

function checkName(){
	var nameN =document.getElementsByName("name")[0]
	var q = document.getElementsByName("name")[0].value
	z=q.split(" ")
	console.log(z.length);
	if (z.length===2){
		console.log(z[1]);
		nameN.setAttribute("data-status","+")
	}
	else{
		nameN.setAttribute("data-status","-")	}
	var forS=0
	var userN= document.getElementsByName("username")[0]
	var ckbN = document.getElementById("ckb1")
	var passN = document.getElementsByName("pass")[0]
	var emailN = document.getElementsByName("email")[0]
	var numN=document.getElementsByName("number")[0]
	var nameN =document.getElementsByName("name")[0]
	var arr = [userN,ckb1,passN,emailN,numN,nameN]
	
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].dataset.status==="+"){
			forS++;
		}
	};
	console.log(forS+"zzzzzzz");
	if(forS==6){
		document.getElementsByClassName("btn")[0].dataset.status="+"
	}
	else{
		document.getElementsByClassName("btn")[0].dataset.status="-"
	}
}
function checkPhoneNumber(){
	var numN=document.getElementsByName("number")[0]
	var num = document.getElementsByName("number")[0].value
	var n=0
	for (var i = 0; i < num.length; i++) {
		console.log(num[i]+"qqqqqqq");
		console.log(Number.isInteger(parseInt(num[i])));
		if(Number.isInteger(parseInt(num[i]))){
			n++
			console.log(n);
		}
	};
	if(n==11 & num[0]==="8" & num[1]==="7"){
		console.log(num+"passed");
		numN.dataset.status="+"
	
	}
	else{
	numN.dataset.status="-"}
	console.log(numN.dataset.status);
	var forS=0
	var userN= document.getElementsByName("username")[0]
	var ckbN = document.getElementById("ckb1")
	var passN = document.getElementsByName("pass")[0]
	var emailN = document.getElementsByName("email")[0]
	var numN=document.getElementsByName("number")[0]
	var nameN =document.getElementsByName("name")[0]
	var arr = [userN,ckb1,passN,emailN,numN,nameN]
	
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].dataset.status==="+"){
			forS++;
		}
	};
	console.log(forS+"zzzzzzz");
	if(forS==6){
		document.getElementsByClassName("btn")[0].dataset.status="+"
	}
	else{
		document.getElementsByClassName("btn")[0].dataset.status="-"
	}
	
}
function checkEmail(){
	var emailN = document.getElementsByName("email")[0]
	var email = document.getElementsByName("email")[0].value
	var index = document.getElementsByName("email")[0].value.indexOf("@")
	var indexDot = document.getElementsByName("email")[0].value.indexOf(".")
	
	console.log("last"+email[email.length-1]);
	console.log(index);
	console.log(indexDot+"nu");
	if (index != -1 & email[index+1]!="." & email[email.length-1]!="." & indexDot>index) {
	    emailN.dataset.status="+"
	    mEmail=document.getElementsByName("email")[0].value
	    console.log(mEmail);
  }else{
  	emailN.dataset.status="-"
  }
  var forS=0
	var userN= document.getElementsByName("username")[0]
	var ckbN = document.getElementById("ckb1")
	var passN = document.getElementsByName("pass")[0]
	var emailN = document.getElementsByName("email")[0]
	var numN=document.getElementsByName("number")[0]
	var nameN =document.getElementsByName("name")[0]
	var arr = [userN,ckb1,passN,emailN,numN,nameN]
	
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].dataset.status==="+"){
			forS++;
		}
	};
	console.log(forS+"zzzzzzz");
	if(forS==6){
		document.getElementsByClassName("btn")[0].dataset.status="+"
	}
	else{
		document.getElementsByClassName("btn")[0].dataset.status="-"
	}
}
function checkUserName(){
	//it needs to update
	var userN= document.getElementsByName("username")[0]
	userN.dataset.status="+"
	var forS=0
	var userN= document.getElementsByName("username")[0]
	var ckbN = document.getElementById("ckb1")
	var passN = document.getElementsByName("pass")[0]
	var emailN = document.getElementsByName("email")[0]
	var numN=document.getElementsByName("number")[0]
	var nameN =document.getElementsByName("name")[0]
	var arr = [userN,ckb1,passN,emailN,numN,nameN]
	
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].dataset.status==="+"){
			forS++;
		}
	};
	console.log(forS+"zzzzzzz");
	if(forS==6){
		document.getElementsByClassName("btn")[0].dataset.status="+"
	}
	else{
		document.getElementsByClassName("btn")[0].dataset.status="-"
	}


}
function checkPass(){
	var passN = document.getElementsByName("pass")[0]
	var repPassN = document.getElementsByName("repeat-pass")[0]
	var pass = document.getElementsByName("pass")[0].value
	var repPass = document.getElementsByName("repeat-pass")[0].value
	if (pass.length>0 & pass==repPass){
		console.log("pass");
		passN.dataset.status="+"
		repPassN.dataset.status="+"
	}
	else{
		passN.dataset.status="-"
		repPassN.dataset.status="-"
	}
	var forS=0
	var userN= document.getElementsByName("username")[0]
	var ckbN = document.getElementById("ckb1")
	var passN = document.getElementsByName("pass")[0]
	var emailN = document.getElementsByName("email")[0]
	var numN=document.getElementsByName("number")[0]
	var nameN =document.getElementsByName("name")[0]
	var arr = [userN,ckb1,passN,emailN,numN,nameN]
	
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].dataset.status==="+"){
			forS++;
		}
	};
	console.log(forS+"zzzzzzz");
	if(forS==6){
		document.getElementsByClassName("btn")[0].dataset.status="+"
	}
	else{
		document.getElementsByClassName("btn")[0].dataset.status="-"
	}
}
function checkCkb(){
	var ckbN = document.getElementById("ckb1")
	if(document.getElementById("ckb1").checked){
		ckbN.dataset.status="+"
	}
	else{
		ckbN.dataset.status="-"
	}
	var forS=0
	var userN= document.getElementsByName("username")[0]
	var ckbN = document.getElementById("ckb1")
	var passN = document.getElementsByName("pass")[0]
	var emailN = document.getElementsByName("email")[0]
	var numN=document.getElementsByName("number")[0]
	var nameN =document.getElementsByName("name")[0]
	var arr = [userN,ckb1,passN,emailN,numN,nameN]
	
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].dataset.status==="+"){
			forS++;
		}
	};
	console.log(forS+"zzzzzzz");
	if(forS==6){
		document.getElementsByClassName("btn")[0].dataset.status="+"
	}
	else{
		document.getElementsByClassName("btn")[0].dataset.status="-"
	}
}























