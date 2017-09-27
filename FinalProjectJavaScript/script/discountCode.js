var codes = new Array("Antoine", "Remi", "Ellie");
var discount = 0;
var el = document.getElementById('discountCode');
el.addEventListener("change", function(){
	for(var i = 0; i<codes.length; i++){
		if(el.value==codes[i]){
			el.style.borderColor = "rgb(100,255,60)";
			if(codes[i]=="Antoine"){
				discount = 0.1;
			}else if(codes[i]=="Remi"){
				discount = 0.25;
			}else{
				discount = 0.99;
			}
			var price = document.getElementById('price').textContent;
			var priceEl = "<br><span style='color:red;'>$" + parseFloat(Math.round((price*(1-discount)) * 100) / 100).toFixed(2) + "</span>";
			price = price.strike();
			document.getElementById('priceEl').innerHTML = "$" + price + priceEl;
			document.getElementById('modelSelect').disabled = true;
			document.getElementById('discountCode').disabled = true;
			var child = document.createElement('h4');
			child.textContent = "Your discount is " + (discount*100) + "% with the code \"" + el.value + "\"";
			document.getElementById('divDiscount').appendChild(child);
			return;
		}else{
			el.style.borderColor = "red";
		}
	}
	
})