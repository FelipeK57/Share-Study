function reDirigir(){
    window.location.href = "/";
}

function redirigirRegistrarse(){
    window.location.href = "Logging.html"
}

function redirigirCodigo(){
    window.location.href = "Recover_password_code.html"
}

function focusNext(current, nextInputId) {

    if (current.value.length === parseInt(current.getAttribute('maxlength'))) {

        if (nextInputId) {
            document.getElementById(nextInputId).focus();
        }
    }
}
