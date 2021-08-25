window.onload = function () {
    var imgListLi = document.getElementById('imgListLi');
    var imgArr = imgListLi.getElementsByTagName('img');
    imgListLi.style.width = imgArr.length * 1120 + 'px';
    var navList = document.getElementById('navListA');
    var boxImgNav = document.getElementById('boxImgNav');
    navList.style.left = (boxImgNav.clientWidth - navList.clientWidth) / 2 + "px";

    // 为每个 a 点击切换事件
    index = 0;
    // 点击切换图片功能
    // 获取a
    var allA = navList.getElementsByTagName("a");
    // 默认第一个a黑色
    allA[index].style.backgroundColor = "black";
    // 为每个a添加单击响应事件
    for (var i = 0; i < allA.length; i++) {
        clearInterval(timer);
        // 添加一个属性存储i
        allA[i].num = i;
        allA[i].onclick = function () {
            clearInterval(timer);
            index = this.num;
            setA();
            move(imgListLi, "left", -1120 * index, 50, function () {
                autoChange();
            })
        }
    }
    autoChange();
    var timer;

    function autoChange() {
        timer = setInterval(function () {
            index++;
            move(imgListLi, "left", -1120 * index, 50, function () {
                // a跟随图片功能
                setA();
            });
        }, 3800)
    }

    function setA() {
        if (index >= imgArr.length - 1) {
            index = 0;
            imgListLi.style.left = 0;
        }
        for (var i = 0; i < allA.length; i++) {
            allA[i].style.backgroundColor = "";
        }
        allA[index].style.backgroundColor = "black";
    }

    function move(obj, attr, target, speed, callback) {
        clearInterval(obj.timer);
        var current = parseInt(getStyle(obj, attr));
        if (current > target) {
            speed = -speed;
        }
        obj.timer = setInterval(function () {
            // 获取原来box01的left值
            var oldValue = parseInt(getStyle(obj, attr));

            var newValue = oldValue + speed;
            if ((newValue < target && speed < 0) || (newValue > target && speed > 0)) {
                newValue = target;
            }
            obj.style[attr] = newValue + "px";
            if (newValue == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
        }, 30);
    }
    function getStyle(obj, name) {
        if (window.getComputedStyle) {
            return getComputedStyle(obj, null)[name];
        } else {
            return obj.currentStyle[name];
        }
    }
}