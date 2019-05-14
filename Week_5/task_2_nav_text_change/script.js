var nav = document.getElementById("nav");

var aLi = nav.getElementsByTagName("li"),
    aA = nav.getElementsByTagName("a");

var speed = 0.88,
    timer = null;

function animate (index) {
    var temp = aA[index];
    var l = parseInt(temp.style.paddingLeft);

    console.log(l);

    if (timer) {
        clearInterval(timer)
    }
    else {
        timer = setInterval(function () {
            l += speed;
            temp.style.paddingLeft = l + "px";

            if (l >= 54) {
                clearInterval(timer);
                temp.style.paddingLeft = l + "px";
            }

            return l;
        },20)
    }
}



for (var i = 0; i < aLi.length; i++) {
    aLi[i].index = i;
    aLi[i].onmouseover = function () {
        var a = this.index;
        console.log(a);
        animate(a);
    };

    aLi[i].onmouseout = function () {
        var b = this.index;
        console.log(b);
    }
}