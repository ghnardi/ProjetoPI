window.onload = atualizarGrafico()

setInterval(atualizarGrafico, 500);


const temperaturas = [temperatura_setor1, temperatura_setor2,temperatura_setor3, temperatura_setor4,temperatura_setor5, temperatura_setor6];
const umidades = [umidade_setor1, umidade_setor2,umidade_setor3, umidade_setor4,umidade_setor5, umidade_setor6];
const dataHora = [dataHora_setor1, dataHora_setor2,dataHora_setor3, dataHora_setor4,dataHora_setor5, dataHora_setor6];

var dataHora_setor1 = [];
var dataHora_setor2 = [];
var dataHora_setor3 = [];
var dataHora_setor4 = [];
var dataHora_setor5 = [];
var dataHora_setor6 = [];



// CONSTANTE É QUASE A MESMA COISA QUE UM VAR(íavel), A DIFERENÇA É QUE UMA CONSTANTE AO RECEBER UM VALOR, 
// NÃO PODE SER ALTERADO DEPOIS, TORNANDO MAIS "SEGURO" DE SER USADO EM UM PROJETO COM MUITOS VALORES.

headericon3.style.display = 'none'
headericon4.style.display = 'none'
headericon5.style.display = 'none'
headericon6.style.display = 'none'

// Função do Menu Flutuante
function clickPerfil() {
    if (subsub.style.display == 'flex') {
        subsub.style.display = 'none'
    } else {
        subsub.style.display = 'flex'
    }


}

// FUNCOES DE LINK DA PAGINA, PARA RETORNAR OU MANDAR PARA OUTRO LOCAL HTML
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

const labels_linha = [
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
];


// GRÁFICO SETOR 1   
const setor1 = document.getElementById('graficosetor1');
setor1.style.display = 'block';

// A CONSTANTE ABAIXO RECEBERÁ FUTURAMENTE OS VALORES DO ARDUÍNO, ATUALMENTE SÃO VALORES MANUAIS PARA DEMOSNTRAÇÃO.
var temperatura_setor1 = [];
var umidade_setor1 = [];

console.log(umidade_setor1)

const data_setor1 = {
    labels: labels_linha,
    datasets: [{
        label: 'Temperatura',
        data: temperatura_setor1,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2

    }, {

        label: 'Umidade',
        data: umidade_setor1,
        backgroundColor: '#1d8d8e',
        borderColor: '#1d8d8e',
        borderWidth: 2
    }
    ]
};

// A CONSTANTE ABAIXO GUARDA OS VALORES DA TEMPERATURA E UMIDADE EM FORMATO DE VETOR, SERÁ "TRANSFORMADO" EM NÚMERO MAIS ADIANTE.
// RECEBE OS DADOS DO SETOR 6, DENTRO DO DATASETS, ACHA (FIND) NO DATASET.LABEL DA TEMPERATURA OU DA UMIDADE.
const valor_temp_array_setor1 = data_setor1.datasets.find(dataset => dataset.label == 'Temperatura').data;
const valor_umid_array_setor1 = data_setor1.datasets.find(dataset => dataset.label == 'Umidade').data;

const config_setor1 = {
    type: 'line',
    data: data_setor1,
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
                text: 'SETOR 1',
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

const grafico_linha_setor1 = new Chart(setor1, config_setor1);

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

            resposta.json().then(json => {
              for (i = 0; i < 6; i++) {
                if (umidades[n].length <= 6){
                    umidades[n][i] = (json[i].umidade)
                } else {
                    umidades[n][5] = (json[i].umidade);
                }
              }
            });
            plotarGrafico(n)
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
    const atualizacao_grafico_temperatura = temperaturas[n]
    const atualizacao_grafico_umidade = umidades[n]
    data_setor1.datasets[0].data = atualizacao_grafico_temperatura;
    data_setor1.datasets[1].data = atualizacao_grafico_umidade
    grafico_linha_setor1.update()
}


// GRÁFICO SETOR 2
const setor2 = document.getElementById('graficosetor2');
setor2.style.display = 'none';

// A CONSTANTE ABAIXO RECEBERÁ FUTURAMENTE OS VALORES DO ARDUÍNO, ATUALMENTE SÃO VALORES MANUAIS PARA DEMOSNTRAÇÃO.
var temperatura_setor2 = [];
var umidade_setor2 = [];

const data_setor2 = {
    labels: labels_linha,
    datasets: [{
        label: 'Temperatura',
        data: temperatura_setor2,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2

    }, {

        label: 'Umidade',
        data: umidade_setor2,
        backgroundColor: '#1d8d8e',
        borderColor: '#1d8d8e',
        borderWidth: 2
    }
    ]
};

// A CONSTANTE ABAIXO GUARDA OS VALORES DA TEMPERATURA E UMIDADE EM FORMATO DE VETOR, SERÁ "TRANSFORMADO" EM NÚMERO MAIS ADIANTE.
// RECEBE OS DADOS DO SETOR 6, DENTRO DO DATASETS, ACHA (FIND) NO DATASET.LABEL DA TEMPERATURA OU DA UMIDADE.
const valor_temp_array_setor2 = data_setor2.datasets.find(dataset => dataset.label == 'Temperatura').data;
const valor_umid_array_setor2 = data_setor2.datasets.find(dataset => dataset.label == 'Umidade').data;

const config_setor2 = {
    type: 'line',
    data: data_setor2,
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

const grafico_linha_setor2 = new Chart(setor2, config_setor2);


// GRÁFICO SETOR 3
const setor3 = document.getElementById('graficosetor3');
setor3.style.display = 'none';

// A CONSTANTE ABAIXO RECEBERÁ FUTURAMENTE OS VALORES DO ARDUÍNO, ATUALMENTE SÃO VALORES MANUAIS PARA DEMOSNTRAÇÃO.
var temperatura_setor3 = [];
var umidade_setor3 = [];

const data_setor3 = {
    labels: labels_linha,
    datasets: [{
        label: 'Temperatura',
        data: temperatura_setor3,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2
    }, {
        label: 'Umidade',
        data: umidade_setor3,
        backgroundColor: '#1d8d8e',
        borderColor: '#1d8d8e',
        borderWidth: 2
    }]
};

// A CONSTANTE ABAIXO GUARDA OS VALORES DA TEMPERATURA E UMIDADE EM FORMATO DE VETOR, SERÁ "TRANSFORMADO" EM NÚMERO MAIS ADIANTE.
// RECEBE OS DADOS DO SETOR 6, DENTRO DO DATASETS, ACHA (FIND) NO DATASET.LABEL DA TEMPERATURA OU DA UMIDADE.
const valor_temp_array_setor3 = data_setor3.datasets.find(dataset => dataset.label == 'Temperatura').data;
const valor_umid_array_setor3 = data_setor3.datasets.find(dataset => dataset.label == 'Umidade').data;

const config_setor3 = {
    type: 'line',
    data: data_setor3,
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
                }
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
                text: 'SETOR 3',
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

const grafico_linha_setor3 = new Chart(setor3, config_setor3);


// GRÁFICO SETOR 4
const setor4 = document.getElementById('graficosetor4');
setor4.style.display = 'none';

// A CONSTANTE ABAIXO RECEBERÁ FUTURAMENTE OS VALORES DO ARDUÍNO, ATUALMENTE SÃO VALORES MANUAIS PARA DEMOSNTRAÇÃO.
var temperatura_setor4 = []
var umidade_setor4 = [];

const data_setor4 = {
    labels: labels_linha,
    datasets: [{
        label: 'Temperatura',
        data: temperatura_setor4,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2
    }, {
        label: 'Umidade',
        data: umidade_setor4,
        backgroundColor: '#1d8d8e',
        borderColor: '#1d8d8e',
        borderWidth: 2
    }]
};

// A CONSTANTE ABAIXO GUARDA OS VALORES DA TEMPERATURA E UMIDADE EM FORMATO DE VETOR, SERÁ "TRANSFORMADO" EM NÚMERO MAIS ADIANTE.
// RECEBE OS DADOS DO SETOR 6, DENTRO DO DATASETS, ACHA (FIND) NO DATASET.LABEL DA TEMPERATURA OU DA UMIDADE.
const valor_temp_array_setor4 = data_setor4.datasets.find(dataset => dataset.label == 'Temperatura').data;
const valor_umid_array_setor4 = data_setor4.datasets.find(dataset => dataset.label == 'Umidade').data;

const config_setor4 = {
    type: 'line',
    data: data_setor4,
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
                text: 'SETOR 4',
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

const grafico_linha_setor4 = new Chart(setor4, config_setor4);


// GRÁFICO SETOR 5
const setor5 = document.getElementById('graficosetor5');
setor5.style.display = 'none';

// A CONSTANTE ABAIXO RECEBERÁ FUTURAMENTE OS VALORES DO ARDUÍNO, ATUALMENTE SÃO VALORES MANUAIS PARA DEMOSNTRAÇÃO.
var temperatura_setor5 = [];
var umidade_setor5 = [];

const data_setor5 = {
    labels: labels_linha,
    datasets: [{
        label: 'Temperatura',
        data: temperatura_setor5,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2
    }, {
        label: 'Umidade',
        data: umidade_setor5,
        backgroundColor: '#1d8d8e',
        borderColor: '#1d8d8e',
        borderWidth: 2
    }]
};

// A CONSTANTE ABAIXO GUARDA OS VALORES DA TEMPERATURA E UMIDADE EM FORMATO DE VETOR, SERÁ "TRANSFORMADO" EM NÚMERO MAIS ADIANTE.
// RECEBE OS DADOS DO SETOR 6, DENTRO DO DATASETS, ACHA (FIND) NO DATASET.LABEL DA TEMPERATURA OU DA UMIDADE.
const valor_temp_array_setor5 = data_setor5.datasets.find(dataset => dataset.label == 'Temperatura').data;
const valor_umid_array_setor5 = data_setor5.datasets.find(dataset => dataset.label == 'Umidade').data;

const config_setor5 = {
    type: 'line',
    data: data_setor5,
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
                text: 'SETOR 5',
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

const grafico_linha_setor5 = new Chart(setor5, config_setor5);


// GRÁFICO SETOR 6
const setor6 = document.getElementById('graficosetor6');
setor6.style.display = 'none';

// A CONSTANTE ABAIXO RECEBERÁ FUTURAMENTE OS VALORES DO ARDUÍNO, ATUALMENTE SÃO VALORES MANUAIS PARA DEMOSNTRAÇÃO.
var temperatura_setor6 = [];
var umidade_setor6 = [];

const data_setor6 = {
    labels: labels_linha,
    datasets: [{
        label: 'Temperatura',
        data: temperatura_setor6,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2
    }, {
        label: 'Umidade',
        data: umidade_setor6,
        backgroundColor: '#1d8d8e',
        borderColor: '#1d8d8e',
        borderWidth: 2
    }]
};

// A CONSTANTE ABAIXO GUARDA OS VALORES DA TEMPERATURA E UMIDADE EM FORMATO DE VETOR, SERÁ "TRANSFORMADO" EM NÚMERO MAIS ADIANTE.
// RECEBE OS DADOS DO SETOR 6, DENTRO DO DATASETS, ACHA (FIND) NO DATASET.LABEL DA TEMPERATURA OU DA UMIDADE.
const valor_temp_array_setor6 = data_setor6.datasets.find(dataset => dataset.label == 'Temperatura').data;
const valor_umid_array_setor6 = data_setor6.datasets.find(dataset => dataset.label == 'Umidade').data;

const configSetor6 = {
    type: 'line',
    data: data_setor6,
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
                text: 'SETOR 6',
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

const grafico_linha_setor6 = new Chart(setor6, configSetor6);



 /* VALIDACOES; MEDIAS; ARRAYS DE VALORES E TUDO MAIS*/


// MEDIAS

// FUNCAO PARA CALCULARA A MÉDIA, SEJA DE TEMPERATURA OU UMIDADE.

// mediaArray(array), ENTRE PARENTÊSES É OQ SERA SUBSTÍTUIDO PELOS VETORES PRESENTES NOS NOSSOS GRÁFICOS
function mediaArray(array) {

    soma = 0;
// ENQUANTO O CONTADOR (i) FOR MENOR QUE O TAMANHO DO VETOR (UMIDADE OU TEMPERATURA), 
// A VARIÁVEL SOMA SERÁ INCREMENTADA COM OS VALORES DO VETOR.
// INDICE = POSIÇÃO DO VETOR. 

    for (i = 0; i < array.length; i++) {
        soma += array[i];
    }

// POR FIM, RETORNA O VALOR CONTIDO NA SOMA DIVIDO PELO TAMANHO DO VETOR (QTD. DE VALORES)
    return soma / array.length

}

// TODAS AS CONSTANTES ABAIXO SERVEM PARA "TRANSFORMAR" AQUELES VETORES CONTIDOS EM CADA GRÁFICO DE LINHA EM NÚMEROS
//  map(NUMBER) tem a função de mapear número a número no vetor e transformálo em um valor no qual podemos trabalhar
const array_temperatura_setor1 = valor_temp_array_setor1.map(Number)
const array_umidade_setor1 = valor_umid_array_setor1.map(Number)

const array_temperatura_setor2 = valor_temp_array_setor2.map(Number)
const array_umidade_setor2 = valor_umid_array_setor2.map(Number)

const array_temperatura_setor3 = valor_temp_array_setor3.map(Number)
const array_umidade_setor3 = valor_umid_array_setor3.map(Number)

const array_temperatura_setor4 = valor_temp_array_setor4.map(Number)
const array_umidade_setor4 = valor_umid_array_setor4.map(Number)

const array_temperatura_setor5 = valor_temp_array_setor5.map(Number)
const array_umidade_setor5 = valor_umid_array_setor5.map(Number)

const array_temperatura_setor6 = valor_temp_array_setor6.map(Number)
const array_umidade_setor6 = valor_umid_array_setor6.map(Number)

//  PARA GUARDAR A MEDIA DE TEMPERATURA E UMIDADE DE CADA SETOR, CHAMAMOS A FUNÇÃO DA MÉDIA CRIADA MAIS ACIMA E SUBSTITUIMOS O (array) 
// PELO NOSSO VETOR DE VALORES.
const media_temperatura_setor1 = mediaArray(array_temperatura_setor1);
const media_temperatura_setor2 = mediaArray(array_temperatura_setor2);
const media_temperatura_setor3 = mediaArray(array_temperatura_setor3);
const media_temperatura_setor4 = mediaArray(array_temperatura_setor4);
const media_temperatura_setor5 = mediaArray(array_temperatura_setor5);
const media_temperatura_setor6 = mediaArray(array_temperatura_setor6);

const media_umidade_setor1 = mediaArray(array_umidade_setor1);
const media_umidade_setor2 = mediaArray(array_umidade_setor2);
const media_umidade_setor3 = mediaArray(array_umidade_setor3);
const media_umidade_setor4 = mediaArray(array_umidade_setor4);
const media_umidade_setor5 = mediaArray(array_umidade_setor5);
const media_umidade_setor6 = mediaArray(array_umidade_setor6);



// PARA MOSTRAR NOS CARDS DE TEMP.ATUAL/MEDIA UMID.ATUAL/MEDIA PEGAMOS O VALOR DA MÉDIA QUE GUARDAMOS ACIMA E COLOCAMOS 
// NAS DIV'S DO CARD, USANDO INNERHTML

// O QUE ESTÁ ENTRE CHAVES NO infotexto1 e 2 É PARA PEGAR SOMENTE A ÚLTIMA POSIÇÃO DO VETOR (OU SEJA, A MAIS ATUAL)
headerinfotexto.innerHTML = `${valor_umid_array_setor1[valor_umid_array_setor1.length - 1]}%`
headerinfotexto2.innerHTML = `${valor_temp_array_setor1[valor_temp_array_setor1.length - 1]}ºC`
// toFixed(1) é para mostrar apenas uma casa decimal.
headerinfotexto3.innerHTML = `${media_temperatura_setor1.toFixed(1)}ºC`
headerinfotexto4.innerHTML = `${media_umidade_setor1.toFixed(1)}%`


/*GRAFICO DE BARRA*/
const grafico_barra_canva = document.getElementById('graficobarra');

const labels_barra = [
    'Setor 1',
    'Setor 2',
    'Setor 3',
    'Setor 4',
    'Setor 5',
    'Setor 6',
];

const setorarray = [1, 2, 3, 4, 5, 6];
const labelarray = ['Temperatura', 'Umidade']

// USANDO A MÉDIA QUE OBTIVEMOS COM OS GRÁFICOS DE LINHA, ALIMENTAMOS OS VALORES DO GRÁFICO DE BARRAS.
const temperatura_grafico_barra = [media_temperatura_setor1.toFixed(1), media_temperatura_setor2.toFixed(1), media_temperatura_setor3.toFixed(1),
media_temperatura_setor4.toFixed(1), media_temperatura_setor5.toFixed(1), media_temperatura_setor6.toFixed(1)];

const umidade_grafico_barra = [media_umidade_setor1.toFixed(1), media_umidade_setor2.toFixed(1), media_umidade_setor3.toFixed(1),
media_umidade_setor4.toFixed(1), media_umidade_setor5.toFixed(1), media_umidade_setor6.toFixed(1)];

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

// PEGAR O VETOR DE VALORES DO GRÁFICO DE BARRAS
const valor_temp_array = data_grafico_barra.datasets.find(dataset => dataset.label == 'Temperatura').data;
const valor_umid_array = data_grafico_barra.datasets.find(dataset => dataset.label == 'Umidade').data;

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
            tooltip: {
                callbacks: {

                    // TUDO DENTRO DO callbacks: TEM A FUNÇÃO DE ALTERAR O TEXTO DO CARDZINHO QUE APARECE AO SCROLLAR O MOUSE
                    // EM ALGUM PONTO DO GRÁFICO

                    beforeTitle: function (context) {
                        return 'Média do dia';
                    },
                    title: function (context) {
                        // dataIndex recebe a posição selecionada no gráfico de barras, depois busca no vetor dos setores
                        // [1,2,3,4,5,6]
                        const dataIndex = [context[0].dataIndex]
                        return `Setor: ${setorarray[dataIndex]}`;
                    },
                    footer: function (context) {

                        // dataINDEX é a posição do conjunto de dados do gráfico, juntando temperatura e umidade em 1 único bloco.
                        // como temos 6 setores, serão 6 posições, de 0 até 5.
                        const dataIndex = [context[0].dataIndex]
                        // datasetIndex é a posição de cada barra dentro do próprio conjunto de dados.
                        // como só temos temperatura e umidade, só terá a posição 0 e 1.
                        const datasetIndex = [context[0].datasetIndex]


                        switch (dataIndex) {
                            case 0: 
                                atualizarGrafico(0);
                            case 1:
                                atualizarGrafico(1)
                        }
                        // VALIDADAÇÕES DA FAIXA DE TEMPERATURA
                        const faixa_temperatura_ideal = valor_temp_array[dataIndex] >= 18.47 && valor_temp_array[dataIndex] <= 20.6
                        const faixa_temperatura_alerta = (valor_temp_array[dataIndex] >= 18.05 && valor_temp_array[dataIndex] < 18.47) || (valor_temp_array[dataIndex] > 20.6 && valor_temp_array[dataIndex] <= 22)
                        const faixa_temperatura_critica = valor_temp_array[dataIndex] > 22 || valor_temp_array[dataIndex] < 18.05

                        const faixa_umidade_ideal = valor_umid_array[dataIndex] >= 46.2 && valor_umid_array[dataIndex] <= 52.6
                        const faixa_umidade_alerta = ((valor_umid_array[dataIndex] >= 45 && valor_umid_array[dataIndex] <= 46.2) || (valor_umid_array[dataIndex] > 52.6 && valor_umid_array[dataIndex] <= 55))
                        const faixa_umidade_critica = valor_umid_array[dataIndex] > 55 || valor_umid_array[dataIndex] < 45;


                        // datasetIndex == 0 é para mostrar somente no card de temperatura.
                        if (datasetIndex == 0) {
                            // valor_temp_array[dataIndex] é para pegar o valor da temperatura apenas da posição na qual
                            // está sendo acionada.
                            if (faixa_temperatura_ideal) {
                                return `A temperatura de: ${valor_temp_array[dataIndex]}º está ideal.`
                            } else if (faixa_temperatura_alerta) {
                                return `A temperatura de: ${valor_temp_array[dataIndex]}º é um sinal de alerta.`
                            } else if (faixa_temperatura_critica) {
                                return `A temperatura de: ${valor_temp_array[dataIndex]}º é um sinal crítico!`
                            }
                        }
                        // datasetIndex == 1 é para mostrar somente no card de umidade.
                        if (datasetIndex == 1) {
                            // valor_umid_array[dataIndex] é para pegar o valor da umidade apenas da posição na qual
                            // está sendo acionada.
                            if (faixa_umidade_ideal) {
                                return `A umidade de: ${valor_umid_array[dataIndex]}º está ideal.`
                            } else if (faixa_umidade_alerta) {
                                return `A umidade de: ${valor_umid_array[dataIndex]}º é um sinal de alerta.`
                            } else if (faixa_umidade_critica) {
                                return `A umidade de: ${valor_umid_array[dataIndex]}º é um sinal crítico!`
                            }
                        }
                    }
                }
            },
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
        },


        // FUNCÃO QUE AO CLICAR EM UM PONTO DO GRÁFICO DE BARRAS, MOSTRAR O GRÁFICO DE LINHA RESPECTIVO DO SETOR.
        onClick: function (events, elements) {
            
            if (elements.length > 0) {
                const graficosetor1 = document.getElementById('graficosetor1');
                const graficosetor2 = document.getElementById('graficosetor2');
                const graficosetor3 = document.getElementById('graficosetor3');
                const graficosetor4 = document.getElementById('graficosetor4');
                const graficosetor5 = document.getElementById('graficosetor5');
                const graficosetor6 = document.getElementById('graficosetor6');
                
                const headericon1 = document.getElementById('headericon1');
                const headericon2 = document.getElementById('headericon2');
                const headericon3 = document.getElementById('headericon3');
                const headericon4 = document.getElementById('headericon4');
                const headericon5 = document.getElementById('headericon5');
                const headericon6 = document.getElementById('headericon6');
                const headericon7 = document.getElementById('headericon7');
                const headericon8 = document.getElementById('headericon8');

        

                // Constante para receber a posição na qual será efetuado o click.
                const index = elements[0].index;

                // Deixar todos os gráficos escondidos
                graficosetor1.style.display = 'none';
                graficosetor2.style.display = 'none';
                graficosetor3.style.display = 'none';
                graficosetor4.style.display = 'none';
                graficosetor5.style.display = 'none';
                graficosetor6.style.display = 'none';

                switch(index) {
                    case 0:
                        atualizarGrafico(0)
                    case 1:
                        atualizarGrafico(1)                        
                    case 2:
                        atualizarGrafico(2)                    
                    case 3:
                        atualizarGrafico(3)                    
                    case 4:
                        atualizarGrafico(4)                    
                    case 5:
                        atualizarGrafico(5)                    
                }

                // Dependendo da posição escolhida, exibe o gráfico de linha correspondente
                // mudando o display de "none", para "block".
                
                // Também muda o texto e o valor apresentado na div dos indicadores, manipulando o CSS por meio de um INNERHTML
                switch (index) {
                    case 0:
                        if (valor_umid_array_setor1[valor_umid_array_setor1.length - 1] > 55 || valor_umid_array_setor1[valor_umid_array_setor1.length - 1] < 45 ) {
                            headerinfo_primeirobloco.style.backgroundColor = "#972648"
                            headertexto1.style.color = "#FFFFFF"

                            primeirobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto.style.color = "#FFFFFF"
                            headerinfosetor.style.color = "#FFFFFF"

                            headericon1.style.display = "flex"
                            headericon2.style.display = "flex"

                        } else if ((valor_umid_array_setor1[valor_umid_array_setor1.length - 1] >= 45 && valor_umid_array_setor1[valor_umid_array_setor1.length - 1] < 46.2) ||
                         (valor_umid_array_setor1[valor_umid_array_setor1.length - 1] > 52.6 && valor_umid_array_setor1[valor_umid_array_setor1.length - 1] <= 55)) {
                            headerinfo_primeirobloco.style.backgroundColor = "#FFB800"
                            headertexto1.style.color = "#FFFFFF"

                            primeirobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto.style.color = "#FFFFFF"
                            headerinfosetor.style.color = "#FFFFFF"

                            headericon1.style.display = "flex"
                            headericon2.style.display = "flex"

                         } else {
                            headerinfo_primeirobloco.style.backgroundColor = "#6D4A00"
                            headertexto1.style.color = "#F0EBDF"

                            primeirobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto.style.color = "#6D4A00"
                            headerinfosetor.style.color = "#6D4A00"

                            headericon1.style.display = "none"
                            headericon2.style.display = "none"
                         }

                         if (valor_temp_array_setor1[valor_temp_array_setor1.length - 1] > 22 || valor_temp_array_setor1[valor_temp_array_setor1.length - 1] < 18 ) {
                            headerinfo_segundobloco.style.backgroundColor = "#972648"
                            headertexto2.style.color = "#FFFFFF"

                            segundobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto2.style.color = "#FFFFFF"
                            headerinfosetor2.style.color = "#FFFFFF"
                            
                             headericon3.style.display = "flex"
                            headericon4.style.display = "flex"
                        } else if ((valor_temp_array_setor1[valor_temp_array_setor1.length - 1] >= 18 && valor_temp_array_setor1[valor_temp_array_setor1.length - 1] < 18.47) ||
                         (valor_temp_array_setor1[valor_temp_array_setor1.length - 1] > 20.6 && valor_temp_array_setor1[valor_temp_array_setor1.length - 1] <= 22)) {
                            headerinfo_segundobloco.style.backgroundColor = "#FFB800"
                            headertexto2.style.color = "#FFFFFF"

                            segundobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto2.style.color = "#FFFFFF"
                            headerinfosetor2.style.color = "#FFFFFF"

                             headericon3.style.display = "flex"
                            headericon4.style.display = "flex" 

                         } else {
                            headerinfo_segundobloco.style.backgroundColor = "#6D4A00"
                            headertexto2.style.color = "#F0EBDF"

                            segundobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto2.style.color = "#6D4A00"
                            headerinfosetor2.style.color = "#6D4A00"
                            
                             headericon3.style.display = "none"
                            headericon4.style.display = "none"
                         }

                         if (media_temperatura_setor1 > 22 || media_temperatura_setor1 < 18) {
                            headerinfo_terceirobloco.style.backgroundColor = "#972648"
                            headertexto3.style.color = "#FFFFFF"

                            terceirobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto3.style.color = "#FFFFFF"
                            headerinfosetor3.style.color = "#FFFFFF"

                         headericon5.style.display = "flex"
                            headericon6.style.display = "flex" 
                            
                        } else if ((media_temperatura_setor1 >= 18 && media_temperatura_setor1 < 18.47) ||
                         (media_temperatura_setor1 > 20.6 && media_temperatura_setor1 <= 22)) {
                            headerinfo_terceirobloco.style.backgroundColor = "#FFB800"
                            headertexto3.style.color = "#FFFFFF"

                            terceirobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto3.style.color = "#FFFFFF"
                            headerinfosetor3.style.color = "#FFFFFF"

                             headericon5.style.display = "flex"
                            headericon6.style.display = "flex" 
                         } else {
                            headerinfo_terceirobloco.style.backgroundColor = "#6D4A00"
                            headertexto3.style.color = "#F0EBDF"

                            terceirobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto3.style.color = "#6D4A00"
                            headerinfosetor3.style.color = "#6D4A00"
                            
                             headericon5.style.display = "none"
                            headericon6.style.display = "none" 
                         }

                         if (media_umidade_setor1 > 55 || media_umidade_setor1 < 45 ) {
                            headerinfo_quartobloco.style.backgroundColor = "#972648"
                            headertexto4.style.color = "#FFFFFF"

                            quartobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto4.style.color = "#FFFFFF"
                            headerinfosetor4.style.color = "#FFFFFF"

                            headericon7.style.display = "flex"
                            headericon8.style.display = "flex"
                            
                        } else if ((media_umidade_setor1 >= 45 && media_umidade_setor1 < 46.2) ||
                         (media_umidade_setor1 > 52.6 && media_umidade_setor1 <= 55)) {
                            headerinfo_quartobloco.style.backgroundColor = "#FFB800"
                            headertexto4.style.color = "#FFFFFF"

                            quartobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto4.style.color = "#FFFFFF"
                            headerinfosetor4.style.color = "#FFFFFF"

                            headericon7.style.display = "flex"
                            headericon8.style.display = "flex"
                         } else {
                            headerinfo_quartobloco.style.backgroundColor = "#6D4A00"
                            headertexto4.style.color = "#F0EBDF"

                            quartobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto4.style.color = "#6D4A00"
                            headerinfosetor4.style.color = "#6D4A00"
                            
                            headericon7.style.display = "none"
                            headericon8.style.display = "none"
                         }




                        headerinfosetor.innerHTML = `SETOR 1`
                        headerinfotexto.innerHTML = `${valor_umid_array_setor1[valor_umid_array_setor1.length - 1]}%`

                        headerinfosetor2.innerHTML = `SETOR 1`
                        headerinfotexto2.innerHTML = `${valor_temp_array_setor1[valor_temp_array_setor1.length - 1]}ºC`

                        headerinfosetor3.innerHTML = `SETOR 1`
                        headerinfotexto3.innerHTML = `${media_temperatura_setor1.toFixed(1)}ºC`

                        headerinfosetor4.innerHTML = `SETOR 1`;
                        headerinfotexto4.innerHTML = `${media_umidade_setor1.toFixed(1)}%`
                        graficosetor1.style.display = 'block';
                        break;

                    case 1:
                        if (valor_umid_array_setor2[valor_umid_array_setor2.length - 1] > 55 || valor_umid_array_setor2[valor_umid_array_setor2.length - 1] < 45 ) {
                            headerinfo_primeirobloco.style.backgroundColor = "#972648"
                            headertexto1.style.color = "#FFFFFF"

                            primeirobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto.style.color = "#FFFFFF"
                            headerinfosetor.style.color = "#FFFFFF"

                            headericon1.style.display = "flex"
                            headericon2.style.display = "flex"

                        } else if ((valor_umid_array_setor2[valor_umid_array_setor2.length - 1] >= 45 && valor_umid_array_setor2[valor_umid_array_setor2.length - 1] < 46.2) ||
                         (valor_umid_array_setor2[valor_umid_array_setor2.length - 1] > 52.6 && valor_umid_array_setor2[valor_umid_array_setor2.length - 1] <= 55)) {
                            headerinfo_primeirobloco.style.backgroundColor = "#FFB800"
                            headertexto1.style.color = "#FFFFFF"

                            primeirobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto.style.color = "#FFFFFF"
                            headerinfosetor.style.color = "#FFFFFF"

                            headericon1.style.display = "flex"
                            headericon2.style.display = "flex"

                         } else {
                            headerinfo_primeirobloco.style.backgroundColor = "#6D4A00"
                            headertexto1.style.color = "#F0EBDF"

                            primeirobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto.style.color = "#6D4A00"
                            headerinfosetor.style.color = "#6D4A00"

                            headericon1.style.display = "none"
                            headericon2.style.display = "none"
                         }

                         if (valor_temp_array_setor2[valor_temp_array_setor2.length - 1] > 22 || valor_temp_array_setor2[valor_temp_array_setor2.length - 1] < 18 ) {
                            headerinfo_segundobloco.style.backgroundColor = "#972648"
                            headertexto2.style.color = "#FFFFFF"

                            segundobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto2.style.color = "#FFFFFF"
                            headerinfosetor2.style.color = "#FFFFFF"
                            
                             headericon3.style.display = "flex"
                            headericon4.style.display = "flex" 

                        } else if ((valor_temp_array_setor2[valor_temp_array_setor2.length - 1] >= 18 && valor_temp_array_setor2[valor_temp_array_setor2.length - 1] < 18.47) ||
                         (valor_temp_array_setor2[valor_temp_array_setor2.length - 1] > 20.6 && valor_temp_array_setor2[valor_temp_array_setor2.length - 1] <= 22)) {
                            headerinfo_segundobloco.style.backgroundColor = "#FFB800"
                            headertexto2.style.color = "#FFFFFF"

                            segundobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto2.style.color = "#FFFFFF"
                            headerinfosetor2.style.color = "#FFFFFF"

                             headericon3.style.display = "flex"
                            headericon4.style.display = "flex" 

                         } else {
                            headerinfo_segundobloco.style.backgroundColor = "#6D4A00"
                            headertexto2.style.color = "#F0EBDF"

                            segundobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto2.style.color = "#6D4A00"
                            headerinfosetor2.style.color = "#6D4A00"
                            
                             headericon3.style.display = "none"
                            headericon4.style.display = "none" 
                         }

                         if (media_temperatura_setor2 > 22 || media_temperatura_setor2 < 18) {
                            headerinfo_terceirobloco.style.backgroundColor = "#972648"
                            headertexto3.style.color = "#FFFFFF"

                            terceirobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto3.style.color = "#FFFFFF"
                            headerinfosetor3.style.color = "#FFFFFF"

                             headericon5.style.display = "flex"
                            headericon6.style.display = "flex" 
                            
                        } else if ((media_temperatura_setor2 >= 18 && media_temperatura_setor2 < 18.47) ||
                         (media_temperatura_setor2 > 20.6 && media_temperatura_setor2 <= 22)) {
                            headerinfo_terceirobloco.style.backgroundColor = "#FFB800"
                            headertexto3.style.color = "#FFFFFF"

                            terceirobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto3.style.color = "#FFFFFF"
                            headerinfosetor3.style.color = "#FFFFFF"

                             headericon5.style.display = "flex"
                            headericon6.style.display = "flex" 
                         } else {
                            headerinfo_terceirobloco.style.backgroundColor = "#6D4A00"
                            headertexto3.style.color = "#F0EBDF"

                            terceirobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto3.style.color = "#6D4A00"
                            headerinfosetor3.style.color = "#6D4A00"
                            
                             headericon5.style.display = "none"
                            headericon6.style.display = "none" 
                         }

                         if (media_umidade_setor2 > 55 || media_umidade_setor2 < 45 ) {
                            headerinfo_quartobloco.style.backgroundColor = "#972648"
                            headertexto4.style.color = "#FFFFFF"

                            quartobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto4.style.color = "#FFFFFF"
                            headerinfosetor4.style.color = "#FFFFFF"

                            headericon7.style.display = "flex"
                            headericon8.style.display = "flex"
                            
                        } else if ((media_umidade_setor2 >= 45 && media_umidade_setor2 < 46.2) ||
                         (media_umidade_setor2 > 52.6 && media_umidade_setor2 <= 55)) {
                            headerinfo_quartobloco.style.backgroundColor = "#FFB800"
                            headertexto4.style.color = "#FFFFFF"

                            quartobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto4.style.color = "#FFFFFF"
                            headerinfosetor4.style.color = "#FFFFFF"

                            headericon7.style.display = "flex"
                            headericon8.style.display = "flex"
                         } else {
                            headerinfo_quartobloco.style.backgroundColor = "#6D4A00"
                            headertexto4.style.color = "#F0EBDF"

                            quartobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto4.style.color = "#6D4A00"
                            headerinfosetor4.style.color = "#6D4A00"
                            
                            headericon7.style.display = "none"
                            headericon8.style.display = "none"
                         }

                        headerinfosetor.innerHTML = `SETOR 2`
                        headerinfotexto.innerHTML = `${valor_umid_array_setor2[valor_umid_array_setor2.length - 1]}%`

                        headerinfosetor2.innerHTML = `SETOR 2`
                        headerinfotexto2.innerHTML = `${valor_temp_array_setor2[valor_temp_array_setor2.length - 1]}ºC`

                        headerinfosetor3.innerHTML = `SETOR 2`
                        headerinfotexto3.innerHTML = `${media_temperatura_setor2.toFixed(1)}ºC`
                        
                        headerinfosetor4.innerHTML = `SETOR 2`;
                        headerinfotexto4.innerHTML = `${media_umidade_setor2.toFixed(1)}%`
                        graficosetor2.style.display = 'block';
                        break;

                    case 2:
                        if (valor_umid_array_setor3[valor_umid_array_setor3.length - 1] > 55 || valor_umid_array_setor3[valor_umid_array_setor3.length - 1] < 45 ) {
                            headerinfo_primeirobloco.style.backgroundColor = "#972648"
                            headertexto1.style.color = "#FFFFFF"

                            primeirobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto.style.color = "#FFFFFF"
                            headerinfosetor.style.color = "#FFFFFF"

                            headericon1.style.display = "flex"
                            headericon2.style.display = "flex"

                        } else if ((valor_umid_array_setor3[valor_umid_array_setor3.length - 1] >= 45 && valor_umid_array_setor3[valor_umid_array_setor3.length - 1] < 46.2) ||
                         (valor_umid_array_setor3[valor_umid_array_setor3.length - 1] > 52.6 && valor_umid_array_setor3[valor_umid_array_setor3.length - 1] <= 55)) {
                            headerinfo_primeirobloco.style.backgroundColor = "#FFB800"
                            headertexto1.style.color = "#FFFFFF"

                            primeirobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto.style.color = "#FFFFFF"
                            headerinfosetor.style.color = "#FFFFFF"

                            headericon1.style.display = "flex"
                            headericon2.style.display = "flex"

                         } else {
                            headerinfo_primeirobloco.style.backgroundColor = "#6D4A00"
                            headertexto1.style.color = "#F0EBDF"

                            primeirobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto.style.color = "#6D4A00"
                            headerinfosetor.style.color = "#6D4A00"

                            headericon1.style.display = "none"
                            headericon2.style.display = "none"
                         }

                         if (valor_temp_array_setor3[valor_temp_array_setor3.length - 1] > 22 || valor_temp_array_setor3[valor_temp_array_setor3.length - 1] < 18 ) {
                            headerinfo_segundobloco.style.backgroundColor = "#972648"
                            headertexto2.style.color = "#FFFFFF"

                            segundobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto2.style.color = "#FFFFFF"
                            headerinfosetor2.style.color = "#FFFFFF"
                            
                             headericon3.style.display = "flex"
                            headericon4.style.display = "flex" 

                        } else if ((valor_temp_array_setor3[valor_temp_array_setor3.length - 1] >= 18 && valor_temp_array_setor3[valor_temp_array_setor3.length - 1] < 18.47) ||
                         (valor_temp_array_setor3[valor_temp_array_setor3.length - 1] > 20.6 && valor_temp_array_setor3[valor_temp_array_setor3.length - 1] <= 22)) {
                            headerinfo_segundobloco.style.backgroundColor = "#FFB800"
                            headertexto2.style.color = "#FFFFFF"

                            segundobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto2.style.color = "#FFFFFF"
                            headerinfosetor2.style.color = "#FFFFFF"

                             headericon3.style.display = "flex"
                            headericon4.style.display = "flex" 

                         } else {
                            headerinfo_segundobloco.style.backgroundColor = "#6D4A00"
                            headertexto2.style.color = "#F0EBDF"

                            segundobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto2.style.color = "#6D4A00"
                            headerinfosetor2.style.color = "#6D4A00"
                            
                             headericon3.style.display = "none"
                            headericon4.style.display = "none" 
                         }

                         if (media_temperatura_setor3 > 22 || media_temperatura_setor3 < 18) {
                            headerinfo_terceirobloco.style.backgroundColor = "#972648"
                            headertexto3.style.color = "#FFFFFF"

                            terceirobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto3.style.color = "#FFFFFF"
                            headerinfosetor3.style.color = "#FFFFFF"

                             headericon5.style.display = "flex"
                            headericon6.style.display = "flex" 
                            
                        } else if ((media_temperatura_setor3 >= 18 && media_temperatura_setor3 < 18.47) ||
                         (media_temperatura_setor3 > 20.6 && media_temperatura_setor3 <= 22)) {
                            headerinfo_terceirobloco.style.backgroundColor = "#FFB800"
                            headertexto3.style.color = "#FFFFFF"

                            terceirobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto3.style.color = "#FFFFFF"
                            headerinfosetor3.style.color = "#FFFFFF"

                             headericon5.style.display = "flex"
                            headericon6.style.display = "flex" 
                         } else {
                            headerinfo_terceirobloco.style.backgroundColor = "#6D4A00"
                            headertexto3.style.color = "#F0EBDF"

                            terceirobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto3.style.color = "#6D4A00"
                            headerinfosetor3.style.color = "#6D4A00"
                            
                             headericon5.style.display = "none"
                            headericon6.style.display = "none" 
                         }

                         if (media_umidade_setor3 > 55 || media_umidade_setor3 < 45 ) {
                            headerinfo_quartobloco.style.backgroundColor = "#972648"
                            headertexto4.style.color = "#FFFFFF"

                            quartobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto4.style.color = "#FFFFFF"
                            headerinfosetor4.style.color = "#FFFFFF"

                            headericon7.style.display = "flex"
                            headericon8.style.display = "flex"
                            
                        } else if ((media_umidade_setor3 >= 45 && media_umidade_setor3 < 46.2) ||
                         (media_umidade_setor3 > 52.6 && media_umidade_setor3 <= 55)) {
                            headerinfo_quartobloco.style.backgroundColor = "#FFB800"
                            headertexto4.style.color = "#FFFFFF"

                            quartobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto4.style.color = "#FFFFFF"
                            headerinfosetor4.style.color = "#FFFFFF"

                            headericon7.style.display = "flex"
                            headericon8.style.display = "flex"
                         } else {
                            headerinfo_quartobloco.style.backgroundColor = "#6D4A00"
                            headertexto4.style.color = "#F0EBDF"

                            quartobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto4.style.color = "#6D4A00"
                            headerinfosetor4.style.color = "#6D4A00"
                            
                            headericon7.style.display = "none"
                            headericon8.style.display = "none"
                         }

                        headerinfosetor.innerHTML = `SETOR 3`
                        headerinfotexto.innerHTML = `${valor_umid_array_setor3[valor_umid_array_setor3.length - 1]}%`

                        headerinfosetor2.innerHTML = `SETOR 3`
                        headerinfotexto2.innerHTML = `${valor_temp_array_setor3[valor_temp_array_setor3.length - 1]}ºC`

                        headerinfosetor3.innerHTML = `SETOR 3`
                        headerinfotexto3.innerHTML = `${media_temperatura_setor3.toFixed(1)}ºC`
                        
                        headerinfosetor4.innerHTML = `SETOR 3`;
                        headerinfotexto4.innerHTML = `${media_umidade_setor3.toFixed(1)}%`
                        graficosetor3.style.display = 'block';
                        break;
                    case 3:
                        if (valor_umid_array_setor4[valor_umid_array_setor4.length - 1] > 55 || valor_umid_array_setor4[valor_umid_array_setor4.length - 1] < 45 ) {
                            headerinfo_primeirobloco.style.backgroundColor = "#972648"
                            headertexto1.style.color = "#FFFFFF"

                            primeirobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto.style.color = "#FFFFFF"
                            headerinfosetor.style.color = "#FFFFFF"

                            headericon1.style.display = "flex"
                            headericon2.style.display = "flex"

                        } else if ((valor_umid_array_setor4[valor_umid_array_setor4.length - 1] >= 45 && valor_umid_array_setor4[valor_umid_array_setor4.length - 1] < 46.2) ||
                         (valor_umid_array_setor4[valor_umid_array_setor4.length - 1] > 52.6 && valor_umid_array_setor4[valor_umid_array_setor4.length - 1] <= 55)) {
                            headerinfo_primeirobloco.style.backgroundColor = "#FFB800"
                            headertexto1.style.color = "#FFFFFF"

                            primeirobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto.style.color = "#FFFFFF"
                            headerinfosetor.style.color = "#FFFFFF"

                            headericon1.style.display = "flex"
                            headericon2.style.display = "flex"

                         } else {
                            headerinfo_primeirobloco.style.backgroundColor = "#6D4A00"
                            headertexto1.style.color = "#F0EBDF"

                            primeirobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto.style.color = "#6D4A00"
                            headerinfosetor.style.color = "#6D4A00"

                            headericon1.style.display = "none"
                            headericon2.style.display = "none"
                         }

                         if (valor_temp_array_setor4[valor_temp_array_setor4.length - 1] > 22 || valor_temp_array_setor4[valor_temp_array_setor4.length - 1] < 18 ) {
                            headerinfo_segundobloco.style.backgroundColor = "#972648"
                            headertexto2.style.color = "#FFFFFF"

                            segundobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto2.style.color = "#FFFFFF"
                            headerinfosetor2.style.color = "#FFFFFF"
                            
                             headericon3.style.display = "flex"
                            headericon4.style.display = "flex" 

                        } else if ((valor_temp_array_setor4[valor_temp_array_setor4.length - 1] >= 18 && valor_temp_array_setor4[valor_temp_array_setor4.length - 1] < 18.47) ||
                         (valor_temp_array_setor4[valor_temp_array_setor4.length - 1] > 20.6 && valor_temp_array_setor4[valor_temp_array_setor4.length - 1] <= 22)) {
                            headerinfo_segundobloco.style.backgroundColor = "#FFB800"
                            headertexto2.style.color = "#FFFFFF"

                            segundobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto2.style.color = "#FFFFFF"
                            headerinfosetor2.style.color = "#FFFFFF"

                             headericon3.style.display = "flex"
                            headericon4.style.display = "flex" 

                         } else {
                            headerinfo_segundobloco.style.backgroundColor = "#6D4A00"
                            headertexto2.style.color = "#F0EBDF"

                            segundobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto2.style.color = "#6D4A00"
                            headerinfosetor2.style.color = "#6D4A00"
                            
                             headericon3.style.display = "none"
                            headericon4.style.display = "none" 
                         }

                         if (media_temperatura_setor4 > 22 || media_temperatura_setor4 < 18) {
                            headerinfo_terceirobloco.style.backgroundColor = "#972648"
                            headertexto3.style.color = "#FFFFFF"

                            terceirobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto3.style.color = "#FFFFFF"
                            headerinfosetor3.style.color = "#FFFFFF"

                             headericon5.style.display = "flex"
                            headericon6.style.display = "flex" 
                            
                        } else if ((media_temperatura_setor4 >= 18 && media_temperatura_setor4 < 18.47) ||
                         (media_temperatura_setor4 > 20.6 && media_temperatura_setor4 <= 22)) {
                            headerinfo_terceirobloco.style.backgroundColor = "#FFB800"
                            headertexto3.style.color = "#FFFFFF"

                            terceirobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto3.style.color = "#FFFFFF"
                            headerinfosetor3.style.color = "#FFFFFF"

                             headericon5.style.display = "flex"
                            headericon6.style.display = "flex" 
                         } else {
                            headerinfo_terceirobloco.style.backgroundColor = "#6D4A00"
                            headertexto3.style.color = "#F0EBDF"

                            terceirobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto3.style.color = "#6D4A00"
                            headerinfosetor3.style.color = "#6D4A00"
                            
                             headericon5.style.display = "none"
                            headericon6.style.display = "none" 
                         }

                         if (media_umidade_setor4 > 55 || media_umidade_setor4 < 45 ) {
                            headerinfo_quartobloco.style.backgroundColor = "#972648"
                            headertexto4.style.color = "#FFFFFF"

                            quartobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto4.style.color = "#FFFFFF"
                            headerinfosetor4.style.color = "#FFFFFF"

                            headericon7.style.display = "flex"
                            headericon8.style.display = "flex"
                            
                        } else if ((media_umidade_setor4 >= 45 && media_umidade_setor4 < 46.2) ||
                         (media_umidade_setor4 > 52.6 && media_umidade_setor4 <= 55)) {
                            headerinfo_quartobloco.style.backgroundColor = "#FFB800"
                            headertexto4.style.color = "#FFFFFF"

                            quartobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto4.style.color = "#FFFFFF"
                            headerinfosetor4.style.color = "#FFFFFF"

                            headericon7.style.display = "flex"
                            headericon8.style.display = "flex"
                         } else {
                            headerinfo_quartobloco.style.backgroundColor = "#6D4A00"
                            headertexto4.style.color = "#F0EBDF"

                            quartobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto4.style.color = "#6D4A00"
                            headerinfosetor4.style.color = "#6D4A00"
                            
                            headericon7.style.display = "none"
                            headericon8.style.display = "none"
                         }

                        headerinfosetor.innerHTML = `SETOR 4`
                        headerinfotexto.innerHTML = `${valor_umid_array_setor4[valor_umid_array_setor4.length - 1]}%`

                        headerinfosetor2.innerHTML = `SETOR 4`
                        headerinfotexto2.innerHTML = `${valor_temp_array_setor4[valor_temp_array_setor4.length - 1]}ºC`

                        headerinfosetor3.innerHTML = `SETOR 4`
                        headerinfotexto3.innerHTML = `${media_temperatura_setor4.toFixed(1)}ºC`
                        
                        headerinfosetor4.innerHTML = `SETOR 4`;
                        headerinfotexto4.innerHTML = `${media_umidade_setor4.toFixed(1)}%`
                        graficosetor4.style.display = 'block';
                        break;

                    case 4:
                        if (valor_umid_array_setor5[valor_umid_array_setor5.length - 1] > 55 || valor_umid_array_setor5[valor_umid_array_setor5.length - 1] < 45 ) {
                            headerinfo_primeirobloco.style.backgroundColor = "#972648"
                            headertexto1.style.color = "#FFFFFF"

                            primeirobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto.style.color = "#FFFFFF"
                            headerinfosetor.style.color = "#FFFFFF"

                            headericon1.style.display = "flex"
                            headericon2.style.display = "flex"

                        } else if ((valor_umid_array_setor5[valor_umid_array_setor5.length - 1] >= 45 && valor_umid_array_setor5[valor_umid_array_setor5.length - 1] < 46.2) ||
                         (valor_umid_array_setor5[valor_umid_array_setor5.length - 1] > 52.6 && valor_umid_array_setor5[valor_umid_array_setor5.length - 1] <= 55)) {
                            headerinfo_primeirobloco.style.backgroundColor = "#FFB800"
                            headertexto1.style.color = "#FFFFFF"

                            primeirobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto.style.color = "#FFFFFF"
                            headerinfosetor.style.color = "#FFFFFF"

                            headericon1.style.display = "flex"
                            headericon2.style.display = "flex"

                         } else {
                            headerinfo_primeirobloco.style.backgroundColor = "#6D4A00"
                            headertexto1.style.color = "#F0EBDF"

                            primeirobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto.style.color = "#6D4A00"
                            headerinfosetor.style.color = "#6D4A00"

                            headericon1.style.display = "none"
                            headericon2.style.display = "none"
                         }

                         if (valor_temp_array_setor5[valor_temp_array_setor5.length - 1] > 22 || valor_temp_array_setor5[valor_temp_array_setor5.length - 1] < 18 ) {
                            headerinfo_segundobloco.style.backgroundColor = "#972648"
                            headertexto2.style.color = "#FFFFFF"

                            segundobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto2.style.color = "#FFFFFF"
                            headerinfosetor2.style.color = "#FFFFFF"
                            
                             headericon3.style.display = "flex"
                            headericon4.style.display = "flex" 

                        } else if ((valor_temp_array_setor5[valor_temp_array_setor5.length - 1] >= 18 && valor_temp_array_setor5[valor_temp_array_setor5.length - 1] < 18.47) ||
                         (valor_temp_array_setor5[valor_temp_array_setor5.length - 1] > 20.6 && valor_temp_array_setor5[valor_temp_array_setor5.length - 1] <= 22)) {
                            headerinfo_segundobloco.style.backgroundColor = "#FFB800"
                            headertexto2.style.color = "#FFFFFF"

                            segundobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto2.style.color = "#FFFFFF"
                            headerinfosetor2.style.color = "#FFFFFF"

                             headericon3.style.display = "flex"
                            headericon4.style.display = "flex" 

                         } else {
                            headerinfo_segundobloco.style.backgroundColor = "#6D4A00"
                            headertexto2.style.color = "#F0EBDF"

                            segundobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto2.style.color = "#6D4A00"
                            headerinfosetor2.style.color = "#6D4A00"
                            
                             headericon3.style.display = "none"
                            headericon4.style.display = "none" 
                         }

                         if (media_temperatura_setor5 > 22 || media_temperatura_setor5 < 18) {
                            headerinfo_terceirobloco.style.backgroundColor = "#972648"
                            headertexto3.style.color = "#FFFFFF"

                            terceirobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto3.style.color = "#FFFFFF"
                            headerinfosetor3.style.color = "#FFFFFF"

                             headericon5.style.display = "flex"
                            headericon6.style.display = "flex" 
                            
                        } else if ((media_temperatura_setor5 >= 18 && media_temperatura_setor5 < 18.47) ||
                         (media_temperatura_setor5 > 20.6 && media_temperatura_setor5 <= 22)) {
                            headerinfo_terceirobloco.style.backgroundColor = "#FFB800"
                            headertexto3.style.color = "#FFFFFF"

                            terceirobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto3.style.color = "#FFFFFF"
                            headerinfosetor3.style.color = "#FFFFFF"

                             headericon5.style.display = "flex"
                            headericon6.style.display = "flex" 
                         } else {
                            headerinfo_terceirobloco.style.backgroundColor = "#6D4A00"
                            headertexto3.style.color = "#F0EBDF"

                            terceirobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto3.style.color = "#6D4A00"
                            headerinfosetor3.style.color = "#6D4A00"
                            
                            headericon5.style.display = "none"
                            headericon6.style.display = "none"
                         }

                         if (media_umidade_setor5 > 55 || media_umidade_setor5 < 45 ) {
                            headerinfo_quartobloco.style.backgroundColor = "#972648"
                            headertexto4.style.color = "#FFFFFF"

                            quartobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto4.style.color = "#FFFFFF"
                            headerinfosetor4.style.color = "#FFFFFF"

                            headericon7.style.display = "flex"
                            headericon8.style.display = "flex"
                            
                        } else if ((media_umidade_setor5 >= 45 && media_umidade_setor5 < 46.2) ||
                         (media_umidade_setor5 > 52.6 && media_umidade_setor5 <= 55)) {
                            headerinfo_quartobloco.style.backgroundColor = "#FFB800"
                            headertexto4.style.color = "#FFFFFF"

                            quartobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto4.style.color = "#FFFFFF"
                            headerinfosetor4.style.color = "#FFFFFF"

                            headericon7.style.display = "flex"
                            headericon8.style.display = "flex"
                         } else {
                            headerinfo_quartobloco.style.backgroundColor = "#6D4A00"
                            headertexto4.style.color = "#F0EBDF"

                            quartobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto4.style.color = "#6D4A00"
                            headerinfosetor4.style.color = "#6D4A00"
                            
                            headericon7.style.display = "none"
                            headericon8.style.display = "none"
                         }

                        headerinfosetor.innerHTML = `SETOR 5`
                        headerinfotexto.innerHTML = `${valor_umid_array_setor5[valor_umid_array_setor5.length - 1]}%`

                        headerinfosetor2.innerHTML = `SETOR 5`
                        headerinfotexto2.innerHTML = `${valor_temp_array_setor5[valor_temp_array_setor5.length - 1]}ºC`

                        headerinfosetor3.innerHTML = `SETOR 5`
                        headerinfotexto3.innerHTML = `${media_temperatura_setor5.toFixed(1)}ºC`
                        
                        headerinfosetor4.innerHTML = `SETOR 5`;
                        headerinfotexto4.innerHTML = `${media_umidade_setor5.toFixed(1)}%`
                        graficosetor5.style.display = 'block';
                        break;

                    case 5:
                        if (valor_umid_array_setor6[valor_umid_array_setor6.length - 1] > 55 || valor_umid_array_setor6[valor_umid_array_setor6.length - 1] < 45 ) {
                            headerinfo_primeirobloco.style.backgroundColor = "#972648"
                            headertexto1.style.color = "#FFFFFF"

                            primeirobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto.style.color = "#FFFFFF"
                            headerinfosetor.style.color = "#FFFFFF"

                            headericon1.style.display = "flex"
                            headericon2.style.display = "flex"

                        } else if ((valor_umid_array_setor6[valor_umid_array_setor6.length - 1] >= 45 && valor_umid_array_setor6[valor_umid_array_setor6.length - 1] < 46.2) ||
                         (valor_umid_array_setor6[valor_umid_array_setor6.length - 1] > 52.6 && valor_umid_array_setor6[valor_umid_array_setor6.length - 1] <= 55)) {
                            headerinfo_primeirobloco.style.backgroundColor = "#FFB800"
                            headertexto1.style.color = "#FFFFFF"

                            primeirobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto.style.color = "#FFFFFF"
                            headerinfosetor.style.color = "#FFFFFF"

                            headericon1.style.display = "flex"
                            headericon2.style.display = "flex"

                         } else {
                            headerinfo_primeirobloco.style.backgroundColor = "#6D4A00"
                            headertexto1.style.color = "#F0EBDF"

                            primeirobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto.style.color = "#6D4A00"
                            headerinfosetor.style.color = "#6D4A00"

                            headericon1.style.display = "none"
                            headericon2.style.display = "none"
                         }

                         if (valor_temp_array_setor6[valor_temp_array_setor6.length - 1] > 22 || valor_temp_array_setor6[valor_temp_array_setor6.length - 1] < 18 ) {
                            headerinfo_segundobloco.style.backgroundColor = "#972648"
                            headertexto2.style.color = "#FFFFFF"

                            segundobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto2.style.color = "#FFFFFF"
                            headerinfosetor2.style.color = "#FFFFFF"
                            
                            headericon3.style.display = "flex"
                            headericon4.style.display = "flex" 

                        } else if ((valor_temp_array_setor6[valor_temp_array_setor6.length - 1] >= 18 && valor_temp_array_setor6[valor_temp_array_setor6.length - 1] < 18.47) ||
                         (valor_temp_array_setor6[valor_temp_array_setor6.length - 1] > 20.6 && valor_temp_array_setor6[valor_temp_array_setor6.length - 1] <= 22)) {
                            headerinfo_segundobloco.style.backgroundColor = "#FFB800"
                            headertexto2.style.color = "#FFFFFF"

                            segundobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto2.style.color = "#FFFFFF"
                            headerinfosetor2.style.color = "#FFFFFF"

                            headericon3.style.display = "flex"
                            headericon4.style.display = "flex" 

                         } else {
                            headerinfo_segundobloco.style.backgroundColor = "#6D4A00"
                            headertexto2.style.color = "#F0EBDF"

                            segundobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto2.style.color = "#6D4A00"
                            headerinfosetor2.style.color = "#6D4A00"
                            
                            headericon3.style.display = "none"
                            headericon4.style.display = "none"
                         }

                         if (media_temperatura_setor6 > 22 || media_temperatura_setor6 < 18) {
                            headerinfo_terceirobloco.style.backgroundColor = "#972648"
                            headertexto3.style.color = "#FFFFFF"

                            terceirobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto3.style.color = "#FFFFFF"
                            headerinfosetor3.style.color = "#FFFFFF"

                            headericon5.style.display = "flex"
                            headericon6.style.display = "flex" 
                            
                        } else if ((media_temperatura_setor6 >= 18 && media_temperatura_setor6 < 18.47) ||
                         (media_temperatura_setor6 > 20.6 && media_temperatura_setor6 <= 22)) {
                            headerinfo_terceirobloco.style.backgroundColor = "#FFB800"
                            headertexto3.style.color = "#FFFFFF"

                            terceirobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto3.style.color = "#FFFFFF"
                            headerinfosetor3.style.color = "#FFFFFF"

                            headericon5.style.display = "flex"
                            headericon6.style.display = "flex"
                         } else {
                            headerinfo_terceirobloco.style.backgroundColor = "#6D4A00"
                            headertexto3.style.color = "#F0EBDF"

                            terceirobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto3.style.color = "#6D4A00"
                            headerinfosetor3.style.color = "#6D4A00"
                            
                            headericon5.style.display = "none"
                            headericon6.style.display = "none" 
                         }

                         if (media_umidade_setor6 > 55 || media_umidade_setor6 < 45 ) {
                            headerinfo_quartobloco.style.backgroundColor = "#972648"
                            headertexto4.style.color = "#FFFFFF"

                            quartobloco.style.backgroundColor = "#FF004D";
                            headerinfotexto4.style.color = "#FFFFFF"
                            headerinfosetor4.style.color = "#FFFFFF"

                            headericon7.style.display = "flex"
                            headericon8.style.display = "flex"
                            
                        } else if ((media_umidade_setor6 >= 45 && media_umidade_setor6 < 46.2) ||
                         (media_umidade_setor6 > 52.6 && media_umidade_setor6 <= 55)) {
                            headerinfo_quartobloco.style.backgroundColor = "#FFB800"
                            headertexto4.style.color = "#FFFFFF"

                            quartobloco.style.backgroundColor = "#FFD700";
                            headerinfotexto4.style.color = "#FFFFFF"
                            headerinfosetor4.style.color = "#FFFFFF"

                            headericon7.style.display = "flex"
                            headericon8.style.display = "flex"
                         } else {
                            headerinfo_quartobloco.style.backgroundColor = "#6D4A00"
                            headertexto4.style.color = "#F0EBDF"

                            quartobloco.style.backgroundColor = "#F3EAD8";
                            headerinfotexto4.style.color = "#6D4A00"
                            headerinfosetor4.style.color = "#6D4A00"
                            
                            headericon7.style.display = "none"
                            headericon8.style.display = "none"
                         }

                        headerinfosetor.innerHTML = `SETOR 6`
                        headerinfotexto.innerHTML = `${valor_umid_array_setor6[valor_umid_array_setor6.length - 1]}%`

                        headerinfosetor2.innerHTML = `SETOR 6`
                        headerinfotexto2.innerHTML = `${valor_temp_array_setor6[valor_temp_array_setor6.length - 1]}ºC`

                        headerinfosetor3.innerHTML = `SETOR 6`
                        headerinfotexto3.innerHTML = `${media_temperatura_setor6.toFixed(1)}ºC`
                        
                        headerinfosetor4.innerHTML = `SETOR 6`;
                        headerinfotexto4.innerHTML = `${media_umidade_setor6.toFixed(1)}%`
                        graficosetor6.style.display = 'block';
                        break;
                }
            }
        },
    }
};


const grafico_barra = new Chart(grafico_barra_canva, config_grafico_barra
);





