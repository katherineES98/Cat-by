var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'doughnut',
    data:{
	datasets: [{
		data: [60,18,10, 8, 4,2,1],
		backgroundColor: ['#42a5f5', 'red', 'green','blue','violet','#8B0000','#483D8B']}],
		labels: ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']},
        options: {responsive: true}
});


var ctx = document.getElementById('grafico2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
            label: '# de Seguidores por Mes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(255, 99, 132, 0.2)',
				'rgba(255, 99, 132, 0.2)',
				'rgba(255, 99, 132, 0.2)',
				'rgba(255, 99, 132, 0.2)',
				'rgba(255, 99, 132, 0.2)'
				    
            ],
            borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(255, 99, 132, 1)',
				'rgba(255, 99, 132, 1)',
				'rgba(255, 99, 132, 1)',
				'rgba(255, 99, 132, 1)',
				'rgba(255, 99, 132, 1)'

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});