var boxList = document.getElementsByClassName("box");
var outWrap = document.getElementsByClassName("in-wrap");

var index = 0;

var speedIn,
    speedOut;

var timerIn = null,
    timerOut = null;

for (var i = 0; i < boxList.length; i++){
    boxList[i].index = i;
    boxList[i].onclick = function () {
        console.log("当前的box的offsetLeft：" + this.offsetLeft);
    }
}

function posAnimation() {

    if (timerOut) {
        clearInterval(timerOut);
    }

    timerOut = setInterval(function () {
        if (temp > 0) {
            nowPos = nowPos - speedOut;
        }

    })
}
