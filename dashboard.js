let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
    progressEndValue = 44,    
    speed = 35;
    
let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#f6ae2d ${progressStartValue * 3.6}deg, #494f56 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);

var ctx = document.getElementById('myChart').getContext('2d');

// Chart data
var data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [{
        label: "Expenses",
        fill: false,
        backgroundColor: '#f6ae2e',
        borderColor: '#f6ae2e',
        data: [209024, 203850, 204812, 232158, 220631, 220340],
    }]
};

// Create a new line chart
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {}
});