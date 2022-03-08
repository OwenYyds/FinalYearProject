$(function(){
    $.get("nav.html",function (data) {
        $("#navList").html(data);
    });
    $.get("footer.html",function (data) {
        $(".footer").html(data);
    });
})