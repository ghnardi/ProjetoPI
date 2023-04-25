

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

function cadastrar() {
    window.location.href = "../PáginaCadastro/cadastro.html"
}

tecnologiaBloco.style.backgroundColor = '#F0EBDF'
financeiroBloco.style.backgroundColor = '#F0EBDF'
parceriaBloco.style.backgroundColor = '#F0EBDF'
cadastroBloco.style.backgroundColor = '#F0EBDF'

function categoriaTecnologia() {
    financeiroBloco.style.backgroundColor = '#F0EBDF'
    financeiroBloco.style.color = '#493510'
    parceriaBloco.style.backgroundColor = '#F0EBDF'
    parceriaBloco.style.color = '#493510'
    cadastroBloco.style.backgroundColor = '#F0EBDF'
    cadastroBloco.style.color = '#493510'

    if (tecnologiaBloco.style.backgroundColor == 'rgb(240, 235, 223)') {
        blocaoMarromInfo.style.display = 'flex'
        blocaoMarrom.style.display = 'none'

//deixar selecionado
        categoriaExibida.innerHTML = 'Tecnologia'
        fraseExibida.innerHTML = 'ESPECIFICAÇÃO DHT11<br>Microcontrolador: Arduino Uno <br> Dimensões: 23mm x 12mm x 5mm (incluindo terminais), a Alimentação: 3,0 a 5,0 VDC (5,5 Vdc máximo), a Corrente de 200uA a 500mA, em stand by de 100uA a 150 uA, a Faixa de medição de umidade: 20 a 90% UR, a Faixa de medição de temperatura: 0º a 50ºC, a Precisão de umidade de medição: ± 5,0% UR, a Precisão de medição de temperatura: ± 2.0 ºC, o Tempo de resposta: < 5s<br>'
        fraseExibida.style.fontSize = '1.9vmax'
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
    cadastroBloco.style.backgroundColor = '#F0EBDF'
    cadastroBloco.style.color = '#493510'



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
    cadastroBloco.style.backgroundColor = '#F0EBDF'
    cadastroBloco.style.color = '#493510'


    if (parceriaBloco.style.backgroundColor == 'rgb(240, 235, 223)') {
        blocaoMarromInfo.style.display = 'flex'
        blocaoMarrom.style.display = 'none'

//deixar selecionado
        categoriaExibida.innerHTML = 'Parceria'
        fraseExibida.innerHTML = 'Nós sabemos o quão valiosas são as suas obras de arte e o quão importante é mantê-las em perfeito estado para que possam ser apreciadas por muitas gerações. Com a nossa tecnologia de última geração, podemos garantir que as suas obras de arte estejam sempre protegidas. Ao fechar uma parceria conosco, você terá acesso a uma equipe de especialistas altamente qualificados em conservação de obras de arte e uma tecnologia avançada de monitoramento. Com isso, você terá a tranquilidade de saber que suas obras de arte estão sendo protegidas de maneira adequada, permitindo que elas possam ser apreciadas por muitas gerações. Não deixe que suas obras de arte sofram danos irreparáveis por conta de condições ambientais inadequadas. Fechar uma parceria com a Arttech é uma maneira de garantir que as suas obras de arte sejam preservadas em perfeito estado para serem apreciadas por muitas gerações. Entre em contato conosco para saber mais sobre nossos serviços e como podemos ajudá-lo a preservar suas obras de arte.'
        fraseExibida.style.fontSize = '1.2vmax'
        fraseExibida.style.display = 'flex'
        parceriaBloco.style.backgroundColor = '#493510'
        parceriaBloco.style.color = '#F0EBDF'
    }
}

function categoriaConsulta() {
    tecnologiaBloco.style.backgroundColor = '#F0EBDF'
    tecnologiaBloco.style.color = '#493510'
    financeiroBloco.style.backgroundColor = '#F0EBDF'
    financeiroBloco.style.color = '#493510'
    parceriaBloco.style.backgroundColor = '#F0EBDF'
    parceriaBloco.style.color = '#493510'

    if (cadastroBloco.style.backgroundColor == 'rgb(240, 235, 223)') {
        blocaoMarromInfo.style.display = 'flex'
        blocaoMarrom.style.display = 'none'

//deixar selecionado
        categoriaExibida.innerHTML = 'Consulta aos Dados'
        fraseExibida.innerHTML = 'A consulta aos dados é de uma forma intuitiva e dinâmica, nós tratamos os dados e apresentamos a você, cliente, dentro de uma página na qual abstém de uma visão geral de todos os sensores instalados na sua localidade. Com isso, mostramos as informações mais importantes, como umidade e temperatura atual e de forma didática demonstramos a atual situação, se é está estável ou não, caso deseje acessar uma visão mais especifica de determinado sensor, você terá acesso a uma outra página redirecionando a dashboard de gráficos que lhe permitirão examinar com precisão determinados dados.'
        fraseExibida.style.fontSize = '1.9vmax'
        fraseExibida.style.display = 'flex'
        cadastroBloco.style.backgroundColor = '#493510'
        cadastroBloco.style.color = '#F0EBDF'
    }
    
}
