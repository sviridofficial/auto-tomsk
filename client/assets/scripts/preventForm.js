import {fetchData} from "./fetchData.js";

export const preventForm = () => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    const name = document.getElementById("validationCustom01");
    const email = document.getElementById("validationCustom02");
    const description = document.getElementById("validationCustom03");


    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach( (form) => {
        form.addEventListener('submit', (event) => {

            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
            fetchData(name.value, email.value, description.value);
        }, false)
    })
};



