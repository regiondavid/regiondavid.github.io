window.onload = function(){
	var tel = document.getElementById('item1');
	var qq = document.getElementById('item2');
	var items = document.getElementsByClassName('formItem');
	// var bt = document.getElementsByTagName('button')[0];
	var err = document.getElementsByClassName('error')[0];

	var tr=/1((3[0-9])|([58][0-35-9]))\d+/g;
	var tr2 = /^\d{6,13}\d$/;
	tel.onblur = function(){
		if(!(tel.value)){
				err.innerText="请输入手机号";
			} else if(getLength(tel.value)!=11){
				err.innerText="请输入正确的手机号码";
			} else if(tr.test(tel.value)){
				console.log("OK！");
				err.style.display = "none";
			} else err.innerText="请输入正确的手机号码";
	}
	qq.onblur = function(){
		if(!(qq.value)){
				err.innerText="请输入QQ号";
			} else if(tr2.test(qq.value)){
				console.log("OK！");
				err.style.display = "none";
			} else err.innerText="请输入正确的QQ号";
	}
	// bt.disabled = "disabled";
	// bt.onclick = function () {
	// 	for(var a = 0;a < items.length;a++){
	// 		if (!items[a].value) {
	// 			err.innerText="请输入完整信息";
	// 		}
	// 	}
	// }
}
//检测字数
function getLength(str){
	return str.replace(/[^x00-xff]/g,"xx").length;
}