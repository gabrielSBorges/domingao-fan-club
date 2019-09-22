function validaSubscribe(event) {
    let nome = document.getElementById("nome");
    let telefone = document.getElementById("telefone");
    let email = document.getElementById("email");
    let data = document.getElementById("data");
    var gender = document.formSubscribe.gender;
    

    let regexNome = /^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$/;
    let regexFone = /^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$/;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexData = /^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/;


    if (!regexNome.test(nome.value)) {
        alert('Preencha o campo "Nome" corretamente!');
        nome.focus();
        event.preventDefault();
    } else if (!regexFone.test(telefone.value)) {
        alert('Preencha o campo "Telefone" corretamente!');
        telefone.focus();
        event.preventDefault();
    } else if (!regexEmail.test(email.value)) {
        alert('Preencha o campo "E-mail" corretamente!');
        email.focus();
        event.preventDefault();
    } else if (!regexData.test(data.value)) {
        alert('Preencha o campo "Data de nascimento" corretamente!');
        data.focus();
        event.preventDefault();
    } else if (isEmpty(gender.value)) {
        alert('Selecione o seu gênero sexual!');
        event.preventDefault();
    }
}

function confirmClick() {
    let confirm = document.formSubscribe.confirm;
    let btnSubmit = document.getElementById("btn-submit");

    if (confirm.checked) {
        btnSubmit.disabled = false;
        btnSubmit.classList.remove("block");
    } else {
        btnSubmit.disabled = true;
        btnSubmit.classList.add("block");
    }
}

function isEmpty(value) {
    if (value == null) {
        return true;
    }
    
    if (typeof value == 'undefined' || value == 'undefined') {
        return true;
    }

    if (typeof value == 'boolean') {
        return false;
    }

    if (Array.isArray(value)) {
        if (value.length <= 0) {
            return true;
        }
    }

    if (typeof value == 'string') {
        value = value.replace(/ /g, "");
    
        if (value.length <= 0) {
            return true;
        }
    }

    if (!isNaN(value)) {
        if (value == 0 || value == '0' || value == 0.0 || value == '0.0' || value == 0.00 || value == '0.00') {
            return true;
        }
    }

    return false;
}