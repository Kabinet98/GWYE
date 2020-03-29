$(function(){
        let username = $('#username').val();
        let password = $('#password').val();
        let url = $(this).attr('action');
        let csrfmiddlewaretoken = $('input[name="csrfmiddlewaretoken"]').val();
        $('#logoutButton').hide();
    $('#form').on('submit', function(e){
        $('.alert').remove();
        e.preventDefault();
        if($('#username').val() === '')
        {
            $('#form').before('<div class="alert alert-danger">Username field cannot be empty</div>');
        }
        else if($('#password').val() === '')
        {
            $('#form').before('<div class="alert alert-danger">Password field cannot be empty</div>');
        }

        $.ajax({
            method: 'post',
            url: url,
            data: {username:username,password:password, csrfmiddlewaretoken:csrfmiddlewaretoken},
            success:function(user){
                if(user === 'No')
                {
                    $('#form').before('<div class="alert alert-danger">Username or password incorrect</div>');
                }
                else
                {
                    $('#loginModal').hide();
                    $('#login').hide();
                    $('#logoutButton').show();
                    location.reload();
                    console.log(user.username +''+user.password);
                }

            }
        });

    });
});