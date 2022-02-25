$(function(){
    let flag = 0;
    userLoad();
    $('.loved-box>input').attr('disabled',"disabled");
    $('#loved-btn').on('click',function(e){
        e.preventDefault();
        if(flag == 0){
            $('.loved-box>input').removeAttr('disabled');
            $(this).attr('value',"提交更改");
            $(this).attr('type','submit');
            flag =1;
            $('#loved-btn').on("click",function(){
                lovedEdit();
            })
        }else{
            $('.loved-box>input').attr('disabled',"disabled");
            $(this).attr('value',"点击编辑");
            $(this).attr('type','button');
            flag = 0;
        }
    })
    $('#userInfoEditForm').on('submit',function(e){
        e.preventDefault();
        userInfoEdit();
    })
    $('#userHeadEditForm').on('submit',function(e){
        e.preventDefault();
        headEdit();
    })


})

function userLoad(){
    $.ajax({
        type:"GET",
        url: "/users/getUser",
        data: {},
        dataType: "json",
        success: function(res){
            console.log(res);
            let loved = res.loved;
            console.log("LOVED"+loved)
            $('.getUsername').text(res['nickname']?res['nickname']:res['userID']);
            $('.getGender').text(res['gender']?res['gender']:"保密");
            $('.getBirthday').text(res['birthday']?res['birthday']:"保密");
            $('.getUserID').text(res['userID']);
            $('.getProfile').text(res['profile']?res['profile']:"这个人很懒，什么都没有写");
            $('#userHeadImage').attr('src',res['head']?"../images/HeadImage/"+res['head']:"../images/HeadImage/head0.jpg");
            $(".headInput").each(function(index){
                if($(this).val() == res['head']){
                    $(this).attr('checked','checked');
                }
            })
            loved = res['loved'].split(';')
            $('.loved-box').each(function(index){
               for(let i = 0; i<loved.length;i++){
                if(index == parseInt(loved[i])){
                    $(this).find('input').attr('checked','checked');
                }
               }
            })
            $('#editNickname').attr('value',res['nickname']?res['nickname']:res['userID']);
            if(res['gender'] == "男"){
                $('#sex1').attr('checked','checked');
            }
            else if(res['gender'] == "女"){
                $('#sex2').attr('checked','checked');
            }else{
                $('#sex3').attr('checked','checked');
            }
            $('#editBirthday').val(res['birthday']);
            $('#editProfile').text(res['profile']?res['profile']:"这个人很懒，什么都没有写");
        }
    })
}

function userInfoEdit(){
    let data = $('#userInfoEditForm').serializeArray();
    $.ajax({
        type:"POST",
        url:"/users/edit",
        data:{"nickname":data[0].value,"gender":data[1].value,"birthday":data[2].value,"profile":data[3].value},
        dataType:"text",
        success: function(res){
            if(res != 0){
                userLoad();
                $("#edit-userInfo").modal('hide');
            }
            else{
                alert("修改失败");
            }
        }
    })
}

function lovedEdit(){
    let arry = [];
    $(".loved-box>input").each(function(index){
        if($(this).is(':checked')){
            arry.push(index);
        }
    })
    console.log("数据为："+arry.join(";"));
    let data = arry.join(";");
    $.ajax({
        type: "POST",
        url:"/users/edit",
        data: {"loved":data},
        dataType: "text",
        success: function(){
            userLoad();
        }
    })
}

function headEdit(){
    let head = $("#userHeadEditForm").serializeArray();
    let data = head[0].value;

    $.ajax({
        type:"POST",
        url:"/users/edit",
        data:{"head":data},
        dataType:"text",
        success: function(){
            $("#userHeadEdit").modal('hide');
            userLoad();
        }
    })
}