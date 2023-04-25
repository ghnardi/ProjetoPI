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
    window.location.href = '../PaginaGerenciarConta/gerenciar.html#aqui'
    window.scrollTo(0, 230);
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

financeiro1.style.display = 'none'
function ir_financeiro() {
    const financeiro1 = document.getElementById('financeiro1');
    window.scrollTo(0, 230);

    if (financeiro1.style.display == 'none'){
        financeiro1.style.display = 'flex'
    } else {
        financeiro1.style.display = 'none'
    }
}


// FUNÇÃO DO SIMULADOR EM SI





function calcular() {

    /* Variáveis de captação dos dados do usuário */
    var tipo = input_tipo.value;
    var qtdpequenas = Number(input_pequenas.value);
    var qtdmedias = Number(input_medias.value);
    var qtdgrandes = Number(input_grandes.value);
    var condicao = input_temp.value;
    var tamanho = Number(input_tamanho.value);
    var tempo = Number(input_tempo.value);

    /* Variáveis iniciais de valor */
    var valorpequenas = qtdpequenas * 8000;
    var valormedias = qtdmedias * 12000;
    var valorgrandes = qtdgrandes * 40000;
    var totalvalorobra = 0;

    /* Variáveis de taxação dependendo da resposta do usuário */
    var instalacao = 2000;
    var manutencao = 1500;
    var qtdsensor = 0;
    var totalservico = 0;
    var taxaescultura = 1.5;
    var taxapintura = 1.2;
    var taxaambos = 1.7;
    var taxacondicao = 1.2;

    /* Variáveis para planos mais extensos*/
    var total6meses = 0;
    var total1ano = 0;

    /* Variáveis booleanas */
    var tipo_escultura = (tipo == "Escultura");
    var tipo_pintura = (tipo == "Pintura");
    var tipo_ambos = (tipo == "Ambos");
    var condicao_sim = (condicao == "Sim");
    var condicao_nao = (condicao == "Não");
    var tamanho_muito_pequeno = (tamanho > 0 && tamanho <= 20);
    var tamanho_pequeno = (tamanho > 20 && tamanho <= 40);
    var tamanho_medio = (tamanho > 40 && tamanho <= 60);
    var tamanho_grande = (tamanho > 60 && tamanho <= 80);
    var tamanho_muito_grande = (tamanho > 80 && tamanho <= 100);

    /* Variáveis finais de valor e tempo */
    var totalvalorrestauracao = 0;
    var preju = 0;
    var prejus40 = 0;
    var prejus60 = 0;
    var tempo40 = tempo * 1.4;
    var tempo60 = tempo * 1.6;

    if (tipo_escultura) {

        valorpequenas = valorpequenas * 1.5;
        valormedias = valormedias * 1.5;
        valorgrandes = valorgrandes * 1.5;

        if (condicao_sim) {
            if (tamanho_muito_pequeno) {
                instalacao = instalacao * 1;
                manutencao = manutencao * 1;
                qtdsensor = 1;
                totalservico = (((instalacao + manutencao) * taxacondicao) * taxaescultura);
            } else if (tamanho_pequeno) {
                qtdsensor = 2;
                instalacao = instalacao * qtdsensor;
                manutencao = manutencao * 1.8;
                totalservico = (((instalacao + manutencao) * taxacondicao) * taxaescultura);
            } else if (tamanho_medio) {
                qtdsensor = 3;
                manutencao = manutencao * 2.7;
                instalacao = instalacao * qtdsensor;
                totalservico = (((instalacao + manutencao) * taxacondicao) * taxaescultura);
            } else if (tamanho_grande) {
                qtdsensor = 4;
                manutencao = manutencao * 3.6;
                instalacao = instalacao * qtdsensor;
                totalservico = (((instalacao + manutencao) * taxacondicao) * taxaescultura);
            } else if (tamanho_muito_grande) {
                qtdsensor = 5;
                manutencao = manutencao * 4.5;
                instalacao = instalacao * qtdsensor;
                totalservico = (((instalacao + manutencao) * taxacondicao) * taxaescultura);
            }
        } else if (condicao_nao) {
            if (tamanho_muito_pequeno) {
                qtdsensor = 1;
                manutencao = manutencao * 1;
                instalacao = instalacao * qtdsensor;
                totalservico = ((instalacao + manutencao) * taxaescultura);
            } else if (tamanho_pequeno) {
                qtdsensor = 2;
                instalacao = instalacao * qtdsensor;
                manutencao = manutencao * 1.8;
                totalservico = ((instalacao + manutencao) * taxaescultura);
            } else if (tamanho_medio) {
                qtdsensor = 3;
                manutencao = manutencao * 2.7;
                instalacao = instalacao * qtdsensor;
                totalservico = ((instalacao + manutencao) * taxaescultura);
            } else if (tamanho_grande) {
                qtdsensor = 4;
                manutencao = manutencao * 3.6;
                instalacao = instalacao * qtdsensor;
                totalservico = ((instalacao + manutencao) * taxaescultura);
            } else if (tamanho_muito_grande) {
                qtdsensor = 5;
                manutencao = manutencao * 4.5;
                instalacao = instalacao * qtdsensor;
                totalservico = ((instalacao + manutencao) * taxaescultura);
            }
        }
    } else if (tipo_pintura) {
        if (condicao_sim) {
            if (tamanho_muito_pequeno) {
                instalacao = instalacao * 1;
                manutencao = manutencao * 1;
                qtdsensor = 1;
                totalservico = (((instalacao + manutencao) * taxacondicao) * taxapintura);
            } else if (tamanho_pequeno) {
                qtdsensor = 2;
                instalacao = instalacao * qtdsensor;
                manutencao = manutencao * 1.8;
                totalservico = (((instalacao + manutencao) * taxacondicao) * taxapintura);
            } else if (tamanho_medio) {
                qtdsensor = 3;
                manutencao = manutencao * 2.7;
                instalacao = instalacao * qtdsensor;
                totalservico = (((instalacao + manutencao) * taxacondicao) * taxapintura);
            } else if (tamanho_grande) {
                qtdsensor = 4;
                manutencao = manutencao * 3.6;
                instalacao = instalacao * qtdsensor;
                totalservico = (((instalacao + manutencao) * taxacondicao) * taxapintura);
            } else if (tamanho_muito_grande) {
                qtdsensor = 5;
                manutencao = manutencao * 4.5;
                instalacao = instalacao * qtdsensor;
                totalservico = (((instalacao + manutencao) * taxacondicao) * taxapintura);
            }
        } else if (condicao_nao) {
            if (tamanho_muito_pequeno) {
                qtdsensor = 1;
                manutencao = manutencao * 1;
                instalacao = instalacao * qtdsensor;
                totalservico = ((instalacao + manutencao) * taxapintura);
            } else if (tamanho_pequeno) {
                qtdsensor = 2;
                instalacao = instalacao * qtdsensor;
                manutencao = manutencao * 1.8;
                totalservico = ((instalacao + manutencao) * taxapintura);
            } else if (tamanho_medio) {
                qtdsensor = 3;
                manutencao = manutencao * 2.7;
                instalacao = instalacao * qtdsensor;
                totalservico = ((instalacao + manutencao) * taxapintura);
            } else if (tamanho_grande) {
                qtdsensor = 4;
                manutencao = manutencao * 3.6;
                instalacao = instalacao * qtdsensor;
                totalservico = ((instalacao + manutencao) * taxapintura);
            } else if (tamanho_muito_grande) {
                qtdsensor = 5;
                manutencao = manutencao * 4.5;
                instalacao = instalacao * qtdsensor;
                totalservico = ((instalacao + manutencao) * taxapintura);
            }
        }
    } else if (tipo_ambos) {

        valorpequenas = valorpequenas * 1.25;
        valormedias = valormedias * 1.25;
        valorgrandes = valorgrandes * 1.25;

        if (condicao_sim) {
            if (tamanho_muito_pequeno) {
                instalacao = instalacao * 1;
                manutencao = manutencao * 1;
                qtdsensor = 1;
                totalservico = (((instalacao + manutencao) * taxacondicao) * taxaambos);
            } else if (tamanho_pequeno) {
                qtdsensor = 2;
                instalacao = instalacao * qtdsensor;
                manutencao = manutencao * 1.8;
                totalservico = (((instalacao + manutencao) * taxacondicao) * taxaambos);
            } else if (tamanho_medio) {
                qtdsensor = 3;
                manutencao = manutencao * 2.7;
                instalacao = instalacao * qtdsensor;
                totalservico = (((instalacao + manutencao) * taxacondicao) * taxaambos);
            } else if (tamanho_grande) {
                qtdsensor = 4;
                manutencao = manutencao * 3.6;
                instalacao = instalacao * qtdsensor;
                totalservico = (((instalacao + manutencao) * taxacondicao) * taxaambos);
            } else if (tamanho_muito_grande) {
                qtdsensor = 5;
                manutencao = manutencao * 4.5;
                instalacao = instalacao * qtdsensor;
                totalservico = (((instalacao + manutencao) * taxacondicao) * taxaambos);
            }
        } else if (condicao_nao) {
            if (tamanho_muito_pequeno) {
                qtdsensor = 1;
                manutencao = manutencao * 1;
                instalacao = instalacao * qtdsensor;
                totalservico = ((instalacao + manutencao) * taxaambos);
            } else if (tamanho_pequeno) {
                qtdsensor = 2;
                instalacao = instalacao * qtdsensor;
                manutencao = manutencao * 1.8;
                totalservico = ((instalacao + manutencao) * taxaambos);
            } else if (tamanho_medio) {
                qtdsensor = 3;
                manutencao = manutencao * 2.7;
                instalacao = instalacao * qtdsensor;
                totalservico = ((instalacao + manutencao) * taxaambos);
            } else if (tamanho_grande) {
                qtdsensor = 4;
                manutencao = manutencao * 3.6;
                instalacao = instalacao * qtdsensor;
                totalservico = ((instalacao + manutencao) * taxaambos);
            } else if (tamanho_muito_grande) {
                qtdsensor = 5;
                manutencao = manutencao * 4.5;
                instalacao = instalacao * qtdsensor;
                totalservico = ((instalacao + manutencao) * taxaambos);
            }
        }
    }

    total6meses = ((totalservico * 6) * 0.9);
    total1ano = ((totalservico * 12) * 0.75);
    span_museu.innerHTML = `O preço mensal do nosso serviço, incluindo instalação e manutenção é de <b>R$${totalservico}</b>. O plano de 6 meses fica em <b>R$${total6meses}</b>, enquanto o de 1 ano fica em <b>R$${total1ano}</b> <br><br>`;


    totalvalorobra = valorpequenas + valormedias + valorgrandes
    totalvalorrestauracao = (valorpequenas + valormedias + valorgrandes) / 5;
    preju = totalvalorobra * 0.12;
    prejus40 = preju * 0.6;
    prejus60 = preju * 0.4;
    span_museu.innerHTML += `Com base nos nossos cálculos suas obras são estimadas em <b>R$${totalvalorobra}</b>, com uma possibilidade de perda de <b>R$${preju}</b> por motivos de temperatura e umidade. <br>
    Com a ajuda dos nossos serviços esperamos que esse prejuízo possa ser reduzido para uma faixa de <b>R$${prejus60} - R$${prejus40}</b>. <br><br>
    O valor de uma restauração total de seu inventário ficaria em média <b>R$${totalvalorrestauracao}</b>, que deveria ser realizada a cada <b>${tempo} anos</b>  com base nos dados inseridos. <br> 
    Com o monitoramento e controle ideal da temperatura e da umidade, a necessidade de uma restauração só seria percebida em um intervalo de <b>${tempo40} a ${tempo60} anos.</b>`;
}