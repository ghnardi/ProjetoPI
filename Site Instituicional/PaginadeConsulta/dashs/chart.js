const ctx = document.getElementById('graficolinha');
ctx.style.visibility = 'hidden';
var myChart = new Chart(ctx, {
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
        onClick: function (event, elements) {
            if (elements.length > 0) {
                const graficoLinha = document.getElementById('graficolinha');
                var index = elements[0].index;
                switch (index) {
                    // Caso o index (posição da barra) seja 1
                    case 0:
                        if (graficoLinha.style.visibility == 'hidden') {
                            // Se estiver oculta, torna visível
                        graficoLinha.style.visibility = 'visible';
                    } else {
                        // Caso contrário, torna oculta
                        graficoLinha.style.visibility = 'hidden';
                    }
                        break;
                    case 1:
                        // Caso o index (posição da barra) seja 2
                        alert ("clicou na barra 2")
                        break;
                    case 2:
                        // Caso o index (posição da barra) seja 3
                        alert("clicou na barra 3")
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

