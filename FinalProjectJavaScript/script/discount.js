var count = 0;
$('.jumbotron').on("click", function(){
	count++;
	if(count==10){
		 window.location.href = "supersecretdiscount.html";
	}
})