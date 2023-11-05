const form = document.getElementById('submitForm');
form.addEventListener('submit',handleFormSubmit)


function handleFormSubmit(event){
    event.preventDefault()
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;


    if (name.trim()=='' || email.trim()===''){
        const errorContainer = document.createElement('p')
        errorContainer.id = 'error'
        errorContainer.textContent = 'Please fill in all the required fields';
        const form = document.getElementById('submitForm');
        form.appendChild(errorContainer);
        // alert('Please fill in all the required fields');
    }
    else{
        const errorContainer = document.createElement('p')
        errorContainer.id = 'error'
        errorContainer.textContent = 'Form submitted sucessfully';
        const form = document.getElementById('submitForm');
        form.appendChild(errorContainer);
    }
}
