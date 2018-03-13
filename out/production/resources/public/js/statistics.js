$(function () {

    const getCakeOrderStatistics = function () {
        return $.get('/orders/statistics');
    };

    const displayCakeStatistics = function () {
        var amounts = [];
        var backgroundColors = [];
        var labels = [];
        getCakeOrderStatistics().then(function (statistics) {
            $.each(statistics, function (index, statistic) {
                amounts[index] = statistic.amount;
                labels[index] = statistic.name;
                var red = Math.floor((Math.random() * 255) + 1);
                var green = Math.floor((Math.random() * 255) + 1);
                var blue = Math.floor((Math.random() * 255) + 1);
                var rgbaString = 'rgba(' + red + ',' + green + ',' + blue + ',0.8)';
                backgroundColors.push(rgbaString);
            });
        }).then(function () {
            var ctx = document.getElementById("cakeStatisticsCanvas").getContext('2d');
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: labels,
                    datasets: [{
                        label: "Amount",
                        backgroundColor: backgroundColors,
                        data: amounts
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Number of each cake ordered'
                    },
                    // percentage example taken from http://blog.cryst.co.uk/2016/06/03/adding-percentages-chart-js-pie-chart-tooltips/
                    tooltips: {
                        callbacks: {
                            label: function(tooltipItem, data) {
                                var allData = data.datasets[tooltipItem.datasetIndex].data;
                                var tooltipLabel = data.labels[tooltipItem.index];
                                var tooltipData = allData[tooltipItem.index];
                                var total = 0;
                                for (var i in allData) {
                                    total += allData[i];
                                }
                                var tooltipPercentage = Math.round((tooltipData / total) * 100);
                                return tooltipLabel + ': ' + tooltipData + ' (' + tooltipPercentage + '%)';
                            }
                        }
                    }
                }
            });
        });
    };

    displayCakeStatistics();

});