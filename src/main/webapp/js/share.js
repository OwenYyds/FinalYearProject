


function ShowAllQuestions(){
    $.ajax({
        type: "GET",
        url: "/question/getAll",
        data: {},
        dataType: "json",
        success: function (data) {
            $(".hot-game-bg").each(function (index) {
                $(this).css({
                    "background": "url(../images/GameImage/" + res[index].gameimage,
                    "background-size": "cover",
                    "background-position": "center center"
                })
            })
            $(".hot-game-text").each(function (index) {
                $(this).text(data[index].cname);
            })
        },
        error: function () {
            alert("加载数据失败");
        }
    })
}