window.onload = function(){
	var page = document.getElementsByClassName('page');
	var select1 = document.getElementById('select1');
	var select2 = document.getElementById('select2');
	var select3 = document.getElementById('select3');
	var select4 = document.getElementById('select4');
	var page = document.getElementsByClassName('page');
	document.onkeydown = function(event){
		var e = event||window.event;
		var k = e.keyCode||e.which;
		var currentPage = document.getElementsByClassName('current')[0];
		if (k == 38) {
			console.log('up');
			// document.getElementsByClassName('container')[0].style.transform = "translateY(-100%)";
			lastPage(currentPage);
		}
		if (k == 40) {
			console.log('down');
			// document.getElementsByClassName('container')[0].style.transform = "translateY(-100%)";
			nextPage(currentPage);
		}
	}
	select1.onclick = function(){
		document.getElementsByClassName('container')[0].style.transform = "translateY(0%)";
		initPageClass();
		page[0].className = 'page page1 current';
	}
	select2.onclick = function(){
		document.getElementsByClassName('container')[0].style.transform = "translateY(-100%)";
		initPageClass();
		page[1].className = 'page page2 current';
	}
	select3.onclick = function(){
		document.getElementsByClassName('container')[0].style.transform = "translateY(-200%)";
		initPageClass();
		page[2].className = 'page page3 current';
	}
	select4.onclick = function(){
		document.getElementsByClassName('container')[0].style.transform = "translateY(-300%)";
		initPageClass();
		page[3].className = 'page page4 current';
	}
}
function initPageClass(){
	var page = document.getElementsByClassName('page');
	for(var a=0;a<page.length;a++){
		var pageIndex = 'page' + (a+1);
		page[a].className = 'page'+' '+ pageIndex;
	}
}
function lastPage(current){
	var current = current.className;
	var reg1 = new RegExp('page1');
	var reg2 = new RegExp('page2');
	var reg3 = new RegExp('page3');
	var reg4 = new RegExp('page4');
	var page = document.getElementsByClassName('page');
	if (reg1.test(current)) {
		console.log('34444');
		initPageClass();
		page[0].className = 'page page1 current';
		document.getElementsByClassName('container')[0].style.transform = "translateY(0%)";
	}
	if (reg2.test(current)) {
		initPageClass();
		page[0].className = 'page page1 current';
		document.getElementsByClassName('container')[0].style.transform = "translateY(0%)";
	}
	if (reg3.test(current)) {
		initPageClass();
		page[1].className = 'page page2 current';
		document.getElementsByClassName('container')[0].style.transform = "translateY(-100%)";
	}
	if (reg4.test(current)) {
		initPageClass();
		page[2].className = 'page page3 current';
		document.getElementsByClassName('container')[0].style.transform = "translateY(-200%)";
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
		document.getElementsByClassName('container')[0].style.transform = "translateY(-100%)";
		initPageClass();
		page[1].className = 'page page2 current';
	}
	if (reg2.test(current)) {
		document.getElementsByClassName('container')[0].style.transform = "translateY(-200%)";
		initPageClass();
		page[1].className = 'page page3 current';
	}
	if (reg3.test(current)) {
		document.getElementsByClassName('container')[0].style.transform = "translateY(-300%)";
		initPageClass();
		page[2].className = 'page page4 current';
	}
	if (reg4.test(current)) {
		document.getElementsByClassName('container')[0].style.transform = "translateY(-300%)";
		initPageClass();
		page[3].className = 'page page4 current';
	}
}