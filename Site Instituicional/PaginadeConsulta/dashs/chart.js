const ctx = document.getElementById('graficolinha')
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
            title:{
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
    }
}
  };


  const myChart2 = new Chart(
    document.getElementById('graficobarra'),
    config2
  );

