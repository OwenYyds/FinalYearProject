$(function () {
    xboxHotGameLoad();
    xboxGameInfo()
    //Allgames page bgimg "background": "url(../images/GameImage/game1.jpg"
    // $('.game-area').css({"background-color": "gray"})
})

function xboxGameInfo() {
    $('.gameList').on('click','.gameList-item', function () {
        let text = $(this).find('.game-name').text();
        $.ajax({
            type: "GET",
            url: "/games/getAll",
            data: {},
            dataType: "json",
            success: function (res) {
                console.log(text);
                for (let i = 0; i < res.length; i++) {
                    if (res[i]['cname'] == text) {
                        $('#gameName').text(res[i]['cname']);
                        $('#game-pc').attr('src', "../images/GameImage/" + res[i]['gameimage']);
                        $('#game-info-cname').text(res[i]['cname']);
                        $('#game-info-ename').text(res[i]['ename']);
                        $('#game-info-developer').text(res[i]['developer']);
                        $('#game-info-date').text(res[i]['date']);
                        $('.game-profile').text(res[i]['profile']);
                        let score = parseInt(res[i]['score']);
                        let point = Math.ceil(score/20);
                        $('.star').each(function(index){
                            $(this).removeClass('star-checked');
                        })
                        $('.star').each(function(index){
                            if(index<point){
                                $(this).addClass('star-checked');
                            }
                        })

                    }
                }

            }
        })


    })


}

function xboxHotGameLoad() {
    $.ajax({
        type: "GET",
        url: "/games/getAll",
        data: {},
        dataType: "json",
        success: function (res) {
            console.log("数据为：" + res);
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

$(function () {
    $('.news-ticker').marquee({
        duration: 10000,
        //gap in pixels between the tickers
        //gap: 200,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    });
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });
})
