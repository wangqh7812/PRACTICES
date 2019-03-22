    var oPic = document.getElementById("pic-placeholder");
    var aA = document.getElementsByClassName("pic-list-a");
    var oText = document.getElementById("title-placeholder");

    for(var i = 0; i < aA.length; i++) {
        aA[i].onclick = function () {
            event.preventDefault();
            for (var j = 0; j < aA.length; j++) {
                aA[j].index = j;
                if (aA[j] === this) {
                    aA[j].className = "pic-list-a active";
                    oPic.src = this.href;
                    oText.innerText = this.innerText;
                }
                else {
                    aA[j].className = "pic-list-a";
                }
            }
        }
    }


