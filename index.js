
var isRegister = false;
var isInputPasswordAgain = document.getElementById("inputPasswordAgain");
var isRealName = document.getElementById("name");
var title = document.getElementById("title");
var sign_up = document.getElementById("sign-up");

sign_up.addEventListener("click", function(){
    isRegister = !isRegister;
    if(isRegister){
        title.innerText = 'SIGN UP';
        sign_up.innerText = '(*)Đã có tài khoản?';
        isRealName.style.display = 'block';
        isInputPasswordAgain.style.display = 'block';
    }

    else{
        title.innerText = 'LOG IN';
        sign_up.innerText = '(*)Chưa có tài khoản?';
        isRealName.style.display = 'none';
        isInputPasswordAgain.style.display = 'none';
    }

})

