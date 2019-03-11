$(document).ready(function() {

$(".black").mouseenter(function(){
	$(".black").fadeOut("slow")
	$(".blood").fadeIn("slow")

});

$(".blood").mouseleave(function(){
	$(".blood").fadeOut("slow")
	$(".black").fadeIn("slow")

});


	
});