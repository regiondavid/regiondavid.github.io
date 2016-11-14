window.onload = init;
function init(){
    var pageHeight = document.getElementsByClassName('page');
    var main = document.getElementsByClassName('main')[0];
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var listItem = document.getElementsByClassName('list-item');
    var mainPage = new Page();
    mainPage.index = 0;

    var change = {
        "0": "translateY(0)",
        "1": "translateY(-20%)",
        "2": "translateY(-40%)",
        "3": "translateY(-60%)",
        "4": "translateY(-80%)",
        "littleTop": function(){
            setTimeout(function(){main.style.top = "70px"},500);
            setTimeout(function(){main.style.top = "0px"},700);
        },
        "littleDown": function(){
            setTimeout(function(){main.style.top = "-70px"},500);
            setTimeout(function(){main.style.top = "0px"},700);
        }
    };

    //change the pages' height
    [].forEach.call(pageHeight,function(ele){
        ele.style.height = windowHeight + 'px';
    });

    //add the mousewheel events
    document.body.onmousewheel = function(event){
        event = event || window.event;
        if (event.wheelDeltaY<0) {
            // console.log("up");
            mainPage.add();
            main.style.transform = change[mainPage.index];
            change["littleTop"]();
            change["littleTop"]();
        } else {
            // console.log("down");
            mainPage.down();
            main.style.transform = change[mainPage.index];
            change["littleDown"]();
            change["littleDown"]();
        }
    };
    [].forEach.call(listItem,function(ele,index){
        ele.addEventListener('click',function(){
            main.style.transform = change[index];
            mainPage.index = index;
        });
    });
}
function Page(){};
Page.prototype.init = function(){
    this.index = 0;
}
Page.prototype.add = function () {
    this.index++;
    if(this.index > 4){
        this.index = 4;
    }
}
Page.prototype.down = function () {
    this.index--;
    if(this.index < 0){
        this.index = 0;
    }
}
