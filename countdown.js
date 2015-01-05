/*倒计时对象*/
function Countdown(){}


/*设置剩余的事件*/
Countdown.prototype.setEndingDate = function(dateObj){
	this.endingDate = dateObj;
}
/*获取当前的时间*/
Countdown.prototype.getNowDate = function(){
	/*闭包的私有变量，防止修改，通过getNowDate得到其中的值*/
	var nowDate = new Date();
	return nowDate;
}
/*获取剩余的时间对象*/
Countdown.prototype.getLeftDate = function(){
	return parseInt((this.endingDate.getTime() - this.getNowDate().getTime())/1000);
}
/*方法一：天-倒计时*/
Countdown.prototype.countdownDay = function(){
	return parseInt(this.getLeftDate()/(24*60*60));
}
/*方法二：天时分秒-倒计时*/
Countdown.prototype.countdownDHMS = function(){
	var leftDate = this.getLeftDate(),
		leftD = this.countdownDay(),
		leftH = parseInt(leftDate/(60*60)%24),
		leftM = parseInt(leftDate/(60)%60),
		leftS = parseInt(leftDate%60);

	return {
		leftD: leftD,
		leftH: leftH,
		leftM: leftM,
		leftS: leftS
	};
}



/*实例化对象*/
var countdown = new Countdown();
/*设置结束时间*/
countdown.setEndingDate(new Date("2015/1/6, 14:40:20"));
setInterval(function(){
var dateObj = countdown.countdownDHMS();
var d = dateObj.leftD,
	h = dateObj.leftH,
	m = dateObj.leftM,
	s = dateObj.leftS;
console.log("还剩余："+d+"天"+h+"小时"+m+"分"+s+"秒");
}, 1000);
