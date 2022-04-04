const ctx = document.getElementById('barChart').getContext('2d');
const colorLabels = ['red', 'green', 'blue', 'yellow', 'orange'];
const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: colorLabels,
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2],
        borderWidth: 1, //sets the border widths of the bars.
        backgroundColor: colorLabels, // sets the colors of the bars.
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true, //the y-axis starts at zero instead of the value of the shortest bar, which is 2.
          },
        },
      ],
    },
  },
});
