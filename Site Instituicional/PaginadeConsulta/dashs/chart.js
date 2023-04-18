// Função do Menu Flutuante
function clickPerfil() {
    if (subsub.style.display == 'flex') {
        subsub.style.display = 'none'
    } else {
        subsub.style.display = 'flex'
    }


}


function dashboard() {
    window.location.href = "../consulta.html"
}

function clickVoltar(){
    window.location.href = "../consulta.html"
}


const labels_linha = [
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
];

// GRÁFICO OBRA 1   
const obra1 = document.getElementById('graficoobra1');
obra1.style.display = 'block';
var myChart = new Chart(obra1, {
    type: 'line',
    data: {
        labels: labels_linha,
        datasets: [{
            label: 'Temperatura',
            data: [30, 29, 28, 25, 22, 23],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2

        }, {

            label: 'Umidade',
            data: [70, 65, 62, 64, 70, 66],
            backgroundColor: '#1d8d8e',
            borderColor: '#1d8d8e',
            borderWidth: 2
        }
        ]
    },

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
});

// GRÁFICO OBRA 2
const obra2 = document.getElementById('graficoobra2');
obra2.style.display = 'none';
var myChart = new Chart(obra2, {
    type: 'line',
    data: {
        labels: labels_linha,
        datasets: [{
            label: 'Temperatura',
            data: [17, 19, 22, 23, 29, 20],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2

        }, {

            label: 'Umidade',
            data: [46, 50, 49, 45, 55, 48],
            backgroundColor: '#1d8d8e',
            borderColor: '#1d8d8e',
            borderWidth: 2
        }
        ]
    },

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
});

// GRÁFICO OBRA 3
const obra3 = document.getElementById('graficoobra3');
obra3.style.display = 'none';
var myChart = new Chart(obra3, {
    type: 'line',
    data: {
        labels: labels_linha,
        datasets: [{
            label: 'Temperatura',
            data: [18, 26, 29, 27, 15, 30],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2

        }, {

            label: 'Umidade',
            data: [40, 55, 49, 43, 49, 55],
            backgroundColor: '#1d8d8e',
            borderColor: '#1d8d8e',
            borderWidth: 2
        }
        ]
    },

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
});

// GRÁFICO OBRA 4
const obra4 = document.getElementById('graficoobra4');
obra4.style.display = 'none';
var myChart = new Chart(obra4, {
    type: 'line',
    data: {
        labels: labels_linha,
        datasets: [{
            label: 'Temperatura',
            data: [18, 19, 20, 20, 21, 22],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2

        }, {

            label: 'Umidade',
            data: [46, 47, 46, 48, 49, 52],
            backgroundColor: '#1d8d8e',
            borderColor: '#1d8d8e',
            borderWidth: 2
        }
        ]
    },

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
});

// GRÁFICO OBRA 5
const obra5 = document.getElementById('graficoobra5');
obra5.style.display = 'none';

var myChart = new Chart(obra5, {
    type: 'line',
    data: {
        labels: labels_linha,
        datasets: [{
            label: 'Temperatura',
            data: [18, 19, 19, 22, 22, 23],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2

        }, {

            label: 'Umidade',
            data: [45, 45, 47, 48, 54, 55],
            backgroundColor: '#1d8d8e',
            borderColor: '#1d8d8e',
            borderWidth: 2
        }
        ]
    },

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
            /* tooltip: {
                callbacks: {
                    afterBody: function(context) {
                        const valor_array = myChart.data.datasets.find(dataset => dataset.label === 'Temperatura').data;
                        return `${valor_array}`;
                    }
                }
            }, */
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
});

// GRÁFICO OBRA 6
const obra6 = document.getElementById('graficoobra6');
obra6.style.display = 'none';
const setor6 = new Chart(obra6, {
    type: 'line',
    data: {
        labels: labels_linha,
        datasets: [{
            label: 'Temperatura',
            data: [22, 22, 21, 20, 18, 16],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2

        }, {

            label: 'Umidade',
            data: [55, 54, 52, 50, 48, 45],
            backgroundColor: '#1d8d8e',
            borderColor: '#1d8d8e',
            borderWidth: 2
        }
        ]
    },

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
});

/*GRAFICO DE BARRA*/
const labels = [
    'Setor 1',
    'Setor 2',
    'Setor 3',
    'Setor 4',
    'Setor 5',
    'Setor 6',
];

const setorarray = [1, 2, 3, 4, 5, 6];
const labelarray = ['Temperatura', 'Umidade']
const data2 = {
    labels: labels,
    datasets: [{
        label: 'Temperatura',
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderColor: 'rgba(255, 99, 132, 1)',
        data: [22, 19, 25, 20, 20, 18],
    }, {
        label: 'Umidade',
        backgroundColor: '#1d8d8e',
        borderColor: '#1d8d8e',
        data: [53, 50, 33, 40, 49, 55],
    }
    ]
};
const valor_temp_array = data2.datasets.find(dataset => dataset.label == 'Temperatura').data;
const valor_umid_array = data2.datasets.find(dataset => dataset.label == 'Umidade').data;

const config2 = {
    type: 'bar',
    data: data2,
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
                    beforeTitle: function (context) {
                        return 'Média do dia';
                    },
                    title: function (context) {
                        const dataIndex = [context[0].dataIndex]
                        return `Setor: ${setorarray[dataIndex]}`;
                    },
                    footer: function (context) {
                        const dataIndex = [context[0].dataIndex]
                        const datasetIndex = [context[0].datasetIndex]
                        if (datasetIndex == 0){
                            if (valor_temp_array[dataIndex] >= 18 && valor_temp_array[dataIndex] <= 22) {
                                return `A temperatura de: ${valor_temp_array[dataIndex]}º está normal.`
                            } else {
                                return `A temperatura de: ${valor_temp_array[dataIndex]}º está anormal.`
                            }
                        }
                        if (datasetIndex == 1) {
                            if (valor_umid_array[dataIndex] >= 45 && valor_umid_array[dataIndex] <= 53) {
                                return `A umidade de: ${valor_umid_array[dataIndex]}% está normal.`
                            } else {
                                return `A umidade de: ${valor_umid_array[dataIndex]}% está anormal.`
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


        onClick: function (events, elements) {
            if (elements.length > 0) {
                const graficoobra1 = document.getElementById('graficoobra1');
                const graficoobra2 = document.getElementById('graficoobra2');
                const graficoobra3 = document.getElementById('graficoobra3');
                const graficoobra4 = document.getElementById('graficoobra4');
                const graficoobra5 = document.getElementById('graficoobra5');
                const graficoobra6 = document.getElementById('graficoobra6');
                var index = elements[0].index;

                // Deixar todos os gráficos escondidos
                graficoobra1.style.display = 'none';
                graficoobra2.style.display = 'none';
                graficoobra3.style.display = 'none';
                graficoobra4.style.display = 'none';
                graficoobra5.style.display = 'none';
                graficoobra6.style.display = 'none';

                // Dependendo da posição escolhida, exibe o gráfico de linha correspondente
                switch (index) {
                    case 0:
                        graficoobra1.style.display = 'block';
                        break;
                    case 1:
                        graficoobra2.style.display = 'block';
                        break;
                    case 2:
                        graficoobra3.style.display = 'block';
                        break;
                    case 3:
                        graficoobra4.style.display = 'block';
                        break;
                    case 4:
                        graficoobra5.style.display = 'block';
                        break;
                    case 5:
                        graficoobra6.style.display = 'block';
                        break;
                }
            }
        },
    }
};


const myChart2 = new Chart(
    document.getElementById('graficobarra'),
    config2
);



function mediaArray(array){

soma = 0;

for (i = 0; i < array.length; i++){
    soma += array[i];
}
return soma / array.length
}

const array_temperatura = valor_temp_array.map(Number)
const array_umidade= valor_umid_array.map(Number)

const valor_temp_array_setor6 = setor6.datasets.find(dataset => dataset.label == 'Temperatura').data;
const array_temp_setor6 = valor_temp_array_setor6.map(Number);


headerinfotexto.innerHTML = `${valor_umid_array[valor_umid_array.length - 1]}%`
headerinfotexto2.innerHTML = `${valor_temp_array[valor_temp_array.length - 1]}%`
headerinfotexto3.innerHTML = `${mediaArray(array_temperatura).toFixed(1)}ºC`
headerinfotexto4.innerHTML = `${mediaArray(array_umidade).toFixed(1)}%`
