function dashboardIcon(n) {
    window.location.href = "./dashs/chart.html?parametro=" + n;
}


function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO
    var nome = sessionStorage.NOME_USUARIO
    const bt_login = document.querySelectorAll(".bt_login")
    const textomenuperfil = document.getElementById("textomenuperfil")
    const iconmenuperfil = document.getElementById("iconmenuperfil")
    const nomeconta = document.querySelectorAll(".nomeconta")
    const contaemail = document.querySelectorAll(".contaemail")

    if (email != null && nome != null) {
        bt_login[0].style.display = 'none'
        textomenuperfil.style.display = 'flex'
        iconmenuperfil.style.display = 'flex'
        textomenuperfil.innerHTML = nome
        nomeconta[0].innerHTML = nome
        contaemail[0].innerHTML = email

        verificarAdmin()
    }
}

function validarSessaoDashs() {
    var email = sessionStorage.EMAIL_USUARIO
    var nome = sessionStorage.NOME_USUARIO
    const textomenuperfil = document.getElementById("textomenuperfil")
    const iconmenuperfil = document.getElementById("iconmenuperfil")
    const nomeconta = document.querySelectorAll(".nomeconta")
    const contaemail = document.querySelectorAll(".contaemail")

    if (email != null && nome != null) {
        textomenuperfil.style.display = 'flex'
        iconmenuperfil.style.display = 'flex'
        textomenuperfil.innerHTML = nome
        nomeconta[0].innerHTML = nome
        contaemail[0].innerHTML = email
        verificarAdmin()
    } else {
        window.location = "../PáginaInicial/home.html"
    }
}

function verificarAdmin() {
    const adminconta = document.querySelectorAll(".adminconta")
    const cadastrarusuario = document.querySelectorAll(".cadastrarusuario")

    fetch("/usuarios/verificarAdmin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idServer: sessionStorage.ID_USUARIO
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                console.log(json.fkAdmin)
                if (json.fkAdmin == null) {
                    adminconta[0].style.display = 'flex'
                    cadastrarusuario[0].style.display = 'flex'
                } else {
                    adminconta[0].style.display = 'none'
                    cadastrarusuario[0].style.display = 'none'
                }

            });

        } else {
            spanErro.style.display = "block"
            spanErro.innerHTML = "E-mail ou senha inválido";
            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}


// MENU SUPORTE
const botaoSuporte = document.getElementById("botaoSuporte")
const botaoSuporteMensagem = document.getElementById("botaoSuporteMensagem")
const menuSuporte = document.querySelectorAll(".menuSuporte")
const suporteFechar = document.getElementById("suporteFechar")
const botaoSuporteIcon = document.getElementById("botaoSuporteIcon")
const i_email = document.getElementById("i_email")
const i_assunto = document.getElementById("i_assunto")
const i_msg = document.getElementById("i_msg")

if (sessionStorage.EMAIL_USUARIO == null) {
    botaoSuporte.style.display = 'none'
} else {
    botaoSuporte.addEventListener("mouseover", function () {
        if (menuSuporte[0].style.display == '' || menuSuporte[0].style.display == 'none') {
            botaoSuporteMensagem.style.display = 'flex'
            botaoSuporteMensagem.style.animationName = "suporteA";
            botaoSuporteMensagem.style.animationFillMode = "forwards";
            botaoSuporteMensagem.style.animationDuration = "1s";
        } else {
            botaoSuporteMensagem.style.display = 'none'
        }

    })


    function aparecerMensagemBotao() {
        if (menuSuporte[0].style.display == '' || menuSuporte[0].style.display == 'none') {
            botaoSuporteMensagem.style.display = 'flex'
            botaoSuporteMensagem.style.animationName = "suporteA";
            botaoSuporteMensagem.style.animationFillMode = "forwards";
            botaoSuporteMensagem.style.animationDuration = "1s";
        } else {
            botaoSuporteMensagem.style.display = 'none'
        }
    }

    botaoSuporte.addEventListener("mouseleave", function () {
        botaoSuporteMensagem.style.animationName = "suporteB";
        botaoSuporteMensagem.style.animationFillMode = "forwards";
        botaoSuporteMensagem.style.animationDuration = "0.5s";
    })

    botaoSuporte.addEventListener("click", function () {
        if (botaoSuporteIcon.innerHTML === 'send') {
            if (i_email.value == '' || i_assunto.value == '' || i_msg.value == '') {
                alert("Todos os campos precisam estar preenchidos!")
            } else {
                relatarProblema()
            }
        }


        botaoSuporteMensagem.style.display = 'none'
        menuSuporte[0].style.display = 'flex'
        menuSuporte[0].style.animationName = "suporteA";
        menuSuporte[0].style.animationFillMode = "forwards";
        menuSuporte[0].style.animationDuration = "0.5s";

        if (menuSuporte[0].style.display == 'none' || menuSuporte[0].style.display == '') {
            botaoSuporteIcon.innerHTML = 'warning'
        } else {
            botaoSuporteIcon.innerHTML = 'send'
        }
    })


    suporteFechar.addEventListener("click", function () {
        menuSuporte[0].style.display = 'none'
        menuSuporte[0].style.animationName = "suporteB";
        menuSuporte[0].style.animationFillMode = "forwards";
        menuSuporte[0].style.animationDuration = "0.5s";

        if (menuSuporte[0].style.display == 'none' || menuSuporte[0].style.display == '') {
            botaoSuporteIcon.innerHTML = 'warning'
        } else {
            botaoSuporteIcon.innerHTML = 'send'
        }
    })

}


function relatarProblema() {
    const i_assunto = document.getElementById("i_assunto")
    const i_msg = document.getElementById("i_msg")


    const remetente = sessionStorage.EMAIL_USUARIO;
    const assunto = i_assunto.value;
    const corpo = i_msg.value;

    fetch('/relatar-problema', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ remetente, assunto, corpo }),
    })
        .then(function (response) {
            if (response.ok) {
                console.log('E-mail enviado com sucesso!');
                alert("E-mail enviado com sucesso!")
                limparInputs()
            } else {
                console.log('Erro ao enviar o e-mail.');
            }
        })
        .catch(function (error) {
            console.log('Erro ao enviar o e-mail:', error);
        });
}
