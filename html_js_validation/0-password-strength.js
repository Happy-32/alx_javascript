const form = document.getElementById('passwordForm');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const password = document.getElementById('password').value;
    validatePassword(password)
    this.submit();
});


function validatePassword(password){
    
/////////////Functions////////////////////////
    function upperCase(password){
        return /[A-Z]/.test(password);
    }

    function lowerCase(password){
        return /[a-z]/.test(password);
    }

    function hasNumber(password){
        for(let i=0;i<password.length;i++){
            if(!isNaN(parseInt(password[i]))){
                return true
            }
        }return false;
    }

    function hasSpecialCharacter(str) {
        return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str);
    }
/////////////////////End of functions//////////////////////////////////////

    if (password.length < 8) {
        // alert('Password must have at least 8 characters');
        let message = 'Password must have at least 8 characters';
        localStorage.setItem('errorMessage',message);
    } else if (!hasNumber(password)) {
        // alert('Password must contain at least one number');
        let message1 = 'Password must have at least one number';
        localStorage.setItem('errorMessage',message1);
    } else if (!upperCase(password)) {
        // alert('Password must have at least one uppercase letter');
        let message2 = 'Password must have at least one uppercase letter';
        localStorage.setItem('errorMessage',message2);
    } else if (!hasSpecialCharacter(password)) {
        // alert('Password must contain at least one special character');
        let message3 = 'Password must have at least one special character';
        localStorage.setItem('errorMessage',message3);
    } else if (!lowerCase(password)) {
        // alert('Password must contain at least one lowercase letter');
        let message4 = 'Password must have at least one lowercase letter';
        localStorage.setItem('errorMessage',message4);
    } else {
        return password;
    }
}

window.addEventListener('load', function() {
    let errorMessage = localStorage.getItem('errorMessage');
    if (errorMessage) {
        let errorElement = document.getElementById('error');
        let errorMessageNode = document.createTextNode(errorMessage);
        errorElement.appendChild(errorMessageNode);
        localStorage.removeItem('errorMessage');
    }
});