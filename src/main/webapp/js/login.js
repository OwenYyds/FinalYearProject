$(function () {
    //登录功能
    $("#login").on("submit", function (e) {
        e.preventDefault();
        let data = $("#login").serializeArray();

        $.ajax({
            type: "POST",
            url: "/users/login",
            data: {"username": data[0].value, "password": data[1].value},
            dataType: "text",
            success: function (data) {
                if (data == "用户名不能为空") {
                    layer.msg('请输入用户名');
                } else if (data == "密码不能为空") {
                    layer.msg('请输入密码');
                } else if (data == "用户名或密码错误") {
                    layer.msg('用户名或密码错误');
                } else {
                    if ($('.usernameInput>input').val().toLowerCase() == "admin") {
                        layer.msg("管理员你好，即将进入！")
                        setTimeout(window.location.href = "admin/index.html",4000)
                    } else {
                        layer.msg("登录成功，即将进入！");
                        setTimeout(window.location.href = "index.html",4000)
                    }
                }
            },
            error: function () {
                layer.msg('请求失败！服务器没在状态呢');
            }
        })
    })
    // 注册功能
    $("#register").on("submit", function (e) {
        e.preventDefault();
        let data = $("#register").serializeArray();
        console.log(data);
        $.ajax({
            type: "POST",
            url: "/users/register",
            data: {"Cusername": data[0].value, "Cpassword": data[1].value, "Cpassword2": data[2].value},
            dataType: "text",
            success: function (data) {
                if (data == "用户名不能为空") {
                    layer.msg(data);
                } else if (data == "密码不能为空") {
                    layer.msg(data);
                } else if (data == "用户名长度需要为长度为6~10位") {
                    layer.msg(data);
                } else if (data == "用户名需要0~9的数字组成,长度为6~10位") {
                    layer.msg(data);
                } else if (data == "用户名需要0~9的数字组成,长度为6~10位") {
                    layer.msg(data);
                } else if (data == "两次输入的密码不一致") {
                    layer.msg(data);
                } else if (data == "注册失败") {
                    layer.msg(data);
                } else {
                    layer.msg("注册成功啦,马上登录吧");
                    setTimeout(window.location.href = "L&R.html", 4000)
                    // window.location.href="L&R.html";
                }
            },
            error: function () {
                layer.msg("服务器没在状态呢");
            }
        })

    })

    //背景随鼠标移动
    window.addEventListener('mousemove', function (e) {

        let x = e.clientX;
        let y = e.clientY;
        let width = window.innerWidth;
        let height = window.innerHeight;
        let setX = -(x - width / 2) * 0.1;
        let setY = -(y - height / 2) * 0.1;
        $('.box').css({
            "left": setX + "px",
            "top": setY + "px"
        })
    })
    //背景切换
    let flag = 1;
    $("#form-type").on('change', function () {
        if (flag) {
            $('.box').css({
                "background": "url(images/L&DImage/main.jpg) no-repeat",
                "background-size": "cover"
            })
            flag = 0;
        } else {
            $('.box').css({
                "background": "url(images/L&DImage/xbox.jpg) no-repeat",
                "background-size": "cover"
            })
            flag = 1;
        }
    })


})