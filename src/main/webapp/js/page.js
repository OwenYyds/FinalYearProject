$(function(){
    // $.get("nav.html",function (data) {
    //     $("navbar").html(data);
    // });
    $.get("footer.html",function (data) {
        $(".footer").html(data);
    });
    $(".userindex").on('click',function(){
        $(location).attr('href','index.html');
    })
    $(".allgame").on('click',function(){
        $(location).attr('href','allGames.html');
    })
    $(".myinfo").on('click',function(){
        $(location).attr('href','personalInfo.html');
    })
    $(".aboutme").on('click',function(){
        $(location).attr('href','index.html');
    })
})