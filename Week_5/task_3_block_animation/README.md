##offsetLeft和style.left的区别

###定义:
offsetLeft: 获取的是当前对象左侧距离父对象左侧的值(均不包含border);  
 style.left: 获取或设置相对于具有定位属性(position定义为relative)的父对象的左边距;  
clientLeft:获取的是当前对象的offsetLeft属性值和到当前窗口左边的真实值之间的距离,. 

* 如果父对象的position定义为relative,子对象的position定义为absolute，那么子对象的style.left的值是相对于父对象的值,等同于offsetLeft的值.
###区别:

* style.left 返回的是字符串"50px"，offsetLeft返回的是数值50，如果需要对取得的值进行计算，用offsetLeft比较方便,不需要用parseInt(style.left).
* style.left是可以设置或更改，offsetLeft是只能获取不能更改的，因此要改变子对象的位置，只能修改style.left的值。
* style.left的值需要事先定义,而且要定义相应对象的标签里(即内联style)，就如上面用内嵌style的话，获取不到style.left的值.但是offsetLeft则可以取到.
