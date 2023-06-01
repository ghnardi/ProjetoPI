function dashboardIcon(n) {
    window.location.href = "./dashs/chart.html?parametro=" + n;
  }


function validarSessao(){
    var email = sessionStorage.EMAIL_USUARIO
    var nome = sessionStorage.NOME_USUARIO
    const bt_login = document.querySelectorAll(".bt_login")
    const textomenuperfil = document.getElementById("textomenuperfil")
    const iconmenuperfil = document.getElementById("iconmenuperfil")
    const nomeconta = document.querySelectorAll(".nomeconta")
    const contaemail = document.querySelectorAll(".contaemail")
    
    if (email != null && nome != null){
        bt_login[0].style.display = 'none'
        textomenuperfil.style.display = 'flex'
        iconmenuperfil.style.display = 'flex'
        textomenuperfil.innerHTML = nome
        nomeconta[0].innerHTML = nome
        contaemail[0].innerHTML = email

        verificarAdmin()
    }
}

function verificarAdmin(){
    const adminconta  = document.querySelectorAll(".adminconta")
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
                if (json.fkAdmin == null){
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
