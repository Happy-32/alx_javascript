const form = document.getElementById('emailForm');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    validateEmail(email);
    this.submit();
});

function validateEmail(email) {
    function emailCheck(email) {
        if (email.includes("@") && email.includes(".")) {
            const [username, domain] = email.split("@");
    
            if (username && domain) {
                if (domain.includes(".")) {
                    return true;
                }
            }
        }
        return false;
    }


    if (!emailCheck(email)) {
        let message = 'Please enter a valid email';
        localStorage.setItem('errorMessage', message);
    } else {
        return email;
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
