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
                    let info = $('<div class="error-info"></div>');
                    // // info.text(data);
                    $('.usernameInput').addClass('form-error');
                    $('.usernameInput').append(data);

                } else if (data == "密码不能为空") {
                    let info = $('<div class="error-info"></div>');
                    // // info.text(data);
                    $('.passwordInput').addClass('form-error');
                    $('.passwordInput').append(data);

                } else if (data == "用户名或密码错误") {
                    let info = $('<div class="error-info"></div>');
                    // // info.text(data);
                    $('.usernameInput').addClass('form-error');
                    $('.usernameInput').append(data);
                } else {
                    if ($('.usernameInput>input').val().toLowerCase() == "admin") {
                        window.location.href = "admin/index.html";
                    } else {
                        window.location.href = "index.html";
                    }
                }
            },
            error: function () {
                alert("请求失败！服务器没在状态呢");
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
                    let info = $('<div class="error-info"></div>');
                    // info.text(data);
                    $('.CusernameInput').addClass('form-error');
                    $('.CusernameInput').append(data);
                } else if (data == "密码不能为空") {
                    let info = $('<div class="error-info"></div>');
                    // info.text(data);
                    $('.CpasswordInput').addClass('form-error');
                    $('.CpasswordInput').append(data);
                } else if (data == "用户名长度需要为长度为6~10位") {
                    let info = $('<div class="error-info"></div>');
                    // info.text(data);
                    $('.CusernameInput').addClass('form-error');
                    $('.CusernameInput').append(data);
                } else if (data == "用户名需要0~9的数字组成,长度为6~10位") {
                    let info = $('<div class="error-info"></div>');
                    // info.text(data);
                    $('.CusernameInput').addClass('form-error');
                    $('.CusernameInput').append(data);
                } else if (data == "密码长度需为6~12位") {
                    let info = $('<div class="error-info"></div>');
                    // info.text(data);
                    $('.CpasswordInput').addClass('form-error');
                    $('.CpasswordInput').append(data);
                } else if (data == "两次输入的密码不一致") {
                    let info = $('<div class="error-info"></div>');
                    // info.text(data);
                    $('.Cpassword2Input').addClass('form-error');
                    $('.CpasswordInput').append(data);
                } else if (data == "注册失败") {
                    let info = $('<div class="error-info"></div>');
                    info.text("此用户名已经存在");
                    $('.CusernameInput').addClass('form-error');
                    $('.CusernameInput').append(data);
                } else {
                    alert("注册成功");
                    window.location.href="L&R.html";
                }

            },
            error: function () {
                alert("请求失败！")
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
                "background": "url(images/L&DImage/ps.jpg) no-repeat",
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

    $('.form-input').on('click', function () {
        $('.form-input').removeClass('form-error');
        $('.form-input>.error-info').remove();
    })

})