let timer2, img;

$(function () {
    $.ajax({
        type: "GET",
        url: "/index/BannerContent",
        data: {},
        dataType: "json",
        success: function (res) {
            console.log(res);
            let dataImage = [];
            for (let i = 0; i < res.length; i++) {
                let imgElement = `<img class="img" src="../images/BannerImage/${res[i]['adimage']}">`
                dataImage.push(imgElement);
            }
            $(".banner").empty().append(dataImage.join(''));
            let width = window.innerWidth;
            init(width, res);
            bannerControl(width, res);
            textShow();
            window.addEventListener('resize', function () {
                clearInterval(timer2);
                timer2 = setInterval(function () {
                    width = $(window).width();
                    init(width, res);
                    bannerControl(width, res);
                }, 4000)
            })
        },
        error: function () {
            layer.msg("加载数据失败");
        }
    })

    $.ajax({
        type: "GET",
        url: "/index/hotgames",
        data: {},
        dataType: "json",
        success: function (res) {
            // console.log(res[0].gameimage)
            // console.log(res[0].cname)

            $(".hot-game-bg").each(function (index) {
                $(this).css({
                    "background": "url(../images/GameImage/" + res[index].gameimage,
                    "background-size": "cover",
                    "background-position": "center center"
                })
                // console.log(index);
            })
            $(".hot-game-text").each(function (index) {
                $(this).text(res[index].cname);
            })

            // let hotGameList = '<div class="hotGame-card col-lg-3 col-md-6 col-12"><div class="card-cover animal-top">'+hotgame+'</div></div>';
            // let hotgame = '<div class="hot-game-bg"></div><div class="hot-game-text"></div>';
            // for (let i = 0;i<res.length;i++){
            //     $(".hot-game-bg").css({
            //         "background": "url(../images/GameImage/" + res.gameimage,
            //         "background-size": "cover",
            //         "background-position": "center center"
            //     })
            // }

        },
        error: function () {
            layer.msg("加载数据失败");
        }
    })


})

$(".hotGame-card").on("click",".hotGame-card",function (){
    console.log()
})


$(function () {
    $('.news-ticker').marquee({
        duration: 10000,
        //gap in pixels between the tickers
        //gap: 200,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    });
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });
})


function init(width, res) {
    let banner = document.getElementsByClassName('banner')[0];
    img = banner.getElementsByTagName("img");
    img[0].style.left = 0;
    for (let i = 1; i < img.length; i++) {
        img[i].style.left = width + 'px';
    }
    $(".banner-title>.Cname").text(res[0]["adtext"].split(";")[0]);
    $(".banner-title>.Ename").text(res[0]["adtext"].split(";")[1]);
}

function bannerControl(width, res) {
    let index = 0;
    let next = document.getElementsByClassName("next")[0];
    let prev = document.getElementsByClassName('prev')[0];
    next.addEventListener('click', function () {
        slowAnimate(img[index], {'left': -width});
        index += 1;
        if (index > img.length - 1) {
            index = 0;
        }
        img[index].style.left = width + "px";
        console.log(width);
        slowAnimate(img[index], {left: 0});
        $(".banner-title>.Cname").text(res[index]["adtext"].split(";")[0]);
        $(".banner-title>.Ename").text(res[index]["adtext"].split(";")[1]);
        textShow();
    })
    prev.addEventListener('click', function () {
        slowAnimate(img[index], {'left': width});
        index -= 1;
        if (index < 0) {
            index = img.length - 1;
        }
        img[index].style.left = -width + 'px';
        slowAnimate(img[index], {'left': 0});
        $(".banner-title>.Cname").text(res[index]["adtext"].split(";")[0]);
        $(".banner-title>.Ename").text(res[index]["adtext"].split(";")[1]);
        textShow();
    })
}

function slowAnimate(obj, json, fn) {
    let speed = 0;
    let begin = 0;
    let target = 0;
    let flag = false;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        flag = true;
        for (let key in json) {
            if (key === "opacity") {
                begin = parseInt(getCss(obj, key) * 1000) || 1000;
                target = parseInt(json[key] * 1000);
            } else {
                begin = parseInt(getCss(obj, key));
                target = parseInt(json[key]);
            }
            speed = (target - begin) * 0.1;
            speed = target > begin ? Math.ceil(speed) : Math.floor(speed);
            if (key === "opacity") {
                obj.style[key] = (speed + begin) / 1000;
                obj.innerText = obj.style[key];
            } else {
                obj.style[key] = speed + begin + "px";
            }
            if (begin !== target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(timer2);
            clearInterval(obj.timer);
            fn && fn();
        }
    }, 20);
}

function getCss(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle(attr);
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}

function textShow() {
    $(".banner-title").css({
        "opacity": "0",
        "top": "-2rem"
    })
    $(".banner-title").animate(
        {
            top: "-6rem",
            "opacity": 1
        }, 500
    )
}


