var oNumBox = document.getElementById("left-num-box");
var aLeftNum = oNumBox.getElementsByTagName("li");

var randomBtn = document.getElementById("left-btn-random");

var aArr = [];
var aRandomNum = [];

//生成一个含有数字1-31的数组
function addNumToArr() {
    for (var i = 0; i < 31; i++) {
        var temp = i + 1;
        aArr.push(temp);
    }
    return aArr;
}

//从数组aArr随机选取七个数字
function getRandomNum() {
    // addNumToArr();
    // console.log(aArr);
    var a = 30;
    for (var i = 0; i < 7; i++) {
        var temp = Math.floor(Math.random() * a);
        var b = aArr[temp];
        // console.log(b);
        aRandomNum.push(b);
        aArr.splice(temp,1);
        // console.log(aArr);
        a--;
    }
    return aRandomNum;
}

// console.log(aArr);
// console.log(aRandomNum);

randomBtn.onclick = function () {
    console.log(aRandomNum.length);
    if (aRandomNum.length > 0) {
        aRandomNum.splice(0,aRandomNum.length);
    }
    // console.log(aRandomNum.length,aArr.length);
    getRandomNum();
    // console.log(aLeftNum.length,aRandomNum);
    for (var i = 0; i < 31; i++) {
        aLeftNum[i].index = i;
        // console.log(aLeftNum[i]);
        var temp = aLeftNum[i].innerText;
        // console.log(temp);
        for (var j = 0; j < 7; j++) {
            // console.log(aRandomNum[j]);
            if ( aRandomNum[j] === temp) {
                aLeftNum[i].className = "left-num num-selected";
            }
        }
    }
};


