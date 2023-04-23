

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
    window.location.href = '../PaginaGerenciarConta/gerenciar.html'
}

function logout(){
    window.location.href = "../PáginaInicial/home.html"
}
function home() {
    window.location.href = "../PáginaInicial/home.html"
}

tecnologiaBloco.style.backgroundColor = '#F0EBDF'
financeiroBloco.style.backgroundColor = '#F0EBDF'
parceriaBloco.style.backgroundColor = '#F0EBDF'


function categoriaTecnologia() {
    financeiroBloco.style.backgroundColor = '#F0EBDF'
    financeiroBloco.style.color = '#493510'
    parceriaBloco.style.backgroundColor = '#F0EBDF'
    parceriaBloco.style.color = '#493510'

    if (tecnologiaBloco.style.backgroundColor == 'rgb(240, 235, 223)') {
        blocaoMarromInfo.style.display = 'flex'
        blocaoMarrom.style.display = 'none'

//deixar selecionado
        categoriaExibida.innerHTML = 'Tecnologia'
        fraseExibida.innerHTML = 'ESPECIFICAÇÃO DHT11<br><br> Dimensões: 23mm x 12mm x 5mm (incluindo terminais)<br>Alimentação: 3,0 a 5,0 VDC (5,5 Vdc máximo)<br>Corrente: 200uA a 500mA, em stand by de 100uA a 150 uA<br>Faixa de medição de umidade: 20 a 90% UR<br>Faixa de medição de temperatura: 0º a 50ºC<br>Precisão de umidade de medição: ± 5,0% UR<br>Precisão de medição de temperatura: ± 2.0 ºC<br>Tempo de resposta: < 5s<br>'
        fraseExibida.style.display = 'flex'
        tecnologiaBloco.style.backgroundColor = '#493510'
        tecnologiaBloco.style.color = '#F0EBDF'
    }
}

function categoriaFinanceiro() {
    tecnologiaBloco.style.backgroundColor = '#F0EBDF'
    tecnologiaBloco.style.color = '#493510'
    parceriaBloco.style.backgroundColor = '#F0EBDF'
    parceriaBloco.style.color = '#493510'


    if (financeiroBloco.style.backgroundColor == 'rgb(240, 235, 223)') {
        blocaoMarromInfo.style.display = 'flex'
        blocaoMarrom.style.display = 'none'
        window.location.href = '../PáginaSobre/pagina-sobre.html#aqui'
        

//deixar selecionado
        categoriaExibida.innerHTML = 'Financeiro'
        fraseExibida.style.display = 'flex'
        financeiroBloco.style.backgroundColor = '#493510'
        financeiroBloco.style.color = '#F0EBDF'
    }
}

function categoriaParceria() {
    tecnologiaBloco.style.backgroundColor = '#F0EBDF'
    tecnologiaBloco.style.color = '#493510'
    financeiroBloco.style.backgroundColor = '#F0EBDF'
    financeiroBloco.style.color = '#493510'

    if (parceriaBloco.style.backgroundColor == 'rgb(240, 235, 223)') {
        blocaoMarromInfo.style.display = 'flex'
        blocaoMarrom.style.display = 'none'

//deixar selecionado
        categoriaExibida.innerHTML = 'Parceria'
        fraseExibida.innerHTML = 'Gostaríamos de convidá-lo para uma parceria com a nossa empresa, a Arttech. Somos uma empresa que busca inovação e criatividade em todas as áreas de atuação, buscando sempre as melhores soluções para nossos clientes. Nós valorizamos muito a colaboração e estamos ansiosos para trabalhar com você, caso tenha interesse. Por favor, entre em contato conosco para discutirmos mais detalhes sobre essa parceria. Juntos, podemos construir algo realmente incrível!'
        fraseExibida.style.display = 'flex'
        parceriaBloco.style.backgroundColor = '#493510'
        parceriaBloco.style.color = '#F0EBDF'
    }
}

function categoriaCadastro() {
        window.location.href = '../PáginaCadastro/cadastro.html'
    
}
