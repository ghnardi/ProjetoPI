// CONSTANTE É QUASE A MESMA COISA QUE UM VAR(íavel), A DIFERENÇA É QUE UMA CONSTANTE AO RECEBER UM VALOR, 
// NÃO PODE SER ALTERADO DEPOIS, TORNANDO MAIS "SEGURO" DE SER USADO EM UM PROJETO COM MUITOS VALORES.


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
const temperatura_setor1 = [28, 26, 24, 23, 24, 25];
const umidade_setor1 = [59, 59, 60, 61, 62, 63];

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

// GRÁFICO SETOR 2
const setor2 = document.getElementById('graficosetor2');
setor2.style.display = 'none';

// A CONSTANTE ABAIXO RECEBERÁ FUTURAMENTE OS VALORES DO ARDUÍNO, ATUALMENTE SÃO VALORES MANUAIS PARA DEMOSNTRAÇÃO.
const temperatura_setor2 = [17, 19, 22, 23, 29, 20];
const umidade_setor2 = [46, 50, 49, 45, 55, 48];

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
const temperatura_setor3 = [18, 26, 29, 27, 15, 30];
const umidade_setor3 = [40, 55, 49, 43, 49, 55];

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
const temperatura_setor4 = [25, 24, 24, 26, 23, 24]
const umidade_setor4 = [55, 56, 56, 55, 57, 58];

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
const temperatura_setor5 = [18, 19, 19, 20, 22, 23];
const umidade_setor5 = [45, 45, 47, 48, 54, 55];

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
const temperatura_setor6 = [22, 22, 21, 20, 18, 20];
const umidade_setor6 = [55, 55, 56, 57, 57, 59];

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
                
                // Constante para receber a posição na qual será efetuado o click.
                const index = elements[0].index;

                // Deixar todos os gráficos escondidos
                graficosetor1.style.display = 'none';
                graficosetor2.style.display = 'none';
                graficosetor3.style.display = 'none';
                graficosetor4.style.display = 'none';
                graficosetor5.style.display = 'none';
                graficosetor6.style.display = 'none';

                // Dependendo da posição escolhida, exibe o gráfico de linha correspondente
                // mudando o display de "none", para "block".
                
                // Também muda o texto e o valor apresentado na div dos indicadores, manipulando o CSS por meio de um INNERHTML
                switch (index) {
                    case 0:
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





