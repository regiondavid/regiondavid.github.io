$(function($){
	$(document).keydown(function(event) {
		var e = event||window.event;
		var k = e.keyCode||e.which;
		var currentPage = $(".current")[0];
		if (k == 38) {
			console.log("up");
			// document.getElementsByClassName("container")[0].style.transform = "translateY(-100%)";
			lastPage(currentPage);
		}
		if (k == 40) {
			console.log("down");
			// document.getElementsByClassName("container")[0].style.transform = "translateY(-100%)";
			nextPage(currentPage);
		}
	});
	

	$('.container').eq(0).swipeUp(function(){nextPage($('.current')[0]);});
	$('.container').eq(0).swipeDown(function(){lastPage($('.current')[0]);});
	// $("#select1").click(function() {
	// });
	$('#select1').on('click', function() {
		console.log("23333");
		$('.container').eq(0).css('transform','translateY(0%)');
		// event.preventDefault();
		/* Act on the event */
	});
	$('#select2').click(function() {
		$(".container").eq(0).css("transform","translateY(-100%)");
	});
	$("#select3").click(function() {
		$(".container").eq(0).css("transform","translateY(-200%)");
	});
	$("#select4").click(function() {
		$(".container").eq(0).css("transform","translateY(-300%)");
	});
})
function initPageClass(){
	// var page = $('.page');
	// for(var a=0;a<page.length;a++){
	// 	var pageIndex = 'page' + (a+1);
	// 	page[a].className = 'page'+' '+ pageIndex;
	// }
	$('.page').removeClass('current');
}
function lastPage(current){
	var current = current.className;
	var reg1 = new RegExp('page1');
	var reg2 = new RegExp('page2');
	var reg3 = new RegExp('page3');
	var reg4 = new RegExp('page4');
	var page = $('.page');
	if (reg1.test(current)) {
		console.log($('.current')[0].className);
		initPageClass();
		// page[0].className = 'page page1 current';
		page.eq(0).addClass('current');
		$('.container').eq(0).css('transform','translateY(0%)');
		console.log("1-1");
	}
	if (reg2.test(current)) {
		$(".container").eq(0).css("transform","translateY(-100%)");
		initPageClass();
		// page[0].className = 'page page1 current';
		page.eq(0).addClass('current');

		console.log("2-1");
	}
	if (reg3.test(current)) {
		initPageClass();
		// page[1].className = 'page page2 current';
		$(".container").eq(0).css("transform","translateY(-200%)");
		page.eq(1).addClass('current');
		console.log("3-2");

	}
	if (reg4.test(current)) {
		initPageClass();
		console.log("4-3");
		// page[2].className = 'page page3 current';
		$(".container").eq(0).css("transform","translateY(-300%)");
		page.eq(2).addClass('current');
	}
}
function nextPage(current){
	var current = current.className;
	var reg1 = new RegExp('page1');
	var reg2 = new RegExp('page2');
	var reg3 = new RegExp('page3');
	var reg4 = new RegExp('page4');
	var page = document.getElementsByClassName('page');
	if (reg1.test(current)) {
		$(".container").eq(0).css("transform","translateY(-100%)");
		initPageClass();
		page[1].className = 'page page2 current';
	}
	if (reg2.test(current)) {
		$(".container").eq(0).css("transform","translateY(-200%)");
		initPageClass();
		page[2].className = 'page page3 current';
	}
	if (reg3.test(current)) {
		$(".container").eq(0).css("transform","translateY(-300%)");
		initPageClass();
		page[3].className = 'page page4 current';
	}
	if (reg4.test(current)) {
		$(".container").eq(0).css("transform","translateY(-300%)");
		initPageClass();
		page[3].className = 'page page4 current';
	}
}