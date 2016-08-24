var profpic = ["../img/one.png", "../img/two.png", "../img/three.png", "../img/three.png", 
"../img/four.png", "../img/five.png", "../img/six.png"];
var profname = ["Name One", "Name Two", "Name Three", "Name Four", "Name Five", "Name Six"];
var portfolio = document.getElementByClassName('port');
var name = portfolio.getElementByClassName('profname');

$(document).on("ready", function{
	$("#filters :checkbox").click(function() {
		$("div").hide();
		$("#filters :checkbox:checked").each(function() {
	    	$("." + $(this).val()).show();
	   });
	});

	for(i = 0; i <7; i++){
		$(".port").css("background-image", profpic[i]);
		name.innerHTML = "Name: "+ profname[i];
	}
})