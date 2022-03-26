$(function () {
    $.get("nav.html", function (data) {
        $("#navList").html(data);
    });
    $.get("footer.html", function (data) {
        $(".footer").html(data);
    });
})
$(window).on('load', function () {
    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow");
});


$(function () {
    $.get("/users/checkUser", {}, function (data) {
        if (data != null) {
            console.log(data.head + "````" + data.username)
            $("#loginUser").css({"background": "url(../images/HeadImage/" + data.head,
                "background-size": "cover",
                "background-position": "center center"
            })
        } else {
            $("#loginUser").html("登录");
        }
    })
})
$("#logout").click(function (){
        location.href = "L&D.html";
})

