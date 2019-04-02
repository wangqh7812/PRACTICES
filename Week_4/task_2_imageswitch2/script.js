var outBox = document.getElementById("outer");
var inBox = document.getElementById("inner");
var inBoxLi = inBox.getElementsByTagName("li");
var picTitle = document.getElementById("pic-title");
var picTitleLi = picTitle.getElementsByTagName("li");

inBox.style.width = inBoxLi.length * 1250 + "px";

var timer = null;
var indexTimer = null;
var index = 0;

//实现单次滚动
function oneMove(endPos) {
    var startPos = outBox.scrollLeft;

    console.log(index,endPos,startPos);

    if (timer) {
        clearInterval(timer);
    }
    timer = setInterval(function () {
        var speed = (endPos - startPos) / 10;

        startPos += speed;

        console.log(speed,startPos);

        if (speed < 0.01) {
            clearInterval(timer);
            startPos = endPos;
        }
        else if (startPos === endPos) {
            clearInterval(timer);
        }
        outBox.scrollLeft = startPos;
        },20)
}

//实现连续滚动
function indexMove() {
    if (indexTimer) {
        clearInterval(indexTimer);
    }
    indexTimer = setInterval(function () {
        var a = index;
        picTitleLi[a].className = "";
        index++;
        console.log(index);
        if (index === 9) {
            index = 0;
        }

        var b = index;
        picTitleLi[b].className = "active";

        oneMove(index * 1250);
        },3000)
}

indexMove();