var boxList = document.getElementsByClassName("box");
var outWrap = document.getElementsByClassName("in-wrap");

var index = 0;

var speedOut;

var timerOut = null;

for (var i = 0; i < boxList.length; i++){
    boxList[i].index = i;
    boxList[i].onclick = function () {
        var s = this.offsetLeft;
        console.log("当前的box的offsetLeft：" + this.offsetLeft);
        bodyAnimation(this);
        posAnimation(s);
    }
}

function posAnimation(long) {

    // if (timerOut) {
    //     clearInterval(timerOut);
    // }
    //
    // timerOut = setInterval(function () {
    //     if (temp > 0) {
    //         nowPos = nowPos - speedOut;
    //     }
    //
    // })
}

function bodyAnimation(ele) {
    for (var j = 0; j < boxList.length; j++) {
        boxList[j].style.width = "100px";
        boxList[j].style.height = "200px";
    }
    ele.style.width = "200px";
    ele.style.height = "400px";
}
