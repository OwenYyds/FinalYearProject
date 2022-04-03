$(function () {
    ShowAllQuestions();
})


function ShowAllQuestions() {
    $.get("/post/getAllPost", {}, function (data) {
        let parentArea = '<div class="card"></div>';
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
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                let postContent = ' <div class="card-body  mt-5 bg-white" style="border-radius: 30px"><h5 id="title" class="card-title text-success">' + data[i].title + '<button class="ms-5 fa fa-thumbs-up bg-warning" style="border: none">' + data[i].liked + '</button></h5> <h6 id="postUser" class="card-subtitle mb-2 text-muted mt-2">' + '用户名称待修复' + ' <span id="time">' + data[i].time + '</span></h6><p id="content" class="card-text">' + data[i].content + '</p></div>';
                parentArea += postContent;
                $("#postArea").html(parentArea);
            }
        } else {
            layer.msg('网络不在状态呢');
        }
    })
}

// function getUser() {
//     let result;
//     $("#postBtn").click(function () {
//         $.get("/users/getUser", {}, function (data) {
//             if (data.length < 1) {
//                 result = false;
//                 return "false";
//             } else {
//                 result =true;
//                 return "true";
//                 console.log(data);
//             }
//         })
//     })
// }

function getPostTime() {
    let myDate = new Date();
    //获取当前年
    let year = myDate.getFullYear();
    //获取当前月
    let month = myDate.getMonth() + 1;
    //获取当前日
    let date = myDate.getDate();
    let h = myDate.getHours();
    let m = myDate.getMinutes();
    if (m < 10) m = '0' + m;
    let s = myDate.getSeconds();
    if (s < 10) s = '0' + s;
    let now = year + '-' + month + "-" + date + " " + h + ':' + m + ":" + s;
    return now;
}


$("#post").click(function () {
    $.get("/users/getUser", {}, function (data) {
        if (data.length < 1) {
            layer.msg('请登录后操作！！');
        } else {
            let time = getPostTime();
            let userId = data.userid;
            let postContentTitle = $("#recipient-name").val();
            let postContent = $("#message-text").val();
            if (postContentTitle != null && postContent != null) {
                $.post("/post/newPost", {
                    "content": postContent,
                    "title": postContentTitle,
                    "uid": userId,
                    "time": time
                }, function (data) {
                    if (data=true){
                        layer.msg("发送成功！！！")
                        $("#exampleModal").modal('hide');
                        $("#recipient-name").val('');
                        $("#message-text").val('');
                        ShowAllQuestions();
                    }else {
                        layer.msg("服务器相应失败！！！")
                    }
                })
            } else {
                layer.msg('请把内容补充完整哦！');
            }
        }
    })
})


