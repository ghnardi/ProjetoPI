function clickVoltar() {
    window.history.back();
}

let email = sessionStorage.EMAIL_USUARIO
let nome = sessionStorage.NOME_USUARIO
let data = sessionStorage.DT_NASC

const i_email = document.getElementById("i_email")
const i_nome = document.getElementById("i_nome")
const i_dtnasc = document.getElementById("i_dtnasc")
const i_senhaatual = document.getElementById("i_senhaatual")
const i_senhanovaconfirmar = document.getElementById("i_senhanovaconfirmar")

i_email.value = email
i_nome.value = nome
i_dtnasc.value = data

function atualizarSenha(){
    const span_erro = document.getElementById("span_erro");
    span_erro.style.color = 'red'
    var senha_atual = i_senhaatual.value;
    var senha_nova = i_senhanova.value;
    var senha_confirmar = i_senhanovaconfirmar.value;
  
    if (senha_atual == senha_nova) {
      span_erro.innerHTML = `Ambas as senhas são iguais`;
    } else if (senha_nova != senha_confirmar) {
      span_erro.innerHTML = `As senhas não coincidem`;
    } else if(senha_nova.length < 6) {
      span_erro.innerHTML = `A senha precisa ter no mínimo 6 caracteres.`
    } else {
      verificarsenha(senha_atual, function (error, senhaExiste) {
        if (error) {
          console.error(error);
          return;
        }
  
        if (senhaExiste) {
            fetch("/usuarios/atualizarsenha", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  senhaNovaServer: senha_nova,
                  idServer: sessionStorage.ID_USUARIO,
                }),
              })
                .then(function (resposta) {
                  if (resposta.ok) {
                    setTimeout(function () {
                       span_erro.innerHTML = `Senha atualizada com sucesso!`;
                       span_erro.style.color = `green`;
                    }, 500);
                  } else {
                    throw new Error("Houve um erro ao atualizar a senha!");
                  }
                })
                .catch(function (erro) {
                  console.log(erro);
                });
         
              return false;
            } else {
               span_erro.style.display = "block";
               span_erro.innerHTML = "Essa não é sua senha atual!";
            }
          });
        }
      }

function verificarsenha(senha, callback) {
    var idVar = sessionStorage.ID_USUARIO
    fetch("/usuarios/verificarsenha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senha_atualServer: senha,
        idServer: idVar
      }),
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Erro na verificação da senha");
        }
      })
      .then(function (data) {
        callback(null, data.senhaExiste);
      })
      .catch(function (error) {
        console.error(error);
        callback(error);
      });
  }



function atualizarDados() {

    var nomeVar = i_nome.value;
    var emailVar = i_email.value;
    var idVar = sessionStorage.ID_USUARIO
    var dataVar = i_dtnasc.value


        fetch("/usuarios/atualizarDados", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nomeServer: nomeVar,
                emailServer: emailVar,
                dataServer: dataVar,
                idServer: idVar
            })
        })

        .then(function (resposta) {

                    
        if(resposta.status == 204) {
      }
            console.log("ESTOU NO THEN DO entrar()!")
    
            if (resposta.ok) {
                console.log(resposta);
                alert("Dados alterados com sucesso :)")
                // resposta.json().then(json => {
                //     console.log(json);
                //     console.log(JSON.stringify(json));
    
                sessionStorage.EMAIL_USUARIO = i_email.value;
                sessionStorage.NOME_USUARIO = i_nome.value;
                sessionStorage.DT_NASC = i_dtnasc.value
                    
                //     setTimeout(function () {
                //         window.location = "../PaginaInicial/home.html";
                //     }, 1000); // apenas para exibir o loading
    
                // });
    
            } else {
    
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

