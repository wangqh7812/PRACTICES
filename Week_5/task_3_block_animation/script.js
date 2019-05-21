var boxList = document.getElementsByClassName("box");
var outWrap = document.getElementsByClassName("in-wrap");

var index = 0;

var speedOut;

var timerOut = null;

for (var i = 0; i < boxList.length; i++){
    boxList[i].index = i;
    boxList[i].onclick = function () {
        var a = this.index;
        console.log("当前的box的offsetLeft：" + this.offsetLeft);
        posAnimation(a);
        bodyAnimation(this);

    }
}

function posAnimation(index) {
    for(var i = 0; i < boxList.length; i++) {
        boxList[i].index = i;
        if (boxList[i].className == "box active") {
            var a = this.index;
        }
        if (a < index) {


        }
    }
}

function bodyAnimation(ele) {
    for (var i = 0; i < boxList.length; i++) {
        boxList[i].className = "box";
    }
    ele.className = "box active";
}
