$(function(){
    $.get("post.html",function (data) {
        $("#post").html(data);
    });
})