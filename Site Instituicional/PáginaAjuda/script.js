

function clickPerfil() {
    if (subsub.style.display == 'flex') {
        subsub.style.display = 'none'
    } else {
        subsub.style.display = 'flex'
    }


}


function dashboard() {
    window.location.href = "../PaginadeConsulta/consulta.html"
}

function gerenciarconta(){
    window.location.href = '/PaginaGerenciarConta/gerenciar.html'
}


tecnologiaBloco.style.backgroundColor = '#F0EBDF'
financeiroBloco.style.backgroundColor = '#F0EBDF'


function categoriaTecnologia() {
    financeiroBloco.style.backgroundColor = '#F0EBDF'
    financeiroBloco.style.color = '#493510'

    if (tecnologiaBloco.style.backgroundColor == 'rgb(240, 235, 223)') {
        blocaoMarromInfo.style.display = 'flex'
        blocaoMarrom.style.display = 'none'

//deixar selecionado
        categoriaExibida.innerHTML = 'Tecnologia'
        fraseExibidaFinanceiro.style.display = 'flex'
        tecnologiaBloco.style.backgroundColor = '#493510'
        tecnologiaBloco.style.color = '#F0EBDF'
    }
}

function categoriaFinanceiro() {
    tecnologiaBloco.style.backgroundColor = '#F0EBDF'
    tecnologiaBloco.style.color = '#493510'

    if (financeiroBloco.style.backgroundColor == 'rgb(240, 235, 223)') {
        blocaoMarromInfo.style.display = 'flex'
        blocaoMarrom.style.display = 'none'

//deixar selecionado
        categoriaExibida.innerHTML = 'financeiro'
        fraseExibidaFinanceiro.style.display = 'flex'
        financeiroBloco.style.backgroundColor = '#493510'
        financeiroBloco.style.color = '#F0EBDF'
    }
}