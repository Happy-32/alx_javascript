const form = document.getElementById('dynamicForm');
form.addEventListener('submit', function(event){
    event.preventDefault();
    if (validateForm()){
        this.submit();
    }
});

const dropdown = document.getElementById('numFields')
const valueSelected = dropdown.value;

function generateInputFields(valueSelected){
    const inputcontainer = document.getElementById('inputContainer');

    inputcontainer.innerHTML = '';

    for (let i=0; i<valueSelected; i++){
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.name = 'field' + i;
        inputcontainer.appendChild(inputField);
    }
}

dropdown.addEventListener('change', function(){
    const valueSelected = dropdown.value;
    generateInputFields(valueSelected);
});

function validateForm(){
    const inputFields = document.querySelectorAll('input');

    for (let i=0; i<inputFields.length;i++){
        if (inputFields[i].value.trim()===''){
            alert('Please fill in all fields');
            return false
        }
    }
    return true;
}