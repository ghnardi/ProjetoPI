

// GRÁFICO OBRA 1   
const obra1 = document.getElementById('graficoobra1');
obra1.style.display = 'none';
var myChart = new Chart(obra1, {
    type: 'line',
    data: {
        labels: ['12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',],
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
                text: 'OBRA 1',
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
        labels: ['12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',],
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
                text: 'OBRA 2',
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
        labels: ['12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',],
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
                text: 'OBRA 3',
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
    'Obra1',
    'Obra2',
    'Obra3',
    'Obra4',
    'Obra5',
    'Obra6',
];

const data2 = {
    labels: labels,
    datasets: [{
        label: 'Temperatura',
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderColor: 'rgba(255, 99, 132, 1)',
        data: [30, 29, 28, 25, 22, 23],
    }, {
        label: 'Umidade',
        backgroundColor: '#1d8d8e',
        borderColor: '#1d8d8e',
        data: [80, 82, 80, 85, 80, 83],
    }
    ]
};


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
            title: {
                display: true,
                text: 'OBRAS',
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
                switch (index) {
                    // Caso o index (posição da barra) seja 1
                    case 0:
                        if (graficoobra1.style.display == 'none') {
                            // Se estiver oculta, torna visível
                            graficoobra1.style.display = 'block';
                    } else {
                        // Caso contrário, torna oculta
                        graficoobra1.style.display = 'none';
                    }
                        break;
                    case 1:
                        // Caso o index (posição da barra) seja 2
                        if (graficoobra2.style.display == 'none') {
                            // Se estiver oculta, torna visível
                            graficoobra2.style.display = 'block';
                    } else {
                        // Caso contrário, torna oculta
                        graficoobra2.style.display = 'none';
                    }
                        break;
                    case 2:
                        // Caso o index (posição da barra) seja 3
                        if (graficoobra3.style.display == 'none') {
                            // Se estiver oculta, torna visível
                            graficoobra3.style.display = 'block';
                    } else {
                        // Caso contrário, torna oculta
                        graficoobra3.style.display = 'none';
                    }
                        break;
                    case 3:
                        // Caso o index (posição da barra) seja 4
                        alert("clicou na barra 4")
                        break;
                    case 4:
                        // Caso o index (posição da barra) seja 5
                        alert("clicou na barra 5")
                        break;
                    case 5:4
                        // Caso o index (posição da barra) seja 6
                        alert("clicou na barra 6")
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

