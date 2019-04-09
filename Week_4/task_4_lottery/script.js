var aLeftNumBox = document.getElementsByClassName("left-num");

var randomBtn = document.getElementById("left-btn-random");
var confirmBtn = document.getElementById("left-btn-confirm");

var aChooseNumBox = document.getElementsByClassName("choose-num");

var boomBtn = document.getElementById("right-btn-boom");
var returnBtn = document.getElementById("right-btn-return");

var aBoomNumBox = document.getElementsByClassName("lottery-choose");

var aArr = [];
var aRandomNum = [];    //随机产生的七个数
var aConfirmNum = [];   //确认选择后的七个数
var aBoomNum = [];  //开奖后电脑选择的七个数

var boomOrNo = false;
var confirmOrNo = false;

var level = 0;
var times = document.getElementById("betting-times");
var boomMsg = document.getElementById("boom-msg");
var boomLevel = document.getElementById("boom-level");
var totalMoney = document.getElementById("total-money");

//生成一个含有数字1-31的数组
function addNumToArr() {
    for (var i = 0; i < 31; i++) {
        var temp = i + 1;
        aArr.push(temp);
    }
    return aArr;
}

//将剩余的数从aArr里面删除
function delNumFromArr() {
    for (var i = 0; i < 25; i++) {
        aArr.pop();
    }
    return aArr;
}

//从数组aArr随机选取七个数字
function getRandomNum() {
    //先生成
    addNumToArr();
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
    //再删除
    delNumFromArr();
    // console.log(aArr);
    return aRandomNum;
}

// console.log(aArr);
// console.log(aRandomNum);

//给随机按钮添加事件
randomBtn.onclick = function () {
    // console.log(aRandomNum.length);
    if (aRandomNum.length > 0) {
        aRandomNum.splice(0,aRandomNum.length);
        //把原来已经选择的数全部还原
        for (var h = 0; h < aLeftNumBox.length; h++) {
            aLeftNumBox[h].className = "left-num";
        }
    }
    // console.log(aRandomNum.length,aArr.length);
    getRandomNum();
    // console.log(aRandomNum);
    for (var i = 0; i < 31; i++) {
        // console.log(aLeftNumBox[i]);
        var temp = aLeftNumBox[i].innerText;
        // console.log(temp);
        for (var j = 0; j < 7; j++) {
            // console.log(aRandomNum[j]);
            if ( aRandomNum[j] == temp) {
                aLeftNumBox[i].className = "left-num num-selected";
            }
        }
    }
    // console.log(aRandomNum.length);
    confirmOrNo = true;
};

//实现自主选择号码
for (var i = 0; i < aLeftNumBox.length; i++) {
    aLeftNumBox[i].onclick = function () {
        confirmOrNo = true;

        var temp = parseInt(this.innerText);
        var numPos = aRandomNum.indexOf(temp);   //被点击的数字在数组中的位置
        // console.log(numPos);

        if (aRandomNum.length < 7) {
            if (this.className == "left-num") {
                this.className = "left-num num-selected";
                aRandomNum.push(temp);
            }
            else {
                this.className = "left-num";
                aRandomNum.splice(numPos,1);
            }
        }
        else if (aRandomNum.length == 7) {
            if (this.className == "left-num num-selected") {
                this.className = "left-num";
                aRandomNum.splice(numPos,1);
            }
            else {
                alert("只能选七个数字哦！")
            }
        }
        else {
            alert("只能选七个数字哦！")
        }
        // console.log(aRandomNum);
    }
}

//将选择的号码提交
confirmBtn.onclick = function () {
    if (confirmOrNo) {
        if (aRandomNum.length == 7) {
            if (times.value != "") {
                for (var i = 0; i < aRandomNum.length; i++) {
                    aChooseNumBox[i].innerText = aRandomNum[i];
                }
                aConfirmNum = aRandomNum.slice();
                // console.log(aConfirmNum);
                boomOrNo = true;
            }
            else {
                alert("别忘记下注哦！")
            }
        }
        else {
            alert("请先选择7个心仪的数字！")
        }
    }
    else {
        alert("请先选择7个心仪的数字！")
    }
};

//开奖！！！
function getBoom () {
    if (aRandomNum.length > 0) {
        aRandomNum.splice(0,aRandomNum.length);
    }
    getRandomNum();
    aBoomNum = aRandomNum.slice();
    // console.log(aBoomNum);
}

function compare () {
    console.log(aBoomNum);
    console.log(aConfirmNum);
    for (var i = 0; i < aBoomNum.length; i++) {
        for (var j = 0; j < aConfirmNum.length; j++) {
            if (aBoomNum[i] == aConfirmNum[j]) {
                level++;
            }
        }
    }
    return level;
}

boomBtn.onclick = function () {
    if (boomOrNo) {
        getBoom();
        for (var i = 0; i < aRandomNum.length; i++) {
            aBoomNumBox[i].innerText = aRandomNum[i];
        }
        compare();
        var aLevel = ["零","六","五","四","三","二","一","特"];
        console.log(level,times.value);
        if (level != 0) {
            boomMsg.innerText = "哇，中奖啦！！！";
            boomLevel.innerText = aLevel[level];
            totalMoney.innerText = level * 100 * parseInt(times.value);
        }
        else {
            boomMsg.innerText = "好可惜，再来一次吧！"
            boomLevel.innerText = aLevel[level];
            totalMoney.innerText = level * 100;
        }
        boomOrNo = false;
        confirmOrNo = false;
        level = 0;
    }
    else {
        alert("请先选择心仪的数字并确认再来开奖！")
    }
};

//还原
returnBtn.onclick = function () {
    location.reload();
};







