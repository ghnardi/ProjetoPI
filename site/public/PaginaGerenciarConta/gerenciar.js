function clickVoltar() {
    window.history.back();
}

let email = sessionStorage.EMAIL_USUARIO
let nome = sessionStorage.NOME_USUARIO
let data = sessionStorage.DT_NASC

const i_email = document.getElementById("i_email")
const i_nome = document.getElementById("i_nome")
const i_dtnasc = document.getElementById("i_dtnasc")


i_email.value = email
i_nome.value = nome