var boxList = document.getElementsByClassName("box");
var outWrap = document.getElementsByClassName("in-wrap");

var index = 0;

// var speedOut;
//
// var timerOut = null;

for (var i = 0; i < boxList.length; i++){
    boxList[i].index = i;
    boxList[i].onclick = function () {
        var a = this.index;
        // console.log("当前的box的offsetLeft：" + this.offsetLeft);
        // outWrap[0].className = "in-wrap pos" + a;
        posAnimation(a);
        bodyAnimation(this);

    }
}

function posAnimation(index) {
    outWrap[0].className = "in-wrap pos" + index;
}

function bodyAnimation(ele) {
    for (var i = 0; i < boxList.length; i++) {
        boxList[i].className = "box";
    }
    ele.className = "box active";
}
