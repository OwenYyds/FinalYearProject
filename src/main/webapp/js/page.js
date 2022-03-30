$(window).on('load', function () {
    $(".loader").fadeOut();
    $("#preloder").delay(500).fadeOut("slow");
});
$(function () {
    checkUserIsLogin();
    $.get("nav.html", function (data) {
        $("#navList").html(data);
    });
    $.get("footer.html", function (data) {
        $(".footer").html(data);
    });

})

function checkUserIsLogin() {
    $.get("/users/getUser", {}, function (data) {
        if (data.length < 1) {
            $("#userInfoHidden").css({"display": "none"});
            console.log("游客状态")
            console.log("nonUser")
        } else {
            console.log("登录成功")
            // console.log(data.username)
            // console.log("userFound")
            $("#hidden").css({"display": "none"});
            // $("#userInfoHidden").removeAttr("style");
            $("#loginUser").css({
                "background": "url(../images/HeadImage/" + data.head,
                "background-size": "cover",
                "background-position": "center center"
                // "display":"inline-block"
            });
        }
    })
}


// $("#main").click(function () {
//     checkUserIsLogin();
// })
// $("#kinect").click(function () {
//     checkUserIsLogin();
// })
// $("#share").click(function () {
//     checkUserIsLogin();
// })
// $("#all").click(function () {
//     checkUserIsLogin();
// })

$("#logout").click(function () {
    $.get("/users/logout", {}, function () {
        window.location.href = "L&D.html";
    })
})

