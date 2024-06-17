let alertPasswordMessageElement = document.getElementById('alert-password');
    let passwordInputElement = document.getElementById('password');
    let alertUsernameMessageElement = document.getElementById('alert-username');
    let usernameInputElement = document.getElementById('username')
    let btnLoginElement = document.getElementById('loginBtn')

    btnLoginElement.addEventListener('click', ()=>{
        if(passwordInputElement.value){
            alertPasswordMessageElement.style.display = "none";
            passwordInputElement.classList.remove('border-red-500');
    }
        else {
            alertPasswordMessageElement.style.display = "block";
            passwordInputElement.classList.add('border-red-500');
        }
        if(usernameInputElement.value){
            alertUsernameMessageElement.style.display = "none";
            usernameInputElement.classList.remove('border-red-500');
    }
        else {
            alertUsernameMessageElement.style.display = "block";
            usernameInputElement.classList.add('border-red-500');
        }    
    });