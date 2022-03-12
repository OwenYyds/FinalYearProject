$(function(){
    $.get("nav.html",function (data) {
        $("#navList").html(data);
    });
    $.get("footer.html",function (data) {
        $(".footer").html(data);
    });
})
$(window).on('load', function() {
    /*------------------
        Preloder
    --------------------*/
    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow");
});
$('.set-bg').each(function() {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
});