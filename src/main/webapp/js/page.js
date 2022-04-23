$(window).on('load', function () {
    $(".loader").fadeOut();
    $("#preloder").delay(500).fadeOut("slow");
});
$(function () {
    $.get("nav.html", function (data) {
        $("#navList").html(data);
    });
    $.get("footer.html", function (data) {
        $(".footer").html(data);
    });

})




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



