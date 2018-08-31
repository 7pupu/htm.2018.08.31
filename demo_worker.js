var i = 0;

function timedCount() {
    i = i + 1;
    postMessage([i,"ㄏㄏ"]);//傳回主視窗
    setTimeout("timedCount()",500);
}
//timedCount();
self.onmessage = function(event){};
self.addEventListener("message", function(event){
	//console.log(event); //印不出來
	self.postMessage(["傳給主視窗",event.data]);
}, false);//監聽message事件

//self.close();//結束worker