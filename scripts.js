// Pie Chart Data
const pieCtx = document.getElementById('pieChart');
new Chart(pieCtx, {
    type: 'doughnut',
    data: {
        labels: ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'],
        datasets: [{
            data: [30, 25, 15, 20, 10],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    }
});

// Bar Graph Data
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'User Registrations',
            data: [50, 80, 60, 90, 120, 140],
            backgroundColor: ['#FACC15', '#D97706', '#34D399', '#60A5FA', '#E11D48', '#A855F7'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
