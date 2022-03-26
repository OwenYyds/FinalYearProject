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
            $("#loginUser").html(data.username);
        } else {
            $("#loginUser").html("游客");
        }
    })
})
$("#logout").click(function (){
    $.get("/users/logout",{},function (){
        location.href = "L&D.html";
    })
})

