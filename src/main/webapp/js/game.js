$(function () {
    allGameLoad();
    category();
    gameSearch();
    gameInfoShow();
    //Allgames page bgimg "background": "url(../images/GameImage/game1.jpg"
    // $('.game-area').css({"background-color": "gray"})
})


function category() {
    $('#category').on('change', function () {
        let value = $('#category>option:selected').val();
        if (value == "全部游戏") {
            allGameLoad();
        } else {
            $.ajax({
                type: "POST",
                url: "/games/search",
                data: {"category": value},
                dataType: "json",
                success: function (res) {
                    let data = [];
                    for (let i = 0; i < res.length; i++) {
                        let element = `<li class="gameList-item col-lg-3 col-md-4 col-6">
                        <div class="game-frame"  href="#gameInfo" data-bs-toggle="modal">
                            <img src="../images/GameImage/${res[i]['gameimage']}">
                            <div class="score-show">
                                <div class="score">${res[i]['score']}</div>
                            </div>
                        </div>
                        <div class="game-name">${res[i]['cname']}</div>
                    </li>`
                        data.push(element);
                    }
                    $('.gameList').empty().append(data.join(''));
                }
            })
        }

    })

}

function allGameLoad() {
    $.ajax({
        type: "GET",
        url: "/games/getAll",
        data: {},
        dataType: "json",
        success: function (res) {
            let data = [];
            for (let i = 0; i < res.length; i++) {
                let element = `<li class="gameList-item col-lg-3 col-md-4 col-6">
                <div class="game-frame"  href="#gameInfo" data-bs-toggle="modal">
                    <img src="../images/GameImage/${res[i]['gameimage']}">
                    <div class="score-show">
                        <div class="score">${res[i]['score']}</div>
                    </div>
                </div>
                <div class="game-name">${res[i]['cname']}</div>
            </li>`
                data.push(element);
            }
            $('.gameList').empty().append(data.join(''));

        }
    })
}

function gameSearch() {
    $('.search-btn').on('click', function () {
        let data = $('.search-input').val();
        $.ajax({
            type: "POST",
            url: "/games/search",
            data: {"search": data},
            dataType: "json",
            success: function (res) {
                let data = [];
                for (let i = 0; i < res.length; i++) {
                    let element = `<li class="gameList-item col-lg-3 col-md-4 col-6">
                    <div class="game-frame"  href="#gameInfo" data-bs-toggle="modal">
                        <img src="../images/GameImage/${res[i]['gameimage']}">
                        <div class="score-show">
                            <div class="score">${res[i]['score']}</div>
                        </div>
                    </div>
                    <div class="game-name">${res[i]['cname']}</div>
                </li>`
                    data.push(element);
                }
                $('.gameList').empty().append(data.join(''));
            }
        })
    })
}

function gameInfoShow() {
    $('.gameList').on('click', '.gameList-item', function () {
        let text = $(this).find('.game-name').text();
        $.ajax({
            type: "GET",
            url: "/games/getAll",
            data: {},
            dataType: "json",
            success: function (res) {

                for (let i = 0; i < res.length; i++) {
                    let parentCommentArea = '<div class="card bg-info"></div>';
                    if (res[i]['cname'] == text) {
                        // console.log(res[i]['cname'])
                        $('#gameName').text(res[i]['cname']);
                        $('#game-pc').attr('src', "../images/GameImage/" + res[i]['gameimage']);
                        $('#game-info-cname').text(res[i]['cname']);
                        $('#game-info-ename').text(res[i]['ename']);
                        $('#game-info-developer').text(res[i]['developer']);
                        $('#game-info-date').text(res[i]['date']);
                        $('.game-profile').text(res[i]['profile']);
                        let gameid = res[i].gameid;
                        $.get("/comments/getCommentOfThisGame", {"gameid": gameid}, function (data) {
                            if (data != []) {
                                for (let j = 0; j < data.length; j++) {
                                    console.log(data)
                                    let commentList = '<div class="card-body bg-light mt-3 rounded-pill"><h6 id="postUser" class="card-subtitle mb-2 text-muted text-warning">' + +'<span class="ms-5">' + data[j].time + '</span></h6><p id="postComment" class="card-text">' + data[j].comments + '</p>  </div>';
                                    parentCommentArea += commentList;
                                    $("#commentList").html(parentCommentArea);
                                    // $("#commentList").html(commentList);
                                }
                            }else {
                                // $("#postComment").text("目前还没有评论哦");
                                // console.log(data[j]['comments']);
                                // $("#postComment").text(data[j]['comments']);

                            }
                        })

                        //post
                        $('#postBtn').click(function () {
                            $.get("/users/checkUser", {}, function (data) {
                                if (data != null) {
                                    console.log(data.userid);
                                    let uid = data.userid;
                                    let uname = data.username;
                                    let postComments = $('#content').val();
                                    console.log(postComments);
                                    let b = postComments;
                                    if (postComments) {
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
                                        $.post("/comments/addComments", {
                                            "uid": uid,
                                            "gid": gameid,
                                            "comments": postComments,
                                            "time": now
                                        }, function () {
                                            alert("评论成功！！！")
                                            let addContent = '<div class="card-body bg-light mt-3 rounded-pill"><h6 id="postUser" class="card-subtitle mb-2 text-muted text-warning">' + uname + '<span class="ms-5">' + now + '</span></h6><p id="postComment" class="card-text">' + postComments + '</p></div>';
                                            $("#commentList").append(addContent);
                                        })
                                    } else {
                                        alert('发布内容不能为空');
                                        $('#content').focus();
                                    }
                                    $("#content").val("");
                                    $('').append(b);//turn on multiple comments
                                } else {
                                    alert("请登录后操作！！！")
                                    window.location.href = "L&R.html";
                                }
                            })
                        });


                        let score = parseInt(res[i]['score']);
                        let point = Math.ceil(score / 20);
                        $('.star').each(function (index) {
                            $(this).removeClass('star-checked');
                        })
                        $('.star').each(function (index) {
                            if (index < point) {
                                $(this).addClass('star-checked');
                            }
                        })

                    }
                }


            }
        })


    })


}


