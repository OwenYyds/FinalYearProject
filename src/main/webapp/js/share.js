$(function (){
    ShowAllQuestions();
})


function ShowAllQuestions(){
    $.get("/post/getAllPost",{},function (data){
        let parentArea='<div class="card"></div>';
        // if (data.length>0){
        //     for (let i=0;i<data.length;i++){
        //         $("#title").text(data[i].title);
        //         $("#postUser").text(data[i].uid);
        //         $("#time").text(data[i].time);
        //         $("#content").text(data[i].content);
        //     }
        // }else {
        //     layer.msg('网络不在状态呢');
        // }
        if (data.length>0){
            for (let i = 0; i <data.length; i++) {
                let postContent = ' <div class="card-body  mt-5 bg-white" style="border-radius: 30px"><h5 id="title" class="card-title text-success">'+data[i].title+'<button class="ms-5 fa fa-thumbs-up bg-warning" style="border: none">'+data[i].liked+'</button></h5> <h6 id="postUser" class="card-subtitle mb-2 text-muted mt-2">'+'用户名称待修复'+' <span id="time">'+data[i].time+'</span></h6><p id="content" class="card-text">'+data[i].content+'</p></div>';
                parentArea+=postContent;
                $("#postArea").html(parentArea);
            }
        }else {
            layer.msg('网络不在状态呢');
        }
    })
}