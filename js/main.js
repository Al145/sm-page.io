document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('container1', {

        title: {
            text: ''
        },
    
        subtitle: {
            align: 'left',
            text: ''
        },
    
        yAxis: {
            title: {
                text: 'Number of Employees'
            }
        },

        xAxis: {
            categories: ['May 1', 'May 7', 'May 14', 'May 21', 'May 28'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
    

        legend: {
            layout: 'horizontal',
            align: 'bottom',
            verticalAlign: 'middle'
        },
    
        series: [{
            name: 'Top 1',
            data: [1, 1, 1, 1, 1]
        }, {
            name: 'Top 3',
            data: [500, 500, 500, 500, 500]
        }, {
            name: 'Top 10',
            data: [1000, 1000, 1000, 1000, 1000]
        }, {
            name: 'Top 30',
            data: [1500, 1500, 1500, 1500, 1500]
        }, {
            name: 'Top 50',
            data: [2000, 2000, 2000, 2000, 2000]
        }, {
            name: 'Top 100',
            data: [2500, 2500, 2500, 2500, 2500]
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    
    });
});