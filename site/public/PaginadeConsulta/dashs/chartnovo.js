setInterval(atualizarGrafico, 1000);

function dashboard() {
    window.location.href = "../consulta.html"
}

function clickVoltar() {
    window.location.href = "../consulta.html"
}

function gerenciarconta(){
    window.location.href = '../../PaginaGerenciarConta/gerenciar.html'
}

function logout(){
    window.location.href = "../../PáginaInicial/home.html"
}

function home() {
    window.location.href = "../../PáginaInicial/home.html"
}

function cadastrar() {
    window.location.href = "../PáginaCadastro/cadastro.html"
}

function atualizarGrafico (n){

    fetch("/usuarios/atualizarGrafico", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })

    .then(function (resposta) {         
        console.log("ESTOU NO THEN DO Ellie()!")

        if (resposta.ok) {
            console.log(resposta);
            resposta.json().then(resposta => {
                resposta.reverse();
                console.log(resposta)
              for (i = 0; i < 6; i++) {
                if (umidades[0].length < 6){
                    umidades[0][i] = (resposta[i].umidade)
                } 
                if(temperaturas[0].length < 6) {
                    temperaturas[0][i] = (resposta[i].temperatura)
                }
              }
            });
            plotarGrafico(0)
        } else {

            console.log("Houve um erro ao tentar enviar o grafico dados!");



            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
    
    return false;

}

function plotarGrafico(n) {
    grafico_linha_setor.update()
    data_setor.datasets[0].data = umidades[n].shift();
    data_setor.datasets[1].data = temperaturas[n].shift();
}


const setor_linha = document.getElementById('grafico_setor');

// A CONSTANTE ABAIXO RECEBERÁ FUTURAMENTE OS VALORES DO ARDUÍNO, ATUALMENTE SÃO VALORES MANUAIS PARA DEMOSNTRAÇÃO.
var temperatura_setor1 = [];
var temperatura_setor2 = [];
var temperatura_setor3 = [];
var temperatura_setor4 = [];
var temperatura_setor5 = [];
var temperatura_setor6 = [];

var umidade_setor1 = [];
var umidade_setor2 = [];
var umidade_setor3 = [];
var umidade_setor4 = [];
var umidade_setor5 = [];
var umidade_setor6 = [];

var dataHora_setor1 = [];
var dataHora_setor2 = [];
var dataHora_setor3 = [];
var dataHora_setor4 = [];
var dataHora_setor5 = [];
var dataHora_setor6 = [];



const temperaturas = [temperatura_setor1,temperatura_setor2,temperatura_setor3,temperatura_setor4,temperatura_setor5,temperatura_setor6]
const umidades = [umidade_setor1,umidade_setor2,umidade_setor3,umidade_setor4,umidade_setor5,umidade_setor6]
const dataHora = [dataHora_setor1,dataHora_setor2,dataHora_setor3,dataHora_setor4,dataHora_setor5, dataHora_setor6]





const data_setor = {
    labels: dataHora,
    datasets: [{
        label: 'Temperatura',
        data: temperaturas[0],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2

    }, {

        label: 'Umidade',
        data: umidades[0],
        backgroundColor: '#1d8d8e',
        borderColor: '#1d8d8e',
        borderWidth: 2
    }
    ]
};

// A CONSTANTE ABAIXO GUARDA OS VALORES DA TEMPERATURA E UMIDADE EM FORMATO DE VETOR, SERÁ "TRANSFORMADO" EM NÚMERO MAIS ADIANTE.
// RECEBE OS DADOS DO SETOR 6, DENTRO DO DATASETS, ACHA (FIND) NO DATASET.LABEL DA TEMPERATURA OU DA UMIDADE.

const config_setor = {
    type: 'line',
    data: data_setor,
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                ticks: {
                    beginAtZero: true,
                    color: '#2E2109;',
                    font: {
                        size: 18,
                        family: 'Montserrat Ace',
                        weight: 500
                    }
                },
            },
            x: {
                ticks: {
                    color: '#2E2109;',
                    font: {
                        size: 18,
                        family: 'Montserrat Ace',
                        weight: 500
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'SETOR 2',
                font: {
                    size: 18,
                    color: 'black',
                    family: 'Montserrat Ace',
                    weight: 800
                }

            },
            legend: {
                labels: {
                    font: {
                        size: 18,
                        family: 'Montserrat Ace',
                        weight: 500
                    }
                }
            }
        }
    }
};

const grafico_linha_setor = new Chart(setor_linha, config_setor);

/* GRAFICO BARRA */

const grafico_barra_canva = document.getElementById('graficobarra');

const labels_barra = [
    'Setor 1',
    'Setor 2',
    'Setor 3',
    'Setor 4',
    'Setor 5',
    'Setor 6',
];

// USANDO A MÉDIA QUE OBTIVEMOS COM OS GRÁFICOS DE LINHA, ALIMENTAMOS OS VALORES DO GRÁFICO DE BARRAS.

function mediaArray(vetor) {
    soma = 0;
    for (i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    return soma / vetor.length
}

const temperatura_grafico_barra = [];
const umidade_grafico_barra = [];

const data_grafico_barra = {
    labels: labels_barra,
    datasets: [{
        label: 'Temperatura',
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderColor: 'rgba(255, 99, 132, 1)',
        data: temperatura_grafico_barra,
    }, {
        label: 'Umidade',
        backgroundColor: '#1d8d8e',
        borderColor: '#1d8d8e',
        data: umidade_grafico_barra,
    }
    ]
};

const config_grafico_barra = {
    type: 'bar',
    data: data_grafico_barra,
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                ticks: {
                    beginAtZero: true,
                    color: '#2E2109;',
                    font: {
                        size: 18,
                        family: 'Montserrat Ace',
                        weight: 500
                    }
                },
            },
            x: {
                ticks: {
                    color: '#2E2109;',
                    font: {
                        size: 18,
                        family: 'Montserrat Ace',
                        weight: 500
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'SALA 12345',
                font: {
                    size: 18,
                    color: 'black',
                    family: 'Montserrat Ace',
                    weight: 800
                }
            },
            legend: {
                labels: {
                    font: {
                        size: 18,
                        family: 'Montserrat Ace',
                        weight: 500
                    }
                }
            }
        }
    }
}

const grafico_barra = new Chart(grafico_barra_canva, config_grafico_barra);