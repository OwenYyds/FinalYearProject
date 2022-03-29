$(function () {
    $.get("nav.html", function (data) {
        $("#navList").html(data);
    });
    $.get("footer.html", function (data) {
        $(".footer").html(data);
    });
})

$(window).on('load', function () {
    $.get("/users/getUser", {}, function (data) {
        if (data.length < 1) {
            console.log("nonUser")
        } else {
            // console.log(data)
            // console.log(data.username)
            // console.log("userFound")
            $("#hidden").children().css({"display": "none"});
            // $("#userInfoHidden").removeAttr("style");
            $("#loginUser").css({
                "background": "url(../images/HeadImage/" + data.head,
                "background-size": "cover",
                "background-position": "center center"
                // "display":"inline-block"
            });
        }
    })
    $(".loader").fadeOut();
    $("#preloder").delay(500).fadeOut("slow");
});

$("#logout").click(function () {
    $.get("/users/logout", {}, function () {
        window.location.href = "L&D.html";
    })
})

