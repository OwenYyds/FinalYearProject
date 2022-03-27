$('#postBtn').click(function () {
	let a = $('#content').html().serializeArray();
	console.log(a)
	let b = a;
	if (!a) {
		alert('发布内容不能为空');
		$('#content').focus();
		return false;
	}
	$('.list').append(b);//显示多行评论

	$('#content').html('');
});