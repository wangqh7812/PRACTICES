var nav = document.getElementById("nav");

var aLi = nav.getElementsByTagName("li"),
    aA = nav.getElementsByTagName("a");

var speed = 0.88,
    timerR = null,
    timerL = null;

function animationR(index) {
    var tempIn = aA[index];
    var lIn = parseInt(tempIn.style.paddingLeft);

    console.log(lIn);

    if (timerR) {
        clearInterval(timerR)
    }

    //回去的不能停，回去的停了就影响上一个归位了
    // if (timerL) {
    //     clearInterval(timerL)
    // }

    timerR = setInterval(function () {
        lIn += speed;
        tempIn.style.paddingLeft = lIn + "px";
        if (lIn >= 54) {
            clearInterval(timerR);
            tempIn.style.paddingLeft = 54 + "px";
        }
        return lIn;
    },20)
}

function animationL(index) {
    var tempOut = aA[index];
    var lOut = parseInt(tempOut.style.paddingLeft);

    console.log(lOut);

    if (timerL) {
        clearInterval(timerL)
    }

    if (timerR) {
        clearInterval(timerR)
    }

    timerL = setInterval(function () {
        lOut -= speed;
        tempOut.style.paddingLeft = lOut + "px";
        if (lOut <= 10) {
            clearInterval(timerL);
            tempOut.style.paddingLeft = 10 + "px";
        }
        return lOut;
    },20)
}

for (var i = 0; i < aLi.length; i++) {
    aLi[i].index = i;
    aLi[i].onmouseover = function () {
        var a = this.index;
        console.log(a);
        animationR(a);
    };
    aLi[i].onmouseout = function () {
        var b = this.index;
        console.log(b);
        animationL(b);
    }
}