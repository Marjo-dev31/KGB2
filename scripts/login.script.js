let alertMessageElement = document.getElementById('alert');
let passwordInputContent = document.getElementById('password').value;
let btnLoginElement = document.getElementById('loginBtn')

function displayAlertMessage () {
    if(!passwordInputContent){
alertMessageElement = 'block';    
    }
}

btnLoginElement.addEventListener('click', displayAlertMessage)