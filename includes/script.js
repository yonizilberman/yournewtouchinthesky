var page = 0; //page resetter

/* Animate the sections into the screen */
function animateIn (page) {
		switch(page){
	case 0:{
		$('#concept a').css({'color' : '#c9cacc'});
		$('#styling a').css({'color' : '#c9cacc'});
		$('#credits a').css({'color' : '#c9cacc'});
		$(".bejing").fadeIn('2000').animate({'marginTop':"-=2000px"}, 1055, 'easeOutCirc');
		break;}
	case 1:{
		$('#concept a').css({'color' : '#9fa1b7'});
		$('#styling a').css({'color' : '#c9cacc'});
		$('#credits a').css({'color' : '#c9cacc'});
		$("#globalH").css({"margin-top": "-40px"});
		setTimeout(function(){
			$("#globalH").animate({"marginTop" : "+=570px"}, 1000, 'easeOutCirc');
			}, 1300);

		$("#globalContent").css({"margin-left" : "1680px"});
		setTimeout(function(){
			$("#globalContent").animate({'marginLeft':"-=1680px"}, 900, 'easeOutCirc');
			}, 1400);

		$("#globalBlue").css({top : "2700px"})
		setTimeout(function(){
			$("#globalBlue").animate({'top':"-=2120px"}, 1000, 'easeOutCirc');
			}, 1400);
		break;}
  	case 2:{
		$('#concept a').css({'color' : '#9fa1b7'});
		$('#styling a').css({'color' : '#c9cacc'});
		$('#credits a').css({'color' : '#c9cacc'});
		$("#howH").css({"margin-top": "-40px"});
		setTimeout(function(){
		$("#howH").animate({"marginTop" : "+=560px"}, 1000, 'easeOutCirc');
			}, 1700);

		$("#howContent").css({"margin-left" : "3180px"});
		setTimeout(function(){
			$("#howContent").animate({'marginLeft':"-=3180px"}, 1000, 'easeOutCirc');
			}, 2000);

		$("#howBlue").css({top : "2700px"})
		setTimeout(function(){
			$("#howBlue").animate({'top':"-=2125px"}, 1000, 'easeOutCirc');
			}, 2200);
		break;}
  	case 3:{
		$('#concept a').css({'color' : '#9fa1b7'});
		$('#styling a').css({'color' : '#c9cacc'});
		$('#credits a').css({'color' : '#c9cacc'});
		$("#fameH").css({'margin-top':"-40px"})
		setTimeout(function(){
		$("#fameH").animate({"marginTop" : "+=451px"}, 1600, 'easeOutCirc');
			}, 1900);

		$("#fameContent").css({'margin-left':"-800px"})
		setTimeout(function(){
		$("#fameContent").animate({'marginLeft':"+=800px"}, 1000, 'easeOutCirc');
			}, 1900);

		$("#fameBlue").css({'margin-left':"3400px"})
		setTimeout(function(){
		$("#fameBlue").animate({'marginLeft':"-=3400px"}, 1000, 'easeOutCirc');
			}, 2100);
		break;}
  	case 4:{
		$('#concept a').css({'color' : '#c9cacc'});
		$('#styling a').css({'color' : '#9fa1b7'});
		$('#credits a').css({'color' : '#c9cacc'});
		$("#urbanH").css({'margin-top':"-40px"});
		setTimeout(function(){
		$("#urbanH").animate({'marginTop':"+=610px"}, 1000, 'easeOutCirc');
			}, 2000);

		$("#urbanContent").css({"margin-left":"3500px"});
		setTimeout(function(){
		$("#urbanContent").animate({'marginLeft':"-=3165px"}, 1000, 'easeOutCirc');
			}, 2000);
		setTimeout(function(){
		$(".circle1").animate({"marginLeft" : "-=340px"},1000, 'easeOutCirc');
			}, 1000);
		setTimeout(function(){
		$(".circle2").animate({"marginLeft" : "+=340px"}, 1000, 'easeOutCirc');
			}, 1000);
		break;}
  	case 5:{
		$('#concept a').css({'color' : '#c9cacc'});
		$('#styling a').css({'color' : '#9fa1b7'});
		$('#credits a').css({'color' : '#c9cacc'});
		$("#fingerH").css({'margin-top':"-40px"});
		setTimeout(function(){
		$("#fingerH").animate({'marginTop':"+=610px"}, 1000, 'easeOutCirc');
			}, 2000);

		$("#fingerContent").css({"margin-left":"3500px"});
		setTimeout(function(){
		$("#fingerContent").animate({'marginLeft':"-=3165px"}, 1000, 'easeOutCirc');
			}, 2000);
		setTimeout(function(){
		$(".circle3").animate({"marginLeft" : "-=360px"},1000, 'easeOutCirc');
			}, 1000);
		setTimeout(function(){
		$(".circle4").animate({"marginLeft" : "+=340px"}, 1000, 'easeOutCirc');
			}, 1000);
		break;
  	}
  	default:
  	
  	}
}

/* Animate the sections out of the screen */
function animateOut (page) {
	switch(page){
	case 0:{
	  		$(".bejing").animate({'marginTop':"+=2000px"}, 1055, 'easeInExpo');
			$(".bejing").fadeOut('200')
	  		break;}
	case 1:{
	  		setTimeout(function(){
			$("#globalBlue").animate({'top':"-=2000px"}, 1055, 'easeInOutBack');
				}, 100);
			setTimeout(function(){
			$("#globalContent").animate({'marginLeft':"-=2000px"}, 1055, 'easeInBack');
				}, 600);
			setTimeout(function(){
			$("#globalH").animate({"marginTop" : "+=700px"}, 1055, 'easeInBack');
				}, 1000);
	  		break;}
  	case 2:{
  	  		setTimeout(function(){
  			$("#howBlue").animate({'top':"+=2000px"}, 1055, 'easeInExpo');
  				}, 300);
  			setTimeout(function(){
  			$("#howContent").animate({'marginLeft':"+=2000px"}, 1055, 'easeInBack');
  				}, 1000);
  			setTimeout(function(){
  			$("#howH").animate({"marginTop" : "+=2000px"}, 1055, 'easeInBack');
  				}, 1300);
  	  		break;}
  	case 3:{
  	  		setTimeout(function(){
  			$("#fameContent").animate({'marginLeft':"-=2000px"}, 1055, 'easeInExpo');
  				}, 300);
  			setTimeout(function(){
  			$("#fameBlue").animate({'marginLeft':"-=2000px"}, 1055, 'easeInBack');
  				}, 800);
  			setTimeout(function(){
  			$("#fameH").animate({"marginTop" : "+=1000px"}, 1055, 'easeInBack');
  				}, 1100);
  	  		break;}
  	case 4:{
  	  		setTimeout(function(){
  			$("#urbanH").animate({"marginTop" : "+=1000px"}, 1055, 'easeInBack');
  				}, 100);
  			setTimeout(function(){
  			$("#urbanContent").animate({'marginLeft':"+=2000px"}, 1055, 'easeInExpo');
  				}, 100);
  			$(".circle1").animate({"marginLeft" : "+=340px"},1000, 'easeOutCirc');
  			$(".circle2").animate({"marginLeft" : "-=340px"}, 1000, 'easeOutCirc');
  	  		break;}
  	case 5:{
  	  		setTimeout(function(){
  			$("#fingerH").animate({"marginTop" : "-=1000px"}, 1055, 'easeInBack');
  				}, 100);
  			setTimeout(function(){
  			$("#fingerContent").animate({'marginLeft':"+=2000px"}, 1055, 'easeInExpo');
  				}, 100);
  			$(".circle3").animate({"marginLeft" : "+=360px"},1000, 'easeOutCirc');
  			$(".circle4").animate({"marginLeft" : "-=340px"}, 1000, 'easeOutCirc');
  	  		break;
  	  	}
  		default:
  	  		
  	}
}
/* animate out the previous page
and animate in the following page(selected on menu or next in line) */
var allowFlag = true;//flag to show if the animations are running (do not start new animations)
function clicky(e){
	if(allowFlag) {
		allowFlag = false;
		/******** animateOut function *********/
		animateOut(page);
		

		/* was the logo clicked(e = 9) or the menu? */
		if (e == 9)
		{
			/* next page in line */
			page += 1;
			if (page > 5){
				page = 0;
			}
		}
		else {
			/* page selected on menu */
			page = e;
		}
	
		/******** animateIn function **********/
		animateIn(page);
  		setTimeout(function(){allowFlag = true;}, 2000);
	}
};

/* when pressing the circle n mobile, change circle to fingerprint */
function mobileClick(){
	document.getElementById("mobileImg").src="images/logo.gif";
}