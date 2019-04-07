var aLeftNum = document.getElementsByTagName("left-num");
var randomBtn = document.getElementById("left-btn-random");



//生成七个不重复的随机数
function randomNum() {
    var aRandomNum = [];
    var j = 0;
    while (j < 7) {
        var temp = parseInt(Math.random() * 30 + 1);
        if (aRandomNum.indexOf(temp) < 0) {
            aRandomNum.push(temp);
            j++;
        }
        console.log(aRandomNum);

        return aRandomNum;
    }
}
randomNum();
