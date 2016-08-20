$(function($){
	//页面切换
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
	
	//标签页的切换
	$('.technology').eq(0).tap(function() {
		$('.art').eq(0).removeClass('choosed');
		$(this).addClass('choosed');
		$('.show > p').eq(0).empty();
		$('.show > p').eq(0).append('让技术宅找到归属，将擅长转变为能力');
		$('.list1').css('display','none');
		$('.list2').css('display','flex');
	});
	$('.art').eq(0).tap(function() {
		$('.technology').eq(0).removeClass('choosed');
		$(this).addClass('choosed');
		$('.show > p').eq(0).empty();
		$('.show > p').eq(0).append('让大学生找到兴趣，释放野蛮生长的创意');
		$('.list2').css('display','none');
		$('.list1').css('display','flex');
	});
	//模态框的控制
	$('.column1 > .items').tap(function(){
		$('.modal').eq(0).css('display','block');
	});
	$('.close').eq(0).tap(function(){
		$('.modal').eq(0).css('display','none');
	})

	//模态框内logo的切换
	//list1
	$('.items').eq(0).tap(function(){
		$('.chooseHead .items').eq(0).css({'backgroundPosition':'0px 0px','backgroundImage':'url(./images/items1.png)'});		
$('.itemContent > p').empty();
		$('.itemContent > h4').empty();
		$('.itemContent > h4').eq(0).append('要求');
		$('.itemContent > h4').eq(1).append('加分项');
		$('.itemContent > p').eq(0).append('1.有一定的摄影基础，能够合理构图，在不同条件下合理使用摄像机的各类数；');
		$('.itemContent > p').eq(1).append('2.了解各类镜头语言，拍摄手法，有一定的视觉审美；');
		$('.itemContent > p').eq(2).append('3.有团队合作意识，能够承担团队中的不同角色。');
		$('.itemContent > p').eq(4).append('1.熟悉外景及室内拍摄标准流程，熟悉常用的摄像设备操作、使用及日常维护；');
		$('.itemContent > p').eq(5).append('2.擅长分镜脚本的编写，制定拍摄计划并带领创作团队进行摄影工作；');
		$('.itemContent > p').eq(6).append('3.有微电影、采访等视频拍摄经验及相关作品；');
		$('.itemContent > p').eq(7).append('4.了解简单的灯光布置以及布景能力，能够应对各类复杂的拍摄环境。');;
		$('.chooseHead a').eq(0).attr('href', 'paishe.html');
	});
	$('.items').eq(1).tap(function(){
		$('.chooseHead .items').eq(0).css({'backgroundPosition':'-300px 0px','backgroundImage':'url(./images/items1.png)'});
		$('.itemContent > p').empty();
		$('.itemContent > h4').empty();
		$('.itemContent > h4').eq(0).append('要求');
		$('.itemContent > p').eq(0).append('热爱阅读和写作，关心时事，有一定文学功底。');
		$('.chooseHead a').eq(0).attr('href', 'wenan.html');
	});
	$('.items').eq(2).tap(function(){
		$('.chooseHead .items').eq(0).css({'backgroundPosition':'-642px 0px','backgroundImage':'url(./images/items1.png)'});
		$('.itemContent > p').empty();
		$('.itemContent > h4').empty();
		$('.itemContent > h4').eq(0).append('要求');
		$('.itemContent > p').eq(0).append('精通手绘鼠绘板绘都可以，最好附有作品集。');
		$('.chooseHead a').eq(0).attr('href', 'chahua.html');
	});
	$('.items').eq(3).tap(function(){
		$('.chooseHead .items').eq(0).css({'backgroundPosition':'-92px 0px','backgroundImage':'url(./images/items1.png)'});
		$('.itemContent > p').empty();
		$('.itemContent > h4').empty();
		$('.itemContent > h4').eq(0).append('要求');
		$('.itemContent > h4').eq(1).append('加分项');
		$('.itemContent > p').eq(0).append('1.熟练运用Premiere（Eduis/Vegas亦可）、After Effect、Audition等常用视频、音频制作软件，了解Photoshop、Illustrator的简单使用；');
		$('.itemContent > p').eq(1).append('2.具有很好的美术功底和较强的影视包装能力；理解剪辑概念，对不同类型的影片由剪辑经验；');
		$('.itemContent > p').eq(2).append('3.良好的审美感、镜头节奏感和音乐感；');
		$('.itemContent > p').eq(3).append('4.较强的创新能力，有一定的视频剪辑、包装作品。');
		$('.itemContent > p').eq(4).append('1.能够使用3D MAX、Cinema 4D、Maya中任意一款三维软件制作片头动画；');
		$('.itemContent > p').eq(5).append('2.熟练使用Photoshop、Illustrator，能够制作原创的MG动画；');
		$('.itemContent > p').eq(6).append('3.熟悉微电影的整体后期流程，有利用达芬奇调色经历。');
		$('.itemContent > p').eq(7).append('4.熟悉视频前期拍摄、收音流程。');
		$('.chooseHead a').eq(0).attr('href', 'houqi.html');
	});
	$('.items').eq(4).tap(function(){
		$('.chooseHead .items').eq(0).css({'backgroundPosition':'-412px 0px','backgroundImage':'url(./images/items1.png)'});
		$('.itemContent > p').empty();
		$('.itemContent > h4').empty();
		$('.itemContent > h4').eq(0).append('要求');
		$('.itemContent > p').eq(0).append('熟悉项目流程，有两个以上项目经验。');
		$('.chooseHead a').eq(0).attr('href', 'yunying.html');
	});
	$('.items').eq(5).tap(function(){
		$('.chooseHead .items').eq(0).css({'backgroundPosition':'-190px 0px','backgroundImage':'url(./images/items1.png)'});
		$('.itemContent > p').empty();
		$('.itemContent > h4').empty();
		$('.itemContent > h4').eq(0).append('要求');
		$('.itemContent > p').eq(0).append('熟悉项目流程，有两个以上项目经验。');
		$('.chooseHead a').eq(0).attr('href', 'chanpin.html');
	});
	$('.items').eq(6).tap(function(){
		$('.chooseHead .items').eq(0).css({'backgroundPosition':'-520px 0px','backgroundImage':'url(./images/items1.png)'});
		$('.itemContent > p').empty();
		$('.itemContent > h4').empty();
		$('.itemContent > h4').eq(0).append('要求');
		$('.itemContent > p').eq(0).append('精通PS,ALLD,FL等设计软件，最好附有作品集。');
		$('.chooseHead a').eq(0).attr('href', 'pingmian.html');
	});
	$('.items').eq(7).tap(function(){
		$('.chooseHead .items').eq(0).css({'backgroundPosition':'-755px 0px','backgroundImage':'url(./images/items1.png)'});
		$('.itemContent > p').empty();
		$('.itemContent > h4').empty();
		$('.itemContent > h4').eq(0).append('要求');
		$('.itemContent > p').eq(0).append('有耐心和责任心，富有创意和活力。');
		$('.chooseHead a').eq(0).attr('href', 'xiaobai.html');
	});
	//list2
	$('.items').eq(8).tap(function(){
		$('.chooseHead .items').eq(0).css({'backgroundPosition':'-20px 0px','backgroundImage':'url(./images/items2.png)'});
		$('.itemContent > p').empty();
		$('.itemContent > h4').empty();
		$('.itemContent > h4').eq(0).append('招新说明：');
		$('.itemContent > h4').eq(1).append('做什么：');
		$('.itemContent > p').eq(0).append('和能力相比,我们更看重兴趣，自学能力和责任感');
		$('.itemContent > p').eq(4).append('基于浏览器创作的画家');
		$('.chooseHead a').eq(0).attr('href', 'fe.html');
	});
	$('.items').eq(9).tap(function(){
		$('.chooseHead .items').eq(0).css({'backgroundPosition':'-361px 0px','backgroundImage':'url(./images/items2.png)'});
		$('.itemContent > p').empty();
		$('.itemContent > h4').empty();
		$('.itemContent > h4').eq(0).append('招新说明：');
		$('.itemContent > h4').eq(1).append('做什么：');
		$('.itemContent > p').eq(0).append('和能力相比,我们更看重兴趣，自学能力和责任感');
		$('.itemContent > p').eq(4).append('将自己的创意运行在移动端');
		$('.chooseHead a').eq(0).attr('href', 'android.html');
	});
	$('.items').eq(10).tap(function(){
		$('.chooseHead .items').eq(0).css({'backgroundPosition':'-130px 0px','backgroundImage':'url(./images/items2.png)'});
		$('.itemContent > p').empty();
		$('.itemContent > h4').empty();
		$('.itemContent > h4').eq(0).append('招新说明：');
		$('.itemContent > h4').eq(1).append('做什么：');
		$('.itemContent > p').eq(0).append('和能力相比,我们更看重兴趣，自学能力和责任感');
		$('.itemContent > p').eq(4).append('享受处理数据的乐趣');
		$('.chooseHead a').eq(0).attr('href', 'houtai.html');
	});
	$('.items').eq(11).tap(function(){
		$('.chooseHead .items').eq(0).css({'backgroundPosition':'-455px 0px','backgroundImage':'url(./images/items2.png)'});
		$('.itemContent > p').empty();
		$('.itemContent > h4').empty();
		$('.itemContent > h4').eq(0).append('招新说明：');
		$('.itemContent > h4').eq(1).append('做什么：');
		$('.itemContent > p').eq(0).append('和能力相比,我们更看重兴趣，自学能力和责任感');
		$('.itemContent > p').eq(4).append('受人尊重的艺术家');
		$('.chooseHead a').eq(0).attr('href', 'design.html');
	});
	$('.items').eq(12).tap(function(){
		$('.chooseHead .items').eq(0).css({'backgroundPosition':'-250px 0px','backgroundImage':'url(./images/items2.png)'});
		$('.itemContent > p').empty();
		$('.itemContent > h4').empty();
		$('.itemContent > h4').eq(0).append('招新说明：');
		$('.itemContent > h4').eq(1).append('做什么：');
		$('.itemContent > p').eq(0).append('和能力相比,我们更看重兴趣，自学能力和责任感');
		$('.itemContent > p').eq(4).append('Linux与命令行的死忠粉');
		$('.chooseHead a').eq(0).attr('href', 'sa.html');
	});
	$('.items').eq(13).tap(function(){
		$('.chooseHead .items').eq(0).css({'backgroundPosition':'-560px 0px','backgroundImage':'url(./images/items2.png)'});
		$('.itemContent > p').empty();
		$('.itemContent > h4').empty();
		$('.itemContent > h4').eq(0).append('招新说明：');
		$('.itemContent > h4').eq(1).append('做什么：');
		$('.itemContent > p').eq(0).append('和能力相比,我们更看重兴趣，自学能力和责任感');
		$('.itemContent > p').eq(4).append('带领程序猿各种嗨');
		$('.chooseHead a').eq(0).attr('href', 'cehua.html');
	});
	//音乐播放设置
	// $('#myAudio').tap(function(){
	// 	console.log("tap");
	// 	if ($(this).paused == false) {
	// 		$(this).play();
	// 		console.log("start play");
	// 	} else {
	// 		$(this).pause();
	// 		console.log("pause");
	// 	}
	// })
	var audio = document.getElementById('myAudio');
	$('.music').eq(0).tap(function(){
	console.log(audio.paused);
		if (audio.paused == false) {
				audio.pause();
				audio.paused = true;
				console.log("start play");
			} else {
				audio.play();
				audio.paused = false;
				console.log("pause");
			}
	})

	//微信分享
	var imgUrl = "图片地址";
    var lineLink = "";
    var descContent = '蔚蓝招新';
    var shareTitle = '蔚蓝-招新';
    var appid = '';

    function shareFriend() {
        WeixinJSBridge.invoke('sendAppMessage',{
            "appid": appid,
            "img_url": imgUrl,
            "img_width": "200",
            "img_height": "200",
            "link": lineLink,
            "desc": descContent,
            "title": shareTitle
        }, function(res) {
            //_report('send_msg', res.err_msg);
        })
    }
    function shareTimeline() {
        WeixinJSBridge.invoke('shareTimeline',{
            "img_url": imgUrl,
            "img_width": "200",
            "img_height": "200",
            "link": lineLink,
            "desc": descContent,
            "title": shareTitle
        }, function(res) {
               //_report('timeline', res.err_msg);
        });
    }
    function shareWeibo() {
        WeixinJSBridge.invoke('shareWeibo',{
            "content": descContent,
            "url": lineLink,
        }, function(res) {
            //_report('weibo', res.err_msg);
        });
    }
    // 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        // 发送给好友
        WeixinJSBridge.on('menu:share:appmessage', function(argv){
            shareFriend();
        });
        // 分享到朋友圈
        WeixinJSBridge.on('menu:share:timeline', function(argv){
            shareTimeline();
        });
        // 分享到微博
        WeixinJSBridge.on('menu:share:weibo', function(argv){
            shareWeibo();
        });
    }, false);
	
	//根据选择职位进行跳转链接的更换

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