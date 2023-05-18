// let zaloguj = document.getElementById("zaloguj");
// zaloguj.addEventListener("click",function(){
// 	var imie = document.getElementById("imie").value;
// 	if(imie==""){
// 		alert("Prosze uzupelnic dane");
// 	}
// 	else{
// 		alert("Dziekujemy za dolaczenie do nas!!");
// 	}
	
// })

let zaloguj = document.getElementById("zaloguj");
zaloguj.addEventListener("click",function(){
	var imie = document.getElementById("imie").value;
	var nazwisko = document.getElementById("nazwisko").value;
	var telefon = document.getElementById("telefon").value;
	var adres = document.getElementById("adres").value;
	var email = document.getElementById("email").value;
	var haslo = document.getElementById("haslo").value;
	var powtorzhaslo = document.getElementById("powtorzhaslo").value;
	if(imie=="" || nazwisko=="" || telefon=="" || adres=="" || email=="" || haslo=="" || !powtorzhaslo==""){
		alert("Prosze uzupelnic dane");
	}
	else{
		alert("Dziekujemy za");
	}
	

	
 })
