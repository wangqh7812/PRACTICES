var outBox = document.getElementById("outer");
var inBox = document.getElementById("inner");
var inBoxLi = inBox.getElementsByTagName("li");
var oBtn = document.getElementById("start");

inBox.style.width = inBoxLi.length * 1250 + "px";   //设置ul的宽度

//多次滚动
var timer = null;
var timerIndex = null;
var index = 0 ;

function startMove(endPos) {
    var startPos = outBox.scrollLeft;
    var speed;

    if (timer) {
        clearInterval(timer);
    }

    timer = setInterval(move, 1000);

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

// function rollIndex() {
//     index++;
//     if (index === 9) {
//         index = 0
//     }
//     startMove = (index * 1250);
// }
//
// if (timerIndex) {
//     clearTimeout(timerIndex);
// }
//
// timerIndex = setTimeout(rollIndex, 5000);

// inBox.innerHTML += inBox.innerHTML;
// inBox.style.width = inBoxLi.length * 1250 + "px";   //设置ul的宽度
// console.log(inBox.offsetWidth);



/*//滚动一次
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

