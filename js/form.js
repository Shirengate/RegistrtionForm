
/* I настройка логина при нажатии на кнопку сабмит
    1) проверить, что поля username и password заполнены(не пробелами)
    2) при нажатии на текст Remember Me флажок тоже ставился
    3) при неверном пароле или юзере подсвечивать формы красным цветом и выдавать ошибку
    4) при верном вводе перенаправлять на home.html
*/

        
/* II настройка регистрации при нажатии на кнопку сабмит
    + 1) user - содержит минимум 8 символов, максимум - 16 (пробелы не считать + их исключать)
    + 2) password - минмум 8 символов, максимум - 32 (2 Заглвных буквы минимум, 2 цифры минимум  + 1 спец. символ из набора ["/", ".", "_","!","?"]])
    + 3) email - должен быть вида useremail@emailname.emaildomen 
    + 4) отправка данных и перезагрузка страницы
*/


document.addEventListener('DOMContentLoaded', function(){
    /// начало настройки регистрации 
    function validateEmail(email) {
        return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    };
    function validPassword(password){
        const regex = /^(?=(.*[A-Z]){2})(?=(.*\d){2})(?=.*[\W_]).{8,32}$/;

        // Проверка, что пароль не содержит пробелов и соответствует регулярному выражению
        if (password.includes(' ')) {
          return false; // Пароль содержит пробелы
        }
      
        return regex.test(password);
    }
    function validUsername(user) { 
    const regex = /^[A-Za-z0-9]+$/
        if((user.length >= 8 && user.length <= 16) && regex.test(user)){
            return user
        };
     };
    $('.registerBtn').click(function(e){
        data = {  // получение данных регистрации 
            username:$('#username').val(),
            password:$('#password').val(),
            confirmedPass:$('#conpas').val(),
            email:$('#email').val()
        }
        if(validUsername(data.username)){ 
            if(data.password === data.confirmedPass){
                if(validPassword(data.password)){
                    if(validateEmail(data.email)){
                        const index = {   /// 
                            username:$('#username').val(),
                            password:$('#password').val(),
                            email:$('#email').val()
                        }
                        $.ajax({
                            type: "post",
                            url: "https://jsonplaceholder.typicode.com/posts", /// ссылка на бд
                            data: index,
                            dataType: "json",
                            success: function (response) {
                                window.location.href = 'index.html';
                                //console.log(response)
                            },
                            error:function(error){
                                console.log('ERROR',error)
                                console.log(error.status)
                                if(error.status === 0){
                                    alert('Пользователь зарегистрирован')
                                }
                            }
                        });
                    }else{
                        $('#email').css('border','2px solid black')
                    }
                }else{
                    $('.passwordValidate').css('color','red')
                }
            }else{
                $('#conpas').val('')
                $('#conpas').css({
                    'border':'2px solid red'
                });

            }
        }else{
            $('.usernameValidate').css('color','red');
        }
        e.preventDefault();

    })
    /// конец формы регистрации



    /// настройки логина

    $('.logIn').click(function(e){
        e.preventDefault();
        const body = {
            username:$('#loginus').val(),
            password:$('#loginpass').val(),
            rememberMe:document.querySelector('#checkbox').checked
        }
        const rememberMe = $('#checkbox').val();

        $.ajax({
            type: "post",
            url: "https://jsonplaceholder.typicode.com/posts",
            data: body,
            dataType: "json",
            success: function (response) {
                window.location.href = "pages/home.html";
            },
            error:function(error){
                $('#loginpass').css('border','2px solid red');
                alert('Произошла ошибка, попробуйте еще раз',error.status)
            }
        });
    })
    // конец логина 

    /// Общие ajax настройки
})