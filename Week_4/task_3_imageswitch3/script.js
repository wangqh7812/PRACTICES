var outBox = document.getElementById("outer");
var inBox = document.getElementById("inner");
var inBoxLi = inBox.getElementsByTagName("li");

var smallPic = document.getElementById("pic-small");
var smallPicLi = smallPic.getElementsByTagName("li");
var smallPicImg = document.getElementsByClassName("pic-small-title");

var leftBtn = document.getElementById("btn-left");
var rightBtn = document.getElementById("btn-right");

// console.log(smallPicImg.length);

var picTitle = document.getElementById("pic-title");

// var oBtn = document.getElementById("start");

// inBox.innerHTML += inBox.innerHTML;
inBox.style.width = inBoxLi.length * 1250 + "px";   //设置ul的宽度
// console.log(inBox.offsetWidth);

//  大标题：实现多次滚动并且带索引
var timer = null;
var indexTimer = null;
var index = 0 ;

//实现单次滚动1，正在用的
function oneMove1(endPos) {
    var startPos = outBox.scrollLeft;
    var speed;

    if (timer) {
        clearInterval(timer);
    }
    timer = setInterval(function () {
        speed = Math.floor(Math.abs(endPos - startPos) / 10);
        // console.log(speed);
        // speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

        if (startPos < endPos) {
            if (Math.abs(endPos - startPos) <= 6) {
                startPos = endPos;
                clearInterval(timer);
            }
            startPos += speed;
            // console.log(speed, startPos);
        }
        else {
            if (Math.abs(endPos - startPos) <= 6) {
                startPos = endPos;
                clearInterval(timer);
            }
            startPos -= speed;
            // console.log(speed, startPos);
        }

        outBox.scrollLeft = startPos;
        console.log(outBox.scrollLeft);
        // return outBox.scrollLeft;
    }, 20);
}

//实现单次滚动2，也可以用的，但是现在没用
function oneMove2(target) {
    var start = outBox.scrollLeft;
    var s = Math.abs(target - start);
    var speed = s / 10;

    if(timer) {
        clearInterval(timer);
    }

    timer = setInterval(function () {
        if (start < target) {
            start += speed;
            if (start >= target) {
                clearInterval(timer);
                start = target;
            }
        }
        else {
            start -= speed;
            if (start <= target) {
                clearInterval(timer);
                start = target;
            }
        }
        outBox.scrollLeft = start;
    },20)
}

//实现连续地单次滚动
function rollIndex() {
    if (indexTimer) {
        clearInterval(indexTimer);
    }
    indexTimer = setInterval(function () {
        index++;
        if (index >= 9) {
            index = 0;
        }
        // console.log(index);
        //实现索引跟随大图滚动
        for (var i = 0; i < smallPicLi.length; i++) {
            var j = index;
            smallPicLi[i].className = "";
            smallPicLi[j].className = "active";
        }
        //实现标题跟随大图滚动
        picTitle.innerText = smallPicImg[j].alt;

        oneMove1(index * 1250);
    },2000);
}

rollIndex();

//添加索引控制
for (var i = 0; i < smallPicLi.length; i++) {
    smallPicLi[i].index = i;    //不能少
    smallPicLi[i].onclick = function () {
        if (indexTimer) {
            clearInterval(indexTimer);
        }

        for (var j = 0; j < smallPicLi.length; j++) {
            smallPicLi[j].className = "";
        }

        this.className = "active";
        index = this.index;
        // console.log(index);

        oneMove1(index * 1250);
        rollIndex();
    }
}

//左右控制
//向左
leftBtn.onclick = function () {
    if (indexTimer) {
        clearInterval(indexTimer);
    }

    //实现索引跟随图片滚动
    var a = index;  //index在前面已经跟随图片滚动而改变了
    smallPicLi[a].className = "";
    index--;

    if (index < 0) {
        index = 8;  //index是0-8的，共9张图片
    }

    var b = index;  //新的index
    smallPicLi[b].className = "active";

    oneMove1(index * 1250); //从新的index继续开始滚动
    rollIndex();
};
//向右
rightBtn.onclick = function () {
    if (indexTimer) {
        clearInterval(indexTimer);
    }
    //实现索引跟随图片滚动
    var a = index;  //index在前面已经跟随图片滚动而改变了
    smallPicLi[a].className = "";
    index++;

    if (index === 9) {
        index = 0;  //如果是8，那么还加了1，所以是9
    }

    var b = index;  //新的index
    smallPicLi[b].className = "active";

    oneMove1(index * 1250); //从新的index继续开始滚动
    rollIndex();
};


/*//实现多次滚动
var timer = null;
var indexTimer = null;
var index = 0 ;

function startMove(endPos) {
    var startPos = outBox.scrollLeft;
    var speed;

    if (timer) {
        clearInterval(timer);
    }

    timer = setInterval(move, 20);

    function move() {
        speed = (endPos - startPos) / 10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        startPos += speed;

        console.log(speed, startPos);

        if (Math.abs(endPos - startPos) <= 6) {
            startPos = endPos;
            clearInterval(timer);
        }

        outBox.scrollLeft = startPos;
    }
}

function rollIndex() {
    index++;

    if (index === 9) {
        index = 0;
    }

    console.log(index);
    startMove(index * 1250);
}

if (indexTimer) {
    clearTimeout(indexTimer);
}

indexTimer = setInterval(rollIndex, 3000);*/



/*//实现单次滚动
var timer = null;

function startMove(endPos) {
    var startPos = outBox.scrollLeft;
    console.log(startPos);
    var speed;

    if (timer) {
        clearInterval();
    }

    timer = setInterval(move, 20);

    function move() {
        speed = (endPos - startPos) / 10;
        startPos += speed;

        // 输出步长，发现步数存在多位小数点
        console.log(speed,startPos);

        // 起点到达终点清除计时器，计时器会一直运行，数字会越来越小，小到看不出移动，所以设置一个判断，速度小于0.01时，清除计时器，直接让startPos = endPos
        if(speed < 0.01) {
            clearInterval(timer);
            startPos = endPos;
        }
        else if (startPos === endPos) {
            clearInterval(timer);
        }

        outBox.scrollLeft = startPos;
    }
}

startMove(1250);*/

