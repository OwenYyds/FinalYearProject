$(function(){
    $.get("nav.html",function (data) {
        $("#navList").html(data);
    });
    $.get("footer.html",function (data) {
        $(".footer").html(data);
    });
})
$(window).on('load', function() {
    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow");
});