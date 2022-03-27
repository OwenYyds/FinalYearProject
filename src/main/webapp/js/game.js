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
        console.log(text)
        $.ajax({
            type: "GET",
            url: "/games/getAll",
            data: {},
            dataType: "json",
            success: function (res) {
                let a = [];
                for (let i = 0; i < res.length; i++) {
                    if (res[i]['cname'] == text) {
                        console.log(res[i]['cname'])
                        $('#gameName').text(res[i]['cname']);
                        $('#game-pc').attr('src', "../images/GameImage/" + res[i]['gameimage']);
                        $('#game-info-cname').text(res[i]['cname']);
                        $('#game-info-ename').text(res[i]['ename']);
                        $('#game-info-developer').text(res[i]['developer']);
                        $('#game-info-date').text(res[i]['date']);
                        $('.game-profile').text(res[i]['profile']);
                        let gameid = res[i].gameid;
                        $.get("/comments/getCommentOfThisGame", {"gameid": gameid}, function (data) {
                            for (let j = 0; j < data.length; j++) {
                                let commentList = '<div class="card"><div class="card-body"><h6 id="postUser" class="card-subtitle mb-2 text-muted">大聪明</h6><p id="postComment" class="card-text">'+data[j].comments+'</p>  </div>  </div>';
                                console.log(data[j]['comments']);
                                // $("#postComment").text(data[j]['comments']);
                            $("#commentList").html(commentList);
                            }
                        })


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

