$(function(){
    allGameLoad();
    gameAdd();
    gameDelete();
    allUserLoad();
    userDelete();
    allCommentsLoad()
})

function allGameLoad() {
    $.ajax({
        type: "GET",
        url: "/games/getAll",
        data: {},
        dataType: "json",
        success: function (res) {
            let data = [];
            for (let i = 0; i < res.length; i++) {
                let element = `<tr><td>${res[i]['gameid']}</td>
                <td>${res[i]['gameimage']}</td>
                <td>${res[i]['cname']}</td>
                <td>${res[i]['ename']}</td>
                <td>${res[i]['category']}</td>
                <td>${res[i]['score']}</td>
                <td>${res[i]['developer']}</td>
                <td>${res[i]['date']}</td>
                <td>${res[i]['profile']}</td></tr>`
                data.push(element);
            }
            let head = `<tr>
            <th class="gameID">游戏ID</th>
            <th class="gameImage">游戏图片</th>
            <th class="Cname">中文名称</th>
            <th class="Ename">英文名称</th>
            <th class="category">游戏分类</th>
            <th class="score">游戏评分</th>
            <th class="developer">开发商</th>
            <th class="date">发行日期</th>
            <th class="profile">游戏简介</th>
        </tr>`
            
            $('.game-load').empty();
            $('.game-load').append(head);
            $('.game-load').append(data.join(''));
            

        }
    })
}

function gameAdd(){
    $('#game-add-form').on('submit',function(e){
        e.preventDefault();
        let data = $('#game-add-form').serializeArray();
        console.log(data);
        console.log(data[0].value);
        $.ajax({
            type:"POST",
            url:"/games/addGame",
            data: {
                'gameID1':data[0].value,
                'gameImage':data[1].value,
                'cname':data[2].value,
                'ename':data[3].value,
                'category':data[4].value,
                'score':data[5].value,
                'developer':data[6].value,
                'date':data[7].value,
                'profile':data[8].value,
            },
            dataType:"text",
            success: function(res){
                allGameLoad();
                $('#game-add').modal('hide');
                $('#game-add-form').find('input').each(function(){
                    $(this).val('');
                })
                $('#profile').text('');
            }
        })
    })
}

function gameDelete(){
    $('#game-delete-form').on('submit',function(e){
        e.preventDefault();
        let data = $('.deleteGameID').val();
        $.ajax({
            type:"POST",
            url:"/games/addGame",
            data: {
                'deleteGameID': data
            },
            dataType:"text",
            success: function(res){
                allGameLoad();
                $('#game-delete').modal('hide');
                $('#game-delete-form').find('input').each(function(){
                    $(this).val('');
                })
            }
        })
    })
}

function allUserLoad(){
    $.ajax({
        type: "GET",
        url: "/users/getAllUser",
        data: {},
        dataType: "json",
        success: function (res) {
            let data = [];
            for (let i = 0; i < res.length; i++) {
                let element = `<tr><td>${res[i]['userid']}</td>
                <td>${res[i]['username']}</td>
                <td>${res[i]['password']}</td>
                <td>${res[i]['nickname']}</td>
                <td>${res[i]['head']}</td>
                <td>${res[i]['gender']}</td>
                <td>${res[i]['profile']}</td>
                <td>${res[i]['loved']}</td>
                <td>${res[i]['birthday']}</td></tr>`
                data.push(element);
            }
            let head = `<tr>
            <th>用户ID</th>
            <th>用户名</th>
            <th>密码</th>
            <th>昵称</th>
            <th>头像</th>
            <th>性别</th>
            <th>简介</th>
            <th>爱好</th>
            <th>生日</th>
        </tr>`
            
            $('.user-load').empty();
            $('.user-load').append(head);
            $('.user-load').append(data.join(''));
            

        }
    })
}

function userDelete(){
    $('#user-delete-form').on('submit',function(e){
        e.preventDefault();
        let data = $('.deleteUserID').val();
        $.ajax({
            type:"POST",
            url:"/users/deleteUser",
            data: {
                'userID': data
            },
            dataType:"text",
            success: function(res){
                allUserLoad();
                $('#user-delete').modal('hide');
                $('#user-delete-form').find('input').each(function(){
                    $(this).val('');
                })
            }
        })
    })
}


function allCommentsLoad(){
    $.get("/comments/getAllComments",{},function (data){
        if (data.length>0){
            console.log(data);
            let res = [];
            for (let i = 0; i < data.length; i++) {
                console.log(data[i].cid)
                let element = `<tr><td>${data[i].cid}</td>
                <td>${data[i].gid}</td>
                <td>${data[i].uid}</td>
                <td>${data[i].time}</td>
                <td>${data[i].comments}</td>
                `
                res.push(element);
            }
            let head = `<tr>
            <th>留言ID</th>
            <th>游戏ID</th>
            <th>用户ID</th>
            <th>时间</th>
            <th>留言内容</th>
        </tr>`
            $('.comments-load').empty();
            $('.comments-load').append(head);
            $('.comments-load').append(res.join(''));
        }
    })
}